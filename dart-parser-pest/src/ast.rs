use crate::parser::{ParseCtx, Rule, RuleModel, Token};
use serde::{Deserialize, Serialize};

/// And(Raw(let), Id(staticFinalDeclarationList), Raw(in), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LetExpression {
    pub let_token: Token,
    pub static_final_declaration_list: StaticFinalDeclarationList,
    pub in_token: Token,
    pub expression: Expression,
}
impl RuleModel for LetExpression {
    fn rule() -> Rule {
        Rule::LetExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            let_token: ctx.parse_token(),
            static_final_declaration_list: ctx.parse_ast(),
            in_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FinalConstVarOrTypeFinalToken {
    pub late_token: Option<Token>,
    pub final_token: Token,
    pub dart_type: Option<Type>,
}
impl RuleModel for FinalConstVarOrTypeFinalToken {
    fn rule() -> Rule {
        Rule::FinalConstVarOrTypeFinalToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            late_token: if ctx.is_rule_next(Rule::LATE_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            final_token: ctx.parse_token(),
            dart_type: ctx.try_parse_ast(),
        }
    }
}

/// And(Raw(const), Modified(?,Id(type)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FinalConstVarOrTypeConstToken {
    pub const_token: Token,
    pub dart_type: Option<Type>,
}
impl RuleModel for FinalConstVarOrTypeConstToken {
    fn rule() -> Rule {
        Rule::FinalConstVarOrTypeConstToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            const_token: ctx.parse_token(),
            dart_type: ctx.try_parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(late)), Id(varOrType))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FinalConstVarOrTypeVarOrType {
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
}
impl RuleModel for FinalConstVarOrTypeVarOrType {
    fn rule() -> Rule {
        Rule::FinalConstVarOrTypeVarOrType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            late_token: if ctx.is_rule_next(Rule::LATE_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            var_or_type: ctx.parse_ast(),
        }
    }
}

/// Or( And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type))), And(Raw(const), Modified(?,Id(type))), And(Modified(?,Raw(late)), Id(varOrType)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FinalConstVarOrType {
    Final(FinalConstVarOrTypeFinalToken),
    Const(FinalConstVarOrTypeConstToken),
    VarOrType(FinalConstVarOrTypeVarOrType),
}
impl RuleModel for FinalConstVarOrType {
    fn rule() -> Rule {
        Rule::FinalConstVarOrType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::FinalConstVarOrTypeFinalToken => FinalConstVarOrType::Final(ctx.parse_ast()),
            Rule::FinalConstVarOrTypeConstToken => FinalConstVarOrType::Const(ctx.parse_ast()),
            Rule::FinalConstVarOrTypeVarOrType => FinalConstVarOrType::VarOrType(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(var), Id(type), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum VarOrType {
    Var(Token),
    Type(Type),
}
impl RuleModel for VarOrType {
    fn rule() -> Rule {
        Rule::VarOrType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::VAR_TOKEN => VarOrType::Var(ctx.parse_token()),
            Rule::Type => VarOrType::Type(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(=), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionEqual {
    pub equal_token: Token,
    pub expression: Expression,
}
impl RuleModel for ExpressionEqual {
    fn rule() -> Rule {
        Rule::ExpressionEqual
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            equal_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Raw(,), Id(initializedIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedIdentifierItem {
    pub comma_token: Token,
    pub initialized_identifier: InitializedIdentifier,
}
impl RuleModel for InitializedIdentifierItem {
    fn rule() -> Rule {
        Rule::InitializedIdentifierItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            initialized_identifier: ctx.parse_ast(),
        }
    }
}

/// And(Id(declaredIdentifier), Modified(?,And(Raw(=), Id(expression))), Modified(*,And(Raw(,), Id(initializedIdentifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedVariableDeclaration {
    pub declared_identifier: DeclaredIdentifier,
    pub expression_equal: Option<ExpressionEqual>,
    pub initialized_identifier_item: Vec<InitializedIdentifierItem>,
}
impl RuleModel for InitializedVariableDeclaration {
    fn rule() -> Rule {
        Rule::InitializedVariableDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            declared_identifier: ctx.parse_ast(),
            expression_equal: ctx.try_parse_ast(),
            initialized_identifier_item: ctx.parse_list(),
        }
    }
}

/// And(Id(identifier), Modified(?,And(Raw(=), Id(expression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedIdentifier {
    pub identifier: Identifier,
    pub expression_equal: Option<ExpressionEqual>,
}
impl RuleModel for InitializedIdentifier {
    fn rule() -> Rule {
        Rule::InitializedIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            identifier: ctx.parse_ast(),
            expression_equal: ctx.try_parse_ast(),
        }
    }
}

/// And(Id(initializedIdentifier), Modified(*,And(Raw(,), Id(initializedIdentifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedIdentifierList {
    pub initialized_identifier: InitializedIdentifier,
    pub initialized_identifier_item: Vec<InitializedIdentifierItem>,
}
impl RuleModel for InitializedIdentifierList {
    fn rule() -> Rule {
        Rule::InitializedIdentifierList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            initialized_identifier: ctx.parse_ast(),
            initialized_identifier_item: ctx.parse_list(),
        }
    }
}

/// And(Modified(?,Id(type)), Id(identifier), Id(formalParameterPart))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionSignature {
    pub dart_type: Option<Type>,
    pub identifier: Identifier,
    pub formal_parameter_part: FormalParameterPart,
}
impl RuleModel for FunctionSignature {
    fn rule() -> Rule {
        Rule::FunctionSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            dart_type: ctx.try_parse_ast(),
            identifier: ctx.parse_ast(),
            formal_parameter_part: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Id(typeParameters)), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormalParameterPart {
    pub type_parameters: Option<TypeParameters>,
    pub formal_parameter_list: FormalParameterList,
}
impl RuleModel for FormalParameterPart {
    fn rule() -> Rule {
        Rule::FormalParameterPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_parameters: ctx.try_parse_ast(),
            formal_parameter_list: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(async)), Raw(=>), Id(expression), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionBodyArrowToken {
    pub async_token: Option<Token>,
    pub arrow_token: Token,
    pub expression: Expression,
    pub semicolon_token: Token,
}
impl RuleModel for FunctionBodyArrowToken {
    fn rule() -> Rule {
        Rule::FunctionBodyArrowToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            async_token: if ctx.is_rule_next(Rule::ASYNC_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            arrow_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(async), Modified(?,Raw(*)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionBodyGeneratorAsyncToken {
    pub async_token: Token,
    pub asterisk_token: Option<Token>,
}
impl RuleModel for FunctionBodyGeneratorAsyncToken {
    fn rule() -> Rule {
        Rule::FunctionBodyGeneratorAsyncToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            async_token: ctx.parse_token(),
            asterisk_token: if ctx.is_rule_next(Rule::ASTERISK_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Raw(sync), Raw(*))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionBodyGeneratorSyncToken {
    pub sync_token: Token,
    pub asterisk_token: Token,
}
impl RuleModel for FunctionBodyGeneratorSyncToken {
    fn rule() -> Rule {
        Rule::FunctionBodyGeneratorSyncToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            sync_token: ctx.parse_token(),
            asterisk_token: ctx.parse_token(),
        }
    }
}

/// Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionBodyGenerator {
    Async(FunctionBodyGeneratorAsyncToken),
    Sync(FunctionBodyGeneratorSyncToken),
}
impl RuleModel for FunctionBodyGenerator {
    fn rule() -> Rule {
        Rule::FunctionBodyGenerator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::FunctionBodyGeneratorAsyncToken => FunctionBodyGenerator::Async(ctx.parse_ast()),
            Rule::FunctionBodyGeneratorSyncToken => FunctionBodyGenerator::Sync(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionBodyBlock {
    pub function_body_generator: Option<FunctionBodyGenerator>,
    pub block: Block,
}
impl RuleModel for FunctionBodyBlock {
    fn rule() -> Rule {
        Rule::FunctionBodyBlock
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_body_generator: ctx.try_parse_ast(),
            block: ctx.parse_ast(),
        }
    }
}

/// Or( And(Modified(?,Raw(async)), Raw(=>), Id(expression), Raw(;)), And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionBody {
    Arrow(FunctionBodyArrowToken),
    Block(FunctionBodyBlock),
}
impl RuleModel for FunctionBody {
    fn rule() -> Rule {
        Rule::FunctionBody
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::FunctionBodyArrowToken => FunctionBody::Arrow(ctx.parse_ast()),
            Rule::FunctionBodyBlock => FunctionBody::Block(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw({), Id(statements), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Block {
    pub open_curly_bracket_token: Token,
    pub statements: Statements,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for Block {
    fn rule() -> Rule {
        Rule::Block
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_curly_bracket_token: ctx.parse_token(),
            statements: ctx.parse_ast(),
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Raw((), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EmptyParameters {
    pub open_paren_token: Token,
    pub close_paren_token: Token,
}
impl RuleModel for EmptyParameters {
    fn rule() -> Rule {
        Rule::EmptyParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// And(Raw((), Id(normalFormalParameters), Modified(?,Raw(,)), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormalParameterListNormalFormalParameters {
    pub open_paren_token: Token,
    pub normal_formal_parameters: NormalFormalParameters,
    pub comma_token: Option<Token>,
    pub close_paren_token: Token,
}
impl RuleModel for FormalParameterListNormalFormalParameters {
    fn rule() -> Rule {
        Rule::FormalParameterListNormalFormalParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            normal_formal_parameters: ctx.parse_ast(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// And(Raw((), Id(normalFormalParameters), Raw(,), Id(optionalOrNamedFormalParameters), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalWithOptionalOrNamedParameters {
    pub open_paren_token: Token,
    pub normal_formal_parameters: NormalFormalParameters,
    pub comma_token: Token,
    pub optional_or_named_formal_parameters: OptionalOrNamedFormalParameters,
    pub close_paren_token: Token,
}
impl RuleModel for NormalWithOptionalOrNamedParameters {
    fn rule() -> Rule {
        Rule::NormalWithOptionalOrNamedParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            normal_formal_parameters: ctx.parse_ast(),
            comma_token: ctx.parse_token(),
            optional_or_named_formal_parameters: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// And(Raw((), Id(optionalOrNamedFormalParameters), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormalParameterListOptionalOrNamedFormalParameters {
    pub open_paren_token: Token,
    pub optional_or_named_formal_parameters: OptionalOrNamedFormalParameters,
    pub close_paren_token: Token,
}
impl RuleModel for FormalParameterListOptionalOrNamedFormalParameters {
    fn rule() -> Rule {
        Rule::FormalParameterListOptionalOrNamedFormalParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            optional_or_named_formal_parameters: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// Or( And(Raw((), Raw())), And(Raw((), Id(normalFormalParameters), Modified(?,Raw(,)), Raw())), And(Raw((), Id(normalFormalParameters), Raw(,), Id(optionalOrNamedFormalParameters), Raw())), And(Raw((), Id(optionalOrNamedFormalParameters), Raw())), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FormalParameterListInner {
    EmptyParameters(EmptyParameters),
    NormalFormalParameters(FormalParameterListNormalFormalParameters),
    NormalWithOptionalOrNamedParameters(NormalWithOptionalOrNamedParameters),
    OptionalOrNamedFormalParameters(FormalParameterListOptionalOrNamedFormalParameters),
}

type FormalParameterList = Box<FormalParameterListInner>;
impl RuleModel for FormalParameterList {
    fn rule() -> Rule {
        Rule::FormalParameterList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(match ctx.next_rule() {
            Rule::EmptyParameters => FormalParameterListInner::EmptyParameters(ctx.parse_ast()),
            Rule::FormalParameterListNormalFormalParameters => {
                FormalParameterListInner::NormalFormalParameters(ctx.parse_ast())
            }
            Rule::NormalWithOptionalOrNamedParameters => {
                FormalParameterListInner::NormalWithOptionalOrNamedParameters(ctx.parse_ast())
            }
            Rule::FormalParameterListOptionalOrNamedFormalParameters => {
                FormalParameterListInner::OptionalOrNamedFormalParameters(ctx.parse_ast())
            }
            _ => unreachable!(),
        })
    }
}

/// And(Raw(,), Id(normalFormalParameter))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalFormalParameterItem {
    pub comma_token: Token,
    pub normal_formal_parameter: NormalFormalParameter,
}
impl RuleModel for NormalFormalParameterItem {
    fn rule() -> Rule {
        Rule::NormalFormalParameterItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            normal_formal_parameter: ctx.parse_ast(),
        }
    }
}

/// And(Id(normalFormalParameter), Modified(*,And(Raw(,), Id(normalFormalParameter))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalFormalParameters {
    pub normal_formal_parameter: NormalFormalParameter,
    pub normal_formal_parameter_item: Vec<NormalFormalParameterItem>,
}
impl RuleModel for NormalFormalParameters {
    fn rule() -> Rule {
        Rule::NormalFormalParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            normal_formal_parameter: ctx.parse_ast(),
            normal_formal_parameter_item: ctx.parse_list(),
        }
    }
}

/// Or( Id(optionalPositionalFormalParameters), Id(namedFormalParameters), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum OptionalOrNamedFormalParameters {
    OptionalPositionalFormalParameters(OptionalPositionalFormalParameters),
    NamedFormalParameters(NamedFormalParameters),
}
impl RuleModel for OptionalOrNamedFormalParameters {
    fn rule() -> Rule {
        Rule::OptionalOrNamedFormalParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::OptionalPositionalFormalParameters => {
                OptionalOrNamedFormalParameters::OptionalPositionalFormalParameters(ctx.parse_ast())
            }
            Rule::NamedFormalParameters => {
                OptionalOrNamedFormalParameters::NamedFormalParameters(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw(,), Id(defaultFormalParameter))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultFormalParameterItem {
    pub comma_token: Token,
    pub default_formal_parameter: DefaultFormalParameter,
}
impl RuleModel for DefaultFormalParameterItem {
    fn rule() -> Rule {
        Rule::DefaultFormalParameterItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            default_formal_parameter: ctx.parse_ast(),
        }
    }
}

/// And(Raw([), Id(defaultFormalParameter), Modified(*,And(Raw(,), Id(defaultFormalParameter))), Modified(?,Raw(,)), Raw(]))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OptionalPositionalFormalParameters {
    pub open_square_bracket_token: Token,
    pub default_formal_parameter: DefaultFormalParameter,
    pub default_formal_parameter_item: Vec<DefaultFormalParameterItem>,
    pub comma_token: Option<Token>,
    pub close_square_bracket_token: Token,
}
impl RuleModel for OptionalPositionalFormalParameters {
    fn rule() -> Rule {
        Rule::OptionalPositionalFormalParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_square_bracket_token: ctx.parse_token(),
            default_formal_parameter: ctx.parse_ast(),
            default_formal_parameter_item: ctx.parse_list(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            close_square_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(,), Id(defaultNamedParameter))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultNamedParameterItem {
    pub comma_token: Token,
    pub default_named_parameter: DefaultNamedParameter,
}
impl RuleModel for DefaultNamedParameterItem {
    fn rule() -> Rule {
        Rule::DefaultNamedParameterItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            default_named_parameter: ctx.parse_ast(),
        }
    }
}

/// And(Raw({), Id(defaultNamedParameter), Modified(*,And(Raw(,), Id(defaultNamedParameter))), Modified(?,Raw(,)), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedFormalParameters {
    pub open_curly_bracket_token: Token,
    pub default_named_parameter: DefaultNamedParameter,
    pub default_named_parameter_item: Vec<DefaultNamedParameterItem>,
    pub comma_token: Option<Token>,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for NamedFormalParameters {
    fn rule() -> Rule {
        Rule::NamedFormalParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_curly_bracket_token: ctx.parse_token(),
            default_named_parameter: ctx.parse_ast(),
            default_named_parameter_item: ctx.parse_list(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Id(normalFormalParameterNoMetadata))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalFormalParameter {
    pub metadata: Metadata,
    pub normal_formal_parameter_no_metadata: NormalFormalParameterNoMetadata,
}
impl RuleModel for NormalFormalParameter {
    fn rule() -> Rule {
        Rule::NormalFormalParameter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            normal_formal_parameter_no_metadata: ctx.parse_ast(),
        }
    }
}

/// Or( Id(functionFormalParameter), Id(fieldFormalParameter), Id(simpleFormalParameter), Id(superFormalParameter), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum NormalFormalParameterNoMetadata {
    FunctionFormalParameter(FunctionFormalParameter),
    FieldFormalParameter(FieldFormalParameter),
    SimpleFormalParameter(SimpleFormalParameter),
    SuperFormalParameter(SuperFormalParameter),
}
impl RuleModel for NormalFormalParameterNoMetadata {
    fn rule() -> Rule {
        Rule::NormalFormalParameterNoMetadata
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::FunctionFormalParameter => {
                NormalFormalParameterNoMetadata::FunctionFormalParameter(ctx.parse_ast())
            }
            Rule::FieldFormalParameter => {
                NormalFormalParameterNoMetadata::FieldFormalParameter(ctx.parse_ast())
            }
            Rule::SimpleFormalParameter => {
                NormalFormalParameterNoMetadata::SimpleFormalParameter(ctx.parse_ast())
            }
            Rule::SuperFormalParameter => {
                NormalFormalParameterNoMetadata::SuperFormalParameter(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Raw(covariant)), Modified(?,Id(type)), Id(identifier), Id(formalParameterPart), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionFormalParameter {
    pub covariant_token: Option<Token>,
    pub dart_type: Option<Type>,
    pub identifier: Identifier,
    pub formal_parameter_part: FormalParameterPart,
    pub question_token: Option<Token>,
}
impl RuleModel for FunctionFormalParameter {
    fn rule() -> Rule {
        Rule::FunctionFormalParameter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            covariant_token: if ctx.is_rule_next(Rule::COVARIANT_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            dart_type: ctx.try_parse_ast(),
            identifier: ctx.parse_ast(),
            formal_parameter_part: ctx.parse_ast(),
            question_token: if ctx.is_rule_next(Rule::QUESTION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Modified(?,Raw(covariant)), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SimpleFormalParameterIdentifier {
    pub covariant_token: Option<Token>,
    pub identifier: Identifier,
}
impl RuleModel for SimpleFormalParameterIdentifier {
    fn rule() -> Rule {
        Rule::SimpleFormalParameterIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            covariant_token: if ctx.is_rule_next(Rule::COVARIANT_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            identifier: ctx.parse_ast(),
        }
    }
}

/// Or( Id(declaredIdentifier), And(Modified(?,Raw(covariant)), Id(identifier)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum SimpleFormalParameter {
    DeclaredIdentifier(DeclaredIdentifier),
    Identifier(SimpleFormalParameterIdentifier),
}
impl RuleModel for SimpleFormalParameter {
    fn rule() -> Rule {
        Rule::SimpleFormalParameter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::DeclaredIdentifier => SimpleFormalParameter::DeclaredIdentifier(ctx.parse_ast()),
            Rule::SimpleFormalParameterIdentifier => {
                SimpleFormalParameter::Identifier(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Raw(covariant)), Id(finalConstVarOrType), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclaredIdentifier {
    pub covariant_token: Option<Token>,
    pub final_const_var_or_type: FinalConstVarOrType,
    pub identifier: Identifier,
}
impl RuleModel for DeclaredIdentifier {
    fn rule() -> Rule {
        Rule::DeclaredIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            covariant_token: if ctx.is_rule_next(Rule::COVARIANT_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            final_const_var_or_type: ctx.parse_ast(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Id(formalParameterPart), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FieldFormalParameterFormalParameterPart {
    pub formal_parameter_part: FormalParameterPart,
    pub question_token: Option<Token>,
}
impl RuleModel for FieldFormalParameterFormalParameterPart {
    fn rule() -> Rule {
        Rule::FieldFormalParameterFormalParameterPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            formal_parameter_part: ctx.parse_ast(),
            question_token: if ctx.is_rule_next(Rule::QUESTION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Modified(?,Id(finalConstVarOrType)), Raw(this), Raw(.), Id(identifier), Modified(?,And(Id(formalParameterPart), Modified(?,Raw(?)))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FieldFormalParameter {
    pub final_const_var_or_type: Option<FinalConstVarOrType>,
    pub this_token: Token,
    pub period_token: Token,
    pub identifier: Identifier,
    pub formal_parameter_part: Option<FieldFormalParameterFormalParameterPart>,
}
impl RuleModel for FieldFormalParameter {
    fn rule() -> Rule {
        Rule::FieldFormalParameter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            final_const_var_or_type: ctx.try_parse_ast(),
            this_token: ctx.parse_token(),
            period_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
            formal_parameter_part: ctx.try_parse_ast(),
        }
    }
}

/// And(Id(formalParameterPart), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SuperFormalParameterFormalParameterPart {
    pub formal_parameter_part: FormalParameterPart,
    pub question_token: Option<Token>,
}
impl RuleModel for SuperFormalParameterFormalParameterPart {
    fn rule() -> Rule {
        Rule::SuperFormalParameterFormalParameterPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            formal_parameter_part: ctx.parse_ast(),
            question_token: if ctx.is_rule_next(Rule::QUESTION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Modified(?,Id(finalConstVarOrType)), Raw(super), Raw(.), Id(identifier), Modified(?,And(Id(formalParameterPart), Modified(?,Raw(?)))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SuperFormalParameter {
    pub final_const_var_or_type: Option<FinalConstVarOrType>,
    pub super_token: Token,
    pub period_token: Token,
    pub identifier: Identifier,
    pub formal_parameter_part: Option<SuperFormalParameterFormalParameterPart>,
}
impl RuleModel for SuperFormalParameter {
    fn rule() -> Rule {
        Rule::SuperFormalParameter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            final_const_var_or_type: ctx.try_parse_ast(),
            super_token: ctx.parse_token(),
            period_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
            formal_parameter_part: ctx.try_parse_ast(),
        }
    }
}

/// And(Id(normalFormalParameter), Modified(?,And(Raw(=), Id(expression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultFormalParameter {
    pub normal_formal_parameter: NormalFormalParameter,
    pub expression_equal: Option<ExpressionEqual>,
}
impl RuleModel for DefaultFormalParameter {
    fn rule() -> Rule {
        Rule::DefaultFormalParameter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            normal_formal_parameter: ctx.parse_ast(),
            expression_equal: ctx.try_parse_ast(),
        }
    }
}

/// Or( Raw(=), Raw(:), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum EqualTokenOrColonToken {
    Equal(Token),
    Colon(Token),
}
impl RuleModel for EqualTokenOrColonToken {
    fn rule() -> Rule {
        Rule::EqualTokenOrColonToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::EQUAL_TOKEN => EqualTokenOrColonToken::Equal(ctx.parse_token()),
            Rule::COLON_TOKEN => EqualTokenOrColonToken::Colon(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Or( Raw(=), Raw(:), ), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultNamedParameterAssignment {
    pub equal_token_or_colon_token: EqualTokenOrColonToken,
    pub expression: Expression,
}
impl RuleModel for DefaultNamedParameterAssignment {
    fn rule() -> Rule {
        Rule::DefaultNamedParameterAssignment
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            equal_token_or_colon_token: ctx.parse_ast(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(metadata), Modified(?,Raw(required)), Id(normalFormalParameterNoMetadata), Modified(?,And(Or( Raw(=), Raw(:), ), Id(expression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultNamedParameter {
    pub metadata: Metadata,
    pub required_token: Option<Token>,
    pub normal_formal_parameter_no_metadata: NormalFormalParameterNoMetadata,
    pub default_named_parameter_assignment: Option<DefaultNamedParameterAssignment>,
}
impl RuleModel for DefaultNamedParameter {
    fn rule() -> Rule {
        Rule::DefaultNamedParameter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            required_token: if ctx.is_rule_next(Rule::REQUIRED_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            normal_formal_parameter_no_metadata: ctx.parse_ast(),
            default_named_parameter_assignment: ctx.try_parse_ast(),
        }
    }
}

/// And(Id(metadata), Id(classMemberDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassDeclarationMembers {
    pub metadata: Metadata,
    pub class_member_declaration: ClassMemberDeclaration,
}
impl RuleModel for ClassDeclarationMembers {
    fn rule() -> Rule {
        Rule::ClassDeclarationMembers
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            class_member_declaration: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(abstract)), Raw(class), Id(typeIdentifier), Modified(?,Id(typeParameters)), Modified(?,Id(superclass)), Modified(?,Id(interfaces)), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassDeclarationClassToken {
    pub abstract_token: Option<Token>,
    pub class_token: Token,
    pub type_identifier: TypeIdentifier,
    pub type_parameters: Option<TypeParameters>,
    pub superclass: Option<Superclass>,
    pub interfaces: Option<Interfaces>,
    pub open_curly_bracket_token: Token,
    pub class_declaration_members: Vec<ClassDeclarationMembers>,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for ClassDeclarationClassToken {
    fn rule() -> Rule {
        Rule::ClassDeclarationClassToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            abstract_token: if ctx.is_rule_next(Rule::ABSTRACT_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            class_token: ctx.parse_token(),
            type_identifier: ctx.parse_ast(),
            type_parameters: ctx.try_parse_ast(),
            superclass: ctx.try_parse_ast(),
            interfaces: ctx.try_parse_ast(),
            open_curly_bracket_token: ctx.parse_token(),
            class_declaration_members: ctx.parse_list(),
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Modified(?,Raw(abstract)), Raw(class), Id(mixinApplicationClass))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassDeclarationMixin {
    pub abstract_token: Option<Token>,
    pub class_token: Token,
    pub mixin_application_class: MixinApplicationClass,
}
impl RuleModel for ClassDeclarationMixin {
    fn rule() -> Rule {
        Rule::ClassDeclarationMixin
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            abstract_token: if ctx.is_rule_next(Rule::ABSTRACT_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            class_token: ctx.parse_token(),
            mixin_application_class: ctx.parse_ast(),
        }
    }
}

/// Or( And(Modified(?,Raw(abstract)), Raw(class), Id(typeIdentifier), Modified(?,Id(typeParameters)), Modified(?,Id(superclass)), Modified(?,Id(interfaces)), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(})), And(Modified(?,Raw(abstract)), Raw(class), Id(mixinApplicationClass)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ClassDeclaration {
    Class(ClassDeclarationClassToken),
    ClassDeclarationMixin(ClassDeclarationMixin),
}
impl RuleModel for ClassDeclaration {
    fn rule() -> Rule {
        Rule::ClassDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ClassDeclarationClassToken => ClassDeclaration::Class(ctx.parse_ast()),
            Rule::ClassDeclarationMixin => ClassDeclaration::ClassDeclarationMixin(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(,), Id(typeNotVoid))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidItem {
    pub comma_token: Token,
    pub type_not_void: TypeNotVoid,
}
impl RuleModel for TypeNotVoidItem {
    fn rule() -> Rule {
        Rule::TypeNotVoidItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            type_not_void: ctx.parse_ast(),
        }
    }
}

/// And(Id(typeNotVoid), Modified(*,And(Raw(,), Id(typeNotVoid))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidList {
    pub type_not_void: TypeNotVoid,
    pub type_not_void_item: Vec<TypeNotVoidItem>,
}
impl RuleModel for TypeNotVoidList {
    fn rule() -> Rule {
        Rule::TypeNotVoidList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_not_void: ctx.parse_ast(),
            type_not_void_item: ctx.parse_list(),
        }
    }
}

/// And(Id(declaration), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassMemberDeclarationSemicolonToken {
    pub declaration: Declaration,
    pub semicolon_token: Token,
}
impl RuleModel for ClassMemberDeclarationSemicolonToken {
    fn rule() -> Rule {
        Rule::ClassMemberDeclarationSemicolonToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            declaration: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(methodSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassMemberDeclarationMethodSignature {
    pub method_signature: MethodSignature,
    pub function_body: FunctionBody,
}
impl RuleModel for ClassMemberDeclarationMethodSignature {
    fn rule() -> Rule {
        Rule::ClassMemberDeclarationMethodSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            method_signature: ctx.parse_ast(),
            function_body: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(declaration), Raw(;)), And(Id(methodSignature), Id(functionBody)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ClassMemberDeclaration {
    Semicolon(ClassMemberDeclarationSemicolonToken),
    MethodSignature(ClassMemberDeclarationMethodSignature),
}
impl RuleModel for ClassMemberDeclaration {
    fn rule() -> Rule {
        Rule::ClassMemberDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ClassMemberDeclarationSemicolonToken => {
                ClassMemberDeclaration::Semicolon(ctx.parse_ast())
            }
            Rule::ClassMemberDeclarationMethodSignature => {
                ClassMemberDeclaration::MethodSignature(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Id(constructorSignature), Modified(?,Id(initializers)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodSignatureConstructorSignature {
    pub constructor_signature: ConstructorSignature,
    pub initializers: Option<Initializers>,
}
impl RuleModel for MethodSignatureConstructorSignature {
    fn rule() -> Rule {
        Rule::MethodSignatureConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            constructor_signature: ctx.parse_ast(),
            initializers: ctx.try_parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(static)), Id(functionSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodSignatureFunctionSignature {
    pub static_token: Option<Token>,
    pub function_signature: FunctionSignature,
}
impl RuleModel for MethodSignatureFunctionSignature {
    fn rule() -> Rule {
        Rule::MethodSignatureFunctionSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            static_token: if ctx.is_rule_next(Rule::STATIC_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            function_signature: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(static)), Id(getterSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodSignatureGetterSignature {
    pub static_token: Option<Token>,
    pub getter_signature: GetterSignature,
}
impl RuleModel for MethodSignatureGetterSignature {
    fn rule() -> Rule {
        Rule::MethodSignatureGetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            static_token: if ctx.is_rule_next(Rule::STATIC_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            getter_signature: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(static)), Id(setterSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodSignatureSetterSignature {
    pub static_token: Option<Token>,
    pub setter_signature: SetterSignature,
}
impl RuleModel for MethodSignatureSetterSignature {
    fn rule() -> Rule {
        Rule::MethodSignatureSetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            static_token: if ctx.is_rule_next(Rule::STATIC_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            setter_signature: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(constructorSignature), Modified(?,Id(initializers))), Id(factoryConstructorSignature), And(Modified(?,Raw(static)), Id(functionSignature)), And(Modified(?,Raw(static)), Id(getterSignature)), And(Modified(?,Raw(static)), Id(setterSignature)), Id(operatorSignature), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum MethodSignature {
    ConstructorSignature(MethodSignatureConstructorSignature),
    FactoryConstructorSignature(FactoryConstructorSignature),
    FunctionSignature(MethodSignatureFunctionSignature),
    GetterSignature(MethodSignatureGetterSignature),
    SetterSignature(MethodSignatureSetterSignature),
    OperatorSignature(OperatorSignature),
}
impl RuleModel for MethodSignature {
    fn rule() -> Rule {
        Rule::MethodSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::MethodSignatureConstructorSignature => {
                MethodSignature::ConstructorSignature(ctx.parse_ast())
            }
            Rule::FactoryConstructorSignature => {
                MethodSignature::FactoryConstructorSignature(ctx.parse_ast())
            }
            Rule::MethodSignatureFunctionSignature => {
                MethodSignature::FunctionSignature(ctx.parse_ast())
            }
            Rule::MethodSignatureGetterSignature => {
                MethodSignature::GetterSignature(ctx.parse_ast())
            }
            Rule::MethodSignatureSetterSignature => {
                MethodSignature::SetterSignature(ctx.parse_ast())
            }
            Rule::OperatorSignature => MethodSignature::OperatorSignature(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(external), Id(factoryConstructorSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationFactoryConstructorSignature {
    pub external_token: Token,
    pub factory_constructor_signature: FactoryConstructorSignature,
}
impl RuleModel for DeclarationFactoryConstructorSignature {
    fn rule() -> Rule {
        Rule::DeclarationFactoryConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_token: ctx.parse_token(),
            factory_constructor_signature: ctx.parse_ast(),
        }
    }
}

/// And(Raw(external), Id(constantConstructorSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalConstantConstructorSignature {
    pub external_token: Token,
    pub constant_constructor_signature: ConstantConstructorSignature,
}
impl RuleModel for ExternalConstantConstructorSignature {
    fn rule() -> Rule {
        Rule::ExternalConstantConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_token: ctx.parse_token(),
            constant_constructor_signature: ctx.parse_ast(),
        }
    }
}

/// And(Raw(external), Id(constructorSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalConstructorSignature {
    pub external_token: Token,
    pub constructor_signature: ConstructorSignature,
}
impl RuleModel for ExternalConstructorSignature {
    fn rule() -> Rule {
        Rule::ExternalConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_token: ctx.parse_token(),
            constructor_signature: ctx.parse_ast(),
        }
    }
}

/// And(Raw(external), Modified(?,Raw(static)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalMaybeStatic {
    pub external_token: Token,
    pub static_token: Option<Token>,
}
impl RuleModel for ExternalMaybeStatic {
    fn rule() -> Rule {
        Rule::ExternalMaybeStatic
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_token: ctx.parse_token(),
            static_token: if ctx.is_rule_next(Rule::STATIC_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(getterSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationGetterSignature {
    pub external_maybe_static: Option<ExternalMaybeStatic>,
    pub getter_signature: GetterSignature,
}
impl RuleModel for DeclarationGetterSignature {
    fn rule() -> Rule {
        Rule::DeclarationGetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_maybe_static: ctx.try_parse_ast(),
            getter_signature: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(setterSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationSetterSignature {
    pub external_maybe_static: Option<ExternalMaybeStatic>,
    pub setter_signature: SetterSignature,
}
impl RuleModel for DeclarationSetterSignature {
    fn rule() -> Rule {
        Rule::DeclarationSetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_maybe_static: ctx.try_parse_ast(),
            setter_signature: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(functionSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationFunctionSignature {
    pub external_maybe_static: Option<ExternalMaybeStatic>,
    pub function_signature: FunctionSignature,
}
impl RuleModel for DeclarationFunctionSignature {
    fn rule() -> Rule {
        Rule::DeclarationFunctionSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_maybe_static: ctx.try_parse_ast(),
            function_signature: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(external)), Id(operatorSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationOperatorSignature {
    pub external_token: Option<Token>,
    pub operator_signature: OperatorSignature,
}
impl RuleModel for DeclarationOperatorSignature {
    fn rule() -> Rule {
        Rule::DeclarationOperatorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_token: if ctx.is_rule_next(Rule::EXTERNAL_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            operator_signature: ctx.parse_ast(),
        }
    }
}

/// And(Raw(static), Raw(const), Modified(?,Id(type)), Id(staticFinalDeclarationList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticConst {
    pub static_token: Token,
    pub const_token: Token,
    pub dart_type: Option<Type>,
    pub static_final_declaration_list: StaticFinalDeclarationList,
}
impl RuleModel for StaticConst {
    fn rule() -> Rule {
        Rule::StaticConst
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            static_token: ctx.parse_token(),
            const_token: ctx.parse_token(),
            dart_type: ctx.try_parse_ast(),
            static_final_declaration_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(static), Raw(final), Modified(?,Id(type)), Id(staticFinalDeclarationList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticFinal {
    pub static_token: Token,
    pub final_token: Token,
    pub dart_type: Option<Type>,
    pub static_final_declaration_list: StaticFinalDeclarationList,
}
impl RuleModel for StaticFinal {
    fn rule() -> Rule {
        Rule::StaticFinal
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            static_token: ctx.parse_token(),
            final_token: ctx.parse_token(),
            dart_type: ctx.try_parse_ast(),
            static_final_declaration_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(static), Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticLateFinal {
    pub static_token: Token,
    pub late_token: Token,
    pub final_token: Token,
    pub dart_type: Option<Type>,
    pub initialized_identifier_list: InitializedIdentifierList,
}
impl RuleModel for StaticLateFinal {
    fn rule() -> Rule {
        Rule::StaticLateFinal
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            static_token: ctx.parse_token(),
            late_token: ctx.parse_token(),
            final_token: ctx.parse_token(),
            dart_type: ctx.try_parse_ast(),
            initialized_identifier_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(static), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticVarOrType {
    pub static_token: Token,
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
    pub initialized_identifier_list: InitializedIdentifierList,
}
impl RuleModel for StaticVarOrType {
    fn rule() -> Rule {
        Rule::StaticVarOrType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            static_token: ctx.parse_token(),
            late_token: if ctx.is_rule_next(Rule::LATE_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            var_or_type: ctx.parse_ast(),
            initialized_identifier_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(covariant), Raw(late), Raw(final), Modified(?,Id(type)), Id(identifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CovariantLateFinal {
    pub covariant_token: Token,
    pub late_token: Token,
    pub final_token: Token,
    pub dart_type: Option<Type>,
    pub identifier_list: IdentifierList,
}
impl RuleModel for CovariantLateFinal {
    fn rule() -> Rule {
        Rule::CovariantLateFinal
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            covariant_token: ctx.parse_token(),
            late_token: ctx.parse_token(),
            final_token: ctx.parse_token(),
            dart_type: ctx.try_parse_ast(),
            identifier_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(covariant), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CovariantVarOrType {
    pub covariant_token: Token,
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
    pub initialized_identifier_list: InitializedIdentifierList,
}
impl RuleModel for CovariantVarOrType {
    fn rule() -> Rule {
        Rule::CovariantVarOrType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            covariant_token: ctx.parse_token(),
            late_token: if ctx.is_rule_next(Rule::LATE_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            var_or_type: ctx.parse_ast(),
            initialized_identifier_list: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationFinalToken {
    pub late_token: Option<Token>,
    pub final_token: Token,
    pub dart_type: Option<Type>,
    pub initialized_identifier_list: InitializedIdentifierList,
}
impl RuleModel for DeclarationFinalToken {
    fn rule() -> Rule {
        Rule::DeclarationFinalToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            late_token: if ctx.is_rule_next(Rule::LATE_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            final_token: ctx.parse_token(),
            dart_type: ctx.try_parse_ast(),
            initialized_identifier_list: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationVarOrType {
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
    pub initialized_identifier_list: InitializedIdentifierList,
}
impl RuleModel for DeclarationVarOrType {
    fn rule() -> Rule {
        Rule::DeclarationVarOrType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            late_token: if ctx.is_rule_next(Rule::LATE_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            var_or_type: ctx.parse_ast(),
            initialized_identifier_list: ctx.parse_ast(),
        }
    }
}

/// Or( Id(redirection), Id(initializers), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum RedirectionOrInitializers {
    Redirection(Redirection),
    Initializers(Initializers),
}
impl RuleModel for RedirectionOrInitializers {
    fn rule() -> Rule {
        Rule::RedirectionOrInitializers
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::Redirection => RedirectionOrInitializers::Redirection(ctx.parse_ast()),
            Rule::Initializers => RedirectionOrInitializers::Initializers(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(constantConstructorSignature), Modified(?,Or( Id(redirection), Id(initializers), )))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationConstantConstructorSignature {
    pub constant_constructor_signature: ConstantConstructorSignature,
    pub redirection_or_initializers: Option<RedirectionOrInitializers>,
}
impl RuleModel for DeclarationConstantConstructorSignature {
    fn rule() -> Rule {
        Rule::DeclarationConstantConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            constant_constructor_signature: ctx.parse_ast(),
            redirection_or_initializers: ctx.try_parse_ast(),
        }
    }
}

/// And(Id(constructorSignature), Modified(?,Or( Id(redirection), Id(initializers), )))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationConstructorSignature {
    pub constructor_signature: ConstructorSignature,
    pub redirection_or_initializers: Option<RedirectionOrInitializers>,
}
impl RuleModel for DeclarationConstructorSignature {
    fn rule() -> Rule {
        Rule::DeclarationConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            constructor_signature: ctx.parse_ast(),
            redirection_or_initializers: ctx.try_parse_ast(),
        }
    }
}

/// Or( And(Raw(external), Id(factoryConstructorSignature)), And(Raw(external), Id(constantConstructorSignature)), And(Raw(external), Id(constructorSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(getterSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(setterSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(functionSignature)), And(Modified(?,Raw(external)), Id(operatorSignature)), And(Raw(static), Raw(const), Modified(?,Id(type)), Id(staticFinalDeclarationList)), And(Raw(static), Raw(final), Modified(?,Id(type)), Id(staticFinalDeclarationList)), And(Raw(static), Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList)), And(Raw(static), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), And(Raw(covariant), Raw(late), Raw(final), Modified(?,Id(type)), Id(identifierList)), And(Raw(covariant), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList)), And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), Id(redirectingFactoryConstructorSignature), And(Id(constantConstructorSignature), Modified(?,Or( Id(redirection), Id(initializers), ))), And(Id(constructorSignature), Modified(?,Or( Id(redirection), Id(initializers), ))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Declaration {
    FactoryConstructorSignature(DeclarationFactoryConstructorSignature),
    ExternalConstantConstructorSignature(ExternalConstantConstructorSignature),
    ExternalConstructorSignature(ExternalConstructorSignature),
    GetterSignature(DeclarationGetterSignature),
    SetterSignature(DeclarationSetterSignature),
    FunctionSignature(DeclarationFunctionSignature),
    OperatorSignature(DeclarationOperatorSignature),
    StaticConst(StaticConst),
    StaticFinal(StaticFinal),
    StaticLateFinal(StaticLateFinal),
    StaticVarOrType(StaticVarOrType),
    CovariantLateFinal(CovariantLateFinal),
    CovariantVarOrType(CovariantVarOrType),
    Final(DeclarationFinalToken),
    VarOrType(DeclarationVarOrType),
    RedirectingFactoryConstructorSignature(RedirectingFactoryConstructorSignature),
    ConstantConstructorSignature(DeclarationConstantConstructorSignature),
    ConstructorSignature(DeclarationConstructorSignature),
}
impl RuleModel for Declaration {
    fn rule() -> Rule {
        Rule::Declaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::DeclarationFactoryConstructorSignature => {
                Declaration::FactoryConstructorSignature(ctx.parse_ast())
            }
            Rule::ExternalConstantConstructorSignature => {
                Declaration::ExternalConstantConstructorSignature(ctx.parse_ast())
            }
            Rule::ExternalConstructorSignature => {
                Declaration::ExternalConstructorSignature(ctx.parse_ast())
            }
            Rule::DeclarationGetterSignature => Declaration::GetterSignature(ctx.parse_ast()),
            Rule::DeclarationSetterSignature => Declaration::SetterSignature(ctx.parse_ast()),
            Rule::DeclarationFunctionSignature => Declaration::FunctionSignature(ctx.parse_ast()),
            Rule::DeclarationOperatorSignature => Declaration::OperatorSignature(ctx.parse_ast()),
            Rule::StaticConst => Declaration::StaticConst(ctx.parse_ast()),
            Rule::StaticFinal => Declaration::StaticFinal(ctx.parse_ast()),
            Rule::StaticLateFinal => Declaration::StaticLateFinal(ctx.parse_ast()),
            Rule::StaticVarOrType => Declaration::StaticVarOrType(ctx.parse_ast()),
            Rule::CovariantLateFinal => Declaration::CovariantLateFinal(ctx.parse_ast()),
            Rule::CovariantVarOrType => Declaration::CovariantVarOrType(ctx.parse_ast()),
            Rule::DeclarationFinalToken => Declaration::Final(ctx.parse_ast()),
            Rule::DeclarationVarOrType => Declaration::VarOrType(ctx.parse_ast()),
            Rule::RedirectingFactoryConstructorSignature => {
                Declaration::RedirectingFactoryConstructorSignature(ctx.parse_ast())
            }
            Rule::DeclarationConstantConstructorSignature => {
                Declaration::ConstantConstructorSignature(ctx.parse_ast())
            }
            Rule::DeclarationConstructorSignature => {
                Declaration::ConstructorSignature(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw(,), Id(staticFinalDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticFinalDeclarationItem {
    pub comma_token: Token,
    pub static_final_declaration: StaticFinalDeclaration,
}
impl RuleModel for StaticFinalDeclarationItem {
    fn rule() -> Rule {
        Rule::StaticFinalDeclarationItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            static_final_declaration: ctx.parse_ast(),
        }
    }
}

/// And(Id(staticFinalDeclaration), Modified(*,And(Raw(,), Id(staticFinalDeclaration))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticFinalDeclarationList {
    pub static_final_declaration: StaticFinalDeclaration,
    pub static_final_declaration_item: Vec<StaticFinalDeclarationItem>,
}
impl RuleModel for StaticFinalDeclarationList {
    fn rule() -> Rule {
        Rule::StaticFinalDeclarationList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            static_final_declaration: ctx.parse_ast(),
            static_final_declaration_item: ctx.parse_list(),
        }
    }
}

/// And(Id(identifier), Raw(=), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticFinalDeclaration {
    pub identifier: Identifier,
    pub equal_token: Token,
    pub expression: Expression,
}
impl RuleModel for StaticFinalDeclaration {
    fn rule() -> Rule {
        Rule::StaticFinalDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            identifier: ctx.parse_ast(),
            equal_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Id(type)), Raw(operator), Id(operator), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OperatorSignature {
    pub dart_type: Option<Type>,
    pub operator_token: Token,
    pub operator: Operator,
    pub formal_parameter_list: FormalParameterList,
}
impl RuleModel for OperatorSignature {
    fn rule() -> Rule {
        Rule::OperatorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            dart_type: ctx.try_parse_ast(),
            operator_token: ctx.parse_token(),
            operator: ctx.parse_ast(),
            formal_parameter_list: ctx.parse_ast(),
        }
    }
}

/// Or( Raw(~), Id(binaryOperator), Raw([]), Raw([]=), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Operator {
    Tilde(Token),
    BinaryOperator(BinaryOperator),
    SquareBrackets(Token),
    SquareBracketsEq(Token),
}
impl RuleModel for Operator {
    fn rule() -> Rule {
        Rule::Operator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TILDE_TOKEN => Operator::Tilde(ctx.parse_token()),
            Rule::BinaryOperator => Operator::BinaryOperator(ctx.parse_ast()),
            Rule::SQUARE_BRACKETS_TOKEN => Operator::SquareBrackets(ctx.parse_token()),
            Rule::SQUARE_BRACKETS_EQ_TOKEN => Operator::SquareBracketsEq(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// Or( Id(multiplicativeOperator), Id(additiveOperator), Id(shiftOperator), Id(relationalOperator), Raw(==), Id(bitwiseOperator), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BinaryOperator {
    MultiplicativeOperator(MultiplicativeOperator),
    AdditiveOperator(AdditiveOperator),
    ShiftOperator(ShiftOperator),
    RelationalOperator(RelationalOperator),
    DoubleEqual(Token),
    BitwiseOperator(BitwiseOperator),
}
impl RuleModel for BinaryOperator {
    fn rule() -> Rule {
        Rule::BinaryOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::MultiplicativeOperator => BinaryOperator::MultiplicativeOperator(ctx.parse_ast()),
            Rule::AdditiveOperator => BinaryOperator::AdditiveOperator(ctx.parse_ast()),
            Rule::ShiftOperator => BinaryOperator::ShiftOperator(ctx.parse_ast()),
            Rule::RelationalOperator => BinaryOperator::RelationalOperator(ctx.parse_ast()),
            Rule::DOUBLE_EQUAL_TOKEN => BinaryOperator::DoubleEqual(ctx.parse_token()),
            Rule::BitwiseOperator => BinaryOperator::BitwiseOperator(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Id(type)), Raw(get), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GetterSignature {
    pub dart_type: Option<Type>,
    pub get_token: Token,
    pub identifier: Identifier,
}
impl RuleModel for GetterSignature {
    fn rule() -> Rule {
        Rule::GetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            dart_type: ctx.try_parse_ast(),
            get_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Id(type)), Raw(set), Id(identifier), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SetterSignature {
    pub dart_type: Option<Type>,
    pub set_token: Token,
    pub identifier: Identifier,
    pub formal_parameter_list: FormalParameterList,
}
impl RuleModel for SetterSignature {
    fn rule() -> Rule {
        Rule::SetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            dart_type: ctx.try_parse_ast(),
            set_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
            formal_parameter_list: ctx.parse_ast(),
        }
    }
}

/// And(Id(constructorName), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorSignature {
    pub constructor_name: ConstructorName,
    pub formal_parameter_list: FormalParameterList,
}
impl RuleModel for ConstructorSignature {
    fn rule() -> Rule {
        Rule::ConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            constructor_name: ctx.parse_ast(),
            formal_parameter_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierSelector {
    pub period_token: Token,
    pub identifier: Identifier,
}
impl RuleModel for IdentifierSelector {
    fn rule() -> Rule {
        Rule::IdentifierSelector
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            period_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Id(typeIdentifier), Modified(?,And(Raw(.), Id(identifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorName {
    pub type_identifier: TypeIdentifier,
    pub identifier_selector: Option<IdentifierSelector>,
}
impl RuleModel for ConstructorName {
    fn rule() -> Rule {
        Rule::ConstructorName
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_identifier: ctx.parse_ast(),
            identifier_selector: ctx.try_parse_ast(),
        }
    }
}

/// And(Raw(:), Raw(this), Modified(?,And(Raw(.), Id(identifier))), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Redirection {
    pub colon_token: Token,
    pub this_token: Token,
    pub identifier_selector: Option<IdentifierSelector>,
    pub arguments: Arguments,
}
impl RuleModel for Redirection {
    fn rule() -> Rule {
        Rule::Redirection
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            colon_token: ctx.parse_token(),
            this_token: ctx.parse_token(),
            identifier_selector: ctx.try_parse_ast(),
            arguments: ctx.parse_ast(),
        }
    }
}

/// And(Raw(,), Id(initializerListEntry))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializerListEntryItem {
    pub comma_token: Token,
    pub initializer_list_entry: InitializerListEntry,
}
impl RuleModel for InitializerListEntryItem {
    fn rule() -> Rule {
        Rule::InitializerListEntryItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            initializer_list_entry: ctx.parse_ast(),
        }
    }
}

/// And(Raw(:), Id(initializerListEntry), Modified(*,And(Raw(,), Id(initializerListEntry))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Initializers {
    pub colon_token: Token,
    pub initializer_list_entry: InitializerListEntry,
    pub initializer_list_entry_item: Vec<InitializerListEntryItem>,
}
impl RuleModel for Initializers {
    fn rule() -> Rule {
        Rule::Initializers
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            colon_token: ctx.parse_token(),
            initializer_list_entry: ctx.parse_ast(),
            initializer_list_entry_item: ctx.parse_list(),
        }
    }
}

/// And(Raw(super), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializerListEntryArguments {
    pub super_token: Token,
    pub arguments: Arguments,
}
impl RuleModel for InitializerListEntryArguments {
    fn rule() -> Rule {
        Rule::InitializerListEntryArguments
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            arguments: ctx.parse_ast(),
        }
    }
}

/// And(Raw(super), Raw(.), Id(identifier), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializerListEntrySuperToken {
    pub super_token: Token,
    pub period_token: Token,
    pub identifier: Identifier,
    pub arguments: Arguments,
}
impl RuleModel for InitializerListEntrySuperToken {
    fn rule() -> Rule {
        Rule::InitializerListEntrySuperToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            period_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
            arguments: ctx.parse_ast(),
        }
    }
}

/// Or( And(Raw(super), Id(arguments)), And(Raw(super), Raw(.), Id(identifier), Id(arguments)), Id(fieldInitializer), Id(assertion), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum InitializerListEntry {
    Arguments(InitializerListEntryArguments),
    Super(InitializerListEntrySuperToken),
    FieldInitializer(FieldInitializer),
    Assertion(Assertion),
}
impl RuleModel for InitializerListEntry {
    fn rule() -> Rule {
        Rule::InitializerListEntry
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::InitializerListEntryArguments => InitializerListEntry::Arguments(ctx.parse_ast()),
            Rule::InitializerListEntrySuperToken => InitializerListEntry::Super(ctx.parse_ast()),
            Rule::FieldInitializer => InitializerListEntry::FieldInitializer(ctx.parse_ast()),
            Rule::Assertion => InitializerListEntry::Assertion(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(this), Raw(.))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FieldInitializerThisToken {
    pub this_token: Token,
    pub period_token: Token,
}
impl RuleModel for FieldInitializerThisToken {
    fn rule() -> Rule {
        Rule::FieldInitializerThisToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            this_token: ctx.parse_token(),
            period_token: ctx.parse_token(),
        }
    }
}

/// And(Modified(?,And(Raw(this), Raw(.))), Id(identifier), Raw(=), Id(initializerExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FieldInitializer {
    pub this_token: Option<FieldInitializerThisToken>,
    pub identifier: Identifier,
    pub equal_token: Token,
    pub initializer_expression: InitializerExpression,
}
impl RuleModel for FieldInitializer {
    fn rule() -> Rule {
        Rule::FieldInitializer
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            this_token: ctx.try_parse_ast(),
            identifier: ctx.parse_ast(),
            equal_token: ctx.parse_token(),
            initializer_expression: ctx.parse_ast(),
        }
    }
}

/// Or( Id(conditionalExpression), Id(cascade), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum InitializerExpression {
    ConditionalExpression(ConditionalExpression),
    Cascade(Cascade),
}
impl RuleModel for InitializerExpression {
    fn rule() -> Rule {
        Rule::InitializerExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ConditionalExpression => {
                InitializerExpression::ConditionalExpression(ctx.parse_ast())
            }
            Rule::Cascade => InitializerExpression::Cascade(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Raw(const)), Raw(factory), Id(constructorName), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FactoryConstructorSignature {
    pub const_token: Option<Token>,
    pub factory_token: Token,
    pub constructor_name: ConstructorName,
    pub formal_parameter_list: FormalParameterList,
}
impl RuleModel for FactoryConstructorSignature {
    fn rule() -> Rule {
        Rule::FactoryConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            const_token: if ctx.is_rule_next(Rule::CONST_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            factory_token: ctx.parse_token(),
            constructor_name: ctx.parse_ast(),
            formal_parameter_list: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(const)), Raw(factory), Id(constructorName), Id(formalParameterList), Raw(=), Id(constructorDesignation))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RedirectingFactoryConstructorSignature {
    pub const_token: Option<Token>,
    pub factory_token: Token,
    pub constructor_name: ConstructorName,
    pub formal_parameter_list: FormalParameterList,
    pub equal_token: Token,
    pub constructor_designation: ConstructorDesignation,
}
impl RuleModel for RedirectingFactoryConstructorSignature {
    fn rule() -> Rule {
        Rule::RedirectingFactoryConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            const_token: if ctx.is_rule_next(Rule::CONST_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            factory_token: ctx.parse_token(),
            constructor_name: ctx.parse_ast(),
            formal_parameter_list: ctx.parse_ast(),
            equal_token: ctx.parse_token(),
            constructor_designation: ctx.parse_ast(),
        }
    }
}

/// And(Id(typeName), Id(typeArguments), Modified(?,And(Raw(.), Id(identifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorDesignationTypeName {
    pub type_name: TypeName,
    pub type_arguments: TypeArguments,
    pub identifier_selector: Option<IdentifierSelector>,
}
impl RuleModel for ConstructorDesignationTypeName {
    fn rule() -> Rule {
        Rule::ConstructorDesignationTypeName
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_name: ctx.parse_ast(),
            type_arguments: ctx.parse_ast(),
            identifier_selector: ctx.try_parse_ast(),
        }
    }
}

/// Or( Id(typeIdentifier), Id(qualifiedName), And(Id(typeName), Id(typeArguments), Modified(?,And(Raw(.), Id(identifier)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ConstructorDesignation {
    TypeIdentifier(TypeIdentifier),
    QualifiedName(QualifiedName),
    TypeName(ConstructorDesignationTypeName),
}
impl RuleModel for ConstructorDesignation {
    fn rule() -> Rule {
        Rule::ConstructorDesignation
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TypeIdentifier => ConstructorDesignation::TypeIdentifier(ctx.parse_ast()),
            Rule::QualifiedName => ConstructorDesignation::QualifiedName(ctx.parse_ast()),
            Rule::ConstructorDesignationTypeName => {
                ConstructorDesignation::TypeName(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw(const), Id(constructorName), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstantConstructorSignature {
    pub const_token: Token,
    pub constructor_name: ConstructorName,
    pub formal_parameter_list: FormalParameterList,
}
impl RuleModel for ConstantConstructorSignature {
    fn rule() -> Rule {
        Rule::ConstantConstructorSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            const_token: ctx.parse_token(),
            constructor_name: ctx.parse_ast(),
            formal_parameter_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(extends), Id(typeNotVoid), Modified(?,Id(mixins)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SuperclassTypeNotVoid {
    pub extends_token: Token,
    pub type_not_void: TypeNotVoid,
    pub mixins: Option<Mixins>,
}
impl RuleModel for SuperclassTypeNotVoid {
    fn rule() -> Rule {
        Rule::SuperclassTypeNotVoid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            extends_token: ctx.parse_token(),
            type_not_void: ctx.parse_ast(),
            mixins: ctx.try_parse_ast(),
        }
    }
}

/// Or( And(Raw(extends), Id(typeNotVoid), Modified(?,Id(mixins))), Id(mixins), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Superclass {
    TypeNotVoid(SuperclassTypeNotVoid),
    Mixins(Mixins),
}
impl RuleModel for Superclass {
    fn rule() -> Rule {
        Rule::Superclass
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::SuperclassTypeNotVoid => Superclass::TypeNotVoid(ctx.parse_ast()),
            Rule::Mixins => Superclass::Mixins(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(with), Id(typeNotVoidList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Mixins {
    pub with_token: Token,
    pub type_not_void_list: TypeNotVoidList,
}
impl RuleModel for Mixins {
    fn rule() -> Rule {
        Rule::Mixins
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            with_token: ctx.parse_token(),
            type_not_void_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(implements), Id(typeNotVoidList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Interfaces {
    pub implements_token: Token,
    pub type_not_void_list: TypeNotVoidList,
}
impl RuleModel for Interfaces {
    fn rule() -> Rule {
        Rule::Interfaces
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            implements_token: ctx.parse_token(),
            type_not_void_list: ctx.parse_ast(),
        }
    }
}

/// And(Id(identifier), Modified(?,Id(typeParameters)), Raw(=), Id(mixinApplication), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MixinApplicationClass {
    pub identifier: Identifier,
    pub type_parameters: Option<TypeParameters>,
    pub equal_token: Token,
    pub mixin_application: MixinApplication,
    pub semicolon_token: Token,
}
impl RuleModel for MixinApplicationClass {
    fn rule() -> Rule {
        Rule::MixinApplicationClass
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            identifier: ctx.parse_ast(),
            type_parameters: ctx.try_parse_ast(),
            equal_token: ctx.parse_token(),
            mixin_application: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(typeNotVoid), Id(mixins), Modified(?,Id(interfaces)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MixinApplication {
    pub type_not_void: TypeNotVoid,
    pub mixins: Mixins,
    pub interfaces: Option<Interfaces>,
}
impl RuleModel for MixinApplication {
    fn rule() -> Rule {
        Rule::MixinApplication
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_not_void: ctx.parse_ast(),
            mixins: ctx.parse_ast(),
            interfaces: ctx.try_parse_ast(),
        }
    }
}

/// And(Raw(on), Id(typeNotVoidList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidListOn {
    pub on_token: Token,
    pub type_not_void_list: TypeNotVoidList,
}
impl RuleModel for TypeNotVoidListOn {
    fn rule() -> Rule {
        Rule::TypeNotVoidListOn
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            on_token: ctx.parse_token(),
            type_not_void_list: ctx.parse_ast(),
        }
    }
}

/// And(Id(metadata), Id(classMemberDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MixinDeclarationMetadata {
    pub metadata: Metadata,
    pub class_member_declaration: ClassMemberDeclaration,
}
impl RuleModel for MixinDeclarationMetadata {
    fn rule() -> Rule {
        Rule::MixinDeclarationMetadata
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            class_member_declaration: ctx.parse_ast(),
        }
    }
}

/// And(Raw(mixin), Id(typeIdentifier), Modified(?,Id(typeParameters)), Modified(?,And(Raw(on), Id(typeNotVoidList))), Modified(?,Id(interfaces)), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MixinDeclaration {
    pub mixin_token: Token,
    pub type_identifier: TypeIdentifier,
    pub type_parameters: Option<TypeParameters>,
    pub type_not_void_list_on: Option<TypeNotVoidListOn>,
    pub interfaces: Option<Interfaces>,
    pub open_curly_bracket_token: Token,
    pub metadata: Vec<MixinDeclarationMetadata>,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for MixinDeclaration {
    fn rule() -> Rule {
        Rule::MixinDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            mixin_token: ctx.parse_token(),
            type_identifier: ctx.parse_ast(),
            type_parameters: ctx.try_parse_ast(),
            type_not_void_list_on: ctx.try_parse_ast(),
            interfaces: ctx.try_parse_ast(),
            open_curly_bracket_token: ctx.parse_token(),
            metadata: ctx.parse_list(),
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Id(classMemberDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExtensionDeclarationMetadata {
    pub metadata: Metadata,
    pub class_member_declaration: ClassMemberDeclaration,
}
impl RuleModel for ExtensionDeclarationMetadata {
    fn rule() -> Rule {
        Rule::ExtensionDeclarationMetadata
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            class_member_declaration: ctx.parse_ast(),
        }
    }
}

/// And(Raw(extension), Modified(?,Id(identifier)), Modified(?,Id(typeParameters)), Raw(on), Id(type), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExtensionDeclaration {
    pub extension_token: Token,
    pub identifier: Option<Identifier>,
    pub type_parameters: Option<TypeParameters>,
    pub on_token: Token,
    pub dart_type: Type,
    pub open_curly_bracket_token: Token,
    pub metadata: Vec<ExtensionDeclarationMetadata>,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for ExtensionDeclaration {
    fn rule() -> Rule {
        Rule::ExtensionDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            extension_token: ctx.parse_token(),
            identifier: ctx.try_parse_ast(),
            type_parameters: ctx.try_parse_ast(),
            on_token: ctx.parse_token(),
            dart_type: ctx.parse_ast(),
            open_curly_bracket_token: ctx.parse_token(),
            metadata: ctx.parse_list(),
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(,), Id(enumEntry))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnumEntryItem {
    pub comma_token: Token,
    pub enum_entry: EnumEntry,
}
impl RuleModel for EnumEntryItem {
    fn rule() -> Rule {
        Rule::EnumEntryItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            enum_entry: ctx.parse_ast(),
        }
    }
}

/// And(Raw(enum), Id(identifier), Raw({), Id(enumEntry), Modified(*,And(Raw(,), Id(enumEntry))), Modified(?,Raw(,)), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnumType {
    pub enum_token: Token,
    pub identifier: Identifier,
    pub open_curly_bracket_token: Token,
    pub enum_entry: EnumEntry,
    pub enum_entry_item: Vec<EnumEntryItem>,
    pub comma_token: Option<Token>,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for EnumType {
    fn rule() -> Rule {
        Rule::EnumType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            enum_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
            open_curly_bracket_token: ctx.parse_token(),
            enum_entry: ctx.parse_ast(),
            enum_entry_item: ctx.parse_list(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnumEntry {
    pub metadata: Metadata,
    pub identifier: Identifier,
}
impl RuleModel for EnumEntry {
    fn rule() -> Rule {
        Rule::EnumEntry
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Raw(extends), Id(typeNotVoid))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidExtends {
    pub extends_token: Token,
    pub type_not_void: TypeNotVoid,
}
impl RuleModel for TypeNotVoidExtends {
    fn rule() -> Rule {
        Rule::TypeNotVoidExtends
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            extends_token: ctx.parse_token(),
            type_not_void: ctx.parse_ast(),
        }
    }
}

/// And(Id(metadata), Id(identifier), Modified(?,And(Raw(extends), Id(typeNotVoid))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeParameterInner {
    pub metadata: Metadata,
    pub identifier: Identifier,
    pub type_not_void_extends: Option<TypeNotVoidExtends>,
}

type TypeParameter = Box<TypeParameterInner>;
impl RuleModel for TypeParameter {
    fn rule() -> Rule {
        Rule::TypeParameter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(TypeParameterInner {
            metadata: ctx.parse_ast(),
            identifier: ctx.parse_ast(),
            type_not_void_extends: ctx.try_parse_ast(),
        })
    }
}

/// And(Raw(,), Id(typeParameter))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeParameterItem {
    pub comma_token: Token,
    pub type_parameter: TypeParameter,
}
impl RuleModel for TypeParameterItem {
    fn rule() -> Rule {
        Rule::TypeParameterItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            type_parameter: ctx.parse_ast(),
        }
    }
}

/// And(Raw(<), Id(typeParameter), Modified(*,And(Raw(,), Id(typeParameter))), Raw(>))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeParameters {
    pub less_token: Token,
    pub type_parameter: TypeParameter,
    pub type_parameter_item: Vec<TypeParameterItem>,
    pub more_token: Token,
}
impl RuleModel for TypeParameters {
    fn rule() -> Rule {
        Rule::TypeParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            less_token: ctx.parse_token(),
            type_parameter: ctx.parse_ast(),
            type_parameter_item: ctx.parse_list(),
            more_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(@), Id(metadatum))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MetadataItem {
    pub at_token: Token,
    pub metadatum: Metadatum,
}
impl RuleModel for MetadataItem {
    fn rule() -> Rule {
        Rule::MetadataItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            at_token: ctx.parse_token(),
            metadatum: ctx.parse_ast(),
        }
    }
}

/// Modified(*,And(Raw(@), Id(metadatum)))
pub type Metadata = Vec<MetadataItem>;
impl RuleModel for Metadata {
    fn rule() -> Rule {
        Rule::Metadata
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        ctx.parse_list()
    }
}

/// And(Id(constructorDesignation), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MetadatumConstructorDesignation {
    pub constructor_designation: ConstructorDesignation,
    pub arguments: Arguments,
}
impl RuleModel for MetadatumConstructorDesignation {
    fn rule() -> Rule {
        Rule::MetadatumConstructorDesignation
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            constructor_designation: ctx.parse_ast(),
            arguments: ctx.parse_ast(),
        }
    }
}

/// Or( Id(identifier), Id(qualifiedName), And(Id(constructorDesignation), Id(arguments)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Metadatum {
    Identifier(Identifier),
    QualifiedName(QualifiedName),
    ConstructorDesignation(MetadatumConstructorDesignation),
}
impl RuleModel for Metadatum {
    fn rule() -> Rule {
        Rule::Metadatum
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::Identifier => Metadatum::Identifier(ctx.parse_ast()),
            Rule::QualifiedName => Metadatum::QualifiedName(ctx.parse_ast()),
            Rule::MetadatumConstructorDesignation => {
                Metadatum::ConstructorDesignation(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Id(assignableExpression), Id(assignmentOperator), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionAssignableExpression {
    pub assignable_expression: AssignableExpression,
    pub assignment_operator: AssignmentOperator,
    pub expression: Expression,
}
impl RuleModel for ExpressionAssignableExpression {
    fn rule() -> Rule {
        Rule::ExpressionAssignableExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            assignable_expression: ctx.parse_ast(),
            assignment_operator: ctx.parse_ast(),
            expression: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(assignableExpression), Id(assignmentOperator), Id(expression)), Id(conditionalExpression), Id(cascade), Id(throwExpression), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ExpressionInner {
    AssignableExpression(ExpressionAssignableExpression),
    ConditionalExpression(ConditionalExpression),
    Cascade(Cascade),
    ThrowExpression(ThrowExpression),
}

type Expression = Box<ExpressionInner>;
impl RuleModel for Expression {
    fn rule() -> Rule {
        Rule::Expression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(match ctx.next_rule() {
            Rule::ExpressionAssignableExpression => {
                ExpressionInner::AssignableExpression(ctx.parse_ast())
            }
            Rule::ConditionalExpression => ExpressionInner::ConditionalExpression(ctx.parse_ast()),
            Rule::Cascade => ExpressionInner::Cascade(ctx.parse_ast()),
            Rule::ThrowExpression => ExpressionInner::ThrowExpression(ctx.parse_ast()),
            _ => unreachable!(),
        })
    }
}

/// And(Id(assignableExpression), Id(assignmentOperator), Id(expressionWithoutCascade))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionWithoutCascadeAssignableExpression {
    pub assignable_expression: AssignableExpression,
    pub assignment_operator: AssignmentOperator,
    pub expression_without_cascade: ExpressionWithoutCascade,
}
impl RuleModel for ExpressionWithoutCascadeAssignableExpression {
    fn rule() -> Rule {
        Rule::ExpressionWithoutCascadeAssignableExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            assignable_expression: ctx.parse_ast(),
            assignment_operator: ctx.parse_ast(),
            expression_without_cascade: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(assignableExpression), Id(assignmentOperator), Id(expressionWithoutCascade)), Id(conditionalExpression), Id(throwExpressionWithoutCascade), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ExpressionWithoutCascadeInner {
    AssignableExpression(ExpressionWithoutCascadeAssignableExpression),
    ConditionalExpression(ConditionalExpression),
    ThrowExpressionWithoutCascade(ThrowExpressionWithoutCascade),
}

type ExpressionWithoutCascade = Box<ExpressionWithoutCascadeInner>;
impl RuleModel for ExpressionWithoutCascade {
    fn rule() -> Rule {
        Rule::ExpressionWithoutCascade
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(match ctx.next_rule() {
            Rule::ExpressionWithoutCascadeAssignableExpression => {
                ExpressionWithoutCascadeInner::AssignableExpression(ctx.parse_ast())
            }
            Rule::ConditionalExpression => {
                ExpressionWithoutCascadeInner::ConditionalExpression(ctx.parse_ast())
            }
            Rule::ThrowExpressionWithoutCascade => {
                ExpressionWithoutCascadeInner::ThrowExpressionWithoutCascade(ctx.parse_ast())
            }
            _ => unreachable!(),
        })
    }
}

/// And(Raw(,), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionItem {
    pub comma_token: Token,
    pub expression: Expression,
}
impl RuleModel for ExpressionItem {
    fn rule() -> Rule {
        Rule::ExpressionItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(expression), Modified(*,And(Raw(,), Id(expression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionList {
    pub expression: Expression,
    pub expression_item: Vec<ExpressionItem>,
}
impl RuleModel for ExpressionList {
    fn rule() -> Rule {
        Rule::ExpressionList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            expression: ctx.parse_ast(),
            expression_item: ctx.parse_list(),
        }
    }
}

/// And(Raw(super), Id(unconditionalAssignableSelector))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimaryUnconditionalAssignableSelector {
    pub super_token: Token,
    pub unconditional_assignable_selector: UnconditionalAssignableSelector,
}
impl RuleModel for PrimaryUnconditionalAssignableSelector {
    fn rule() -> Rule {
        Rule::PrimaryUnconditionalAssignableSelector
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            unconditional_assignable_selector: ctx.parse_ast(),
        }
    }
}

/// And(Raw(super), Id(argumentPart))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimaryArgumentPart {
    pub super_token: Token,
    pub argument_part: ArgumentPart,
}
impl RuleModel for PrimaryArgumentPart {
    fn rule() -> Rule {
        Rule::PrimaryArgumentPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            argument_part: ctx.parse_ast(),
        }
    }
}

/// And(Raw((), Id(expression), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimaryExpression {
    pub open_paren_token: Token,
    pub expression: Expression,
    pub close_paren_token: Token,
}
impl RuleModel for PrimaryExpression {
    fn rule() -> Rule {
        Rule::PrimaryExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// Or( Id(thisExpression), And(Raw(super), Id(unconditionalAssignableSelector)), And(Raw(super), Id(argumentPart)), Id(functionExpression), Id(literal), Id(identifier), Id(newExpression), Id(constObjectExpression), Id(constructorInvocation), And(Raw((), Id(expression), Raw())), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Primary {
    ThisExpression(ThisExpression),
    UnconditionalAssignableSelector(PrimaryUnconditionalAssignableSelector),
    ArgumentPart(PrimaryArgumentPart),
    FunctionExpression(FunctionExpression),
    Literal(Literal),
    Identifier(Identifier),
    NewExpression(NewExpression),
    ConstObjectExpression(ConstObjectExpression),
    ConstructorInvocation(ConstructorInvocation),
    Expression(PrimaryExpression),
}
impl RuleModel for Primary {
    fn rule() -> Rule {
        Rule::Primary
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ThisExpression => Primary::ThisExpression(ctx.parse_token()),
            Rule::PrimaryUnconditionalAssignableSelector => {
                Primary::UnconditionalAssignableSelector(ctx.parse_ast())
            }
            Rule::PrimaryArgumentPart => Primary::ArgumentPart(ctx.parse_ast()),
            Rule::FunctionExpression => Primary::FunctionExpression(ctx.parse_ast()),
            Rule::Literal => Primary::Literal(ctx.parse_ast()),
            Rule::Identifier => Primary::Identifier(ctx.parse_ast()),
            Rule::NewExpression => Primary::NewExpression(ctx.parse_ast()),
            Rule::ConstObjectExpression => Primary::ConstObjectExpression(ctx.parse_ast()),
            Rule::ConstructorInvocation => Primary::ConstructorInvocation(ctx.parse_ast()),
            Rule::PrimaryExpression => Primary::Expression(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Or( Id(nullLiteral), Id(booleanLiteral), Id(numericLiteral), Id(stringLiteral), Id(symbolLiteral), Id(listLiteral), Id(setOrMapLiteral), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Literal {
    NullLiteral(NullLiteral),
    BooleanLiteral(BooleanLiteral),
    NumericLiteral(NumericLiteral),
    StringLiteral(StringLiteral),
    SymbolLiteral(SymbolLiteral),
    ListLiteral(ListLiteral),
    SetOrMapLiteral(SetOrMapLiteral),
}
impl RuleModel for Literal {
    fn rule() -> Rule {
        Rule::Literal
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::NullLiteral => Literal::NullLiteral(ctx.parse_token()),
            Rule::BooleanLiteral => Literal::BooleanLiteral(ctx.parse_ast()),
            Rule::NumericLiteral => Literal::NumericLiteral(ctx.parse_ast()),
            Rule::StringLiteral => Literal::StringLiteral(ctx.parse_ast()),
            Rule::SymbolLiteral => Literal::SymbolLiteral(ctx.parse_ast()),
            Rule::ListLiteral => Literal::ListLiteral(ctx.parse_ast()),
            Rule::SetOrMapLiteral => Literal::SetOrMapLiteral(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Raw(null)
pub type NullLiteral = Token;

/// Or( Id(NUMBER), Id(HEX_NUMBER), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum NumericLiteral {
    Number(Token),
    HexNumber(Token),
}
impl RuleModel for NumericLiteral {
    fn rule() -> Rule {
        Rule::NumericLiteral
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::NUMBER => NumericLiteral::Number(ctx.parse_token()),
            Rule::HEX_NUMBER => NumericLiteral::HexNumber(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(true), Raw(false), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BooleanLiteral {
    True(Token),
    False(Token),
}
impl RuleModel for BooleanLiteral {
    fn rule() -> Rule {
        Rule::BooleanLiteral
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TRUE_TOKEN => BooleanLiteral::True(ctx.parse_token()),
            Rule::FALSE_TOKEN => BooleanLiteral::False(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// Or( Id(multilineString), Id(singleLineString), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum StringLiteralItem {
    MultilineString(MultilineString),
    SingleLineString(SingleLineString),
}
impl RuleModel for StringLiteralItem {
    fn rule() -> Rule {
        Rule::StringLiteralItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::MultilineString => StringLiteralItem::MultilineString(ctx.parse_ast()),
            Rule::SingleLineString => StringLiteralItem::SingleLineString(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Modified(+,Or( Id(multilineString), Id(singleLineString), ))
pub type StringLiteral = Vec<StringLiteralItem>;
impl RuleModel for StringLiteral {
    fn rule() -> Rule {
        Rule::StringLiteral
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        ctx.parse_list()
    }
}

/// And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionSingleLineStringSqMidMid {
    pub single_line_string_sq_mid_mid: Token,
    pub expression: Expression,
}
impl RuleModel for ExpressionSingleLineStringSqMidMid {
    fn rule() -> Rule {
        Rule::ExpressionSingleLineStringSqMidMid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            single_line_string_sq_mid_mid: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(SINGLE_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_SQ_MID_END))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SingleLineStringSingleLineStringSqBeginMid {
    pub single_line_string_sq_begin_mid: Token,
    pub expression: Expression,
    pub expression_single_line_string_sq_mid_mid: Vec<ExpressionSingleLineStringSqMidMid>,
    pub single_line_string_sq_mid_end: Token,
}
impl RuleModel for SingleLineStringSingleLineStringSqBeginMid {
    fn rule() -> Rule {
        Rule::SingleLineStringSingleLineStringSqBeginMid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            single_line_string_sq_begin_mid: ctx.parse_token(),
            expression: ctx.parse_ast(),
            expression_single_line_string_sq_mid_mid: ctx.parse_list(),
            single_line_string_sq_mid_end: ctx.parse_token(),
        }
    }
}

/// And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionSingleLineStringDqMidMid {
    pub single_line_string_dq_mid_mid: Token,
    pub expression: Expression,
}
impl RuleModel for ExpressionSingleLineStringDqMidMid {
    fn rule() -> Rule {
        Rule::ExpressionSingleLineStringDqMidMid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            single_line_string_dq_mid_mid: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(SINGLE_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_DQ_MID_END))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SingleLineStringSingleLineStringDqBeginMid {
    pub single_line_string_dq_begin_mid: Token,
    pub expression: Expression,
    pub expression_single_line_string_dq_mid_mid: Vec<ExpressionSingleLineStringDqMidMid>,
    pub single_line_string_dq_mid_end: Token,
}
impl RuleModel for SingleLineStringSingleLineStringDqBeginMid {
    fn rule() -> Rule {
        Rule::SingleLineStringSingleLineStringDqBeginMid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            single_line_string_dq_begin_mid: ctx.parse_token(),
            expression: ctx.parse_ast(),
            expression_single_line_string_dq_mid_mid: ctx.parse_list(),
            single_line_string_dq_mid_end: ctx.parse_token(),
        }
    }
}

/// Or( Id(RAW_SINGLE_LINE_STRING), Id(SINGLE_LINE_STRING_SQ_BEGIN_END), And(Id(SINGLE_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_SQ_MID_END)), Id(SINGLE_LINE_STRING_DQ_BEGIN_END), And(Id(SINGLE_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_DQ_MID_END)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum SingleLineString {
    RawSingleLineString(Token),
    SingleLineStringSqBeginEnd(Token),
    SingleLineStringSqBeginMid(SingleLineStringSingleLineStringSqBeginMid),
    SingleLineStringDqBeginEnd(Token),
    SingleLineStringDqBeginMid(SingleLineStringSingleLineStringDqBeginMid),
}
impl RuleModel for SingleLineString {
    fn rule() -> Rule {
        Rule::SingleLineString
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::RAW_SINGLE_LINE_STRING => {
                SingleLineString::RawSingleLineString(ctx.parse_token())
            }
            Rule::SINGLE_LINE_STRING_SQ_BEGIN_END => {
                SingleLineString::SingleLineStringSqBeginEnd(ctx.parse_token())
            }
            Rule::SingleLineStringSingleLineStringSqBeginMid => {
                SingleLineString::SingleLineStringSqBeginMid(ctx.parse_ast())
            }
            Rule::SINGLE_LINE_STRING_DQ_BEGIN_END => {
                SingleLineString::SingleLineStringDqBeginEnd(ctx.parse_token())
            }
            Rule::SingleLineStringSingleLineStringDqBeginMid => {
                SingleLineString::SingleLineStringDqBeginMid(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionMultiLineStringSqMidMid {
    pub multi_line_string_sq_mid_mid: Token,
    pub expression: Expression,
}
impl RuleModel for ExpressionMultiLineStringSqMidMid {
    fn rule() -> Rule {
        Rule::ExpressionMultiLineStringSqMidMid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            multi_line_string_sq_mid_mid: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(MULTI_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_SQ_MID_END))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultilineStringMultiLineStringSqBeginMid {
    pub multi_line_string_sq_begin_mid: Token,
    pub expression: Expression,
    pub expression_multi_line_string_sq_mid_mid: Vec<ExpressionMultiLineStringSqMidMid>,
    pub multi_line_string_sq_mid_end: Token,
}
impl RuleModel for MultilineStringMultiLineStringSqBeginMid {
    fn rule() -> Rule {
        Rule::MultilineStringMultiLineStringSqBeginMid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            multi_line_string_sq_begin_mid: ctx.parse_token(),
            expression: ctx.parse_ast(),
            expression_multi_line_string_sq_mid_mid: ctx.parse_list(),
            multi_line_string_sq_mid_end: ctx.parse_token(),
        }
    }
}

/// And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionMultiLineStringDqMidMid {
    pub multi_line_string_dq_mid_mid: Token,
    pub expression: Expression,
}
impl RuleModel for ExpressionMultiLineStringDqMidMid {
    fn rule() -> Rule {
        Rule::ExpressionMultiLineStringDqMidMid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            multi_line_string_dq_mid_mid: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(MULTI_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_DQ_MID_END))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultilineStringMultiLineStringDqBeginMid {
    pub multi_line_string_dq_begin_mid: Token,
    pub expression: Expression,
    pub expression_multi_line_string_dq_mid_mid: Vec<ExpressionMultiLineStringDqMidMid>,
    pub multi_line_string_dq_mid_end: Token,
}
impl RuleModel for MultilineStringMultiLineStringDqBeginMid {
    fn rule() -> Rule {
        Rule::MultilineStringMultiLineStringDqBeginMid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            multi_line_string_dq_begin_mid: ctx.parse_token(),
            expression: ctx.parse_ast(),
            expression_multi_line_string_dq_mid_mid: ctx.parse_list(),
            multi_line_string_dq_mid_end: ctx.parse_token(),
        }
    }
}

/// Or( Id(RAW_MULTI_LINE_STRING), Id(MULTI_LINE_STRING_SQ_BEGIN_END), And(Id(MULTI_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_SQ_MID_END)), Id(MULTI_LINE_STRING_DQ_BEGIN_END), And(Id(MULTI_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_DQ_MID_END)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum MultilineString {
    RawMultiLineString(Token),
    MultiLineStringSqBeginEnd(Token),
    MultiLineStringSqBeginMid(MultilineStringMultiLineStringSqBeginMid),
    MultiLineStringDqBeginEnd(Token),
    MultiLineStringDqBeginMid(MultilineStringMultiLineStringDqBeginMid),
}
impl RuleModel for MultilineString {
    fn rule() -> Rule {
        Rule::MultilineString
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::RAW_MULTI_LINE_STRING => MultilineString::RawMultiLineString(ctx.parse_token()),
            Rule::MULTI_LINE_STRING_SQ_BEGIN_END => {
                MultilineString::MultiLineStringSqBeginEnd(ctx.parse_token())
            }
            Rule::MultilineStringMultiLineStringSqBeginMid => {
                MultilineString::MultiLineStringSqBeginMid(ctx.parse_ast())
            }
            Rule::MULTI_LINE_STRING_DQ_BEGIN_END => {
                MultilineString::MultiLineStringDqBeginEnd(ctx.parse_token())
            }
            Rule::MultilineStringMultiLineStringDqBeginMid => {
                MultilineString::MultiLineStringDqBeginMid(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw(${), Id(expression), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StringInterpolationExpression {
    pub interpolation_start_token: Token,
    pub expression: Expression,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for StringInterpolationExpression {
    fn rule() -> Rule {
        Rule::StringInterpolationExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            interpolation_start_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// Or( Id(SIMPLE_STRING_INTERPOLATION), And(Raw(${), Id(expression), Raw(})), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum StringInterpolation {
    SimpleStringInterpolation(Token),
    Expression(StringInterpolationExpression),
}
impl RuleModel for StringInterpolation {
    fn rule() -> Rule {
        Rule::StringInterpolation
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::SIMPLE_STRING_INTERPOLATION => {
                StringInterpolation::SimpleStringInterpolation(ctx.parse_token())
            }
            Rule::StringInterpolationExpression => StringInterpolation::Expression(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SymbolLiteralOtherIdentifiers {
    pub period_token: Token,
    pub identifier: Identifier,
}
impl RuleModel for SymbolLiteralOtherIdentifiers {
    fn rule() -> Rule {
        Rule::SymbolLiteralOtherIdentifiers
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            period_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Id(identifier), Modified(*,And(Raw(.), Id(identifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SymbolLiteralValueIdentifier {
    pub identifier: Identifier,
    pub symbol_literal_other_identifiers: Vec<SymbolLiteralOtherIdentifiers>,
}
impl RuleModel for SymbolLiteralValueIdentifier {
    fn rule() -> Rule {
        Rule::SymbolLiteralValueIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            identifier: ctx.parse_ast(),
            symbol_literal_other_identifiers: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(identifier), Modified(*,And(Raw(.), Id(identifier)))), Id(operator), Raw(void), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum SymbolLiteralValue {
    Identifier(SymbolLiteralValueIdentifier),
    Operator(Operator),
    Void(Token),
}
impl RuleModel for SymbolLiteralValue {
    fn rule() -> Rule {
        Rule::SymbolLiteralValue
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::SymbolLiteralValueIdentifier => SymbolLiteralValue::Identifier(ctx.parse_ast()),
            Rule::Operator => SymbolLiteralValue::Operator(ctx.parse_ast()),
            Rule::VOID_TOKEN => SymbolLiteralValue::Void(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(#), Or( And(Id(identifier), Modified(*,And(Raw(.), Id(identifier)))), Id(operator), Raw(void), ))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SymbolLiteral {
    pub hash_token: Token,
    pub symbol_literal_value: SymbolLiteralValue,
}
impl RuleModel for SymbolLiteral {
    fn rule() -> Rule {
        Rule::SymbolLiteral
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            hash_token: ctx.parse_token(),
            symbol_literal_value: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(const)), Modified(?,Id(typeArguments)), Raw([), Modified(?,Id(elements)), Raw(]))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ListLiteral {
    pub const_token: Option<Token>,
    pub type_arguments: Option<TypeArguments>,
    pub open_square_bracket_token: Token,
    pub elements: Option<Elements>,
    pub close_square_bracket_token: Token,
}
impl RuleModel for ListLiteral {
    fn rule() -> Rule {
        Rule::ListLiteral
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            const_token: if ctx.is_rule_next(Rule::CONST_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            type_arguments: ctx.try_parse_ast(),
            open_square_bracket_token: ctx.parse_token(),
            elements: ctx.try_parse_ast(),
            close_square_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Modified(?,Raw(const)), Modified(?,Id(typeArguments)), Raw({), Modified(?,Id(elements)), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SetOrMapLiteral {
    pub const_token: Option<Token>,
    pub type_arguments: Option<TypeArguments>,
    pub open_curly_bracket_token: Token,
    pub elements: Option<Elements>,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for SetOrMapLiteral {
    fn rule() -> Rule {
        Rule::SetOrMapLiteral
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            const_token: if ctx.is_rule_next(Rule::CONST_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            type_arguments: ctx.try_parse_ast(),
            open_curly_bracket_token: ctx.parse_token(),
            elements: ctx.try_parse_ast(),
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(,), Id(element))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ElementItem {
    pub comma_token: Token,
    pub element: Element,
}
impl RuleModel for ElementItem {
    fn rule() -> Rule {
        Rule::ElementItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            element: ctx.parse_ast(),
        }
    }
}

/// And(Id(element), Modified(*,And(Raw(,), Id(element))), Modified(?,Raw(,)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Elements {
    pub element: Element,
    pub element_item: Vec<ElementItem>,
    pub comma_token: Option<Token>,
}
impl RuleModel for Elements {
    fn rule() -> Rule {
        Rule::Elements
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            element: ctx.parse_ast(),
            element_item: ctx.parse_list(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// Or( Id(expressionElement), Id(mapElement), Id(spreadElement), Id(ifElement), Id(forElement), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ElementInner {
    ExpressionElement(ExpressionElement),
    MapElement(MapElement),
    SpreadElement(SpreadElement),
    IfElement(IfElement),
    ForElement(ForElement),
}

type Element = Box<ElementInner>;
impl RuleModel for Element {
    fn rule() -> Rule {
        Rule::Element
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(match ctx.next_rule() {
            Rule::ExpressionElement => ElementInner::ExpressionElement(ctx.parse_ast()),
            Rule::MapElement => ElementInner::MapElement(ctx.parse_ast()),
            Rule::SpreadElement => ElementInner::SpreadElement(ctx.parse_ast()),
            Rule::IfElement => ElementInner::IfElement(ctx.parse_ast()),
            Rule::ForElement => ElementInner::ForElement(ctx.parse_ast()),
            _ => unreachable!(),
        })
    }
}

/// Id(expression)
pub type ExpressionElement = Expression;

/// And(Id(expression), Raw(:), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MapElement {
    pub expression: Expression,
    pub colon_token: Token,
    pub expression2: Expression,
}
impl RuleModel for MapElement {
    fn rule() -> Rule {
        Rule::MapElement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            expression: ctx.parse_ast(),
            colon_token: ctx.parse_token(),
            expression2: ctx.parse_ast(),
        }
    }
}

/// Or( Raw(...), Raw(...?), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum SpreadElementType {
    PointsExpand(Token),
    PointsExpandQuestion(Token),
}
impl RuleModel for SpreadElementType {
    fn rule() -> Rule {
        Rule::SpreadElementType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::POINTS_EXPAND_TOKEN => SpreadElementType::PointsExpand(ctx.parse_token()),
            Rule::POINTS_EXPAND_QUESTION_TOKEN => {
                SpreadElementType::PointsExpandQuestion(ctx.parse_token())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Or( Raw(...), Raw(...?), ), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SpreadElement {
    pub spread_element_type: SpreadElementType,
    pub expression: Expression,
}
impl RuleModel for SpreadElement {
    fn rule() -> Rule {
        Rule::SpreadElement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            spread_element_type: ctx.parse_ast(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Raw(else), Id(element))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ElementElse {
    pub else_token: Token,
    pub element: Element,
}
impl RuleModel for ElementElse {
    fn rule() -> Rule {
        Rule::ElementElse
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            else_token: ctx.parse_token(),
            element: ctx.parse_ast(),
        }
    }
}

/// And(Raw(if), Raw((), Id(expression), Raw()), Id(element), Modified(?,And(Raw(else), Id(element))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IfElement {
    pub if_token: Token,
    pub open_paren_token: Token,
    pub expression: Expression,
    pub close_paren_token: Token,
    pub element: Element,
    pub element_else: Option<ElementElse>,
}
impl RuleModel for IfElement {
    fn rule() -> Rule {
        Rule::IfElement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            if_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
            element: ctx.parse_ast(),
            element_else: ctx.try_parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(await)), Raw(for), Raw((), Id(forLoopParts), Raw()), Id(element))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForElement {
    pub await_token: Option<Token>,
    pub for_token: Token,
    pub open_paren_token: Token,
    pub for_loop_parts: ForLoopParts,
    pub close_paren_token: Token,
    pub element: Element,
}
impl RuleModel for ForElement {
    fn rule() -> Rule {
        Rule::ForElement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            await_token: if ctx.is_rule_next(Rule::AWAIT_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            for_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            for_loop_parts: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
            element: ctx.parse_ast(),
        }
    }
}

/// And(Raw(throw), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ThrowExpression {
    pub throw_token: Token,
    pub expression: Expression,
}
impl RuleModel for ThrowExpression {
    fn rule() -> Rule {
        Rule::ThrowExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            throw_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Raw(throw), Id(expressionWithoutCascade))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ThrowExpressionWithoutCascade {
    pub throw_token: Token,
    pub expression_without_cascade: ExpressionWithoutCascade,
}
impl RuleModel for ThrowExpressionWithoutCascade {
    fn rule() -> Rule {
        Rule::ThrowExpressionWithoutCascade
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            throw_token: ctx.parse_token(),
            expression_without_cascade: ctx.parse_ast(),
        }
    }
}

/// And(Id(formalParameterPart), Id(functionExpressionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpression {
    pub formal_parameter_part: FormalParameterPart,
    pub function_expression_body: FunctionExpressionBody,
}
impl RuleModel for FunctionExpression {
    fn rule() -> Rule {
        Rule::FunctionExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            formal_parameter_part: ctx.parse_ast(),
            function_expression_body: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(async)), Raw(=>), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpressionBodyArrowToken {
    pub async_token: Option<Token>,
    pub arrow_token: Token,
    pub expression: Expression,
}
impl RuleModel for FunctionExpressionBodyArrowToken {
    fn rule() -> Rule {
        Rule::FunctionExpressionBodyArrowToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            async_token: if ctx.is_rule_next(Rule::ASYNC_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            arrow_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Raw(async), Modified(?,Raw(*)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpressionGeneratorAsyncToken {
    pub async_token: Token,
    pub asterisk_token: Option<Token>,
}
impl RuleModel for FunctionExpressionGeneratorAsyncToken {
    fn rule() -> Rule {
        Rule::FunctionExpressionGeneratorAsyncToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            async_token: ctx.parse_token(),
            asterisk_token: if ctx.is_rule_next(Rule::ASTERISK_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Raw(sync), Raw(*))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpressionGeneratorSyncToken {
    pub sync_token: Token,
    pub asterisk_token: Token,
}
impl RuleModel for FunctionExpressionGeneratorSyncToken {
    fn rule() -> Rule {
        Rule::FunctionExpressionGeneratorSyncToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            sync_token: ctx.parse_token(),
            asterisk_token: ctx.parse_token(),
        }
    }
}

/// Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionExpressionGenerator {
    Async(FunctionExpressionGeneratorAsyncToken),
    Sync(FunctionExpressionGeneratorSyncToken),
}
impl RuleModel for FunctionExpressionGenerator {
    fn rule() -> Rule {
        Rule::FunctionExpressionGenerator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::FunctionExpressionGeneratorAsyncToken => {
                FunctionExpressionGenerator::Async(ctx.parse_ast())
            }
            Rule::FunctionExpressionGeneratorSyncToken => {
                FunctionExpressionGenerator::Sync(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpressionBodyBlock {
    pub function_expression_generator: Option<FunctionExpressionGenerator>,
    pub block: Block,
}
impl RuleModel for FunctionExpressionBodyBlock {
    fn rule() -> Rule {
        Rule::FunctionExpressionBodyBlock
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_expression_generator: ctx.try_parse_ast(),
            block: ctx.parse_ast(),
        }
    }
}

/// Or( And(Modified(?,Raw(async)), Raw(=>), Id(expression)), And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionExpressionBody {
    Arrow(FunctionExpressionBodyArrowToken),
    Block(FunctionExpressionBodyBlock),
}
impl RuleModel for FunctionExpressionBody {
    fn rule() -> Rule {
        Rule::FunctionExpressionBody
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::FunctionExpressionBodyArrowToken => {
                FunctionExpressionBody::Arrow(ctx.parse_ast())
            }
            Rule::FunctionExpressionBodyBlock => FunctionExpressionBody::Block(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Raw(this)
pub type ThisExpression = Token;

/// And(Raw(new), Id(constructorDesignation), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NewExpression {
    pub new_token: Token,
    pub constructor_designation: ConstructorDesignation,
    pub arguments: Arguments,
}
impl RuleModel for NewExpression {
    fn rule() -> Rule {
        Rule::NewExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            new_token: ctx.parse_token(),
            constructor_designation: ctx.parse_ast(),
            arguments: ctx.parse_ast(),
        }
    }
}

/// And(Raw(const), Id(constructorDesignation), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstObjectExpression {
    pub const_token: Token,
    pub constructor_designation: ConstructorDesignation,
    pub arguments: Arguments,
}
impl RuleModel for ConstObjectExpression {
    fn rule() -> Rule {
        Rule::ConstObjectExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            const_token: ctx.parse_token(),
            constructor_designation: ctx.parse_ast(),
            arguments: ctx.parse_ast(),
        }
    }
}

/// And(Id(argumentList), Modified(?,Raw(,)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArgumentsArgumentList {
    pub argument_list: ArgumentList,
    pub comma_token: Option<Token>,
}
impl RuleModel for ArgumentsArgumentList {
    fn rule() -> Rule {
        Rule::ArgumentsArgumentList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            argument_list: ctx.parse_ast(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Raw((), Modified(?,And(Id(argumentList), Modified(?,Raw(,)))), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Arguments {
    pub open_paren_token: Token,
    pub argument_list: Option<ArgumentsArgumentList>,
    pub close_paren_token: Token,
}
impl RuleModel for Arguments {
    fn rule() -> Rule {
        Rule::Arguments
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            argument_list: ctx.try_parse_ast(),
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(,), Id(namedArgument))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedArgumentItem {
    pub comma_token: Token,
    pub named_argument: NamedArgument,
}
impl RuleModel for NamedArgumentItem {
    fn rule() -> Rule {
        Rule::NamedArgumentItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            named_argument: ctx.parse_ast(),
        }
    }
}

/// And(Id(namedArgument), Modified(*,And(Raw(,), Id(namedArgument))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArgumentListNamedArgument {
    pub named_argument: NamedArgument,
    pub named_argument_item: Vec<NamedArgumentItem>,
}
impl RuleModel for ArgumentListNamedArgument {
    fn rule() -> Rule {
        Rule::ArgumentListNamedArgument
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            named_argument: ctx.parse_ast(),
            named_argument_item: ctx.parse_list(),
        }
    }
}

/// And(Id(expressionList), Modified(*,And(Raw(,), Id(namedArgument))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArgumentListExpressionList {
    pub expression_list: ExpressionList,
    pub named_argument_item: Vec<NamedArgumentItem>,
}
impl RuleModel for ArgumentListExpressionList {
    fn rule() -> Rule {
        Rule::ArgumentListExpressionList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            expression_list: ctx.parse_ast(),
            named_argument_item: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(namedArgument), Modified(*,And(Raw(,), Id(namedArgument)))), And(Id(expressionList), Modified(*,And(Raw(,), Id(namedArgument)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ArgumentList {
    NamedArgument(ArgumentListNamedArgument),
    ExpressionList(ArgumentListExpressionList),
}
impl RuleModel for ArgumentList {
    fn rule() -> Rule {
        Rule::ArgumentList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ArgumentListNamedArgument => ArgumentList::NamedArgument(ctx.parse_ast()),
            Rule::ArgumentListExpressionList => ArgumentList::ExpressionList(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(label), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedArgument {
    pub label: Label,
    pub expression: Expression,
}
impl RuleModel for NamedArgument {
    fn rule() -> Rule {
        Rule::NamedArgument
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            label: ctx.parse_ast(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Raw(..), Id(cascadeSection), Modified(?,Id(cascadeRight)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeRightInner {
    pub points_id_token: Token,
    pub cascade_section: CascadeSection,
    pub cascade_right: Option<CascadeRight>,
}

type CascadeRight = Box<CascadeRightInner>;
impl RuleModel for CascadeRight {
    fn rule() -> Rule {
        Rule::CascadeRight
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(CascadeRightInner {
            points_id_token: ctx.parse_token(),
            cascade_section: ctx.parse_ast(),
            cascade_right: ctx.try_parse_ast(),
        })
    }
}

/// Or( Raw(?..), Raw(..), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum CascadePrefixType {
    PointsIdQuestion(Token),
    PointsId(Token),
}
impl RuleModel for CascadePrefixType {
    fn rule() -> Rule {
        Rule::CascadePrefixType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::POINTS_ID_QUESTION_TOKEN => {
                CascadePrefixType::PointsIdQuestion(ctx.parse_token())
            }
            Rule::POINTS_ID_TOKEN => CascadePrefixType::PointsId(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(conditionalExpression), Or( Raw(?..), Raw(..), ), Id(cascadeSection))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeLeft {
    pub conditional_expression: ConditionalExpression,
    pub cascade_prefix_type: CascadePrefixType,
    pub cascade_section: CascadeSection,
}
impl RuleModel for CascadeLeft {
    fn rule() -> Rule {
        Rule::CascadeLeft
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            conditional_expression: ctx.parse_ast(),
            cascade_prefix_type: ctx.parse_ast(),
            cascade_section: ctx.parse_ast(),
        }
    }
}

/// And(Id(cascadeLeft), Modified(?,Id(cascadeRight)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Cascade {
    pub cascade_left: CascadeLeft,
    pub cascade_right: Option<CascadeRight>,
}
impl RuleModel for Cascade {
    fn rule() -> Rule {
        Rule::Cascade
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            cascade_left: ctx.parse_ast(),
            cascade_right: ctx.try_parse_ast(),
        }
    }
}

/// And(Id(cascadeSelector), Id(cascadeSectionTail))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeSection {
    pub cascade_selector: CascadeSelector,
    pub cascade_section_tail: CascadeSectionTail,
}
impl RuleModel for CascadeSection {
    fn rule() -> Rule {
        Rule::CascadeSection
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            cascade_selector: ctx.parse_ast(),
            cascade_section_tail: ctx.parse_ast(),
        }
    }
}

/// And(Raw([), Id(expression), Raw(]))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeSelectorExpression {
    pub open_square_bracket_token: Token,
    pub expression: Expression,
    pub close_square_bracket_token: Token,
}
impl RuleModel for CascadeSelectorExpression {
    fn rule() -> Rule {
        Rule::CascadeSelectorExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_square_bracket_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_square_bracket_token: ctx.parse_token(),
        }
    }
}

/// Or( And(Raw([), Id(expression), Raw(])), Id(identifier), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum CascadeSelector {
    Expression(CascadeSelectorExpression),
    Identifier(Identifier),
}
impl RuleModel for CascadeSelector {
    fn rule() -> Rule {
        Rule::CascadeSelector
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::CascadeSelectorExpression => CascadeSelector::Expression(ctx.parse_ast()),
            Rule::Identifier => CascadeSelector::Identifier(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(assignableSelector), Id(cascadeAssignment))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SelectedCascadeAssignment {
    pub assignable_selector: AssignableSelector,
    pub cascade_assignment: CascadeAssignment,
}
impl RuleModel for SelectedCascadeAssignment {
    fn rule() -> Rule {
        Rule::SelectedCascadeAssignment
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            assignable_selector: ctx.parse_ast(),
            cascade_assignment: ctx.parse_ast(),
        }
    }
}

/// And(Modified(*,Id(selector)), Modified(?,And(Id(assignableSelector), Id(cascadeAssignment))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SelectedCascade {
    pub selector: Vec<Selector>,
    pub assignment: Option<SelectedCascadeAssignment>,
}
impl RuleModel for SelectedCascade {
    fn rule() -> Rule {
        Rule::SelectedCascade
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            selector: ctx.parse_list(),
            assignment: ctx.try_parse_ast(),
        }
    }
}

/// Or( Id(cascadeAssignment), And(Modified(*,Id(selector)), Modified(?,And(Id(assignableSelector), Id(cascadeAssignment)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum CascadeSectionTail {
    CascadeAssignment(CascadeAssignment),
    SelectedCascade(SelectedCascade),
}
impl RuleModel for CascadeSectionTail {
    fn rule() -> Rule {
        Rule::CascadeSectionTail
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::CascadeAssignment => CascadeSectionTail::CascadeAssignment(ctx.parse_ast()),
            Rule::SelectedCascade => CascadeSectionTail::SelectedCascade(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(assignmentOperator), Id(expressionWithoutCascade))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeAssignment {
    pub assignment_operator: AssignmentOperator,
    pub expression_without_cascade: ExpressionWithoutCascade,
}
impl RuleModel for CascadeAssignment {
    fn rule() -> Rule {
        Rule::CascadeAssignment
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            assignment_operator: ctx.parse_ast(),
            expression_without_cascade: ctx.parse_ast(),
        }
    }
}

/// Or( Raw(=), Id(compoundAssignmentOperator), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AssignmentOperator {
    Equal(Token),
    CompoundAssignmentOperator(CompoundAssignmentOperator),
}
impl RuleModel for AssignmentOperator {
    fn rule() -> Rule {
        Rule::AssignmentOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::EQUAL_TOKEN => AssignmentOperator::Equal(ctx.parse_token()),
            Rule::CompoundAssignmentOperator => {
                AssignmentOperator::CompoundAssignmentOperator(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(*=), Raw(/=), Raw(~/=), Raw(%=), Raw(+=), Raw(-=), Raw(<<=), Raw(>>>=), Raw(>>=), Raw(&=), Raw(^=), Raw(|=), Raw(??=), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum CompoundAssignmentOperator {
    TimesEqual(Token),
    DivEqual(Token),
    IntegerDivEqual(Token),
    ModuleEqual(Token),
    PlusEqual(Token),
    MinusEqual(Token),
    BitLeftEqual(Token),
    BitRight0Equal(Token),
    BitRightEqual(Token),
    BitAndEuqal(Token),
    BitNegEqual(Token),
    BitXorEqual(Token),
    QuestionQuestionEqual(Token),
}
impl RuleModel for CompoundAssignmentOperator {
    fn rule() -> Rule {
        Rule::CompoundAssignmentOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TIMES_EQUAL_TOKEN => CompoundAssignmentOperator::TimesEqual(ctx.parse_token()),
            Rule::DIV_EQUAL_TOKEN => CompoundAssignmentOperator::DivEqual(ctx.parse_token()),
            Rule::INTEGER_DIV_EQUAL_TOKEN => {
                CompoundAssignmentOperator::IntegerDivEqual(ctx.parse_token())
            }
            Rule::MODULE_EQUAL_TOKEN => CompoundAssignmentOperator::ModuleEqual(ctx.parse_token()),
            Rule::PLUS_EQUAL_TOKEN => CompoundAssignmentOperator::PlusEqual(ctx.parse_token()),
            Rule::MINUS_EQUAL_TOKEN => CompoundAssignmentOperator::MinusEqual(ctx.parse_token()),
            Rule::BIT_LEFT_EQUAL_TOKEN => {
                CompoundAssignmentOperator::BitLeftEqual(ctx.parse_token())
            }
            Rule::BIT_RIGHT0_EQUAL_TOKEN => {
                CompoundAssignmentOperator::BitRight0Equal(ctx.parse_token())
            }
            Rule::BIT_RIGHT_EQUAL_TOKEN => {
                CompoundAssignmentOperator::BitRightEqual(ctx.parse_token())
            }
            Rule::BIT_AND_EUQAL_TOKEN => CompoundAssignmentOperator::BitAndEuqal(ctx.parse_token()),
            Rule::BIT_NEG_EQUAL_TOKEN => CompoundAssignmentOperator::BitNegEqual(ctx.parse_token()),
            Rule::BIT_XOR_EQUAL_TOKEN => CompoundAssignmentOperator::BitXorEqual(ctx.parse_token()),
            Rule::QUESTION_QUESTION_EQUAL_TOKEN => {
                CompoundAssignmentOperator::QuestionQuestionEqual(ctx.parse_token())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw(?), Id(expressionWithoutCascade), Raw(:), Id(expressionWithoutCascade))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConditionalExpressionExpressionWithoutCascade {
    pub question_token: Token,
    pub expression_without_cascade: ExpressionWithoutCascade,
    pub colon_token: Token,
    pub expression_without_cascade2: ExpressionWithoutCascade,
}
impl RuleModel for ConditionalExpressionExpressionWithoutCascade {
    fn rule() -> Rule {
        Rule::ConditionalExpressionExpressionWithoutCascade
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            question_token: ctx.parse_token(),
            expression_without_cascade: ctx.parse_ast(),
            colon_token: ctx.parse_token(),
            expression_without_cascade2: ctx.parse_ast(),
        }
    }
}

/// And(Id(ifNullExpression), Modified(?,And(Raw(?), Id(expressionWithoutCascade), Raw(:), Id(expressionWithoutCascade))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConditionalExpression {
    pub if_null_expression: IfNullExpression,
    pub expression_without_cascade: Option<ConditionalExpressionExpressionWithoutCascade>,
}
impl RuleModel for ConditionalExpression {
    fn rule() -> Rule {
        Rule::ConditionalExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            if_null_expression: ctx.parse_ast(),
            expression_without_cascade: ctx.try_parse_ast(),
        }
    }
}

/// And(Raw(??), Id(logicalOrExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogicalOrExpressionQuestionQuestion {
    pub question_question_token: Token,
    pub logical_or_expression: LogicalOrExpression,
}
impl RuleModel for LogicalOrExpressionQuestionQuestion {
    fn rule() -> Rule {
        Rule::LogicalOrExpressionQuestionQuestion
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            question_question_token: ctx.parse_token(),
            logical_or_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(logicalOrExpression), Modified(*,And(Raw(??), Id(logicalOrExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IfNullExpression {
    pub logical_or_expression: LogicalOrExpression,
    pub logical_or_expression_question_question: Vec<LogicalOrExpressionQuestionQuestion>,
}
impl RuleModel for IfNullExpression {
    fn rule() -> Rule {
        Rule::IfNullExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            logical_or_expression: ctx.parse_ast(),
            logical_or_expression_question_question: ctx.parse_list(),
        }
    }
}

/// And(Raw(||), Id(logicalAndExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogicalAndExpressionOr {
    pub or_token: Token,
    pub logical_and_expression: LogicalAndExpression,
}
impl RuleModel for LogicalAndExpressionOr {
    fn rule() -> Rule {
        Rule::LogicalAndExpressionOr
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            or_token: ctx.parse_token(),
            logical_and_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(logicalAndExpression), Modified(*,And(Raw(||), Id(logicalAndExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogicalOrExpression {
    pub logical_and_expression: LogicalAndExpression,
    pub logical_and_expression_or: Vec<LogicalAndExpressionOr>,
}
impl RuleModel for LogicalOrExpression {
    fn rule() -> Rule {
        Rule::LogicalOrExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            logical_and_expression: ctx.parse_ast(),
            logical_and_expression_or: ctx.parse_list(),
        }
    }
}

/// And(Raw(&&), Id(equalityExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EqualityExpressionAnd {
    pub and_token: Token,
    pub equality_expression: EqualityExpression,
}
impl RuleModel for EqualityExpressionAnd {
    fn rule() -> Rule {
        Rule::EqualityExpressionAnd
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            and_token: ctx.parse_token(),
            equality_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(equalityExpression), Modified(*,And(Raw(&&), Id(equalityExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogicalAndExpression {
    pub equality_expression: EqualityExpression,
    pub equality_expression_and: Vec<EqualityExpressionAnd>,
}
impl RuleModel for LogicalAndExpression {
    fn rule() -> Rule {
        Rule::LogicalAndExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            equality_expression: ctx.parse_ast(),
            equality_expression_and: ctx.parse_list(),
        }
    }
}

/// And(Id(equalityOperator), Id(relationalExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EqualityExpressionInner {
    pub equality_operator: EqualityOperator,
    pub relational_expression: RelationalExpression,
}
impl RuleModel for EqualityExpressionInner {
    fn rule() -> Rule {
        Rule::EqualityExpressionInner
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            equality_operator: ctx.parse_ast(),
            relational_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(relationalExpression), Modified(?,And(Id(equalityOperator), Id(relationalExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EqualityExpressionRelationalExpression {
    pub relational_expression: RelationalExpression,
    pub equality_expression_inner: Option<EqualityExpressionInner>,
}
impl RuleModel for EqualityExpressionRelationalExpression {
    fn rule() -> Rule {
        Rule::EqualityExpressionRelationalExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            relational_expression: ctx.parse_ast(),
            equality_expression_inner: ctx.try_parse_ast(),
        }
    }
}

/// And(Raw(super), Id(equalityOperator), Id(relationalExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EqualityExpressionEqualityOperator {
    pub super_token: Token,
    pub equality_operator: EqualityOperator,
    pub relational_expression: RelationalExpression,
}
impl RuleModel for EqualityExpressionEqualityOperator {
    fn rule() -> Rule {
        Rule::EqualityExpressionEqualityOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            equality_operator: ctx.parse_ast(),
            relational_expression: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(relationalExpression), Modified(?,And(Id(equalityOperator), Id(relationalExpression)))), And(Raw(super), Id(equalityOperator), Id(relationalExpression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum EqualityExpression {
    RelationalExpression(EqualityExpressionRelationalExpression),
    EqualityOperator(EqualityExpressionEqualityOperator),
}
impl RuleModel for EqualityExpression {
    fn rule() -> Rule {
        Rule::EqualityExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::EqualityExpressionRelationalExpression => {
                EqualityExpression::RelationalExpression(ctx.parse_ast())
            }
            Rule::EqualityExpressionEqualityOperator => {
                EqualityExpression::EqualityOperator(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(==), Raw(!=), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum EqualityOperator {
    DoubleEqual(Token),
    NotEqual(Token),
}
impl RuleModel for EqualityOperator {
    fn rule() -> Rule {
        Rule::EqualityOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::DOUBLE_EQUAL_TOKEN => EqualityOperator::DoubleEqual(ctx.parse_token()),
            Rule::NOT_EQUAL_TOKEN => EqualityOperator::NotEqual(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(relationalOperator), Id(bitwiseOrExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseOrExpressionInterRelationalOperator {
    pub relational_operator: RelationalOperator,
    pub bitwise_or_expression: BitwiseOrExpression,
}
impl RuleModel for BitwiseOrExpressionInterRelationalOperator {
    fn rule() -> Rule {
        Rule::BitwiseOrExpressionInterRelationalOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            relational_operator: ctx.parse_ast(),
            bitwise_or_expression: ctx.parse_ast(),
        }
    }
}

/// Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseOrExpressionInter {
    TypeTest(TypeTest),
    TypeCast(TypeCast),
    RelationalOperator(BitwiseOrExpressionInterRelationalOperator),
}
impl RuleModel for BitwiseOrExpressionInter {
    fn rule() -> Rule {
        Rule::BitwiseOrExpressionInter
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TypeTest => BitwiseOrExpressionInter::TypeTest(ctx.parse_ast()),
            Rule::TypeCast => BitwiseOrExpressionInter::TypeCast(ctx.parse_ast()),
            Rule::BitwiseOrExpressionInterRelationalOperator => {
                BitwiseOrExpressionInter::RelationalOperator(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Id(bitwiseOrExpression), Modified(?,Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), )))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RelationalExpressionBitwiseOrExpression {
    pub bitwise_or_expression: BitwiseOrExpression,
    pub bitwise_or_expression_inter: Option<BitwiseOrExpressionInter>,
}
impl RuleModel for RelationalExpressionBitwiseOrExpression {
    fn rule() -> Rule {
        Rule::RelationalExpressionBitwiseOrExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            bitwise_or_expression: ctx.parse_ast(),
            bitwise_or_expression_inter: ctx.try_parse_ast(),
        }
    }
}

/// And(Raw(super), Id(relationalOperator), Id(bitwiseOrExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RelationalExpressionRelationalOperator {
    pub super_token: Token,
    pub relational_operator: RelationalOperator,
    pub bitwise_or_expression: BitwiseOrExpression,
}
impl RuleModel for RelationalExpressionRelationalOperator {
    fn rule() -> Rule {
        Rule::RelationalExpressionRelationalOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            relational_operator: ctx.parse_ast(),
            bitwise_or_expression: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(bitwiseOrExpression), Modified(?,Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), ))), And(Raw(super), Id(relationalOperator), Id(bitwiseOrExpression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum RelationalExpression {
    BitwiseOrExpression(RelationalExpressionBitwiseOrExpression),
    RelationalOperator(RelationalExpressionRelationalOperator),
}
impl RuleModel for RelationalExpression {
    fn rule() -> Rule {
        Rule::RelationalExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::RelationalExpressionBitwiseOrExpression => {
                RelationalExpression::BitwiseOrExpression(ctx.parse_ast())
            }
            Rule::RelationalExpressionRelationalOperator => {
                RelationalExpression::RelationalOperator(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(>=), Raw(>), Raw(<=), Raw(<), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum RelationalOperator {
    MoreOrEqual(Token),
    More(Token),
    LessOrEqual(Token),
    Less(Token),
}
impl RuleModel for RelationalOperator {
    fn rule() -> Rule {
        Rule::RelationalOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::MORE_OR_EQUAL_TOKEN => RelationalOperator::MoreOrEqual(ctx.parse_token()),
            Rule::MORE_TOKEN => RelationalOperator::More(ctx.parse_token()),
            Rule::LESS_OR_EQUAL_TOKEN => RelationalOperator::LessOrEqual(ctx.parse_token()),
            Rule::LESS_TOKEN => RelationalOperator::Less(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(|), Id(bitwiseXorExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseXorExpressionBitXor {
    pub bit_xor_token: Token,
    pub bitwise_xor_expression: BitwiseXorExpression,
}
impl RuleModel for BitwiseXorExpressionBitXor {
    fn rule() -> Rule {
        Rule::BitwiseXorExpressionBitXor
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            bit_xor_token: ctx.parse_token(),
            bitwise_xor_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(bitwiseXorExpression), Modified(*,And(Raw(|), Id(bitwiseXorExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseOrExpressionBitwiseXorExpression {
    pub bitwise_xor_expression: BitwiseXorExpression,
    pub bitwise_xor_expression_bit_xor: Vec<BitwiseXorExpressionBitXor>,
}
impl RuleModel for BitwiseOrExpressionBitwiseXorExpression {
    fn rule() -> Rule {
        Rule::BitwiseOrExpressionBitwiseXorExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            bitwise_xor_expression: ctx.parse_ast(),
            bitwise_xor_expression_bit_xor: ctx.parse_list(),
        }
    }
}

/// And(Raw(super), Modified(+,And(Raw(|), Id(bitwiseXorExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseOrExpressionSuperToken {
    pub super_token: Token,
    pub bitwise_xor_expression_bit_xor: Vec<BitwiseXorExpressionBitXor>,
}
impl RuleModel for BitwiseOrExpressionSuperToken {
    fn rule() -> Rule {
        Rule::BitwiseOrExpressionSuperToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            bitwise_xor_expression_bit_xor: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(bitwiseXorExpression), Modified(*,And(Raw(|), Id(bitwiseXorExpression)))), And(Raw(super), Modified(+,And(Raw(|), Id(bitwiseXorExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseOrExpression {
    BitwiseXorExpression(BitwiseOrExpressionBitwiseXorExpression),
    Super(BitwiseOrExpressionSuperToken),
}
impl RuleModel for BitwiseOrExpression {
    fn rule() -> Rule {
        Rule::BitwiseOrExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::BitwiseOrExpressionBitwiseXorExpression => {
                BitwiseOrExpression::BitwiseXorExpression(ctx.parse_ast())
            }
            Rule::BitwiseOrExpressionSuperToken => BitwiseOrExpression::Super(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(^), Id(bitwiseAndExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseAndExpressionBitNeg {
    pub bit_neg_token: Token,
    pub bitwise_and_expression: BitwiseAndExpression,
}
impl RuleModel for BitwiseAndExpressionBitNeg {
    fn rule() -> Rule {
        Rule::BitwiseAndExpressionBitNeg
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            bit_neg_token: ctx.parse_token(),
            bitwise_and_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(bitwiseAndExpression), Modified(*,And(Raw(^), Id(bitwiseAndExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseXorExpressionBitwiseAndExpression {
    pub bitwise_and_expression: BitwiseAndExpression,
    pub bitwise_and_expression_bit_neg: Vec<BitwiseAndExpressionBitNeg>,
}
impl RuleModel for BitwiseXorExpressionBitwiseAndExpression {
    fn rule() -> Rule {
        Rule::BitwiseXorExpressionBitwiseAndExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            bitwise_and_expression: ctx.parse_ast(),
            bitwise_and_expression_bit_neg: ctx.parse_list(),
        }
    }
}

/// And(Raw(super), Modified(+,And(Raw(^), Id(bitwiseAndExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseXorExpressionSuperToken {
    pub super_token: Token,
    pub bitwise_and_expression_bit_neg: Vec<BitwiseAndExpressionBitNeg>,
}
impl RuleModel for BitwiseXorExpressionSuperToken {
    fn rule() -> Rule {
        Rule::BitwiseXorExpressionSuperToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            bitwise_and_expression_bit_neg: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(bitwiseAndExpression), Modified(*,And(Raw(^), Id(bitwiseAndExpression)))), And(Raw(super), Modified(+,And(Raw(^), Id(bitwiseAndExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseXorExpression {
    BitwiseAndExpression(BitwiseXorExpressionBitwiseAndExpression),
    Super(BitwiseXorExpressionSuperToken),
}
impl RuleModel for BitwiseXorExpression {
    fn rule() -> Rule {
        Rule::BitwiseXorExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::BitwiseXorExpressionBitwiseAndExpression => {
                BitwiseXorExpression::BitwiseAndExpression(ctx.parse_ast())
            }
            Rule::BitwiseXorExpressionSuperToken => BitwiseXorExpression::Super(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(&), Id(shiftExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionBitAnd {
    pub bit_and_token: Token,
    pub shift_expression: ShiftExpression,
}
impl RuleModel for ShiftExpressionBitAnd {
    fn rule() -> Rule {
        Rule::ShiftExpressionBitAnd
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            bit_and_token: ctx.parse_token(),
            shift_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(shiftExpression), Modified(*,And(Raw(&), Id(shiftExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseAndExpressionShiftExpression {
    pub shift_expression: ShiftExpression,
    pub shift_expression_bit_and: Vec<ShiftExpressionBitAnd>,
}
impl RuleModel for BitwiseAndExpressionShiftExpression {
    fn rule() -> Rule {
        Rule::BitwiseAndExpressionShiftExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            shift_expression: ctx.parse_ast(),
            shift_expression_bit_and: ctx.parse_list(),
        }
    }
}

/// And(Raw(super), Modified(+,And(Raw(&), Id(shiftExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseAndExpressionSuperToken {
    pub super_token: Token,
    pub shift_expression_bit_and: Vec<ShiftExpressionBitAnd>,
}
impl RuleModel for BitwiseAndExpressionSuperToken {
    fn rule() -> Rule {
        Rule::BitwiseAndExpressionSuperToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            shift_expression_bit_and: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(shiftExpression), Modified(*,And(Raw(&), Id(shiftExpression)))), And(Raw(super), Modified(+,And(Raw(&), Id(shiftExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseAndExpression {
    ShiftExpression(BitwiseAndExpressionShiftExpression),
    Super(BitwiseAndExpressionSuperToken),
}
impl RuleModel for BitwiseAndExpression {
    fn rule() -> Rule {
        Rule::BitwiseAndExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::BitwiseAndExpressionShiftExpression => {
                BitwiseAndExpression::ShiftExpression(ctx.parse_ast())
            }
            Rule::BitwiseAndExpressionSuperToken => BitwiseAndExpression::Super(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(&), Raw(^), Raw(|), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseOperator {
    BitAnd(Token),
    BitNeg(Token),
    BitXor(Token),
}
impl RuleModel for BitwiseOperator {
    fn rule() -> Rule {
        Rule::BitwiseOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::BIT_AND_TOKEN => BitwiseOperator::BitAnd(ctx.parse_token()),
            Rule::BIT_NEG_TOKEN => BitwiseOperator::BitNeg(ctx.parse_token()),
            Rule::BIT_XOR_TOKEN => BitwiseOperator::BitXor(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(shiftOperator), Id(additiveExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionInner {
    pub shift_operator: ShiftOperator,
    pub additive_expression: AdditiveExpression,
}
impl RuleModel for ShiftExpressionInner {
    fn rule() -> Rule {
        Rule::ShiftExpressionInner
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            shift_operator: ctx.parse_ast(),
            additive_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(additiveExpression), Modified(*,And(Id(shiftOperator), Id(additiveExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionAdditiveExpression {
    pub additive_expression: AdditiveExpression,
    pub shift_expression_inner: Vec<ShiftExpressionInner>,
}
impl RuleModel for ShiftExpressionAdditiveExpression {
    fn rule() -> Rule {
        Rule::ShiftExpressionAdditiveExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            additive_expression: ctx.parse_ast(),
            shift_expression_inner: ctx.parse_list(),
        }
    }
}

/// And(Raw(super), Modified(+,And(Id(shiftOperator), Id(additiveExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionSuperToken {
    pub super_token: Token,
    pub shift_expression_inner: Vec<ShiftExpressionInner>,
}
impl RuleModel for ShiftExpressionSuperToken {
    fn rule() -> Rule {
        Rule::ShiftExpressionSuperToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            shift_expression_inner: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(additiveExpression), Modified(*,And(Id(shiftOperator), Id(additiveExpression)))), And(Raw(super), Modified(+,And(Id(shiftOperator), Id(additiveExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ShiftExpression {
    AdditiveExpression(ShiftExpressionAdditiveExpression),
    Super(ShiftExpressionSuperToken),
}
impl RuleModel for ShiftExpression {
    fn rule() -> Rule {
        Rule::ShiftExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ShiftExpressionAdditiveExpression => {
                ShiftExpression::AdditiveExpression(ctx.parse_ast())
            }
            Rule::ShiftExpressionSuperToken => ShiftExpression::Super(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(<<), Raw(>>>), Raw(>>), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ShiftOperator {
    BitLeft(Token),
    BitRight0(Token),
    BitRight(Token),
}
impl RuleModel for ShiftOperator {
    fn rule() -> Rule {
        Rule::ShiftOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::BIT_LEFT_TOKEN => ShiftOperator::BitLeft(ctx.parse_token()),
            Rule::BIT_RIGHT0_TOKEN => ShiftOperator::BitRight0(ctx.parse_token()),
            Rule::BIT_RIGHT_TOKEN => ShiftOperator::BitRight(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(additiveOperator), Id(multiplicativeExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditiveExpressionInner {
    pub additive_operator: AdditiveOperator,
    pub multiplicative_expression: MultiplicativeExpression,
}
impl RuleModel for AdditiveExpressionInner {
    fn rule() -> Rule {
        Rule::AdditiveExpressionInner
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            additive_operator: ctx.parse_ast(),
            multiplicative_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(multiplicativeExpression), Modified(*,And(Id(additiveOperator), Id(multiplicativeExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditiveExpressionMultiplicativeExpression {
    pub multiplicative_expression: MultiplicativeExpression,
    pub additive_expression_inner: Vec<AdditiveExpressionInner>,
}
impl RuleModel for AdditiveExpressionMultiplicativeExpression {
    fn rule() -> Rule {
        Rule::AdditiveExpressionMultiplicativeExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            multiplicative_expression: ctx.parse_ast(),
            additive_expression_inner: ctx.parse_list(),
        }
    }
}

/// And(Raw(super), Modified(+,And(Id(additiveOperator), Id(multiplicativeExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditiveExpressionSuperToken {
    pub super_token: Token,
    pub additive_expression_inner: Vec<AdditiveExpressionInner>,
}
impl RuleModel for AdditiveExpressionSuperToken {
    fn rule() -> Rule {
        Rule::AdditiveExpressionSuperToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            additive_expression_inner: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(multiplicativeExpression), Modified(*,And(Id(additiveOperator), Id(multiplicativeExpression)))), And(Raw(super), Modified(+,And(Id(additiveOperator), Id(multiplicativeExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AdditiveExpression {
    MultiplicativeExpression(AdditiveExpressionMultiplicativeExpression),
    Super(AdditiveExpressionSuperToken),
}
impl RuleModel for AdditiveExpression {
    fn rule() -> Rule {
        Rule::AdditiveExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::AdditiveExpressionMultiplicativeExpression => {
                AdditiveExpression::MultiplicativeExpression(ctx.parse_ast())
            }
            Rule::AdditiveExpressionSuperToken => AdditiveExpression::Super(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(+), Raw(-), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AdditiveOperator {
    Plus(Token),
    Minus(Token),
}
impl RuleModel for AdditiveOperator {
    fn rule() -> Rule {
        Rule::AdditiveOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::PLUS_TOKEN => AdditiveOperator::Plus(ctx.parse_token()),
            Rule::MINUS_TOKEN => AdditiveOperator::Minus(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(multiplicativeOperator), Id(unaryExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultiplicativeExpressionInner {
    pub multiplicative_operator: MultiplicativeOperator,
    pub unary_expression: UnaryExpression,
}
impl RuleModel for MultiplicativeExpressionInner {
    fn rule() -> Rule {
        Rule::MultiplicativeExpressionInner
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            multiplicative_operator: ctx.parse_ast(),
            unary_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(unaryExpression), Modified(*,And(Id(multiplicativeOperator), Id(unaryExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultiplicativeExpressionUnaryExpression {
    pub unary_expression: UnaryExpression,
    pub multiplicative_expression_inner: Vec<MultiplicativeExpressionInner>,
}
impl RuleModel for MultiplicativeExpressionUnaryExpression {
    fn rule() -> Rule {
        Rule::MultiplicativeExpressionUnaryExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            unary_expression: ctx.parse_ast(),
            multiplicative_expression_inner: ctx.parse_list(),
        }
    }
}

/// And(Raw(super), Modified(+,And(Id(multiplicativeOperator), Id(unaryExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultiplicativeExpressionSuperToken {
    pub super_token: Token,
    pub multiplicative_expression_inner: Vec<MultiplicativeExpressionInner>,
}
impl RuleModel for MultiplicativeExpressionSuperToken {
    fn rule() -> Rule {
        Rule::MultiplicativeExpressionSuperToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            multiplicative_expression_inner: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(unaryExpression), Modified(*,And(Id(multiplicativeOperator), Id(unaryExpression)))), And(Raw(super), Modified(+,And(Id(multiplicativeOperator), Id(unaryExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum MultiplicativeExpression {
    UnaryExpression(MultiplicativeExpressionUnaryExpression),
    Super(MultiplicativeExpressionSuperToken),
}
impl RuleModel for MultiplicativeExpression {
    fn rule() -> Rule {
        Rule::MultiplicativeExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::MultiplicativeExpressionUnaryExpression => {
                MultiplicativeExpression::UnaryExpression(ctx.parse_ast())
            }
            Rule::MultiplicativeExpressionSuperToken => {
                MultiplicativeExpression::Super(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(*), Raw(/), Raw(%), Raw(~/), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum MultiplicativeOperator {
    Asterisk(Token),
    Divide(Token),
    Modulus(Token),
    IntegerDiv(Token),
}
impl RuleModel for MultiplicativeOperator {
    fn rule() -> Rule {
        Rule::MultiplicativeOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ASTERISK_TOKEN => MultiplicativeOperator::Asterisk(ctx.parse_token()),
            Rule::DIVIDE_TOKEN => MultiplicativeOperator::Divide(ctx.parse_token()),
            Rule::MODULUS_TOKEN => MultiplicativeOperator::Modulus(ctx.parse_token()),
            Rule::INTEGER_DIV_TOKEN => MultiplicativeOperator::IntegerDiv(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(prefixOperator), Id(unaryExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnaryExpressionPrefixOperator {
    pub prefix_operator: PrefixOperator,
    pub unary_expression: UnaryExpression,
}
impl RuleModel for UnaryExpressionPrefixOperator {
    fn rule() -> Rule {
        Rule::UnaryExpressionPrefixOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            prefix_operator: ctx.parse_ast(),
            unary_expression: ctx.parse_ast(),
        }
    }
}

/// Or( Id(minusOperator), Id(tildeOperator), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum UnaryOperator {
    MinusOperator(MinusOperator),
    TildeOperator(TildeOperator),
}
impl RuleModel for UnaryOperator {
    fn rule() -> Rule {
        Rule::UnaryOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::MinusOperator => UnaryOperator::MinusOperator(ctx.parse_token()),
            Rule::TildeOperator => UnaryOperator::TildeOperator(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Or( Id(minusOperator), Id(tildeOperator), ), Raw(super))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnaryExpressionSuperToken {
    pub unary_operator: UnaryOperator,
    pub super_token: Token,
}
impl RuleModel for UnaryExpressionSuperToken {
    fn rule() -> Rule {
        Rule::UnaryExpressionSuperToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            unary_operator: ctx.parse_ast(),
            super_token: ctx.parse_token(),
        }
    }
}

/// And(Id(incrementOperator), Id(assignableExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnaryExpressionIncrementOperator {
    pub increment_operator: IncrementOperator,
    pub assignable_expression: AssignableExpression,
}
impl RuleModel for UnaryExpressionIncrementOperator {
    fn rule() -> Rule {
        Rule::UnaryExpressionIncrementOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            increment_operator: ctx.parse_ast(),
            assignable_expression: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(prefixOperator), Id(unaryExpression)), Id(awaitExpression), Id(postfixExpression), And(Or( Id(minusOperator), Id(tildeOperator), ), Raw(super)), And(Id(incrementOperator), Id(assignableExpression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum UnaryExpressionInner {
    PrefixOperator(UnaryExpressionPrefixOperator),
    AwaitExpression(AwaitExpression),
    PostfixExpression(PostfixExpression),
    Super(UnaryExpressionSuperToken),
    IncrementOperator(UnaryExpressionIncrementOperator),
}

type UnaryExpression = Box<UnaryExpressionInner>;
impl RuleModel for UnaryExpression {
    fn rule() -> Rule {
        Rule::UnaryExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(match ctx.next_rule() {
            Rule::UnaryExpressionPrefixOperator => {
                UnaryExpressionInner::PrefixOperator(ctx.parse_ast())
            }
            Rule::AwaitExpression => UnaryExpressionInner::AwaitExpression(ctx.parse_ast()),
            Rule::PostfixExpression => UnaryExpressionInner::PostfixExpression(ctx.parse_ast()),
            Rule::UnaryExpressionSuperToken => UnaryExpressionInner::Super(ctx.parse_ast()),
            Rule::UnaryExpressionIncrementOperator => {
                UnaryExpressionInner::IncrementOperator(ctx.parse_ast())
            }
            _ => unreachable!(),
        })
    }
}

/// Or( Id(minusOperator), Id(negationOperator), Id(tildeOperator), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum PrefixOperator {
    MinusOperator(MinusOperator),
    NegationOperator(NegationOperator),
    TildeOperator(TildeOperator),
}
impl RuleModel for PrefixOperator {
    fn rule() -> Rule {
        Rule::PrefixOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::MinusOperator => PrefixOperator::MinusOperator(ctx.parse_token()),
            Rule::NegationOperator => PrefixOperator::NegationOperator(ctx.parse_token()),
            Rule::TildeOperator => PrefixOperator::TildeOperator(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// Raw(-)
pub type MinusOperator = Token;

/// Raw(!)
pub type NegationOperator = Token;

/// Raw(~)
pub type TildeOperator = Token;

/// And(Raw(await), Id(unaryExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AwaitExpression {
    pub await_token: Token,
    pub unary_expression: UnaryExpression,
}
impl RuleModel for AwaitExpression {
    fn rule() -> Rule {
        Rule::AwaitExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            await_token: ctx.parse_token(),
            unary_expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(assignableExpression), Id(postfixOperator))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostfixExpressionAssignableExpression {
    pub assignable_expression: AssignableExpression,
    pub postfix_operator: PostfixOperator,
}
impl RuleModel for PostfixExpressionAssignableExpression {
    fn rule() -> Rule {
        Rule::PostfixExpressionAssignableExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            assignable_expression: ctx.parse_ast(),
            postfix_operator: ctx.parse_ast(),
        }
    }
}

/// And(Id(primary), Modified(*,Id(selector)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostfixExpressionPrimary {
    pub primary: Primary,
    pub selector: Vec<Selector>,
}
impl RuleModel for PostfixExpressionPrimary {
    fn rule() -> Rule {
        Rule::PostfixExpressionPrimary
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            primary: ctx.parse_ast(),
            selector: ctx.parse_list(),
        }
    }
}

/// Or( And(Id(assignableExpression), Id(postfixOperator)), And(Id(primary), Modified(*,Id(selector))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum PostfixExpression {
    AssignableExpression(PostfixExpressionAssignableExpression),
    Primary(PostfixExpressionPrimary),
}
impl RuleModel for PostfixExpression {
    fn rule() -> Rule {
        Rule::PostfixExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::PostfixExpressionAssignableExpression => {
                PostfixExpression::AssignableExpression(ctx.parse_ast())
            }
            Rule::PostfixExpressionPrimary => PostfixExpression::Primary(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Id(incrementOperator)
pub type PostfixOperator = IncrementOperator;

/// And(Id(typeName), Id(typeArguments), Raw(.), Id(identifier), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorInvocation {
    pub type_name: TypeName,
    pub type_arguments: TypeArguments,
    pub period_token: Token,
    pub identifier: Identifier,
    pub arguments: Arguments,
}
impl RuleModel for ConstructorInvocation {
    fn rule() -> Rule {
        Rule::ConstructorInvocation
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_name: ctx.parse_ast(),
            type_arguments: ctx.parse_ast(),
            period_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
            arguments: ctx.parse_ast(),
        }
    }
}

/// Or( Raw(!), Id(assignableSelector), Id(argumentPart), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Selector {
    Exclamation(Token),
    AssignableSelector(AssignableSelector),
    ArgumentPart(ArgumentPart),
}
impl RuleModel for Selector {
    fn rule() -> Rule {
        Rule::Selector
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::EXCLAMATION_TOKEN => Selector::Exclamation(ctx.parse_token()),
            Rule::AssignableSelector => Selector::AssignableSelector(ctx.parse_ast()),
            Rule::ArgumentPart => Selector::ArgumentPart(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Id(typeArguments)), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArgumentPart {
    pub type_arguments: Option<TypeArguments>,
    pub arguments: Arguments,
}
impl RuleModel for ArgumentPart {
    fn rule() -> Rule {
        Rule::ArgumentPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_arguments: ctx.try_parse_ast(),
            arguments: ctx.parse_ast(),
        }
    }
}

/// Or( Raw(++), Raw(--), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum IncrementOperator {
    PlusPlus(Token),
    MinusMinus(Token),
}
impl RuleModel for IncrementOperator {
    fn rule() -> Rule {
        Rule::IncrementOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::PLUS_PLUS_TOKEN => IncrementOperator::PlusPlus(ctx.parse_token()),
            Rule::MINUS_MINUS_TOKEN => IncrementOperator::MinusMinus(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(primary), Id(assignableSelectorPart))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableExpressionPrimary {
    pub primary: Primary,
    pub assignable_selector_part: AssignableSelectorPart,
}
impl RuleModel for AssignableExpressionPrimary {
    fn rule() -> Rule {
        Rule::AssignableExpressionPrimary
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            primary: ctx.parse_ast(),
            assignable_selector_part: ctx.parse_ast(),
        }
    }
}

/// And(Raw(super), Id(unconditionalAssignableSelector))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableExpressionUnconditionalAssignableSelector {
    pub super_token: Token,
    pub unconditional_assignable_selector: UnconditionalAssignableSelector,
}
impl RuleModel for AssignableExpressionUnconditionalAssignableSelector {
    fn rule() -> Rule {
        Rule::AssignableExpressionUnconditionalAssignableSelector
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            super_token: ctx.parse_token(),
            unconditional_assignable_selector: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(primary), Id(assignableSelectorPart)), And(Raw(super), Id(unconditionalAssignableSelector)), Id(identifier), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AssignableExpression {
    Primary(AssignableExpressionPrimary),
    UnconditionalAssignableSelector(AssignableExpressionUnconditionalAssignableSelector),
    Identifier(Identifier),
}
impl RuleModel for AssignableExpression {
    fn rule() -> Rule {
        Rule::AssignableExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::AssignableExpressionPrimary => AssignableExpression::Primary(ctx.parse_ast()),
            Rule::AssignableExpressionUnconditionalAssignableSelector => {
                AssignableExpression::UnconditionalAssignableSelector(ctx.parse_ast())
            }
            Rule::Identifier => AssignableExpression::Identifier(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Modified(*,Id(selector)), Id(assignableSelector))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableSelectorPart {
    pub selector: Vec<Selector>,
    pub assignable_selector: AssignableSelector,
}
impl RuleModel for AssignableSelectorPart {
    fn rule() -> Rule {
        Rule::AssignableSelectorPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            selector: ctx.parse_list(),
            assignable_selector: ctx.parse_ast(),
        }
    }
}

/// And(Raw([), Id(expression), Raw(]))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnconditionalAssignableSelectorExpression {
    pub open_square_bracket_token: Token,
    pub expression: Expression,
    pub close_square_bracket_token: Token,
}
impl RuleModel for UnconditionalAssignableSelectorExpression {
    fn rule() -> Rule {
        Rule::UnconditionalAssignableSelectorExpression
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_square_bracket_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_square_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnconditionalAssignableSelectorIdentifier {
    pub period_token: Token,
    pub identifier: Identifier,
}
impl RuleModel for UnconditionalAssignableSelectorIdentifier {
    fn rule() -> Rule {
        Rule::UnconditionalAssignableSelectorIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            period_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// Or( And(Raw([), Id(expression), Raw(])), And(Raw(.), Id(identifier)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum UnconditionalAssignableSelector {
    Expression(UnconditionalAssignableSelectorExpression),
    Identifier(UnconditionalAssignableSelectorIdentifier),
}
impl RuleModel for UnconditionalAssignableSelector {
    fn rule() -> Rule {
        Rule::UnconditionalAssignableSelector
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::UnconditionalAssignableSelectorExpression => {
                UnconditionalAssignableSelector::Expression(ctx.parse_ast())
            }
            Rule::UnconditionalAssignableSelectorIdentifier => {
                UnconditionalAssignableSelector::Identifier(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw(?.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableSelectorIdentifier {
    pub question_id_token: Token,
    pub identifier: Identifier,
}
impl RuleModel for AssignableSelectorIdentifier {
    fn rule() -> Rule {
        Rule::AssignableSelectorIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            question_id_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Raw(?), Raw([), Id(expression), Raw(]))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableSelectorQuestionToken {
    pub question_token: Token,
    pub open_square_bracket_token: Token,
    pub expression: Expression,
    pub close_square_bracket_token: Token,
}
impl RuleModel for AssignableSelectorQuestionToken {
    fn rule() -> Rule {
        Rule::AssignableSelectorQuestionToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            question_token: ctx.parse_token(),
            open_square_bracket_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_square_bracket_token: ctx.parse_token(),
        }
    }
}

/// Or( Id(unconditionalAssignableSelector), And(Raw(?.), Id(identifier)), And(Raw(?), Raw([), Id(expression), Raw(])), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AssignableSelector {
    UnconditionalAssignableSelector(UnconditionalAssignableSelector),
    Identifier(AssignableSelectorIdentifier),
    Question(AssignableSelectorQuestionToken),
}
impl RuleModel for AssignableSelector {
    fn rule() -> Rule {
        Rule::AssignableSelector
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::UnconditionalAssignableSelector => {
                AssignableSelector::UnconditionalAssignableSelector(ctx.parse_ast())
            }
            Rule::AssignableSelectorIdentifier => AssignableSelector::Identifier(ctx.parse_ast()),
            Rule::AssignableSelectorQuestionToken => AssignableSelector::Question(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Or( Id(IDENTIFIER), Id(BUILT_IN_IDENTIFIER), Id(OTHER_IDENTIFIER), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Identifier {
    Identifier(Token),
    BuiltInIdentifier(Token),
    OtherIdentifier(Token),
}
impl RuleModel for Identifier {
    fn rule() -> Rule {
        Rule::Identifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::IDENTIFIER => Identifier::Identifier(ctx.parse_token()),
            Rule::BUILT_IN_IDENTIFIER => Identifier::BuiltInIdentifier(ctx.parse_token()),
            Rule::OTHER_IDENTIFIER => Identifier::OtherIdentifier(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// Or( Id(IDENTIFIER), Id(OTHER_IDENTIFIER), Raw(dynamic), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeIdentifier {
    Identifier(Token),
    OtherIdentifier(Token),
    Dynamic(Token),
}
impl RuleModel for TypeIdentifier {
    fn rule() -> Rule {
        Rule::TypeIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::IDENTIFIER => TypeIdentifier::Identifier(ctx.parse_token()),
            Rule::OTHER_IDENTIFIER => TypeIdentifier::OtherIdentifier(ctx.parse_token()),
            Rule::DYNAMIC_TOKEN => TypeIdentifier::Dynamic(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(typeIdentifier), Raw(.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QualifiedNameSingle {
    pub type_identifier: TypeIdentifier,
    pub period_token: Token,
    pub identifier: Identifier,
}
impl RuleModel for QualifiedNameSingle {
    fn rule() -> Rule {
        Rule::QualifiedNameSingle
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_identifier: ctx.parse_ast(),
            period_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Id(typeIdentifier), Raw(.), Id(typeIdentifier), Raw(.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QualifiedNameDouble {
    pub type_identifier: TypeIdentifier,
    pub period_token: Token,
    pub type_identifier2: TypeIdentifier,
    pub period_token2: Token,
    pub identifier: Identifier,
}
impl RuleModel for QualifiedNameDouble {
    fn rule() -> Rule {
        Rule::QualifiedNameDouble
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_identifier: ctx.parse_ast(),
            period_token: ctx.parse_token(),
            type_identifier2: ctx.parse_ast(),
            period_token2: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(typeIdentifier), Raw(.), Id(identifier)), And(Id(typeIdentifier), Raw(.), Id(typeIdentifier), Raw(.), Id(identifier)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum QualifiedName {
    QualifiedNameSingle(QualifiedNameSingle),
    QualifiedNameDouble(QualifiedNameDouble),
}
impl RuleModel for QualifiedName {
    fn rule() -> Rule {
        Rule::QualifiedName
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::QualifiedNameSingle => QualifiedName::QualifiedNameSingle(ctx.parse_ast()),
            Rule::QualifiedNameDouble => QualifiedName::QualifiedNameDouble(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(isOperator), Id(typeNotVoid))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeTest {
    pub is_operator: IsOperator,
    pub type_not_void: TypeNotVoid,
}
impl RuleModel for TypeTest {
    fn rule() -> Rule {
        Rule::TypeTest
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            is_operator: ctx.parse_ast(),
            type_not_void: ctx.parse_ast(),
        }
    }
}

/// And(Raw(is), Modified(?,Raw(!)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IsOperator {
    pub is_token: Token,
    pub exclamation_token: Option<Token>,
}
impl RuleModel for IsOperator {
    fn rule() -> Rule {
        Rule::IsOperator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            is_token: ctx.parse_token(),
            exclamation_token: if ctx.is_rule_next(Rule::EXCLAMATION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Id(asOperator), Id(typeNotVoid))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeCast {
    pub as_operator: AsOperator,
    pub type_not_void: TypeNotVoid,
}
impl RuleModel for TypeCast {
    fn rule() -> Rule {
        Rule::TypeCast
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            as_operator: ctx.parse_token(),
            type_not_void: ctx.parse_ast(),
        }
    }
}

/// Raw(as)
pub type AsOperator = Token;

/// Modified(*,Id(statement))
pub type Statements = Vec<Statement>;
impl RuleModel for Statements {
    fn rule() -> Rule {
        Rule::Statements
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        ctx.parse_list()
    }
}

/// And(Modified(*,Id(label)), Id(nonLabelledStatement))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StatementInner {
    pub label: Vec<Label>,
    pub non_labelled_statement: NonLabelledStatement,
}

type Statement = Box<StatementInner>;
impl RuleModel for Statement {
    fn rule() -> Rule {
        Rule::Statement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(StatementInner {
            label: ctx.parse_list(),
            non_labelled_statement: ctx.parse_ast(),
        })
    }
}

/// Or( Id(block), Id(localVariableDeclaration), Id(forStatement), Id(whileStatement), Id(doStatement), Id(switchStatement), Id(ifStatement), Id(rethrowStatement), Id(tryStatement), Id(breakStatement), Id(continueStatement), Id(returnStatement), Id(yieldStatement), Id(yieldEachStatement), Id(expressionStatement), Id(assertStatement), Id(localFunctionDeclaration), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum NonLabelledStatement {
    Block(Block),
    LocalVariableDeclaration(LocalVariableDeclaration),
    ForStatement(ForStatement),
    WhileStatement(WhileStatement),
    DoStatement(DoStatement),
    SwitchStatement(SwitchStatement),
    IfStatement(IfStatement),
    RethrowStatement(RethrowStatement),
    TryStatement(TryStatement),
    BreakStatement(BreakStatement),
    ContinueStatement(ContinueStatement),
    ReturnStatement(ReturnStatement),
    YieldStatement(YieldStatement),
    YieldEachStatement(YieldEachStatement),
    ExpressionStatement(ExpressionStatement),
    AssertStatement(AssertStatement),
    LocalFunctionDeclaration(LocalFunctionDeclaration),
}
impl RuleModel for NonLabelledStatement {
    fn rule() -> Rule {
        Rule::NonLabelledStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::Block => NonLabelledStatement::Block(ctx.parse_ast()),
            Rule::LocalVariableDeclaration => {
                NonLabelledStatement::LocalVariableDeclaration(ctx.parse_ast())
            }
            Rule::ForStatement => NonLabelledStatement::ForStatement(ctx.parse_ast()),
            Rule::WhileStatement => NonLabelledStatement::WhileStatement(ctx.parse_ast()),
            Rule::DoStatement => NonLabelledStatement::DoStatement(ctx.parse_ast()),
            Rule::SwitchStatement => NonLabelledStatement::SwitchStatement(ctx.parse_ast()),
            Rule::IfStatement => NonLabelledStatement::IfStatement(ctx.parse_ast()),
            Rule::RethrowStatement => NonLabelledStatement::RethrowStatement(ctx.parse_ast()),
            Rule::TryStatement => NonLabelledStatement::TryStatement(ctx.parse_ast()),
            Rule::BreakStatement => NonLabelledStatement::BreakStatement(ctx.parse_ast()),
            Rule::ContinueStatement => NonLabelledStatement::ContinueStatement(ctx.parse_ast()),
            Rule::ReturnStatement => NonLabelledStatement::ReturnStatement(ctx.parse_ast()),
            Rule::YieldStatement => NonLabelledStatement::YieldStatement(ctx.parse_ast()),
            Rule::YieldEachStatement => NonLabelledStatement::YieldEachStatement(ctx.parse_ast()),
            Rule::ExpressionStatement => NonLabelledStatement::ExpressionStatement(ctx.parse_ast()),
            Rule::AssertStatement => NonLabelledStatement::AssertStatement(ctx.parse_ast()),
            Rule::LocalFunctionDeclaration => {
                NonLabelledStatement::LocalFunctionDeclaration(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Id(expression)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionStatement {
    pub expression: Option<Expression>,
    pub semicolon_token: Token,
}
impl RuleModel for ExpressionStatement {
    fn rule() -> Rule {
        Rule::ExpressionStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            expression: ctx.try_parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Id(initializedVariableDeclaration), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalVariableDeclaration {
    pub metadata: Metadata,
    pub initialized_variable_declaration: InitializedVariableDeclaration,
    pub semicolon_token: Token,
}
impl RuleModel for LocalVariableDeclaration {
    fn rule() -> Rule {
        Rule::LocalVariableDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            initialized_variable_declaration: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Id(functionSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalFunctionDeclaration {
    pub metadata: Metadata,
    pub function_signature: FunctionSignature,
    pub function_body: FunctionBody,
}
impl RuleModel for LocalFunctionDeclaration {
    fn rule() -> Rule {
        Rule::LocalFunctionDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            function_signature: ctx.parse_ast(),
            function_body: ctx.parse_ast(),
        }
    }
}

/// And(Raw(else), Id(statement))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StatementElse {
    pub else_token: Token,
    pub statement: Statement,
}
impl RuleModel for StatementElse {
    fn rule() -> Rule {
        Rule::StatementElse
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            else_token: ctx.parse_token(),
            statement: ctx.parse_ast(),
        }
    }
}

/// And(Raw(if), Raw((), Id(expression), Raw()), Id(statement), Modified(?,And(Raw(else), Id(statement))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IfStatement {
    pub if_token: Token,
    pub open_paren_token: Token,
    pub expression: Expression,
    pub close_paren_token: Token,
    pub statement: Statement,
    pub statement_else: Option<StatementElse>,
}
impl RuleModel for IfStatement {
    fn rule() -> Rule {
        Rule::IfStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            if_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
            statement: ctx.parse_ast(),
            statement_else: ctx.try_parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(await)), Raw(for), Raw((), Id(forLoopParts), Raw()), Id(statement))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForStatement {
    pub await_token: Option<Token>,
    pub for_token: Token,
    pub open_paren_token: Token,
    pub for_loop_parts: ForLoopParts,
    pub close_paren_token: Token,
    pub statement: Statement,
}
impl RuleModel for ForStatement {
    fn rule() -> Rule {
        Rule::ForStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            await_token: if ctx.is_rule_next(Rule::AWAIT_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            for_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            for_loop_parts: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
            statement: ctx.parse_ast(),
        }
    }
}

/// And(Id(forInitializerStatement), Modified(?,Id(expression)), Raw(;), Modified(?,Id(expressionList)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForLoopPartsSemicolonToken {
    pub for_initializer_statement: ForInitializerStatement,
    pub expression: Option<Expression>,
    pub semicolon_token: Token,
    pub expression_list: Option<ExpressionList>,
}
impl RuleModel for ForLoopPartsSemicolonToken {
    fn rule() -> Rule {
        Rule::ForLoopPartsSemicolonToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            for_initializer_statement: ctx.parse_ast(),
            expression: ctx.try_parse_ast(),
            semicolon_token: ctx.parse_token(),
            expression_list: ctx.try_parse_ast(),
        }
    }
}

/// And(Id(metadata), Id(declaredIdentifier), Raw(in), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForLoopPartsMetadata {
    pub metadata: Metadata,
    pub declared_identifier: DeclaredIdentifier,
    pub in_token: Token,
    pub expression: Expression,
}
impl RuleModel for ForLoopPartsMetadata {
    fn rule() -> Rule {
        Rule::ForLoopPartsMetadata
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            declared_identifier: ctx.parse_ast(),
            in_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// And(Id(identifier), Raw(in), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForLoopPartsInToken {
    pub identifier: Identifier,
    pub in_token: Token,
    pub expression: Expression,
}
impl RuleModel for ForLoopPartsInToken {
    fn rule() -> Rule {
        Rule::ForLoopPartsInToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            identifier: ctx.parse_ast(),
            in_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(forInitializerStatement), Modified(?,Id(expression)), Raw(;), Modified(?,Id(expressionList))), And(Id(metadata), Id(declaredIdentifier), Raw(in), Id(expression)), And(Id(identifier), Raw(in), Id(expression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ForLoopParts {
    Semicolon(ForLoopPartsSemicolonToken),
    Metadata(ForLoopPartsMetadata),
    In(ForLoopPartsInToken),
}
impl RuleModel for ForLoopParts {
    fn rule() -> Rule {
        Rule::ForLoopParts
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ForLoopPartsSemicolonToken => ForLoopParts::Semicolon(ctx.parse_ast()),
            Rule::ForLoopPartsMetadata => ForLoopParts::Metadata(ctx.parse_ast()),
            Rule::ForLoopPartsInToken => ForLoopParts::In(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Modified(?,Id(expression)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForInitializerStatementSemicolonToken {
    pub expression: Option<Expression>,
    pub semicolon_token: Token,
}
impl RuleModel for ForInitializerStatementSemicolonToken {
    fn rule() -> Rule {
        Rule::ForInitializerStatementSemicolonToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            expression: ctx.try_parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// Or( Id(localVariableDeclaration), And(Modified(?,Id(expression)), Raw(;)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ForInitializerStatement {
    LocalVariableDeclaration(LocalVariableDeclaration),
    Semicolon(ForInitializerStatementSemicolonToken),
}
impl RuleModel for ForInitializerStatement {
    fn rule() -> Rule {
        Rule::ForInitializerStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::LocalVariableDeclaration => {
                ForInitializerStatement::LocalVariableDeclaration(ctx.parse_ast())
            }
            Rule::ForInitializerStatementSemicolonToken => {
                ForInitializerStatement::Semicolon(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw(while), Raw((), Id(expression), Raw()), Id(statement))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WhileStatement {
    pub while_token: Token,
    pub open_paren_token: Token,
    pub expression: Expression,
    pub close_paren_token: Token,
    pub statement: Statement,
}
impl RuleModel for WhileStatement {
    fn rule() -> Rule {
        Rule::WhileStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            while_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
            statement: ctx.parse_ast(),
        }
    }
}

/// And(Raw(do), Id(statement), Raw(while), Raw((), Id(expression), Raw()), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DoStatement {
    pub do_token: Token,
    pub statement: Statement,
    pub while_token: Token,
    pub open_paren_token: Token,
    pub expression: Expression,
    pub close_paren_token: Token,
    pub semicolon_token: Token,
}
impl RuleModel for DoStatement {
    fn rule() -> Rule {
        Rule::DoStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            do_token: ctx.parse_token(),
            statement: ctx.parse_ast(),
            while_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(switch), Raw((), Id(expression), Raw()), Raw({), Modified(*,Id(switchCase)), Modified(?,Id(defaultCase)), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SwitchStatement {
    pub switch_token: Token,
    pub open_paren_token: Token,
    pub expression: Expression,
    pub close_paren_token: Token,
    pub open_curly_bracket_token: Token,
    pub switch_case: Vec<SwitchCase>,
    pub default_case: Option<DefaultCase>,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for SwitchStatement {
    fn rule() -> Rule {
        Rule::SwitchStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            switch_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
            open_curly_bracket_token: ctx.parse_token(),
            switch_case: ctx.parse_list(),
            default_case: ctx.try_parse_ast(),
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Modified(*,Id(label)), Raw(case), Id(expression), Raw(:), Id(statements))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SwitchCase {
    pub label: Vec<Label>,
    pub case_token: Token,
    pub expression: Expression,
    pub colon_token: Token,
    pub statements: Statements,
}
impl RuleModel for SwitchCase {
    fn rule() -> Rule {
        Rule::SwitchCase
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            label: ctx.parse_list(),
            case_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            colon_token: ctx.parse_token(),
            statements: ctx.parse_ast(),
        }
    }
}

/// And(Modified(*,Id(label)), Raw(default), Raw(:), Id(statements))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultCase {
    pub label: Vec<Label>,
    pub default_token: Token,
    pub colon_token: Token,
    pub statements: Statements,
}
impl RuleModel for DefaultCase {
    fn rule() -> Rule {
        Rule::DefaultCase
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            label: ctx.parse_list(),
            default_token: ctx.parse_token(),
            colon_token: ctx.parse_token(),
            statements: ctx.parse_ast(),
        }
    }
}

/// And(Raw(rethrow), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RethrowStatement {
    pub rethrow_token: Token,
    pub semicolon_token: Token,
}
impl RuleModel for RethrowStatement {
    fn rule() -> Rule {
        Rule::RethrowStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            rethrow_token: ctx.parse_token(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TryStatementOnPart {
    pub on_part: Vec<OnPart>,
    pub finally_part: Option<FinallyPart>,
}
impl RuleModel for TryStatementOnPart {
    fn rule() -> Rule {
        Rule::TryStatementOnPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            on_part: ctx.parse_list(),
            finally_part: ctx.try_parse_ast(),
        }
    }
}

/// Or( And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart))), Id(finallyPart), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TryStatementCatchFinally {
    TryStatementOnPart(TryStatementOnPart),
    FinallyPart(FinallyPart),
}
impl RuleModel for TryStatementCatchFinally {
    fn rule() -> Rule {
        Rule::TryStatementCatchFinally
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TryStatementOnPart => {
                TryStatementCatchFinally::TryStatementOnPart(ctx.parse_ast())
            }
            Rule::FinallyPart => TryStatementCatchFinally::FinallyPart(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(try), Id(block), Or( And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart))), Id(finallyPart), ))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TryStatement {
    pub try_token: Token,
    pub block: Block,
    pub try_statement_catch_finally: TryStatementCatchFinally,
}
impl RuleModel for TryStatement {
    fn rule() -> Rule {
        Rule::TryStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            try_token: ctx.parse_token(),
            block: ctx.parse_ast(),
            try_statement_catch_finally: ctx.parse_ast(),
        }
    }
}

/// And(Id(catchPart), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OnPartCatchPart {
    pub catch_part: CatchPart,
    pub block: Block,
}
impl RuleModel for OnPartCatchPart {
    fn rule() -> Rule {
        Rule::OnPartCatchPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            catch_part: ctx.parse_ast(),
            block: ctx.parse_ast(),
        }
    }
}

/// And(Raw(on), Id(typeNotVoid), Modified(?,Id(catchPart)), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OnPartTypeNotVoid {
    pub on_token: Token,
    pub type_not_void: TypeNotVoid,
    pub catch_part: Option<CatchPart>,
    pub block: Block,
}
impl RuleModel for OnPartTypeNotVoid {
    fn rule() -> Rule {
        Rule::OnPartTypeNotVoid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            on_token: ctx.parse_token(),
            type_not_void: ctx.parse_ast(),
            catch_part: ctx.try_parse_ast(),
            block: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(catchPart), Id(block)), And(Raw(on), Id(typeNotVoid), Modified(?,Id(catchPart)), Id(block)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum OnPart {
    CatchPart(OnPartCatchPart),
    TypeNotVoid(OnPartTypeNotVoid),
}
impl RuleModel for OnPart {
    fn rule() -> Rule {
        Rule::OnPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::OnPartCatchPart => OnPart::CatchPart(ctx.parse_ast()),
            Rule::OnPartTypeNotVoid => OnPart::TypeNotVoid(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Raw(,), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierItem {
    pub comma_token: Token,
    pub identifier: Identifier,
}
impl RuleModel for IdentifierItem {
    fn rule() -> Rule {
        Rule::IdentifierItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Raw(catch), Raw((), Id(identifier), Modified(?,And(Raw(,), Id(identifier))), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CatchPart {
    pub catch_token: Token,
    pub open_paren_token: Token,
    pub identifier: Identifier,
    pub identifier_item: Option<IdentifierItem>,
    pub close_paren_token: Token,
}
impl RuleModel for CatchPart {
    fn rule() -> Rule {
        Rule::CatchPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            catch_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
            identifier_item: ctx.try_parse_ast(),
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(finally), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FinallyPart {
    pub finally_token: Token,
    pub block: Block,
}
impl RuleModel for FinallyPart {
    fn rule() -> Rule {
        Rule::FinallyPart
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            finally_token: ctx.parse_token(),
            block: ctx.parse_ast(),
        }
    }
}

/// And(Raw(return), Modified(?,Id(expression)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ReturnStatement {
    pub return_token: Token,
    pub expression: Option<Expression>,
    pub semicolon_token: Token,
}
impl RuleModel for ReturnStatement {
    fn rule() -> Rule {
        Rule::ReturnStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            return_token: ctx.parse_token(),
            expression: ctx.try_parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(identifier), Raw(:))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Label {
    pub identifier: Identifier,
    pub colon_token: Token,
}
impl RuleModel for Label {
    fn rule() -> Rule {
        Rule::Label
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            identifier: ctx.parse_ast(),
            colon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(break), Modified(?,Id(identifier)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreakStatement {
    pub break_token: Token,
    pub identifier: Option<Identifier>,
    pub semicolon_token: Token,
}
impl RuleModel for BreakStatement {
    fn rule() -> Rule {
        Rule::BreakStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            break_token: ctx.parse_token(),
            identifier: ctx.try_parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(continue), Modified(?,Id(identifier)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContinueStatement {
    pub continue_token: Token,
    pub identifier: Option<Identifier>,
    pub semicolon_token: Token,
}
impl RuleModel for ContinueStatement {
    fn rule() -> Rule {
        Rule::ContinueStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            continue_token: ctx.parse_token(),
            identifier: ctx.try_parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(yield), Id(expression), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct YieldStatement {
    pub yield_token: Token,
    pub expression: Expression,
    pub semicolon_token: Token,
}
impl RuleModel for YieldStatement {
    fn rule() -> Rule {
        Rule::YieldStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            yield_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(yield), Raw(*), Id(expression), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct YieldEachStatement {
    pub yield_token: Token,
    pub asterisk_token: Token,
    pub expression: Expression,
    pub semicolon_token: Token,
}
impl RuleModel for YieldEachStatement {
    fn rule() -> Rule {
        Rule::YieldEachStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            yield_token: ctx.parse_token(),
            asterisk_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(assertion), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssertStatement {
    pub assertion: Assertion,
    pub semicolon_token: Token,
}
impl RuleModel for AssertStatement {
    fn rule() -> Rule {
        Rule::AssertStatement
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            assertion: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(assert), Raw((), Id(expression), Modified(?,And(Raw(,), Id(expression))), Modified(?,Raw(,)), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Assertion {
    pub assert_token: Token,
    pub open_paren_token: Token,
    pub expression: Expression,
    pub expression_item: Option<ExpressionItem>,
    pub comma_token: Option<Token>,
    pub close_paren_token: Token,
}
impl RuleModel for Assertion {
    fn rule() -> Rule {
        Rule::Assertion
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            assert_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            expression: ctx.parse_ast(),
            expression_item: ctx.try_parse_ast(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(external), Id(functionSignature), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalFunctionSignature {
    pub external_token: Token,
    pub function_signature: FunctionSignature,
    pub semicolon_token: Token,
}
impl RuleModel for ExternalFunctionSignature {
    fn rule() -> Rule {
        Rule::ExternalFunctionSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_token: ctx.parse_token(),
            function_signature: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(external), Id(getterSignature), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalGetterSignature {
    pub external_token: Token,
    pub getter_signature: GetterSignature,
    pub semicolon_token: Token,
}
impl RuleModel for ExternalGetterSignature {
    fn rule() -> Rule {
        Rule::ExternalGetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_token: ctx.parse_token(),
            getter_signature: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(external), Id(setterSignature), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalSetterSignature {
    pub external_token: Token,
    pub setter_signature: SetterSignature,
    pub semicolon_token: Token,
}
impl RuleModel for ExternalSetterSignature {
    fn rule() -> Rule {
        Rule::ExternalSetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            external_token: ctx.parse_token(),
            setter_signature: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(functionSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationFunctionSignature {
    pub function_signature: FunctionSignature,
    pub function_body: FunctionBody,
}
impl RuleModel for TopLevelDeclarationFunctionSignature {
    fn rule() -> Rule {
        Rule::TopLevelDeclarationFunctionSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_signature: ctx.parse_ast(),
            function_body: ctx.parse_ast(),
        }
    }
}

/// And(Id(getterSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationGetterSignature {
    pub getter_signature: GetterSignature,
    pub function_body: FunctionBody,
}
impl RuleModel for TopLevelDeclarationGetterSignature {
    fn rule() -> Rule {
        Rule::TopLevelDeclarationGetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            getter_signature: ctx.parse_ast(),
            function_body: ctx.parse_ast(),
        }
    }
}

/// And(Id(setterSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationSetterSignature {
    pub setter_signature: SetterSignature,
    pub function_body: FunctionBody,
}
impl RuleModel for TopLevelDeclarationSetterSignature {
    fn rule() -> Rule {
        Rule::TopLevelDeclarationSetterSignature
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            setter_signature: ctx.parse_ast(),
            function_body: ctx.parse_ast(),
        }
    }
}

/// Or( Raw(final), Raw(const), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FinalOrConst {
    Final(Token),
    Const(Token),
}
impl RuleModel for FinalOrConst {
    fn rule() -> Rule {
        Rule::FinalOrConst
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::FINAL_TOKEN => FinalOrConst::Final(ctx.parse_token()),
            Rule::CONST_TOKEN => FinalOrConst::Const(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}

/// And(Or( Raw(final), Raw(const), ), Modified(?,Id(type)), Id(staticFinalDeclarationList), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationSemicolonToken {
    pub final_or_const: FinalOrConst,
    pub dart_type: Option<Type>,
    pub static_final_declaration_list: StaticFinalDeclarationList,
    pub semicolon_token: Token,
}
impl RuleModel for TopLevelDeclarationSemicolonToken {
    fn rule() -> Rule {
        Rule::TopLevelDeclarationSemicolonToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            final_or_const: ctx.parse_ast(),
            dart_type: ctx.try_parse_ast(),
            static_final_declaration_list: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationLateToken {
    pub late_token: Token,
    pub final_token: Token,
    pub dart_type: Option<Type>,
    pub initialized_identifier_list: InitializedIdentifierList,
    pub semicolon_token: Token,
}
impl RuleModel for TopLevelDeclarationLateToken {
    fn rule() -> Rule {
        Rule::TopLevelDeclarationLateToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            late_token: ctx.parse_token(),
            final_token: ctx.parse_token(),
            dart_type: ctx.try_parse_ast(),
            initialized_identifier_list: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationVarOrType {
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
    pub initialized_identifier_list: InitializedIdentifierList,
    pub semicolon_token: Token,
}
impl RuleModel for TopLevelDeclarationVarOrType {
    fn rule() -> Rule {
        Rule::TopLevelDeclarationVarOrType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            late_token: if ctx.is_rule_next(Rule::LATE_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            var_or_type: ctx.parse_ast(),
            initialized_identifier_list: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// Or( Id(classDeclaration), Id(mixinDeclaration), Id(extensionDeclaration), Id(enumType), Id(typeAlias), And(Raw(external), Id(functionSignature), Raw(;)), And(Raw(external), Id(getterSignature), Raw(;)), And(Raw(external), Id(setterSignature), Raw(;)), And(Id(functionSignature), Id(functionBody)), And(Id(getterSignature), Id(functionBody)), And(Id(setterSignature), Id(functionBody)), And(Or( Raw(final), Raw(const), ), Modified(?,Id(type)), Id(staticFinalDeclarationList), Raw(;)), And(Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList), Raw(;)), And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList), Raw(;)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TopLevelDeclaration {
    ClassDeclaration(ClassDeclaration),
    MixinDeclaration(MixinDeclaration),
    ExtensionDeclaration(ExtensionDeclaration),
    EnumType(EnumType),
    TypeAlias(TypeAlias),
    ExternalFunctionSignature(ExternalFunctionSignature),
    ExternalGetterSignature(ExternalGetterSignature),
    ExternalSetterSignature(ExternalSetterSignature),
    FunctionSignature(TopLevelDeclarationFunctionSignature),
    GetterSignature(TopLevelDeclarationGetterSignature),
    SetterSignature(TopLevelDeclarationSetterSignature),
    Semicolon(TopLevelDeclarationSemicolonToken),
    Late(TopLevelDeclarationLateToken),
    VarOrType(TopLevelDeclarationVarOrType),
}
impl RuleModel for TopLevelDeclaration {
    fn rule() -> Rule {
        Rule::TopLevelDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ClassDeclaration => TopLevelDeclaration::ClassDeclaration(ctx.parse_ast()),
            Rule::MixinDeclaration => TopLevelDeclaration::MixinDeclaration(ctx.parse_ast()),
            Rule::ExtensionDeclaration => {
                TopLevelDeclaration::ExtensionDeclaration(ctx.parse_ast())
            }
            Rule::EnumType => TopLevelDeclaration::EnumType(ctx.parse_ast()),
            Rule::TypeAlias => TopLevelDeclaration::TypeAlias(ctx.parse_ast()),
            Rule::ExternalFunctionSignature => {
                TopLevelDeclaration::ExternalFunctionSignature(ctx.parse_ast())
            }
            Rule::ExternalGetterSignature => {
                TopLevelDeclaration::ExternalGetterSignature(ctx.parse_ast())
            }
            Rule::ExternalSetterSignature => {
                TopLevelDeclaration::ExternalSetterSignature(ctx.parse_ast())
            }
            Rule::TopLevelDeclarationFunctionSignature => {
                TopLevelDeclaration::FunctionSignature(ctx.parse_ast())
            }
            Rule::TopLevelDeclarationGetterSignature => {
                TopLevelDeclaration::GetterSignature(ctx.parse_ast())
            }
            Rule::TopLevelDeclarationSetterSignature => {
                TopLevelDeclaration::SetterSignature(ctx.parse_ast())
            }
            Rule::TopLevelDeclarationSemicolonToken => {
                TopLevelDeclaration::Semicolon(ctx.parse_ast())
            }
            Rule::TopLevelDeclarationLateToken => TopLevelDeclaration::Late(ctx.parse_ast()),
            Rule::TopLevelDeclarationVarOrType => TopLevelDeclaration::VarOrType(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(metadata), Id(topLevelDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LibraryDeclarationMetadata {
    pub metadata: Metadata,
    pub top_level_declaration: TopLevelDeclaration,
}
impl RuleModel for LibraryDeclarationMetadata {
    fn rule() -> Rule {
        Rule::LibraryDeclarationMetadata
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            top_level_declaration: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Id(scriptTag)), Modified(?,Id(libraryName)), Modified(*,Id(importOrExport)), Modified(*,Id(partDirective)), Modified(*,And(Id(metadata), Id(topLevelDeclaration))), Id(EOF))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LibraryDeclaration {
    pub script_tag: Option<ScriptTag>,
    pub library_name: Option<LibraryName>,
    pub import_or_export: Vec<ImportOrExport>,
    pub part_directive: Vec<PartDirective>,
    pub metadata: Vec<LibraryDeclarationMetadata>,
    pub eof: Token,
}
impl RuleModel for LibraryDeclaration {
    fn rule() -> Rule {
        Rule::LibraryDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            script_tag: ctx.try_parse_ast(),
            library_name: ctx.try_parse_ast(),
            import_or_export: ctx.parse_list(),
            part_directive: ctx.parse_list(),
            metadata: ctx.parse_list(),
            eof: ctx.parse_token(),
        }
    }
}

/// And(Raw(#!), Id(SCRIPT_TAG_CONTENT), Id(NEWLINE))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ScriptTag {
    pub hash_exclamation_token: Token,
    pub script_tag_content: Token,
    pub newline: Token,
}
impl RuleModel for ScriptTag {
    fn rule() -> Rule {
        Rule::ScriptTag
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            hash_exclamation_token: ctx.parse_token(),
            script_tag_content: ctx.parse_token(),
            newline: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Raw(library), Id(dottedIdentifierList), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LibraryName {
    pub metadata: Metadata,
    pub library_token: Token,
    pub dotted_identifier_list: DottedIdentifierList,
    pub semicolon_token: Token,
}
impl RuleModel for LibraryName {
    fn rule() -> Rule {
        Rule::LibraryName
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            library_token: ctx.parse_token(),
            dotted_identifier_list: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// Or( Id(libraryImport), Id(libraryExport), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ImportOrExport {
    LibraryImport(LibraryImport),
    LibraryExport(LibraryExport),
}
impl RuleModel for ImportOrExport {
    fn rule() -> Rule {
        Rule::ImportOrExport
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::LibraryImport => ImportOrExport::LibraryImport(ctx.parse_ast()),
            Rule::LibraryExport => ImportOrExport::LibraryExport(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(identifier), Modified(*,And(Raw(.), Id(identifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DottedIdentifierList {
    pub identifier: Identifier,
    pub identifier_selector: Vec<IdentifierSelector>,
}
impl RuleModel for DottedIdentifierList {
    fn rule() -> Rule {
        Rule::DottedIdentifierList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            identifier: ctx.parse_ast(),
            identifier_selector: ctx.parse_list(),
        }
    }
}

/// And(Id(metadata), Id(importSpecification))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LibraryImport {
    pub metadata: Metadata,
    pub import_specification: ImportSpecification,
}
impl RuleModel for LibraryImport {
    fn rule() -> Rule {
        Rule::LibraryImport
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            import_specification: ctx.parse_ast(),
        }
    }
}

/// And(Modified(?,Raw(deferred)), Raw(as), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ImportSpecificationAsToken {
    pub deferred_token: Option<Token>,
    pub as_token: Token,
    pub identifier: Identifier,
}
impl RuleModel for ImportSpecificationAsToken {
    fn rule() -> Rule {
        Rule::ImportSpecificationAsToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            deferred_token: if ctx.is_rule_next(Rule::DEFERRED_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            as_token: ctx.parse_token(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Raw(import), Id(configurableUri), Modified(?,And(Modified(?,Raw(deferred)), Raw(as), Id(identifier))), Modified(*,Id(combinator)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ImportSpecification {
    pub import_token: Token,
    pub configurable_uri: ConfigurableUri,
    pub as_token: Option<ImportSpecificationAsToken>,
    pub combinator: Vec<Combinator>,
    pub semicolon_token: Token,
}
impl RuleModel for ImportSpecification {
    fn rule() -> Rule {
        Rule::ImportSpecification
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            import_token: ctx.parse_token(),
            configurable_uri: ctx.parse_ast(),
            as_token: ctx.try_parse_ast(),
            combinator: ctx.parse_list(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Raw(export), Id(configurableUri), Modified(*,Id(combinator)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LibraryExport {
    pub metadata: Metadata,
    pub export_token: Token,
    pub configurable_uri: ConfigurableUri,
    pub combinator: Vec<Combinator>,
    pub semicolon_token: Token,
}
impl RuleModel for LibraryExport {
    fn rule() -> Rule {
        Rule::LibraryExport
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            export_token: ctx.parse_token(),
            configurable_uri: ctx.parse_ast(),
            combinator: ctx.parse_list(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(show), Id(identifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShowCombinator {
    pub show_token: Token,
    pub identifier_list: IdentifierList,
}
impl RuleModel for ShowCombinator {
    fn rule() -> Rule {
        Rule::ShowCombinator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            show_token: ctx.parse_token(),
            identifier_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw(hide), Id(identifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HideCombinator {
    pub hide_token: Token,
    pub identifier_list: IdentifierList,
}
impl RuleModel for HideCombinator {
    fn rule() -> Rule {
        Rule::HideCombinator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            hide_token: ctx.parse_token(),
            identifier_list: ctx.parse_ast(),
        }
    }
}

/// Or( And(Raw(show), Id(identifierList)), And(Raw(hide), Id(identifierList)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Combinator {
    ShowCombinator(ShowCombinator),
    HideCombinator(HideCombinator),
}
impl RuleModel for Combinator {
    fn rule() -> Rule {
        Rule::Combinator
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::ShowCombinator => Combinator::ShowCombinator(ctx.parse_ast()),
            Rule::HideCombinator => Combinator::HideCombinator(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(identifier), Modified(*,And(Raw(,), Id(identifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierList {
    pub identifier: Identifier,
    pub identifier_item: Vec<IdentifierItem>,
}
impl RuleModel for IdentifierList {
    fn rule() -> Rule {
        Rule::IdentifierList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            identifier: ctx.parse_ast(),
            identifier_item: ctx.parse_list(),
        }
    }
}

/// And(Id(metadata), Raw(part), Id(uri), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartDirective {
    pub metadata: Metadata,
    pub part_token: Token,
    pub uri: Uri,
    pub semicolon_token: Token,
}
impl RuleModel for PartDirective {
    fn rule() -> Rule {
        Rule::PartDirective
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            part_token: ctx.parse_token(),
            uri: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// Or( Id(dottedIdentifierList), Id(uri), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum DottedIdentifierListOrUri {
    DottedIdentifierList(DottedIdentifierList),
    Uri(Uri),
}
impl RuleModel for DottedIdentifierListOrUri {
    fn rule() -> Rule {
        Rule::DottedIdentifierListOrUri
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::DottedIdentifierList => {
                DottedIdentifierListOrUri::DottedIdentifierList(ctx.parse_ast())
            }
            Rule::Uri => DottedIdentifierListOrUri::Uri(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(metadata), Raw(part), Raw(of), Or( Id(dottedIdentifierList), Id(uri), ), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartHeader {
    pub metadata: Metadata,
    pub part_token: Token,
    pub of_token: Token,
    pub dotted_identifier_list_or_uri: DottedIdentifierListOrUri,
    pub semicolon_token: Token,
}
impl RuleModel for PartHeader {
    fn rule() -> Rule {
        Rule::PartHeader
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            part_token: ctx.parse_token(),
            of_token: ctx.parse_token(),
            dotted_identifier_list_or_uri: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Id(topLevelDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartDeclarationMetadata {
    pub metadata: Metadata,
    pub top_level_declaration: TopLevelDeclaration,
}
impl RuleModel for PartDeclarationMetadata {
    fn rule() -> Rule {
        Rule::PartDeclarationMetadata
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            top_level_declaration: ctx.parse_ast(),
        }
    }
}

/// And(Id(partHeader), Modified(*,And(Id(metadata), Id(topLevelDeclaration))), Id(EOF))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartDeclaration {
    pub part_header: PartHeader,
    pub metadata: Vec<PartDeclarationMetadata>,
    pub eof: Token,
}
impl RuleModel for PartDeclaration {
    fn rule() -> Rule {
        Rule::PartDeclaration
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            part_header: ctx.parse_ast(),
            metadata: ctx.parse_list(),
            eof: ctx.parse_token(),
        }
    }
}

/// Id(stringLiteral)
pub type Uri = StringLiteral;

/// And(Id(uri), Modified(*,Id(configurationUri)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConfigurableUri {
    pub uri: Uri,
    pub configuration_uri: Vec<ConfigurationUri>,
}
impl RuleModel for ConfigurableUri {
    fn rule() -> Rule {
        Rule::ConfigurableUri
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            uri: ctx.parse_ast(),
            configuration_uri: ctx.parse_list(),
        }
    }
}

/// And(Raw(if), Raw((), Id(uriTest), Raw()), Id(uri))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConfigurationUri {
    pub if_token: Token,
    pub open_paren_token: Token,
    pub uri_test: UriTest,
    pub close_paren_token: Token,
    pub uri: Uri,
}
impl RuleModel for ConfigurationUri {
    fn rule() -> Rule {
        Rule::ConfigurationUri
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            if_token: ctx.parse_token(),
            open_paren_token: ctx.parse_token(),
            uri_test: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
            uri: ctx.parse_ast(),
        }
    }
}

/// And(Raw(==), Id(stringLiteral))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StringLiteralDoubleEqual {
    pub double_equal_token: Token,
    pub string_literal: StringLiteral,
}
impl RuleModel for StringLiteralDoubleEqual {
    fn rule() -> Rule {
        Rule::StringLiteralDoubleEqual
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            double_equal_token: ctx.parse_token(),
            string_literal: ctx.parse_ast(),
        }
    }
}

/// And(Id(dottedIdentifierList), Modified(?,And(Raw(==), Id(stringLiteral))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UriTest {
    pub dotted_identifier_list: DottedIdentifierList,
    pub string_literal_double_equal: Option<StringLiteralDoubleEqual>,
}
impl RuleModel for UriTest {
    fn rule() -> Rule {
        Rule::UriTest
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            dotted_identifier_list: ctx.parse_ast(),
            string_literal_double_equal: ctx.try_parse_ast(),
        }
    }
}

/// And(Id(functionType), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeFunctionType {
    pub function_type: FunctionType,
    pub question_token: Option<Token>,
}
impl RuleModel for TypeFunctionType {
    fn rule() -> Rule {
        Rule::TypeFunctionType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_type: ctx.parse_ast(),
            question_token: if ctx.is_rule_next(Rule::QUESTION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// Or( And(Id(functionType), Modified(?,Raw(?))), Id(typeNotFunction), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Type {
    FunctionType(TypeFunctionType),
    TypeNotFunction(TypeNotFunction),
}
impl RuleModel for Type {
    fn rule() -> Rule {
        Rule::Type
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TypeFunctionType => Type::FunctionType(ctx.parse_ast()),
            Rule::TypeNotFunction => Type::TypeNotFunction(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(functionType), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidFunctionType {
    pub function_type: FunctionType,
    pub question_token: Option<Token>,
}
impl RuleModel for TypeNotVoidFunctionType {
    fn rule() -> Rule {
        Rule::TypeNotVoidFunctionType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_type: ctx.parse_ast(),
            question_token: if ctx.is_rule_next(Rule::QUESTION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// Or( And(Id(functionType), Modified(?,Raw(?))), Id(typeNotVoidNotFunction), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeNotVoid {
    FunctionType(TypeNotVoidFunctionType),
    TypeNotVoidNotFunction(TypeNotVoidNotFunction),
}
impl RuleModel for TypeNotVoid {
    fn rule() -> Rule {
        Rule::TypeNotVoid
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TypeNotVoidFunctionType => TypeNotVoid::FunctionType(ctx.parse_ast()),
            Rule::TypeNotVoidNotFunction => TypeNotVoid::TypeNotVoidNotFunction(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Or( Raw(void), Id(typeNotVoidNotFunction), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeNotFunction {
    Void(Token),
    TypeNotVoidNotFunction(TypeNotVoidNotFunction),
}
impl RuleModel for TypeNotFunction {
    fn rule() -> Rule {
        Rule::TypeNotFunction
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::VOID_TOKEN => TypeNotFunction::Void(ctx.parse_token()),
            Rule::TypeNotVoidNotFunction => {
                TypeNotFunction::TypeNotVoidNotFunction(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Id(typeName), Modified(?,Id(typeArguments)), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidNotFunctionTypeName {
    pub type_name: TypeName,
    pub type_arguments: Option<TypeArguments>,
    pub question_token: Option<Token>,
}
impl RuleModel for TypeNotVoidNotFunctionTypeName {
    fn rule() -> Rule {
        Rule::TypeNotVoidNotFunctionTypeName
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_name: ctx.parse_ast(),
            type_arguments: ctx.try_parse_ast(),
            question_token: if ctx.is_rule_next(Rule::QUESTION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// And(Raw(Function), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidNotFunctionFunctionToken {
    pub function_token: Token,
    pub question_token: Option<Token>,
}
impl RuleModel for TypeNotVoidNotFunctionFunctionToken {
    fn rule() -> Rule {
        Rule::TypeNotVoidNotFunctionFunctionToken
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_token: ctx.parse_token(),
            question_token: if ctx.is_rule_next(Rule::QUESTION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
        }
    }
}

/// Or( And(Id(typeName), Modified(?,Id(typeArguments)), Modified(?,Raw(?))), And(Raw(Function), Modified(?,Raw(?))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeNotVoidNotFunction {
    TypeName(TypeNotVoidNotFunctionTypeName),
    Function(TypeNotVoidNotFunctionFunctionToken),
}
impl RuleModel for TypeNotVoidNotFunction {
    fn rule() -> Rule {
        Rule::TypeNotVoidNotFunction
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TypeNotVoidNotFunctionTypeName => {
                TypeNotVoidNotFunction::TypeName(ctx.parse_ast())
            }
            Rule::TypeNotVoidNotFunctionFunctionToken => {
                TypeNotVoidNotFunction::Function(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw(.), Id(typeIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeIdentifierSelector {
    pub period_token: Token,
    pub type_identifier: TypeIdentifier,
}
impl RuleModel for TypeIdentifierSelector {
    fn rule() -> Rule {
        Rule::TypeIdentifierSelector
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            period_token: ctx.parse_token(),
            type_identifier: ctx.parse_ast(),
        }
    }
}

/// And(Id(typeIdentifier), Modified(?,And(Raw(.), Id(typeIdentifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeName {
    pub type_identifier: TypeIdentifier,
    pub type_identifier_selector: Option<TypeIdentifierSelector>,
}
impl RuleModel for TypeName {
    fn rule() -> Rule {
        Rule::TypeName
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_identifier: ctx.parse_ast(),
            type_identifier_selector: ctx.try_parse_ast(),
        }
    }
}

/// And(Raw(<), Id(typeList), Raw(>))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeArgumentsInner {
    pub less_token: Token,
    pub type_list: TypeList,
    pub more_token: Token,
}

type TypeArguments = Box<TypeArgumentsInner>;
impl RuleModel for TypeArguments {
    fn rule() -> Rule {
        Rule::TypeArguments
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(TypeArgumentsInner {
            less_token: ctx.parse_token(),
            type_list: ctx.parse_ast(),
            more_token: ctx.parse_token(),
        })
    }
}

/// And(Raw(,), Id(type))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeItem {
    pub comma_token: Token,
    pub dart_type: Type,
}
impl RuleModel for TypeItem {
    fn rule() -> Rule {
        Rule::TypeItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            dart_type: ctx.parse_ast(),
        }
    }
}

/// And(Id(type), Modified(*,And(Raw(,), Id(type))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeList {
    pub dart_type: Type,
    pub type_item: Vec<TypeItem>,
}
impl RuleModel for TypeList {
    fn rule() -> Rule {
        Rule::TypeList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            dart_type: ctx.parse_ast(),
            type_item: ctx.parse_list(),
        }
    }
}

/// And(Raw(,), Id(typeNotVoidNotFunction))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidNotFunctionItem {
    pub comma_token: Token,
    pub type_not_void_not_function: TypeNotVoidNotFunction,
}
impl RuleModel for TypeNotVoidNotFunctionItem {
    fn rule() -> Rule {
        Rule::TypeNotVoidNotFunctionItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            type_not_void_not_function: ctx.parse_ast(),
        }
    }
}

/// And(Id(typeNotVoidNotFunction), Modified(*,And(Raw(,), Id(typeNotVoidNotFunction))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidNotFunctionList {
    pub type_not_void_not_function: TypeNotVoidNotFunction,
    pub type_not_void_not_function_item: Vec<TypeNotVoidNotFunctionItem>,
}
impl RuleModel for TypeNotVoidNotFunctionList {
    fn rule() -> Rule {
        Rule::TypeNotVoidNotFunctionList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_not_void_not_function: ctx.parse_ast(),
            type_not_void_not_function_item: ctx.parse_list(),
        }
    }
}

/// And(Id(typeNotFunction), Id(functionTypeTails))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionTypeTypeNotFunction {
    pub type_not_function: TypeNotFunction,
    pub function_type_tails: FunctionTypeTails,
}
impl RuleModel for FunctionTypeTypeNotFunction {
    fn rule() -> Rule {
        Rule::FunctionTypeTypeNotFunction
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            type_not_function: ctx.parse_ast(),
            function_type_tails: ctx.parse_ast(),
        }
    }
}

/// Or( Id(functionTypeTails), And(Id(typeNotFunction), Id(functionTypeTails)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionType {
    FunctionTypeTails(FunctionTypeTails),
    TypeNotFunction(FunctionTypeTypeNotFunction),
}
impl RuleModel for FunctionType {
    fn rule() -> Rule {
        Rule::FunctionType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::FunctionTypeTails => FunctionType::FunctionTypeTails(ctx.parse_ast()),
            Rule::FunctionTypeTypeNotFunction => FunctionType::TypeNotFunction(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(functionTypeTail), Modified(?,Raw(?)), Id(functionTypeTails))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionTypeTailsMany {
    pub function_type_tail: FunctionTypeTail,
    pub question_token: Option<Token>,
    pub function_type_tails: FunctionTypeTails,
}
impl RuleModel for FunctionTypeTailsMany {
    fn rule() -> Rule {
        Rule::FunctionTypeTailsMany
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_type_tail: ctx.parse_ast(),
            question_token: if ctx.is_rule_next(Rule::QUESTION_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            function_type_tails: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(functionTypeTail), Modified(?,Raw(?)), Id(functionTypeTails)), Id(functionTypeTail), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionTypeTailsInner {
    FunctionTypeTailsMany(FunctionTypeTailsMany),
    FunctionTypeTail(FunctionTypeTail),
}

type FunctionTypeTails = Box<FunctionTypeTailsInner>;
impl RuleModel for FunctionTypeTails {
    fn rule() -> Rule {
        Rule::FunctionTypeTails
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(match ctx.next_rule() {
            Rule::FunctionTypeTailsMany => {
                FunctionTypeTailsInner::FunctionTypeTailsMany(ctx.parse_ast())
            }
            Rule::FunctionTypeTail => FunctionTypeTailsInner::FunctionTypeTail(ctx.parse_ast()),
            _ => unreachable!(),
        })
    }
}

/// And(Raw(Function), Modified(?,Id(typeParameters)), Id(parameterTypeList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionTypeTail {
    pub function_token: Token,
    pub type_parameters: Option<TypeParameters>,
    pub parameter_type_list: ParameterTypeList,
}
impl RuleModel for FunctionTypeTail {
    fn rule() -> Rule {
        Rule::FunctionTypeTail
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_token: ctx.parse_token(),
            type_parameters: ctx.try_parse_ast(),
            parameter_type_list: ctx.parse_ast(),
        }
    }
}

/// And(Raw((), Id(normalParameterTypes), Raw(,), Id(optionalParameterTypes), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalWithOptionalParameters {
    pub open_paren_token: Token,
    pub normal_parameter_types: NormalParameterTypes,
    pub comma_token: Token,
    pub optional_parameter_types: OptionalParameterTypes,
    pub close_paren_token: Token,
}
impl RuleModel for NormalWithOptionalParameters {
    fn rule() -> Rule {
        Rule::NormalWithOptionalParameters
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            normal_parameter_types: ctx.parse_ast(),
            comma_token: ctx.parse_token(),
            optional_parameter_types: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// And(Raw((), Id(normalParameterTypes), Modified(?,Raw(,)), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ParameterTypeListNormalParameterTypes {
    pub open_paren_token: Token,
    pub normal_parameter_types: NormalParameterTypes,
    pub comma_token: Option<Token>,
    pub close_paren_token: Token,
}
impl RuleModel for ParameterTypeListNormalParameterTypes {
    fn rule() -> Rule {
        Rule::ParameterTypeListNormalParameterTypes
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            normal_parameter_types: ctx.parse_ast(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// And(Raw((), Id(optionalParameterTypes), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ParameterTypeListOptionalParameterTypes {
    pub open_paren_token: Token,
    pub optional_parameter_types: OptionalParameterTypes,
    pub close_paren_token: Token,
}
impl RuleModel for ParameterTypeListOptionalParameterTypes {
    fn rule() -> Rule {
        Rule::ParameterTypeListOptionalParameterTypes
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_paren_token: ctx.parse_token(),
            optional_parameter_types: ctx.parse_ast(),
            close_paren_token: ctx.parse_token(),
        }
    }
}

/// Or( And(Raw((), Raw())), And(Raw((), Id(normalParameterTypes), Raw(,), Id(optionalParameterTypes), Raw())), And(Raw((), Id(normalParameterTypes), Modified(?,Raw(,)), Raw())), And(Raw((), Id(optionalParameterTypes), Raw())), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ParameterTypeListInner {
    EmptyParameters(EmptyParameters),
    NormalWithOptionalParameters(NormalWithOptionalParameters),
    NormalParameterTypes(ParameterTypeListNormalParameterTypes),
    OptionalParameterTypes(ParameterTypeListOptionalParameterTypes),
}

type ParameterTypeList = Box<ParameterTypeListInner>;
impl RuleModel for ParameterTypeList {
    fn rule() -> Rule {
        Rule::ParameterTypeList
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Box::new(match ctx.next_rule() {
            Rule::EmptyParameters => ParameterTypeListInner::EmptyParameters(ctx.parse_ast()),
            Rule::NormalWithOptionalParameters => {
                ParameterTypeListInner::NormalWithOptionalParameters(ctx.parse_ast())
            }
            Rule::ParameterTypeListNormalParameterTypes => {
                ParameterTypeListInner::NormalParameterTypes(ctx.parse_ast())
            }
            Rule::ParameterTypeListOptionalParameterTypes => {
                ParameterTypeListInner::OptionalParameterTypes(ctx.parse_ast())
            }
            _ => unreachable!(),
        })
    }
}

/// And(Raw(,), Id(normalParameterType))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalParameterTypeItem {
    pub comma_token: Token,
    pub normal_parameter_type: NormalParameterType,
}
impl RuleModel for NormalParameterTypeItem {
    fn rule() -> Rule {
        Rule::NormalParameterTypeItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            normal_parameter_type: ctx.parse_ast(),
        }
    }
}

/// And(Id(normalParameterType), Modified(*,And(Raw(,), Id(normalParameterType))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalParameterTypes {
    pub normal_parameter_type: NormalParameterType,
    pub normal_parameter_type_item: Vec<NormalParameterTypeItem>,
}
impl RuleModel for NormalParameterTypes {
    fn rule() -> Rule {
        Rule::NormalParameterTypes
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            normal_parameter_type: ctx.parse_ast(),
            normal_parameter_type_item: ctx.parse_list(),
        }
    }
}

/// And(Id(metadata), Id(typedIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierParameterType {
    pub metadata: Metadata,
    pub typed_identifier: TypedIdentifier,
}
impl RuleModel for IdentifierParameterType {
    fn rule() -> Rule {
        Rule::IdentifierParameterType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            typed_identifier: ctx.parse_ast(),
        }
    }
}

/// And(Id(metadata), Id(type))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeParameterType {
    pub metadata: Metadata,
    pub dart_type: Type,
}
impl RuleModel for TypeParameterType {
    fn rule() -> Rule {
        Rule::TypeParameterType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            dart_type: ctx.parse_ast(),
        }
    }
}

/// Or( And(Id(metadata), Id(typedIdentifier)), And(Id(metadata), Id(type)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum NormalParameterType {
    IdentifierParameterType(IdentifierParameterType),
    TypeParameterType(TypeParameterType),
}
impl RuleModel for NormalParameterType {
    fn rule() -> Rule {
        Rule::NormalParameterType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::IdentifierParameterType => {
                NormalParameterType::IdentifierParameterType(ctx.parse_ast())
            }
            Rule::TypeParameterType => NormalParameterType::TypeParameterType(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// Or( Id(optionalPositionalParameterTypes), Id(namedParameterTypes), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum OptionalParameterTypes {
    OptionalPositionalParameterTypes(OptionalPositionalParameterTypes),
    NamedParameterTypes(NamedParameterTypes),
}
impl RuleModel for OptionalParameterTypes {
    fn rule() -> Rule {
        Rule::OptionalParameterTypes
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::OptionalPositionalParameterTypes => {
                OptionalParameterTypes::OptionalPositionalParameterTypes(ctx.parse_ast())
            }
            Rule::NamedParameterTypes => {
                OptionalParameterTypes::NamedParameterTypes(ctx.parse_ast())
            }
            _ => unreachable!(),
        }
    }
}

/// And(Raw([), Id(normalParameterTypes), Modified(?,Raw(,)), Raw(]))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OptionalPositionalParameterTypes {
    pub open_square_bracket_token: Token,
    pub normal_parameter_types: NormalParameterTypes,
    pub comma_token: Option<Token>,
    pub close_square_bracket_token: Token,
}
impl RuleModel for OptionalPositionalParameterTypes {
    fn rule() -> Rule {
        Rule::OptionalPositionalParameterTypes
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_square_bracket_token: ctx.parse_token(),
            normal_parameter_types: ctx.parse_ast(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            close_square_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(,), Id(namedParameterType))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedParameterTypeItem {
    pub comma_token: Token,
    pub named_parameter_type: NamedParameterType,
}
impl RuleModel for NamedParameterTypeItem {
    fn rule() -> Rule {
        Rule::NamedParameterTypeItem
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            comma_token: ctx.parse_token(),
            named_parameter_type: ctx.parse_ast(),
        }
    }
}

/// And(Raw({), Id(namedParameterType), Modified(*,And(Raw(,), Id(namedParameterType))), Modified(?,Raw(,)), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedParameterTypes {
    pub open_curly_bracket_token: Token,
    pub named_parameter_type: NamedParameterType,
    pub named_parameter_type_item: Vec<NamedParameterTypeItem>,
    pub comma_token: Option<Token>,
    pub close_curly_bracket_token: Token,
}
impl RuleModel for NamedParameterTypes {
    fn rule() -> Rule {
        Rule::NamedParameterTypes
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            open_curly_bracket_token: ctx.parse_token(),
            named_parameter_type: ctx.parse_ast(),
            named_parameter_type_item: ctx.parse_list(),
            comma_token: if ctx.is_rule_next(Rule::COMMA_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            close_curly_bracket_token: ctx.parse_token(),
        }
    }
}

/// And(Id(metadata), Modified(?,Raw(required)), Id(typedIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedParameterType {
    pub metadata: Metadata,
    pub required_token: Option<Token>,
    pub typed_identifier: TypedIdentifier,
}
impl RuleModel for NamedParameterType {
    fn rule() -> Rule {
        Rule::NamedParameterType
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            metadata: ctx.parse_ast(),
            required_token: if ctx.is_rule_next(Rule::REQUIRED_TOKEN) {
                Some(ctx.parse_token())
            } else {
                None
            },
            typed_identifier: ctx.parse_ast(),
        }
    }
}

/// And(Id(type), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypedIdentifier {
    pub dart_type: Type,
    pub identifier: Identifier,
}
impl RuleModel for TypedIdentifier {
    fn rule() -> Rule {
        Rule::TypedIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            dart_type: ctx.parse_ast(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// And(Raw(typedef), Id(typeIdentifier), Modified(?,Id(typeParameters)), Raw(=), Id(type), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeAliasTypeIdentifier {
    pub typedef_token: Token,
    pub type_identifier: TypeIdentifier,
    pub type_parameters: Option<TypeParameters>,
    pub equal_token: Token,
    pub dart_type: Type,
    pub semicolon_token: Token,
}
impl RuleModel for TypeAliasTypeIdentifier {
    fn rule() -> Rule {
        Rule::TypeAliasTypeIdentifier
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            typedef_token: ctx.parse_token(),
            type_identifier: ctx.parse_ast(),
            type_parameters: ctx.try_parse_ast(),
            equal_token: ctx.parse_token(),
            dart_type: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Raw(typedef), Id(functionTypeAlias))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeAliasFunctionTypeAlias {
    pub typedef_token: Token,
    pub function_type_alias: FunctionTypeAlias,
}
impl RuleModel for TypeAliasFunctionTypeAlias {
    fn rule() -> Rule {
        Rule::TypeAliasFunctionTypeAlias
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            typedef_token: ctx.parse_token(),
            function_type_alias: ctx.parse_ast(),
        }
    }
}

/// Or( And(Raw(typedef), Id(typeIdentifier), Modified(?,Id(typeParameters)), Raw(=), Id(type), Raw(;)), And(Raw(typedef), Id(functionTypeAlias)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeAlias {
    TypeIdentifier(TypeAliasTypeIdentifier),
    FunctionTypeAlias(TypeAliasFunctionTypeAlias),
}
impl RuleModel for TypeAlias {
    fn rule() -> Rule {
        Rule::TypeAlias
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::TypeAliasTypeIdentifier => TypeAlias::TypeIdentifier(ctx.parse_ast()),
            Rule::TypeAliasFunctionTypeAlias => TypeAlias::FunctionTypeAlias(ctx.parse_ast()),
            _ => unreachable!(),
        }
    }
}

/// And(Id(functionPrefix), Id(formalParameterPart), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionTypeAlias {
    pub function_prefix: FunctionPrefix,
    pub formal_parameter_part: FormalParameterPart,
    pub semicolon_token: Token,
}
impl RuleModel for FunctionTypeAlias {
    fn rule() -> Rule {
        Rule::FunctionTypeAlias
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            function_prefix: ctx.parse_ast(),
            formal_parameter_part: ctx.parse_ast(),
            semicolon_token: ctx.parse_token(),
        }
    }
}

/// And(Modified(?,Id(type)), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionPrefix {
    pub dart_type: Option<Type>,
    pub identifier: Identifier,
}
impl RuleModel for FunctionPrefix {
    fn rule() -> Rule {
        Rule::FunctionPrefix
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        Self {
            dart_type: ctx.try_parse_ast(),
            identifier: ctx.parse_ast(),
        }
    }
}

/// Or( Id(SINGLE_LINE_COMMENT), Id(MULTI_LINE_COMMENT), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Comment {
    SingleLineComment(Token),
    MultiLineComment(Token),
}
impl RuleModel for Comment {
    fn rule() -> Rule {
        Rule::COMMENT
    }
    fn parse(ctx: &mut ParseCtx) -> Self {
        match ctx.next_rule() {
            Rule::SINGLE_LINE_COMMENT => Comment::SingleLineComment(ctx.parse_token()),
            Rule::MULTI_LINE_COMMENT => Comment::MultiLineComment(ctx.parse_token()),
            _ => unreachable!(),
        }
    }
}
