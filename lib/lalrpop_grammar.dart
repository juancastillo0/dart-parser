import 'package:recase/recase.dart';
import 'parse_grammar.dart';

const lalrpopExpressionMapper = <String, String>{};
const lalrpopIdMapper = {'EOF': 'EOI'};

class LalrpopGrammar {
  final Ctx ctx;
  final List<Item> items;
  final Map<String, ExprRaw> rawRules = {};
  Expr? previousExpr;

  bool isInUppercase = false;

  LalrpopGrammar(this.ctx, List<Item> items)
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

    final v = <String>{};
    return ['use ast;\nuse parser::Token;', 'grammar;']
        .followedBy(items.where((e) => v.add(e.id.value)).map((e) {
          final createdType = ctx.typeDescriptions[e.expression];
          if (lalrpopExpressionMapper.containsKey(e.id.value)) {
            return 'pub ${toLalrpopGrammarId(e.id)} = ${lalrpopExpressionMapper[e.id.value]!}';
          }
          isInUppercase = e.id.value.isUpperCase;
          final isPrivate = isInUppercase;
          final type = createdType?.name.isUpperCase == true
              ? ''
              : ': ${createdType?.name}';

          final value = '${isPrivate ? 'pub ' : 'pub '}${e.id.value}${type}'
              ' = {${toLalrpopGrammarExpr(e.expression, isRoot: true)}};';
          isInUppercase = false;
          return value;
        }))
        .toList()
        .followedBy(rawRules.entries.map(
          (e) =>
              'pub ${e.key}:Token = {${bracketedToken(e.value)} => Token{<>}};',
        ))
        .join('\n\n');
  }

  String toLalrpopGrammarId(ExprId id) {
    final name = lalrpopIdMapper[id.value] ?? id.value;
    return name.pascalCase;
  }

  // String toLalrpopGrammarExpr(Expr expr, {bool isRoot = false}) {
  //   if (!isRoot && ctx.typeDescriptions.containsKey(expr)) {
  //     return ctx.typeDescriptions[expr]!.name;
  //   }
  //   return expr.when(
  //     and: (and) => '(${and.expressions.map(toPestGrammarExpr).join(' ~ ')})',
  //     or: (or) => '(${or.expressions.map(toPestGrammarExpr).join(' | ')})',
  //     simple: (simple) => simple.whenSimple(
  //       any: (any) => 'ANY',
  //       id: toPestGrammarId,
  //       modified: (modified) =>
  //           '(${toPestGrammarExpr(modified.expression)})${modified.modifier.value}',
  //       negated: (negated) =>
  //           '(!(${toPestGrammarExpr(negated.expression)}) ~ ANY)',
  //       raw: (raw) {
  //         final name = rawTokenName(raw).constantCase;
  //         rawRules[name] = raw;
  //         return name; // '"${toPestGrammarRaw(raw)}"';
  //       },
  //       rawRange: (rawRange) =>
  //           "'${toPestGrammarRaw(rawRange.start)}'..'${toPestGrammarRaw(rawRange.end)}'",
  //     )!,
  //   )!;
  // }

  String toLalrpopGrammarExpr(Expr expr, {bool isRoot = false, String? name}) {
    final previousExpr = this.previousExpr;
    // final isRoot = previousExpr == null;
    this.previousExpr = expr;

    String wrap(String value) {
      return name == null || isInUppercase ? value : '<$name:${value}>';
    }

    final createdType = ctx.typeDescriptions[expr] ??
        ctx.typeDescriptionsByName[expr.toString()];
    if (!isRoot &&
        createdType != null &&
        (!isInUppercase || !createdType.name.toLowerCase().endsWith('token'))) {
      return wrap(
        createdType.name.isUpperCase
            ? createdType.name
            : createdType.name.pascalCase,
      );
    }

    final result = expr.when(
      and: (and) {
        // final fields = createdType.fields.map(
        //   (e) {
        //     final name = e.name?.snakeCase;
        //     return e.type == 'Token'
        //         ? '${name}:Token(${name}Start, ${name}End)'
        //         : name;
        //   },
        // ).join(', ');
        int i = 0;
        final expressions = and.expressions.map((e) {
          final f = createdType?.fields[i++];
          return toLalrpopGrammarExpr(e, name: f?.name?.snakeCase);
        }).join(' ');
        if (createdType == null || isInUppercase) return expressions;
        return '${expressions} => ${createdType.name}{<>}';
      },
      or: (or) {
        int i = 0;
        return '${or.expressions.map((e) {
          final variant = ctx.typeDescriptions[e];
          final f = createdType?.fields[i++];
          final create = f == null || isInUppercase
              ? ''
              : ' => ${createdType!.name}::${f.name}(<>)';
          return '${toLalrpopGrammarExpr(e)}$create';
        }).join(', ')}';
      },
      simple: (simple) => simple.whenSimple(
        any: (any) => 'ANY',
        id: (id) => id.value.toUpperCase() == id.value
            ? wrap(id.value)
            : wrap('${toLalrpopGrammarId(id)}'),
        modified: (modified) {
          final expressions =
              '(${toLalrpopGrammarExpr(modified.expression)})${modified.modifier.value}';
          if (createdType == null || isInUppercase) return wrap(expressions);
          return '${expressions} => ${createdType.name}(<>)';
        },
        negated: (negated) {
          Expr e = negated.expression;
          while (e is ExprId) {
            try {
              e = ctx.typeDescriptions[e]?.expr ??
                  ctx.typeDescriptionsByName[e.value]!.expr;
            } catch (err) {
              throw Exception('$err $e');
            }
          }
          if (e is ExprRaw) {
            e = ExprOr([e]);
          }
          if (e is! ExprOr) {
            throw e;
          }
          return wrap(
              'r#"[^${e.expressions.map((e) => (e as ExprRaw).value).join('')}]"#');
        },
        raw: (raw) {
          if (isInUppercase) {
            return '"${toLalrpopGrammarRaw(raw)}"';
          }
          final name = rawTokenName(raw).constantCase;
          rawRules[name] = raw;
          return wrap(name); // '"${toPestGrammarRaw(raw)}"';
          // return bracketedToken('"${toLalrpopGrammarRaw(raw)}"');
        },
        rawRange: (rawRange) =>
            'r"[${toLalrpopGrammarRaw(rawRange.start)}-${toLalrpopGrammarRaw(rawRange.end)}]"',
      )!,
    )!;
    this.previousExpr = previousExpr;
    return result;
  }

  String toLalrpopGrammarRaw(ExprRaw raw) {
    return raw.value
        .replaceAll("\\'", "'")
        .replaceAll('"', '\\"')
        .replaceAllMapped(RegExp(r'\\([^nrt"\\])'), (b) => '\\\\${b.group(1)}');
  }

  String bracketedToken(ExprRaw inner) =>
      '<start:@L> <text:"${toLalrpopGrammarRaw(inner)}"> <end:@R>';
}
