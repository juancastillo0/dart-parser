#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
  a + b
}

#[napi]
pub fn parse_to_json(input: String) -> String {
  dart_parser_pest::parse_to_json(&input)
}

#[napi]
pub fn parse_to_json_pretty(input: String) -> String {
  dart_parser_pest::parse_to_json_pretty(&input)
}
