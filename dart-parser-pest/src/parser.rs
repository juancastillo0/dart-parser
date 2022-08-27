use crate::ast;
use pest::{iterators::Pair, Parser};
use pest_derive::Parser;
use serde::{Deserialize, Serialize};

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

pub struct ParseCtx<'a> {
    stack: Vec<pest::iterators::Pairs<'a, Rule>>,
    comments: Vec<ast::Comment>,
    current: Option<Pair<'a, Rule>>,
}

impl<'a> ParseCtx<'a> {
    pub fn parse_str<T: RuleModel>(
        text: &'a str,
    ) -> Result<(T, Vec<ast::Comment>), pest::error::Error<Rule>> {
        let pairs = DartParser::parse(T::rule(), text)?;

        let mut ctx = ParseCtx {
            stack: vec![pairs],
            comments: vec![],
            current: None,
        };

        Ok((ctx.parse_ast(), ctx.comments))
    }

    fn pair(mut self: &mut Self) -> &Pair<'a, Rule> {
        while self.current.is_none() {
            let pairs = self.stack.last_mut().unwrap();
            self.current = pairs.next();
            if self.current.is_none() {
                self.stack.pop();
            }
        }
        self.current.as_ref().unwrap()
    }

    pub fn next_rule(self: &mut Self) -> Rule {
        let mut result = None;
        while result.is_none() {
            match self.pair().as_rule() {
                Rule::COMMENT => {
                    println!("Rule::COMMENT");
                    self.stack.push(self.current.take().unwrap().into_inner());
                    let comment = ast::Comment::parse(self);
                    self.comments.push(comment);
                }
                Rule::WHITESPACE => {
                    // ignore whitespace
                    // TODO: count lines
                    self.current = None;
                }
                rule => result = Some(rule),
            }
        }
        println!("next_rule {:?}", result);
        result.unwrap()
    }

    pub fn is_rule_next(self: &mut Self, rule: Rule) -> bool {
        self.next_rule() == rule
    }

    pub fn try_parse_ast<T: RuleModel>(self: &mut Self) -> Option<T> {
        println!("try_parse_ast {:?}", T::rule());
        if self.is_rule_next(T::rule()) {
            Some(self.parse_ast())
        } else {
            None
        }
    }

    pub fn parse_list<T: RuleModel>(self: &mut Self) -> Vec<T> {
        println!("parse_list {:?}", T::rule());
        let mut result = vec![];
        while self.is_rule_next(T::rule()) {
            result.push(self.parse_ast());
        }
        result
    }

    pub fn parse_token(self: &mut Self) -> Token {
        self.next_rule();
        let pair = self.pair();
        let token = Token::from_pair(pair);
        println!("parse_token {:?}", token);
        self.stack.push(self.current.take().unwrap().into_inner());
        token
    }

    pub fn parse_ast<T: RuleModel>(self: &mut Self) -> T {
        assert!(self.is_rule_next(T::rule()), "{:?}", T::rule());
        self.stack.push(self.current.take().unwrap().into_inner());
        println!("parse_ast {:?}", T::rule());
        let value = T::parse(self);
        value
    }
}

fn parse<'a>(rule: Rule, input: &'a str) -> Pair<Rule> {
    return DartParser::parse(rule, input).unwrap().next().unwrap();
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ParseOutput {
    pub library: ast::LibraryDeclaration,
    pub comments: Vec<ast::Comment>,
}

impl ParseOutput {
    pub fn from_str(input: &str) -> Result<Self, pest::error::Error<Rule>> {
        let (library, comments) = ParseCtx::parse_str(input)?;
        Ok(Self { library, comments })
    }
}

#[test]
fn test_comment() {
    parse(Rule::SINGLE_LINE_COMMENT, "// dawionodw");
}

#[test]
fn test_parse_ctx() {
    let (library, comments) = ParseCtx::parse_str::<ast::LibraryDeclaration>(
        "
class Model {
    // The field
    final String f;
    const Model(this.f);
}",
    )
    .unwrap();
    println!("{:?}", library);
    println!("{:?}", comments);
    println!("{:?}", serde_json::to_string_pretty(&library).unwrap());
}

pub trait RuleModel: Sized + 'static {
    fn rule() -> Rule;

    fn parse(ctx: &mut ParseCtx) -> Self;
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Token {
    pub start: usize,
    pub end: usize,
    pub line_start: usize,
    pub line_end: usize,
    pub string: String,
}

impl Token {
    pub fn from_pair(pair: &Pair<'_, Rule>) -> Self {
        let span = pair.as_span();
        let (line_start, _) = span.start_pos().line_col();
        let (line_end, _) = span.end_pos().line_col();

        Self {
            start: span.start(),
            end: span.end(),
            line_start: line_start,
            line_end: line_end,
            string: pair.as_str().to_string(),
        }
    }
}
