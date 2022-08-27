import 'dart:typed_data';

import '/src/wasm/wasm_interop_native.dart'
    if (dart.library.html) '/src/wasm/wasm_interop_web.dart' as platform_impl;
import '/src/wasm/wasm_interface.dart';

export '/src/wasm/wasm_interface.dart';

Future<WasmModule> compileAsyncWasmModule(Uint8List bytes) async {
  return platform_impl.compileAsyncWasmModule(bytes);
}

class WasmInstanceModule {
  final WasmInstance instance;
  final WasmModule module;

  WasmInstanceModule(this.instance, this.module);
}