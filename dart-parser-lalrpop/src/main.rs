pub mod ast;
pub mod parser;

#[macro_use]
extern crate lalrpop_util;

lalrpop_mod!(pub calculator1); // synthesized by LALRPOP

fn main() {
    println!("Hello, world!");
}

#[test]
fn calculator1() {
    assert!(calculator1::TermParser::new().parse("22").is_ok());
    assert!(calculator1::TermParser::new().parse("(22)").is_ok());
    assert!(calculator1::TermParser::new().parse("((((22))))").is_ok());
    assert!(calculator1::TermParser::new().parse("((22)").is_err());
    println!("{:?}", calculator1::TermParser::new().parse("22"));
}

lalrpop_mod!(pub dart); // synthesized by LALRPOP

#[test]
fn dart_test() {
    let out = dart::fieldFormalParameterParser::new().parse("this.cc");
    assert!(out.is_ok());

    let v = dart::fieldFormalParameterParser::new().parse("");
    assert!(calculator1::TermParser::new().parse("(22)").is_ok());
    assert!(calculator1::TermParser::new().parse("((((22))))").is_ok());
    assert!(calculator1::TermParser::new().parse("((22)").is_err());
    println!("{:?}", calculator1::TermParser::new().parse("22"));
}

lalrpop_mod!(pub dart_gen); // synthesized by LALRPOP

#[test]
fn dart_get_test() {
    let out = dart_gen::fieldFormalParameterParser::new().parse("this.cc");
    assert!(out.is_ok());

    let v = dart_gen::fieldFormalParameterParser::new().parse("");
    println!("{:?}", v);
}
