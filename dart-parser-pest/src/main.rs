pub mod ast;

extern crate pest;
#[macro_use]
extern crate pest_derive;

use std::any::Any;

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

    let dart_type = DartParser::parse(Rule::Type, "List<int?>")
        .unwrap()
        .next()
        .unwrap();

    println!("{:?}", dart_type);

    let type_args = DartParser::parse(Rule::TypeArguments, "<Int?>")
        .unwrap()
        .next()
        .unwrap();

    println!("{:?}", type_args);

    let library_declaration: Pair<Rule> = DartParser::parse(
        Rule::LibraryDeclaration,
        "
import './daw.dart' hide String show May, July;

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

    // let mut pair = library_declaration;

    // while (true) {}
}

struct ParseCtx<'a> {
    stack: Vec<pest::iterators::Pairs<'a, Rule>>,
    comments: Vec<ast::Comment>,
    current: Option<Pair<'a, Rule>>,
}

impl<'a> ParseCtx<'a> {
    fn parse_str(text: &'a str) -> Self {
        let pairs = DartParser::parse(Rule::LibraryDeclaration, text).unwrap();

        Self {
            stack: vec![pairs],
            comments: vec![],
            current: None,
        }
    }

    fn pair(mut self: Self) -> Pair<'a, Rule> {
        while self.current.is_none() {
            let pairs = self.stack.last().unwrap();
            self.current = pairs.next();
            if self.current.is_none() {
                self.stack.pop();
            }
        }
        self.current.unwrap()
    }

    fn is_rule_next(mut self: Self, rule: Rule) -> bool {
        let mut result = None;
        while result.is_none() {
            match self.pair().as_rule() {
                Rule::COMMENT => self.comments.push(self.parse_ast()),
                Rule::WHITESPACE => self.parse_ast(),
                rule => result = Some(true),
                _ => result = Some(false),
            }
        }
        result.unwrap()
    }

    fn try_parse_ast(mut self: Self, rule: Rule) -> Option<dyn Any> {
        if self.is_rule_next(rule) {
            Some(self.parse_ast())
        } else {
            None
        }
    }

    fn try_parse_list(mut self: Self, rule: Rule) -> Vec<dyn Any> {
        let result = vec![];
        while self.is_rule_next(rule) {
            result.push(self.parse_ast());
        }
        result
    }

    fn parse_ast(mut self: Self) -> dyn Any {
        let value = match self.pair().as_rule() {
            Rule::libraryDeclaration => {
                // let initialPair = pair.into_inner().next().unwrap();
                // let initial = parse_ast(initialPair);

                // let secondPair = pair.into_inner().next().unwrap();
                // let second = parse_ast(secondPair);

                ast::LibraryDeclaration {
                    script_tag: self.try_parse_ast(Rule::scriptTag),
                    library_name: self.try_parse_ast(Rule::libraryName),
                    // if initialPair.as_rule() == Rule::libraryName {
                    //     Some(initial)
                    // } else if secondPair.as_rule() == Rule::libraryName {
                    //     Some(second)
                    // } else {
                    //     None
                    // },
                    import_or_export: self.try_parse_list(Rule::importOrExport),
                    part_directive: self.try_parse_list(Rule::partDirective),
                    metadata: self.try_parse_list(Rule::metadata),
                    eof: todo!(),
                }
            }
            _ => "",
        };
        self.pair = self.pair.into_inner();
        value
    }
}

// fn parse_ast(pair: Pair<Rule>) -> Any {
//     match pair.as_rule() {
//         Rule::libraryDeclaration => {
//             let initialPair = pair.into_inner().next().unwrap();
//             let initial = parse_ast(initialPair);

//             let secondPair = pair.into_inner().next().unwrap();
//             let second = parse_ast(secondPair);

//             ast::LibraryDeclaration {
//                 script_tag: if initialPair.as_rule() == Rule::scriptTag {
//                     Some(initial)
//                 } else {
//                     None
//                 },
//                 library_name: if initialPair.as_rule() == Rule::libraryName {
//                     Some(initial)
//                 } else if secondPair.as_rule() == Rule::libraryName {
//                     Some(second)
//                 } else {
//                     None
//                 },
//                 import_or_export: todo!(),
//                 part_directive: todo!(),
//                 metadata: todo!(),
//                 eof: todo!(),
//             }
//         }
//         _ => "",
//     };
// }

fn parse<'a>(rule: Rule, input: &'a str) -> Pair<Rule> {
    return DartParser::parse(rule, input).unwrap().next().unwrap();
}

#[test]
fn test_comment() {
    parse(Rule::SINGLE_LINE_COMMENT, "// dawionodw");
}

pub struct Token {
    pub span: Span,
    pub rule: Rule,
}

pub struct Span {
    pub start: usize,
    pub end: usize,
}

impl Span {
    pub fn from_pest_span(span: pest::Span) -> Self {
        Self {
            start: span.start(),
            end: span.end(),
        }
    }
}
