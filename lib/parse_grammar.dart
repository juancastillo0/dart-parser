import 'dart:io';

import 'package:petitparser/debug.dart';
import 'package:petitparser/petitparser.dart';

Parser<ExprId> id() =>
    pattern('a-zA-Z_').plus().flatten().map((value) => ExprId(value));

Parser<Modifier> modifier() => pattern('*+?')
    .map((text) => Modifier.values.firstWhere((v) => v.value == text));

// <STRING_CONTENT_COMMON> ::= \gtilde(`\\' | `\sq' | `"' | `$' | `\\r' | `\\n')
//   \alt <ESCAPE_SEQUENCE>
//   \alt `\\' \gtilde(`n' | `r' | `b' | `t' | `v' | `x' | `u' | `\\r' | `\\n')
//   \alt <SIMPLE_STRING_INTERPOLATION>

// <STRING_CONTENT_SQ> ::= <STRING_CONTENT_COMMON> | `"'
// ([^\\"\n\r]|\\[^\n\r])*

// `\\n' | `\\r' | `\\f' | `\\b' | `\\t' | `\\v'
Parser<String> rawInnerContent() =>
    (pattern('^\\\'\r\n') | char('\\') & (pattern('^\r\n'))).plus().flatten();

Parser<ExprRaw> raw() => (char("'") &
        // (pattern("^\\'\n\r") | char('\\') & pattern('^\n\r')).plus().flatten() &
        rawInnerContent() &
        char("'"))
    .map((value) => ExprRaw(value[1] as String));

Parser white() => char(' ') | char('\n') & char(' ').star();

class ExprSimple extends Expr {
  const ExprSimple();

  T? whenSimple<T>({
    T Function(ExprModified modified)? modified,
    T Function(ExprNegated negated)? negated,
    T Function(ExprRaw raw)? raw,
    T Function(ExprRawRange rawRange)? rawRange,
    T Function(ExprAny any)? any,
    T Function(ExprId id)? id,
  }) {
    final self = this;
    if (self is ExprModified) {
      return modified?.call(self);
    } else if (self is ExprNegated) {
      return negated?.call(self);
    } else if (self is ExprRaw) {
      return raw?.call(self);
    } else if (self is ExprRawRange) {
      return rawRange?.call(self);
    } else if (self is ExprAny) {
      return any?.call(self);
    } else if (self is ExprId) {
      return id?.call(self);
    }
    return null;
  }

  @override
  String toString() {
    return whenSimple(
      any: (any) => 'Any',
      id: (id) => 'Id(${id.value})',
      modified: (modified) =>
          'Modified(${modified.modifier.value},${modified.expression})',
      negated: (negated) => 'Negated(${negated.expression})',
      raw: (raw) => 'Raw(${raw.value})',
      rawRange: (rawRange) => 'RawRange(${rawRange.start},${rawRange.end})',
    )!;
  }
}

enum Modifier {
  star('*'),
  plus('+'),
  optional('?');

  final String value;
  const Modifier(this.value);
}

class ExprModified extends ExprSimple {
  final Modifier modifier;
  final Expr expression;

  const ExprModified(this.modifier, this.expression);
}

class ExprNegated extends ExprSimple {
  final Expr expression;

  const ExprNegated(this.expression);
}

class ExprRaw extends ExprSimple {
  final String value;

  static final allRaw = <String>{};

  ExprRaw(this.value) {
    allRaw.add(value);
  }
}

class ExprRawRange extends ExprSimple {
  final ExprRaw start;
  final ExprRaw end;

  const ExprRawRange(this.start, this.end);
}

/// denote a non-greedy token recognition step:
/// It terminates as soon as the lookahead is the specified next token
/// (\commentary{that is, \lit{'''} or \lit{"""}}).
class ExprAny extends ExprSimple {
  const ExprAny();
}

class ExprId extends ExprSimple {
  final String value;

  const ExprId(this.value);
}

class Expr {
  const Expr();

  T? when<T>({
    T Function(ExprSimple simple)? simple,
    T Function(ExprAnd and)? and,
    T Function(ExprOr or)? or,
  }) {
    final self = this;
    if (self is ExprSimple) {
      return simple?.call(self);
    } else if (self is ExprAnd) {
      return and?.call(self);
    } else if (self is ExprOr) {
      return or?.call(self);
    }
    return null;
  }

  static String? indentation;

  @override
  String toString() {
    bool resetIndentation = indentation == null;
    indentation ??= '';
    final value = when(
      and: (and) => 'And(${and.expressions.join(', ')})',
      or: (or) {
        final previous = indentation;
        indentation = '${indentation}  ';
        final value =
            'Or(${or.expressions.map((v) => '\n${indentation}${v},').join()}\n${previous})';
        indentation = previous;
        return value;
      },
      simple: (simple) => 'Simple(${simple})',
    )!;
    if (resetIndentation) {
      indentation = null;
    }

    return value;
  }
}

Parser<ExprSimple> rawExpressions() =>
    (raw() & (string('..').trim(white()) & raw()).optional()).map(
      (value) {
        final initial = value[0] as ExprRaw;
        return value[1] is List
            ? ExprRawRange(
                initial,
                (value[1] as List)[1] as ExprRaw,
              )
            : initial;
      },
    );

final exprNames = Map<Expr, String>.identity();

SettableParser<Expr>? _expressionSimple;
Parser<Expr> expressionSimple() {
  if (_expressionSimple != null) return _expressionSimple!;
  final e = undefined<Expr>();
  _expressionSimple = e;

  var inner = rawExpressions() |
      id() |
      string('.*?').map((value) => const ExprAny()) |
      (char('(') &
              (char('<') & pattern('a-zA-Z_').plus().flatten() & char('>'))
                  .optional() &
              expression() &
              char(')'))
          .map((value) {
        final expr = value[2] as Expr;
        if (value[1] is List) {
          exprNames[expr] = (value[1] as List)[1];
        }
        return expr;
      });

  inner = inner | (char('~') & inner).map((value) => ExprNegated(value[1]));

  e.set(
    ((inner & modifier().optional()).map((value) => value[1] is Modifier
        ? ExprModified(value[1] as Modifier, value[0])
        : value[0])).cast(),
  );
  return e;
}

class ExprAnd extends Expr {
  late final List<Expr> expressions;

  ExprAnd(List<Expr> expressions) {
    this.expressions = expressions
        .expand(
          (e) => e is ExprAnd ? e.expressions : [e],
        )
        .toList();
  }
}

SettableParser<Expr>? _expressionAnd;
Parser<Expr> expressionAnd() {
  if (_expressionAnd != null) return _expressionAnd!;
  final e = undefined<Expr>();
  _expressionAnd = e;
  e.set(
    (expressionSimple() & white() & expressionAnd())
        .map((value) => ExprAnd([value[0], value[2]]))
        .or(expressionSimple())
        .cast(),
  );
  return e;
}

class ExprOr extends Expr {
  late final List<Expr> expressions;

  ExprOr(List<Expr> expressions) {
    this.expressions = expressions
        .expand(
          (e) => e is ExprOr ? e.expressions : [e],
        )
        .toList();
  }
}

SettableParser<Expr>? _expression;
Parser<Expr> expression() {
  if (_expression != null) return _expression!;
  final e = undefined<Expr>();
  _expression = e;
  e.set(
    ((expressionAnd() & char('|').trim(white()) & expression())
                .map((value) => ExprOr([value[0], value[2]])) |
            expressionAnd())
        .cast(),
  );

  return e;
}

class Item {
  final ExprId id;
  final Expr expression;

  Item(this.id, this.expression);

  @override
  String toString() => 'Item(id: $id, expression: $expression)';
}

Parser<Item> item() => (id() & string('::=').trim() & expression())
    .map((value) => Item(value[0], value[2]));

Parser<List<Item>> document() => item()
    .separatedBy(char('\n').repeat(2, 3), includeSeparators: false)
    .map((value) => value.cast<Item>());

// FIXES:
// remove \hspace{-3mm}
// ::= | -> wrap value in ?
// "'\' " -> "'\\' "
// "expression )" -> "expression)"
// " \gtilde" -> " ~"
// -\mbox- -> --
//
// https://github.com/dart-lang/language/blob/master/specification/dartLangSpec.tex
// commit a3b45ab2bc4e2442c909252858119ffd2e8c685a
