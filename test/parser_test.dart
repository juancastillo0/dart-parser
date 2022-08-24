import 'package:petitparser/petitparser.dart';
import 'package:petitparser/reflection.dart';
import 'package:test/test.dart';
import 'package:dart_fixer_test/parse_grammar.dart';

void main() {
  test('detect common problems', () {
    final definition = resolve(document());
    expect(linter(definition), isEmpty);
  });
}
