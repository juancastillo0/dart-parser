import 'dart:convert' show Utf8Decoder, Utf8Encoder;
import 'dart:typed_data';

import 'package:dart_fixer_test/wasm/wasm.dart';

// import * as wasm from './dart_parser_wasm_bg.wasm';

// const lTextDecoder = typeof TextDecoder == 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

final cachedTextDecoder =
    Utf8Decoder(); // new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

// cachedTextDecoder.decode();

Uint8List cachedUint8Memory0 = new Uint8List(0);

Uint8List getUint8Memory0() {
  if (cachedUint8Memory0.lengthInBytes == 0) {
    cachedUint8Memory0 = wasm.memory.view;
  }
  return cachedUint8Memory0;
}

String getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.convert(getUint8Memory0().sublist(ptr, ptr + len));
}

int WASM_VECTOR_LEN = 0;

// const lTextEncoder = typeof TextEncoder == 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

final cachedTextEncoder = Utf8Encoder(); // new lTextEncoder('utf-8');

// const encodeString = (typeof cachedTextEncoder.encodeInto == 'function'
//     ? function (arg, view) {
//     return cachedTextEncoder.encodeInto(arg, view);
// }
//     : function (arg, view) {
//     const buf = cachedTextEncoder.encode(arg);
//     view.set(buf);
//     return {
//         read: arg.length,
//         written: buf.length
//     };
// });

int encodeString(String arg, Uint8List view) {
  final encoded = cachedTextEncoder.convert(arg);
  view.setAll(0, encoded);
  return encoded.lengthInBytes;
}

int passStringToWasm0(
  String arg,
  int Function(int a) malloc,
  int Function(int a, int b, int c) realloc,
) {
  if (realloc == null) {
    final buf = cachedTextEncoder.convert(arg);
    final ptr = malloc(buf.length);
    getUint8Memory0().setRange(ptr, ptr + buf.length, buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }

  int len = arg.length;
  int ptr = malloc(len);

  final mem = getUint8Memory0();

  int offset = 0;

  for (; offset < len; offset++) {
    final code = arg.codeUnitAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset != len) {
    if (offset != 0) {
      arg = arg.substring(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    final view = getUint8Memory0().buffer.asUint8List(ptr + offset, ptr + len);
    final written = encodeString(arg, view);

    offset += written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

Int32List cachedInt32Memory0 = Int32List(0);

Int32List getInt32Memory0() {
  if (cachedInt32Memory0.lengthInBytes == 0) {
    cachedInt32Memory0 = Int32List.view(wasm.memory.view.buffer);
  }
  return cachedInt32Memory0;
}

// void __wbg_alert_d8ddd7e17eb29cca(arg0, arg1) {
//   alert(getStringFromWasm0(arg0, arg1));
// }

late final DartParserWasmModule wasm;

class DartParserWasmModule {
  final WasmInstanceModule _instanceModule;

  WasmInstance get instance => _instanceModule.instance;
  DartParserWasmModule._(this._instanceModule);

  factory DartParserWasmModule(WasmInstanceModule _instanceModule) {
    return wasm = DartParserWasmModule._(_instanceModule);
  }

  WasmMemory get memory => instance.memory;
  void greet() => instance.lookupFunction('greet')!.call([]);
  void parse(int a, int b, int c) =>
      instance.lookupFunction('parse')!.call([a, b, c]);
  int wbindgen_add_to_stack_pointer(int a) =>
      instance.lookupFunction('__wbindgen_add_to_stack_pointer')!.call([a]);
  int wbindgen_malloc(int a) =>
      instance.lookupFunction('__wbindgen_malloc')!.call([a]);
  int wbindgen_realloc(int a, int b, int c) =>
      instance.lookupFunction('__wbindgen_realloc')!.call([a, b, c]);
  void wbindgen_free(int a, int b) =>
      instance.lookupFunction('__wbindgen_free')!.call([a, b]);
}
