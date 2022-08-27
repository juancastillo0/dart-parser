import 'package:recase/recase.dart';
import 'parse_grammar.dart';

const lalrpopExpressionMapper = <String, String>{};
const lalrpopIdMapper = {'type': 'dartType', 'EOF': 'EOI'};

class LalrpopGrammar {
  final ctx = Ctx();
  final List<Item> items;
  Expr? previousExpr;

  LalrpopGrammar(List<Item> items)
      : items = items.followedBy([
          Item(
            ExprId('COMMENT'),
            ExprOr([
              ExprId('SINGLE_LINE_COMMENT'),
              ExprId('MULTI_LINE_COMMENT'),
            ]),
          )
        ]).toList();

  String toLalrpopGrammar() {
    ctx.toRustTypes(items);

    return items.map((e) {
      final createdType = ctx.typeDescriptions[e.expression];
      if (lalrpopExpressionMapper.containsKey(e.id.value)) {
        return 'pub ${toLalrpopGrammarId(e.id)} = ${lalrpopExpressionMapper[e.id.value]!}';
      }
      final isPrivate = e.id.value.toUpperCase() == e.id.value;
      return '${isPrivate ? '' : 'pub '}${e.id.value} : ${createdType?.name}'
          ' = {${toLalrpopGrammarExpr(e.expression, '')}}';
    }).join('\n\n');
  }

  String toLalrpopGrammarId(ExprId id) {
    final name = lalrpopIdMapper[id.value] ?? id.value;
    return name;
  }

  String toLalrpopGrammarExpr(Expr expr, String name) {
    final previousExpr = this.previousExpr;
    final isRoot = previousExpr == null;
    this.previousExpr = expr;

    String wrap(String value) {
      return name == '' ? value : '<$name:$value>';
    }

    final result = expr.when(
      and: (and) {
        final createdType = ctx.typeDescriptions[expr];
        if (createdType == null) return '$and';
        if (!isRoot) {
          return wrap('${createdType.name}');
        }
        final fields = createdType.fields.map(
          (e) {
            final name = e.name?.snakeCase;
            return e.type == 'Token'
                ? '${name}:Token(${name}Start, ${name}End)'
                : name;
          },
        ).join(', ');
        int i = 0;
        final expressions = and.expressions
            .map((e) => toLalrpopGrammarExpr(
                  e,
                  createdType.fields[i++].name?.snakeCase ?? '',
                ))
            .join(' ');
        return '${expressions} => ${createdType.name}{${fields}}';
      },
      or: (or) {
        final createdType = ctx.typeDescriptions[expr];
        if (createdType == null) return '$or';
        if (!isRoot) {
          return wrap('${createdType.name}');
        }
        int i = 0;
        return '${or.expressions.map((e) {
          final variant = ctx.typeDescriptions[e];
          final f = createdType.fields[i++];
          return '${toLalrpopGrammarExpr(e, '')} => ${createdType.name}::${f.name}(${f.type}(<>)),';
        }).join('\n  ')}';
      },
      simple: (simple) => simple.whenSimple(
        any: (any) => 'ANY',
        id: (id) => id.value.toUpperCase() == id.value
            ? bracketedToken(name, id.value)
            : wrap('${toLalrpopGrammarId(id)}'),
        modified: (modified) => wrap(
            '(${toLalrpopGrammarExpr(modified.expression, '')})${modified.modifier.value}'),
        negated: (negated) =>
            wrap('!(${toLalrpopGrammarExpr(negated.expression, '')}'),
        raw: (raw) => bracketedToken(name, '"${toLalrpopGrammarRaw(raw)}"'),
        rawRange: (rawRange) =>
            'r"[${toLalrpopGrammarRaw(rawRange.start)}-${toLalrpopGrammarRaw(rawRange.end)}]"',
      )!,
    )!;
    this.previousExpr = previousExpr;
    return result;
  }

  String toLalrpopGrammarRaw(ExprRaw raw) {
    return raw.value.replaceAll("\\'", "'").replaceAll('"', '\\"');
  }

  String bracketedToken(String name, String inner) =>
      '<${name}Start:@L> $inner <${name}End:@R>';
}
