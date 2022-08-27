pub mod ast;
pub mod parser;

// extern crate pest;
// #[macro_use]
// extern crate pest_derive;
// extern crate wasm_bindgen;

use parser::ParseOutput;

pub fn parse(input: &str) -> String {
    let output = ParseOutput::from_str(input);

    match output {
        Ok(value) => serde_json::to_string_pretty(&value),
        Err(err) => serde_json::to_string_pretty(&serde_json::json!({"error": err.to_string()})),
    }
    .unwrap()
}

pub fn parse_output(input: &str) -> Result<ParseOutput, pest::error::Error<parser::Rule>> {
    ParseOutput::from_str(&input)
}
