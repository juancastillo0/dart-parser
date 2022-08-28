pub mod ast;
pub mod parser;

use parser::ParseOutput;
use serde::{Deserialize, Serialize};

pub fn parse_to_json(input: &str) -> String {
    let output = parse_to_output(input);
    serde_json::to_string(&output).unwrap()
}

pub fn parse_to_json_pretty(input: &str) -> String {
    let output = parse_to_output(input);
    serde_json::to_string_pretty(&output).unwrap()
}

pub fn parse_to_output(input: &str) -> ParseOutputResult {
    match ParseOutput::from_str(&input) {
        Ok(value) => ParseOutputResult::Ok(value),
        Err(err) => ParseOutputResult::Err(err.into()),
    }
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ParseOutputResult {
    Ok(ParseOutput),
    Err(ParseOutputErr),
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ParseOutputErr {
    pub string: String,
}

impl From<pest::error::Error<parser::Rule>> for ParseOutputErr {
    fn from(err: pest::error::Error<parser::Rule>) -> Self {
        Self {
            string: err.to_string(),
        }
    }
}
