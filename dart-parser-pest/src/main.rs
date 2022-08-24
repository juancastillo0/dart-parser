extern crate pest;
#[macro_use]
extern crate pest_derive;

use pest::{iterators::Pair, Parser};

#[derive(Parser)]
#[grammar = "dart.pest"]
pub struct DartParser;

// (cascade ~ ".." ~ cascadeSection) |
fn main() {
    // let field = DartParser::parse(
    //     Rule::fieldFormalParameter,
    //     "this.oooo ",
    // )
    // .unwrap()
    // .next()
    // .unwrap();

    // println!("{:?}", field);

    let dart_type = DartParser::parse(Rule::dartType, "List<int?>")
        .unwrap()
        .next()
        .unwrap();

    println!("{:?}", dart_type);

    let type_args = DartParser::parse(Rule::typeArguments, "<Int?>")
        .unwrap()
        .next()
        .unwrap();

    println!("{:?}", type_args);

    let library_declaration: Pair<Rule> = DartParser::parse(
        Rule::libraryDeclaration,
        "
class B {
    String field;
final List<int?>
        //  comment
    dawdwa;

    String current = '''
int get value => 2;    
''';

    B.n(this.cc );
}
",
    )
    .unwrap()
    .next()
    .unwrap();

    println!("{:?}", library_declaration);

    // match library_declaration.as_rule() {
    //     Rule::libraryDeclaration => "",
    //     _ => "",
    // };
}

fn parse<'a>(rule: Rule, input: &'a str) -> Pair<Rule> {
    return DartParser::parse(rule, input).unwrap().next().unwrap();
}

#[test]
fn test_comment() {
    parse(Rule::SINGLE_LINE_COMMENT, "// dawionodw");
}
