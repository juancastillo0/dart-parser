import 'dart:io';

import 'package:dart_fixer_test/wasm/dart_parser_wasm.dart';
import 'package:petitparser/petitparser.dart';
import 'package:petitparser/reflection.dart';
import 'package:test/test.dart';
import 'package:dart_fixer_test/parse_grammar.dart';

void main() {
  test('detect common problems', () {
    final definition = resolve(document());
    expect(linter(definition), isEmpty);
  });

  test('dart parser', () async {
    final moduleBinary =
        await File('./lib/wasm/dart_parser_wasm.wasm').readAsBytes();
    final parser = await DartParser.compile(moduleBinary);

    print(parser.parse("""
import './relative.dart';

class ModelC {
  /// Docs
  final String a;

  const ModelC(this.a);

  int get length => a.length;
}
"""));
  });

  test('greet from wasm', () async {
    final moduleBinary =
        await File('./lib/wasm/dart_parser_wasm.wasm').readAsBytes();
    final parser = await DartParser.compile(moduleBinary);

    parser.greet(); // this should print "alert Hello, dart-parser-wasm!"
  });
}
