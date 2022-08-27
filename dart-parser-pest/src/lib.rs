
pub mod parser;
pub mod ast;

extern crate pest;
#[macro_use]
extern crate pest_derive;
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

use parser::ParseOutput;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, World!");
}

#[wasm_bindgen]
pub fn parse(input: String) -> String {
    let output = ParseOutput::from_str(&input);

    match output {
        Ok(value) => serde_json::to_string_pretty(&value),
        Err(err) => serde_json::to_string_pretty(&serde_json::json!({"error": err.to_string()})),
    }
    .unwrap()
}
