import 'dart:async';
import 'dart:typed_data';

import '/src/wasm/dart_parser_wasm_bg.dart';
import 'wasm.dart';

Completer<DartParser>? _completer;

void _alert(arg0, arg1) {
  print('alert ${getStringFromWasm0(arg0, arg1)}');
}

class DartParser {
  final DartParserWasmModule _wasm;

  DartParser._(this._wasm);

  static Future<DartParser> compile(Uint8List moduleBinary) async {
    if (_completer != null) return _completer!.future;
    _completer = Completer();
    final module = await compileAsyncWasmModule(moduleBinary);

    final builder = module.builder();
    builder.addFunction(
      './dart_parser_wasm_bg.js',
      '__wbg_alert_d8ddd7e17eb29cca',
      _alert,
    );
    final instance = await builder.build();
    final parser = DartParser._(
      DartParserWasmModule(WasmInstanceModule(instance, module)),
    );
    _completer!.complete(parser);
    return parser;
  }

  void greet() => _wasm.greet();

  String parse(String input) {
    final retptr = _wasm.wbindgen_add_to_stack_pointer(-16);
    final ptr0 =
        passStringToWasm0(input, _wasm.wbindgen_malloc, _wasm.wbindgen_realloc);
    final len0 = WASM_VECTOR_LEN;
    _wasm.parse(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr ~/ 4 + 0];
    var r1 = getInt32Memory0()[retptr ~/ 4 + 1];
    try {
      return getStringFromWasm0(r0, r1);
    } finally {
      _wasm.wbindgen_add_to_stack_pointer(16);
      _wasm.wbindgen_free(r0, r1);
    }
  }
}
