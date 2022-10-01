use crate::parser::Token;
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

/// And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FinalConstVarOrTypeFinalToken {
    pub late_token: Option<Token>,
    pub final_token: Token,
    pub dart_type: Option<Type>,
}

/// And(Raw(const), Modified(?,Id(type)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FinalConstVarOrTypeConstToken {
    pub const_token: Token,
    pub dart_type: Option<Type>,
}

/// And(Modified(?,Raw(late)), Id(varOrType))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FinalConstVarOrTypeVarOrType {
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
}

/// Or( And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type))), And(Raw(const), Modified(?,Id(type))), And(Modified(?,Raw(late)), Id(varOrType)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FinalConstVarOrType {
    Final(FinalConstVarOrTypeFinalToken),
    Const(FinalConstVarOrTypeConstToken),
    VarOrType(FinalConstVarOrTypeVarOrType),
}

/// Or( Raw(var), Id(type), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum VarOrType {
    Var(Token),
    Type(Type),
}

/// And(Raw(=), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionEqual {
    pub equal_token: Token,
    pub expression: Expression,
}

/// And(Raw(,), Id(initializedIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedIdentifierItem {
    pub comma_token: Token,
    pub initialized_identifier: InitializedIdentifier,
}

/// And(Id(declaredIdentifier), Modified(?,And(Raw(=), Id(expression))), Modified(*,And(Raw(,), Id(initializedIdentifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedVariableDeclaration {
    pub declared_identifier: DeclaredIdentifier,
    pub expression_equal: Option<ExpressionEqual>,
    pub initialized_identifier_item: Vec<InitializedIdentifierItem>,
}

/// And(Raw(=), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionEqual {
    pub equal_token: Token,
    pub expression: Expression,
}

/// And(Id(identifier), Modified(?,And(Raw(=), Id(expression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedIdentifier {
    pub identifier: Identifier,
    pub expression_equal: Option<ExpressionEqual>,
}

/// And(Raw(,), Id(initializedIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedIdentifierItem {
    pub comma_token: Token,
    pub initialized_identifier: InitializedIdentifier,
}

/// And(Id(initializedIdentifier), Modified(*,And(Raw(,), Id(initializedIdentifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializedIdentifierList {
    pub initialized_identifier: InitializedIdentifier,
    pub initialized_identifier_item: Vec<InitializedIdentifierItem>,
}

/// And(Modified(?,Id(type)), Id(identifier), Id(formalParameterPart))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionSignature {
    pub dart_type: Option<Type>,
    pub identifier: Identifier,
    pub formal_parameter_part: FormalParameterPart,
}

/// And(Modified(?,Id(typeParameters)), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormalParameterPart {
    pub type_parameters: Option<TypeParameters>,
    pub formal_parameter_list: FormalParameterList,
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

/// And(Raw(async), Modified(?,Raw(*)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionBodyGeneratorAsyncToken {
    pub async_token: Token,
    pub asterisk_token: Option<Token>,
}

/// And(Raw(sync), Raw(*))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionBodyGeneratorSyncToken {
    pub sync_token: Token,
    pub asterisk_token: Token,
}

/// Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionBodyGenerator {
    Async(FunctionBodyGeneratorAsyncToken),
    Sync(FunctionBodyGeneratorSyncToken),
}

/// And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionBodyBlock {
    pub function_body_generator: Option<FunctionBodyGenerator>,
    pub block: Block,
}

/// Or( And(Modified(?,Raw(async)), Raw(=>), Id(expression), Raw(;)), And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionBody {
    Arrow(FunctionBodyArrowToken),
    Block(FunctionBodyBlock),
}

/// And(Raw({), Id(statements), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Block {
    pub open_curly_bracket_token: Token,
    pub statements: Statements,
    pub close_curly_bracket_token: Token,
}

/// And(Raw((), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EmptyParameters {
    pub open_paren_token: Token,
    pub close_paren_token: Token,
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

/// And(Raw((), Id(optionalOrNamedFormalParameters), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FormalParameterListOptionalOrNamedFormalParameters {
    pub open_paren_token: Token,
    pub optional_or_named_formal_parameters: OptionalOrNamedFormalParameters,
    pub close_paren_token: Token,
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

/// And(Raw(,), Id(normalFormalParameter))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalFormalParameterItem {
    pub comma_token: Token,
    pub normal_formal_parameter: NormalFormalParameter,
}

/// And(Id(normalFormalParameter), Modified(*,And(Raw(,), Id(normalFormalParameter))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalFormalParameters {
    pub normal_formal_parameter: NormalFormalParameter,
    pub normal_formal_parameter_item: Vec<NormalFormalParameterItem>,
}

/// Or( Id(optionalPositionalFormalParameters), Id(namedFormalParameters), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum OptionalOrNamedFormalParameters {
    OptionalPositionalFormalParameters(OptionalPositionalFormalParameters),
    NamedFormalParameters(NamedFormalParameters),
}

/// And(Raw(,), Id(defaultFormalParameter))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultFormalParameterItem {
    pub comma_token: Token,
    pub default_formal_parameter: DefaultFormalParameter,
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

/// And(Raw(,), Id(defaultNamedParameter))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultNamedParameterItem {
    pub comma_token: Token,
    pub default_named_parameter: DefaultNamedParameter,
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

/// And(Id(metadata), Id(normalFormalParameterNoMetadata))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalFormalParameter {
    pub metadata: Metadata,
    pub normal_formal_parameter_no_metadata: NormalFormalParameterNoMetadata,
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

/// And(Modified(?,Raw(covariant)), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SimpleFormalParameterIdentifier {
    pub covariant_token: Option<Token>,
    pub identifier: Identifier,
}

/// Or( Id(declaredIdentifier), And(Modified(?,Raw(covariant)), Id(identifier)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum SimpleFormalParameter {
    DeclaredIdentifier(DeclaredIdentifier),
    Identifier(SimpleFormalParameterIdentifier),
}

/// And(Modified(?,Raw(covariant)), Id(finalConstVarOrType), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclaredIdentifier {
    pub covariant_token: Option<Token>,
    pub final_const_var_or_type: FinalConstVarOrType,
    pub identifier: Identifier,
}

/// And(Id(formalParameterPart), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FieldFormalParameterFormalParameterPart {
    pub formal_parameter_part: FormalParameterPart,
    pub question_token: Option<Token>,
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

/// And(Id(formalParameterPart), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SuperFormalParameterFormalParameterPart {
    pub formal_parameter_part: FormalParameterPart,
    pub question_token: Option<Token>,
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

/// And(Raw(=), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionEqual {
    pub equal_token: Token,
    pub expression: Expression,
}

/// And(Id(normalFormalParameter), Modified(?,And(Raw(=), Id(expression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultFormalParameter {
    pub normal_formal_parameter: NormalFormalParameter,
    pub expression_equal: Option<ExpressionEqual>,
}

/// Or( Raw(=), Raw(:), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum EqualTokenOrColonToken {
    Equal(Token),
    Colon(Token),
}

/// And(Or( Raw(=), Raw(:), ), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultNamedParameterAssignment {
    pub equal_token_or_colon_token: EqualTokenOrColonToken,
    pub expression: Expression,
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

/// And(Id(metadata), Id(classMemberDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassDeclarationMember {
    pub metadata: Metadata,
    pub class_member_declaration: ClassMemberDeclaration,
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
    pub class_declaration_member: Vec<ClassDeclarationMember>,
    pub close_curly_bracket_token: Token,
}

/// And(Modified(?,Raw(abstract)), Raw(class), Id(mixinApplicationClass))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassDeclarationMixin {
    pub abstract_token: Option<Token>,
    pub class_token: Token,
    pub mixin_application_class: MixinApplicationClass,
}

/// Or( And(Modified(?,Raw(abstract)), Raw(class), Id(typeIdentifier), Modified(?,Id(typeParameters)), Modified(?,Id(superclass)), Modified(?,Id(interfaces)), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(})), And(Modified(?,Raw(abstract)), Raw(class), Id(mixinApplicationClass)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ClassDeclaration {
    Class(ClassDeclarationClassToken),
    ClassDeclarationMixin(ClassDeclarationMixin),
}

/// And(Raw(,), Id(typeNotVoid))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidItem {
    pub comma_token: Token,
    pub type_not_void: TypeNotVoid,
}

/// And(Id(typeNotVoid), Modified(*,And(Raw(,), Id(typeNotVoid))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidList {
    pub type_not_void: TypeNotVoid,
    pub type_not_void_item: Vec<TypeNotVoidItem>,
}

/// And(Id(declaration), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassMemberDeclarationSemicolonToken {
    pub declaration: Declaration,
    pub semicolon_token: Token,
}

/// And(Id(methodSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ClassMemberDeclarationMethodSignature {
    pub method_signature: MethodSignature,
    pub function_body: FunctionBody,
}

/// Or( And(Id(declaration), Raw(;)), And(Id(methodSignature), Id(functionBody)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ClassMemberDeclaration {
    Semicolon(ClassMemberDeclarationSemicolonToken),
    MethodSignature(ClassMemberDeclarationMethodSignature),
}

/// And(Id(constructorSignature), Modified(?,Id(initializers)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodSignatureConstructorSignature {
    pub constructor_signature: ConstructorSignature,
    pub initializers: Option<Initializers>,
}

/// And(Modified(?,Raw(static)), Id(functionSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodSignatureFunctionSignature {
    pub static_token: Option<Token>,
    pub function_signature: FunctionSignature,
}

/// And(Modified(?,Raw(static)), Id(getterSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodSignatureGetterSignature {
    pub static_token: Option<Token>,
    pub getter_signature: GetterSignature,
}

/// And(Modified(?,Raw(static)), Id(setterSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MethodSignatureSetterSignature {
    pub static_token: Option<Token>,
    pub setter_signature: SetterSignature,
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

/// And(Raw(external), Id(factoryConstructorSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationFactoryConstructorSignature {
    pub external_token: Token,
    pub factory_constructor_signature: FactoryConstructorSignature,
}

/// And(Raw(external), Id(constantConstructorSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalConstantConstructorSignature {
    pub external_token: Token,
    pub constant_constructor_signature: ConstantConstructorSignature,
}

/// And(Raw(external), Id(constructorSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalConstructorSignature {
    pub external_token: Token,
    pub constructor_signature: ConstructorSignature,
}

/// And(Raw(external), Modified(?,Raw(static)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalMaybeStatic {
    pub external_token: Token,
    pub static_token: Option<Token>,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(getterSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationGetterSignature {
    pub external_maybe_static: Option<ExternalMaybeStatic>,
    pub getter_signature: GetterSignature,
}

/// And(Raw(external), Modified(?,Raw(static)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalMaybeStatic {
    pub external_token: Token,
    pub static_token: Option<Token>,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(setterSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationSetterSignature {
    pub external_maybe_static: Option<ExternalMaybeStatic>,
    pub setter_signature: SetterSignature,
}

/// And(Raw(external), Modified(?,Raw(static)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalMaybeStatic {
    pub external_token: Token,
    pub static_token: Option<Token>,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(functionSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationFunctionSignature {
    pub external_maybe_static: Option<ExternalMaybeStatic>,
    pub function_signature: FunctionSignature,
}

/// And(Modified(?,Raw(external)), Id(operatorSignature))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationOperatorSignature {
    pub external_token: Option<Token>,
    pub operator_signature: OperatorSignature,
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

/// And(Raw(static), Raw(final), Modified(?,Id(type)), Id(staticFinalDeclarationList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticFinal {
    pub static_token: Token,
    pub final_token: Token,
    pub dart_type: Option<Type>,
    pub static_final_declaration_list: StaticFinalDeclarationList,
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

/// And(Raw(static), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticVarOrType {
    pub static_token: Token,
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
    pub initialized_identifier_list: InitializedIdentifierList,
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

/// And(Raw(covariant), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CovariantVarOrType {
    pub covariant_token: Token,
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
    pub initialized_identifier_list: InitializedIdentifierList,
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

/// And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationVarOrType {
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
    pub initialized_identifier_list: InitializedIdentifierList,
}

/// Or( Id(redirection), Id(initializers), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum RedirectionOrInitializers {
    Redirection(Redirection),
    Initializers(Initializers),
}

/// And(Id(constantConstructorSignature), Modified(?,Or( Id(redirection), Id(initializers), )))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationConstantConstructorSignature {
    pub constant_constructor_signature: ConstantConstructorSignature,
    pub redirection_or_initializers: Option<RedirectionOrInitializers>,
}

/// Or( Id(redirection), Id(initializers), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum RedirectionOrInitializers {
    Redirection(Redirection),
    Initializers(Initializers),
}

/// And(Id(constructorSignature), Modified(?,Or( Id(redirection), Id(initializers), )))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeclarationConstructorSignature {
    pub constructor_signature: ConstructorSignature,
    pub redirection_or_initializers: Option<RedirectionOrInitializers>,
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

/// And(Raw(,), Id(staticFinalDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticFinalDeclarationItem {
    pub comma_token: Token,
    pub static_final_declaration: StaticFinalDeclaration,
}

/// And(Id(staticFinalDeclaration), Modified(*,And(Raw(,), Id(staticFinalDeclaration))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticFinalDeclarationList {
    pub static_final_declaration: StaticFinalDeclaration,
    pub static_final_declaration_item: Vec<StaticFinalDeclarationItem>,
}

/// And(Id(identifier), Raw(=), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StaticFinalDeclaration {
    pub identifier: Identifier,
    pub equal_token: Token,
    pub expression: Expression,
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

/// Or( Raw(~), Id(binaryOperator), Raw([]), Raw([]=), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Operator {
    Tilde(Token),
    BinaryOperator(BinaryOperator),
    SquareBrackets(Token),
    SquareBracketsEq(Token),
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

/// And(Modified(?,Id(type)), Raw(get), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GetterSignature {
    pub dart_type: Option<Type>,
    pub get_token: Token,
    pub identifier: Identifier,
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

/// And(Id(constructorName), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorSignature {
    pub constructor_name: ConstructorName,
    pub formal_parameter_list: FormalParameterList,
}

/// And(Raw(.), Id(identifierOrNew))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierOrNewSelector {
    pub period_token: Token,
    pub identifier_or_new: IdentifierOrNew,
}

/// And(Id(typeIdentifier), Modified(?,And(Raw(.), Id(identifierOrNew))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorName {
    pub type_identifier: TypeIdentifier,
    pub identifier_or_new_selector: Option<IdentifierOrNewSelector>,
}

/// And(Raw(.), Id(identifierOrNew))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierOrNewSelector {
    pub period_token: Token,
    pub identifier_or_new: IdentifierOrNew,
}

/// And(Raw(:), Raw(this), Modified(?,And(Raw(.), Id(identifierOrNew))), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Redirection {
    pub colon_token: Token,
    pub this_token: Token,
    pub identifier_or_new_selector: Option<IdentifierOrNewSelector>,
    pub arguments: Arguments,
}

/// And(Raw(,), Id(initializerListEntry))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializerListEntryItem {
    pub comma_token: Token,
    pub initializer_list_entry: InitializerListEntry,
}

/// And(Raw(:), Id(initializerListEntry), Modified(*,And(Raw(,), Id(initializerListEntry))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Initializers {
    pub colon_token: Token,
    pub initializer_list_entry: InitializerListEntry,
    pub initializer_list_entry_item: Vec<InitializerListEntryItem>,
}

/// And(Raw(super), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializerListEntryArguments {
    pub super_token: Token,
    pub arguments: Arguments,
}

/// And(Raw(super), Raw(.), Id(identifierOrNew), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InitializerListEntrySuperToken {
    pub super_token: Token,
    pub period_token: Token,
    pub identifier_or_new: IdentifierOrNew,
    pub arguments: Arguments,
}

/// Or( And(Raw(super), Id(arguments)), And(Raw(super), Raw(.), Id(identifierOrNew), Id(arguments)), Id(fieldInitializer), Id(assertion), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum InitializerListEntry {
    Arguments(InitializerListEntryArguments),
    Super(InitializerListEntrySuperToken),
    FieldInitializer(FieldInitializer),
    Assertion(Assertion),
}

/// And(Raw(this), Raw(.))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FieldInitializerThisToken {
    pub this_token: Token,
    pub period_token: Token,
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

/// Or( Id(conditionalExpression), Id(cascade), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum InitializerExpression {
    ConditionalExpression(ConditionalExpression),
    Cascade(Cascade),
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

/// And(Raw(.), Id(identifierOrNew))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierOrNewSelector {
    pub period_token: Token,
    pub identifier_or_new: IdentifierOrNew,
}

/// And(Id(typeName), Id(typeArguments), Modified(?,And(Raw(.), Id(identifierOrNew))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorDesignationTypeName {
    pub type_name: TypeName,
    pub type_arguments: TypeArguments,
    pub identifier_or_new_selector: Option<IdentifierOrNewSelector>,
}

/// Or( Id(typeIdentifier), Id(qualifiedName), And(Id(typeName), Id(typeArguments), Modified(?,And(Raw(.), Id(identifierOrNew)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ConstructorDesignation {
    TypeIdentifier(TypeIdentifier),
    QualifiedName(QualifiedName),
    TypeName(ConstructorDesignationTypeName),
}

/// And(Raw(const), Id(constructorName), Id(formalParameterList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstantConstructorSignature {
    pub const_token: Token,
    pub constructor_name: ConstructorName,
    pub formal_parameter_list: FormalParameterList,
}

/// And(Raw(extends), Id(typeNotVoid), Modified(?,Id(mixins)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SuperclassTypeNotVoid {
    pub extends_token: Token,
    pub type_not_void: TypeNotVoid,
    pub mixins: Option<Mixins>,
}

/// Or( And(Raw(extends), Id(typeNotVoid), Modified(?,Id(mixins))), Id(mixins), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Superclass {
    TypeNotVoid(SuperclassTypeNotVoid),
    Mixins(Mixins),
}

/// And(Raw(with), Id(typeNotVoidList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Mixins {
    pub with_token: Token,
    pub type_not_void_list: TypeNotVoidList,
}

/// And(Raw(implements), Id(typeNotVoidList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Interfaces {
    pub implements_token: Token,
    pub type_not_void_list: TypeNotVoidList,
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

/// And(Id(typeNotVoid), Id(mixins), Modified(?,Id(interfaces)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MixinApplication {
    pub type_not_void: TypeNotVoid,
    pub mixins: Mixins,
    pub interfaces: Option<Interfaces>,
}

/// And(Raw(on), Id(typeNotVoidList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidListOn {
    pub on_token: Token,
    pub type_not_void_list: TypeNotVoidList,
}

/// And(Id(metadata), Id(classMemberDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MixinDeclarationMetadata {
    pub metadata: Metadata,
    pub class_member_declaration: ClassMemberDeclaration,
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

/// And(Id(metadata), Id(classMemberDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExtensionDeclarationMetadata {
    pub metadata: Metadata,
    pub class_member_declaration: ClassMemberDeclaration,
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

/// And(Raw(,), Id(enumEntry))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnumEntryItem {
    pub comma_token: Token,
    pub enum_entry: EnumEntry,
}

/// And(Id(metadata), Id(classMemberDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnumTypeMembersMetadata {
    pub metadata: Metadata,
    pub class_member_declaration: ClassMemberDeclaration,
}

/// And(Raw(;), Modified(*,And(Id(metadata), Id(classMemberDeclaration))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnumTypeMembers {
    pub semicolon_token: Token,
    pub metadata: Vec<EnumTypeMembersMetadata>,
}

/// And(Raw(enum), Id(typeIdentifier), Modified(?,Id(typeParameters)), Modified(?,Id(mixins)), Modified(?,Id(interfaces)), Raw({), Id(enumEntry), Modified(*,And(Raw(,), Id(enumEntry))), Modified(?,Raw(,)), Modified(?,And(Raw(;), Modified(*,And(Id(metadata), Id(classMemberDeclaration))))), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnumType {
    pub enum_token: Token,
    pub type_identifier: TypeIdentifier,
    pub type_parameters: Option<TypeParameters>,
    pub mixins: Option<Mixins>,
    pub interfaces: Option<Interfaces>,
    pub open_curly_bracket_token: Token,
    pub enum_entry: EnumEntry,
    pub enum_entry_item: Vec<EnumEntryItem>,
    pub comma_token: Option<Token>,
    pub enum_type_members: Option<EnumTypeMembers>,
    pub close_curly_bracket_token: Token,
}

/// And(Id(metadata), Id(identifier), Modified(?,Id(typeArguments)), Raw(.), Id(identifier), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedEnumEntry {
    pub metadata: Metadata,
    pub identifier: Identifier,
    pub type_arguments: Option<TypeArguments>,
    pub period_token: Token,
    pub identifier2: Identifier,
    pub arguments: Arguments,
}

/// And(Id(metadata), Id(identifier), Modified(?,Id(argumentPart)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnnamedEnumEntry {
    pub metadata: Metadata,
    pub identifier: Identifier,
    pub argument_part: Option<ArgumentPart>,
}

/// Or( And(Id(metadata), Id(identifier), Modified(?,Id(typeArguments)), Raw(.), Id(identifier), Id(arguments)), And(Id(metadata), Id(identifier), Modified(?,Id(argumentPart))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum EnumEntry {
    NamedEnumEntry(NamedEnumEntry),
    UnnamedEnumEntry(UnnamedEnumEntry),
}

/// And(Raw(extends), Id(typeNotVoid))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidExtends {
    pub extends_token: Token,
    pub type_not_void: TypeNotVoid,
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

/// And(Raw(,), Id(typeParameter))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeParameterItem {
    pub comma_token: Token,
    pub type_parameter: TypeParameter,
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

/// And(Raw(@), Id(metadatum))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MetadataItem {
    pub at_token: Token,
    pub metadatum: Metadatum,
}

/// Modified(*,And(Raw(@), Id(metadatum)))
pub type Metadata = Vec<MetadataItem>;

/// And(Id(constructorDesignation), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MetadatumConstructorDesignation {
    pub constructor_designation: ConstructorDesignation,
    pub arguments: Arguments,
}

/// Or( Id(identifier), Id(qualifiedName), And(Id(constructorDesignation), Id(arguments)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Metadatum {
    Identifier(Identifier),
    QualifiedName(QualifiedName),
    ConstructorDesignation(MetadatumConstructorDesignation),
}

/// And(Id(assignableExpression), Id(assignmentOperator), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionAssignableExpression {
    pub assignable_expression: AssignableExpression,
    pub assignment_operator: AssignmentOperator,
    pub expression: Expression,
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

/// And(Id(assignableExpression), Id(assignmentOperator), Id(expressionWithoutCascade))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionWithoutCascadeAssignableExpression {
    pub assignable_expression: AssignableExpression,
    pub assignment_operator: AssignmentOperator,
    pub expression_without_cascade: ExpressionWithoutCascade,
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

/// And(Raw(,), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionItem {
    pub comma_token: Token,
    pub expression: Expression,
}

/// And(Id(expression), Modified(*,And(Raw(,), Id(expression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionList {
    pub expression: Expression,
    pub expression_item: Vec<ExpressionItem>,
}

/// And(Raw(super), Id(unconditionalAssignableSelector))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimaryUnconditionalAssignableSelector {
    pub super_token: Token,
    pub unconditional_assignable_selector: UnconditionalAssignableSelector,
}

/// And(Raw(super), Id(argumentPart))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimaryArgumentPart {
    pub super_token: Token,
    pub argument_part: ArgumentPart,
}

/// And(Raw((), Id(expression), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrimaryExpression {
    pub open_paren_token: Token,
    pub expression: Expression,
    pub close_paren_token: Token,
}

/// Or( Id(thisExpression), And(Raw(super), Id(unconditionalAssignableSelector)), And(Raw(super), Id(argumentPart)), Id(functionExpression), Id(newExpression), Id(constObjectExpression), Id(constructorInvocation), Id(constructorTearoff), And(Raw((), Id(expression), Raw())), Id(literal), Id(identifier), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Primary {
    ThisExpression(ThisExpression),
    UnconditionalAssignableSelector(PrimaryUnconditionalAssignableSelector),
    ArgumentPart(PrimaryArgumentPart),
    FunctionExpression(FunctionExpression),
    NewExpression(NewExpression),
    ConstObjectExpression(ConstObjectExpression),
    ConstructorInvocation(ConstructorInvocation),
    ConstructorTearoff(ConstructorTearoff),
    Expression(PrimaryExpression),
    Literal(Literal),
    Identifier(Identifier),
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

/// Raw(null)
pub type NullLiteral = Token;

/// Or( Id(NUMBER), Id(HEX_NUMBER), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum NumericLiteral {
    Number(Token),
    HexNumber(Token),
}

/// Or( Raw(true), Raw(false), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BooleanLiteral {
    True(Token),
    False(Token),
}

/// Or( Id(multilineString), Id(singleLineString), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum StringLiteralItem {
    MultilineString(MultilineString),
    SingleLineString(SingleLineString),
}

/// Modified(+,Or( Id(multilineString), Id(singleLineString), ))
pub type StringLiteral = Vec<StringLiteralItem>;

/// And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionSingleLineStringSqMidMid {
    pub single_line_string_sq_mid_mid: Token,
    pub expression: Expression,
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

/// And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionSingleLineStringDqMidMid {
    pub single_line_string_dq_mid_mid: Token,
    pub expression: Expression,
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

/// And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionMultiLineStringSqMidMid {
    pub multi_line_string_sq_mid_mid: Token,
    pub expression: Expression,
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

/// And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionMultiLineStringDqMidMid {
    pub multi_line_string_dq_mid_mid: Token,
    pub expression: Expression,
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

/// And(Raw(${), Id(expression), Raw(}))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StringInterpolationExpression {
    pub interpolation_start_token: Token,
    pub expression: Expression,
    pub close_curly_bracket_token: Token,
}

/// Or( Id(SIMPLE_STRING_INTERPOLATION), And(Raw(${), Id(expression), Raw(})), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum StringInterpolation {
    SimpleStringInterpolation(Token),
    Expression(StringInterpolationExpression),
}

/// And(Raw(.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SymbolLiteralOtherIdentifiers {
    pub period_token: Token,
    pub identifier: Identifier,
}

/// And(Id(identifier), Modified(*,And(Raw(.), Id(identifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SymbolLiteralValueIdentifier {
    pub identifier: Identifier,
    pub symbol_literal_other_identifiers: Vec<SymbolLiteralOtherIdentifiers>,
}

/// Or( And(Id(identifier), Modified(*,And(Raw(.), Id(identifier)))), Id(operator), Raw(void), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum SymbolLiteralValue {
    Identifier(SymbolLiteralValueIdentifier),
    Operator(Operator),
    Void(Token),
}

/// And(Raw(#), Or( And(Id(identifier), Modified(*,And(Raw(.), Id(identifier)))), Id(operator), Raw(void), ))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SymbolLiteral {
    pub hash_token: Token,
    pub symbol_literal_value: SymbolLiteralValue,
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

/// And(Raw(,), Id(element))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ElementItem {
    pub comma_token: Token,
    pub element: Element,
}

/// And(Id(element), Modified(*,And(Raw(,), Id(element))), Modified(?,Raw(,)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Elements {
    pub element: Element,
    pub element_item: Vec<ElementItem>,
    pub comma_token: Option<Token>,
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

/// Or( Raw(...), Raw(...?), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum SpreadElementType {
    PointsExpand(Token),
    PointsExpandQuestion(Token),
}

/// And(Or( Raw(...), Raw(...?), ), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SpreadElement {
    pub spread_element_type: SpreadElementType,
    pub expression: Expression,
}

/// And(Raw(else), Id(element))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ElementElse {
    pub else_token: Token,
    pub element: Element,
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

/// And(Id(typeName), Modified(?,Id(typeArguments)), Raw(.), Raw(new))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorTearoff {
    pub type_name: TypeName,
    pub type_arguments: Option<TypeArguments>,
    pub period_token: Token,
    pub new_token: Token,
}

/// And(Raw(throw), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ThrowExpression {
    pub throw_token: Token,
    pub expression: Expression,
}

/// And(Raw(throw), Id(expressionWithoutCascade))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ThrowExpressionWithoutCascade {
    pub throw_token: Token,
    pub expression_without_cascade: ExpressionWithoutCascade,
}

/// And(Id(formalParameterPart), Id(functionExpressionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpression {
    pub formal_parameter_part: FormalParameterPart,
    pub function_expression_body: FunctionExpressionBody,
}

/// And(Modified(?,Raw(async)), Raw(=>), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpressionBodyArrowToken {
    pub async_token: Option<Token>,
    pub arrow_token: Token,
    pub expression: Expression,
}

/// And(Raw(async), Modified(?,Raw(*)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpressionGeneratorAsyncToken {
    pub async_token: Token,
    pub asterisk_token: Option<Token>,
}

/// And(Raw(sync), Raw(*))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpressionGeneratorSyncToken {
    pub sync_token: Token,
    pub asterisk_token: Token,
}

/// Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionExpressionGenerator {
    Async(FunctionExpressionGeneratorAsyncToken),
    Sync(FunctionExpressionGeneratorSyncToken),
}

/// And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionExpressionBodyBlock {
    pub function_expression_generator: Option<FunctionExpressionGenerator>,
    pub block: Block,
}

/// Or( And(Modified(?,Raw(async)), Raw(=>), Id(expression)), And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionExpressionBody {
    Arrow(FunctionExpressionBodyArrowToken),
    Block(FunctionExpressionBodyBlock),
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

/// And(Raw(const), Id(constructorDesignation), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstObjectExpression {
    pub const_token: Token,
    pub constructor_designation: ConstructorDesignation,
    pub arguments: Arguments,
}

/// And(Id(argumentList), Modified(?,Raw(,)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArgumentsArgumentList {
    pub argument_list: ArgumentList,
    pub comma_token: Option<Token>,
}

/// And(Raw((), Modified(?,And(Id(argumentList), Modified(?,Raw(,)))), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Arguments {
    pub open_paren_token: Token,
    pub argument_list: Option<ArgumentsArgumentList>,
    pub close_paren_token: Token,
}

/// And(Raw(,), Id(argument))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArgumentItem {
    pub comma_token: Token,
    pub argument: Argument,
}

/// And(Id(argument), Modified(*,And(Raw(,), Id(argument))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArgumentList {
    pub argument: Argument,
    pub argument_item: Vec<ArgumentItem>,
}

/// And(Modified(?,Id(label)), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Argument {
    pub label: Option<Label>,
    pub expression: Expression,
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

/// Or( Raw(?..), Raw(..), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum CascadePrefixType {
    PointsIdQuestion(Token),
    PointsId(Token),
}

/// And(Id(conditionalExpression), Or( Raw(?..), Raw(..), ), Id(cascadeSection))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeLeft {
    pub conditional_expression: ConditionalExpression,
    pub cascade_prefix_type: CascadePrefixType,
    pub cascade_section: CascadeSection,
}

/// And(Id(cascadeLeft), Modified(?,Id(cascadeRight)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Cascade {
    pub cascade_left: CascadeLeft,
    pub cascade_right: Option<CascadeRight>,
}

/// And(Id(cascadeSelector), Id(cascadeSectionTail))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeSection {
    pub cascade_selector: CascadeSelector,
    pub cascade_section_tail: CascadeSectionTail,
}

/// And(Raw([), Id(expression), Raw(]))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeSelectorExpression {
    pub open_square_bracket_token: Token,
    pub expression: Expression,
    pub close_square_bracket_token: Token,
}

/// Or( And(Raw([), Id(expression), Raw(])), Id(identifier), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum CascadeSelector {
    Expression(CascadeSelectorExpression),
    Identifier(Identifier),
}

/// And(Id(assignableSelector), Id(cascadeAssignment))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SelectedCascadeAssignment {
    pub assignable_selector: AssignableSelector,
    pub cascade_assignment: CascadeAssignment,
}

/// And(Modified(*,Id(selector)), Modified(?,And(Id(assignableSelector), Id(cascadeAssignment))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SelectedCascade {
    pub selector: Vec<Selector>,
    pub assignment: Option<SelectedCascadeAssignment>,
}

/// Or( Id(cascadeAssignment), And(Modified(*,Id(selector)), Modified(?,And(Id(assignableSelector), Id(cascadeAssignment)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum CascadeSectionTail {
    CascadeAssignment(CascadeAssignment),
    SelectedCascade(SelectedCascade),
}

/// And(Id(assignmentOperator), Id(expressionWithoutCascade))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CascadeAssignment {
    pub assignment_operator: AssignmentOperator,
    pub expression_without_cascade: ExpressionWithoutCascade,
}

/// Or( Raw(=), Id(compoundAssignmentOperator), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AssignmentOperator {
    Equal(Token),
    CompoundAssignmentOperator(CompoundAssignmentOperator),
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

/// And(Raw(?), Id(expressionWithoutCascade), Raw(:), Id(expressionWithoutCascade))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConditionalExpressionExpressionWithoutCascade {
    pub question_token: Token,
    pub expression_without_cascade: ExpressionWithoutCascade,
    pub colon_token: Token,
    pub expression_without_cascade2: ExpressionWithoutCascade,
}

/// And(Id(ifNullExpression), Modified(?,And(Raw(?), Id(expressionWithoutCascade), Raw(:), Id(expressionWithoutCascade))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConditionalExpression {
    pub if_null_expression: IfNullExpression,
    pub expression_without_cascade: Option<ConditionalExpressionExpressionWithoutCascade>,
}

/// And(Raw(??), Id(logicalOrExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogicalOrExpressionQuestionQuestion {
    pub question_question_token: Token,
    pub logical_or_expression: LogicalOrExpression,
}

/// And(Id(logicalOrExpression), Modified(*,And(Raw(??), Id(logicalOrExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IfNullExpression {
    pub logical_or_expression: LogicalOrExpression,
    pub logical_or_expression_question_question: Vec<LogicalOrExpressionQuestionQuestion>,
}

/// And(Raw(||), Id(logicalAndExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogicalAndExpressionOr {
    pub or_token: Token,
    pub logical_and_expression: LogicalAndExpression,
}

/// And(Id(logicalAndExpression), Modified(*,And(Raw(||), Id(logicalAndExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogicalOrExpression {
    pub logical_and_expression: LogicalAndExpression,
    pub logical_and_expression_or: Vec<LogicalAndExpressionOr>,
}

/// And(Raw(&&), Id(equalityExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EqualityExpressionAnd {
    pub and_token: Token,
    pub equality_expression: EqualityExpression,
}

/// And(Id(equalityExpression), Modified(*,And(Raw(&&), Id(equalityExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogicalAndExpression {
    pub equality_expression: EqualityExpression,
    pub equality_expression_and: Vec<EqualityExpressionAnd>,
}

/// And(Id(equalityOperator), Id(relationalExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EqualityExpressionInner {
    pub equality_operator: EqualityOperator,
    pub relational_expression: RelationalExpression,
}

/// And(Id(relationalExpression), Modified(?,And(Id(equalityOperator), Id(relationalExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EqualityExpressionRelationalExpression {
    pub relational_expression: RelationalExpression,
    pub equality_expression_inner: Option<EqualityExpressionInner>,
}

/// And(Raw(super), Id(equalityOperator), Id(relationalExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EqualityExpressionEqualityOperator {
    pub super_token: Token,
    pub equality_operator: EqualityOperator,
    pub relational_expression: RelationalExpression,
}

/// Or( And(Id(relationalExpression), Modified(?,And(Id(equalityOperator), Id(relationalExpression)))), And(Raw(super), Id(equalityOperator), Id(relationalExpression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum EqualityExpression {
    RelationalExpression(EqualityExpressionRelationalExpression),
    EqualityOperator(EqualityExpressionEqualityOperator),
}

/// Or( Raw(==), Raw(!=), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum EqualityOperator {
    DoubleEqual(Token),
    NotEqual(Token),
}

/// And(Id(relationalOperator), Id(bitwiseOrExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseOrExpressionInterRelationalOperator {
    pub relational_operator: RelationalOperator,
    pub bitwise_or_expression: BitwiseOrExpression,
}

/// Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseOrExpressionInter {
    TypeTest(TypeTest),
    TypeCast(TypeCast),
    RelationalOperator(BitwiseOrExpressionInterRelationalOperator),
}

/// And(Id(bitwiseOrExpression), Modified(?,Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), )))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RelationalExpressionBitwiseOrExpression {
    pub bitwise_or_expression: BitwiseOrExpression,
    pub bitwise_or_expression_inter: Option<BitwiseOrExpressionInter>,
}

/// And(Raw(super), Id(relationalOperator), Id(bitwiseOrExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RelationalExpressionRelationalOperator {
    pub super_token: Token,
    pub relational_operator: RelationalOperator,
    pub bitwise_or_expression: BitwiseOrExpression,
}

/// Or( And(Id(bitwiseOrExpression), Modified(?,Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), ))), And(Raw(super), Id(relationalOperator), Id(bitwiseOrExpression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum RelationalExpression {
    BitwiseOrExpression(RelationalExpressionBitwiseOrExpression),
    RelationalOperator(RelationalExpressionRelationalOperator),
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

/// And(Raw(|), Id(bitwiseXorExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseXorExpressionBitXor {
    pub bit_xor_token: Token,
    pub bitwise_xor_expression: BitwiseXorExpression,
}

/// And(Id(bitwiseXorExpression), Modified(*,And(Raw(|), Id(bitwiseXorExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseOrExpressionBitwiseXorExpression {
    pub bitwise_xor_expression: BitwiseXorExpression,
    pub bitwise_xor_expression_bit_xor: Vec<BitwiseXorExpressionBitXor>,
}

/// And(Raw(|), Id(bitwiseXorExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseXorExpressionBitXor {
    pub bit_xor_token: Token,
    pub bitwise_xor_expression: BitwiseXorExpression,
}

/// And(Raw(super), Modified(+,And(Raw(|), Id(bitwiseXorExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseOrExpressionSuperToken {
    pub super_token: Token,
    pub bitwise_xor_expression_bit_xor: Vec<BitwiseXorExpressionBitXor>,
}

/// Or( And(Id(bitwiseXorExpression), Modified(*,And(Raw(|), Id(bitwiseXorExpression)))), And(Raw(super), Modified(+,And(Raw(|), Id(bitwiseXorExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseOrExpression {
    BitwiseXorExpression(BitwiseOrExpressionBitwiseXorExpression),
    Super(BitwiseOrExpressionSuperToken),
}

/// And(Raw(^), Id(bitwiseAndExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseAndExpressionBitNeg {
    pub bit_neg_token: Token,
    pub bitwise_and_expression: BitwiseAndExpression,
}

/// And(Id(bitwiseAndExpression), Modified(*,And(Raw(^), Id(bitwiseAndExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseXorExpressionBitwiseAndExpression {
    pub bitwise_and_expression: BitwiseAndExpression,
    pub bitwise_and_expression_bit_neg: Vec<BitwiseAndExpressionBitNeg>,
}

/// And(Raw(^), Id(bitwiseAndExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseAndExpressionBitNeg {
    pub bit_neg_token: Token,
    pub bitwise_and_expression: BitwiseAndExpression,
}

/// And(Raw(super), Modified(+,And(Raw(^), Id(bitwiseAndExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseXorExpressionSuperToken {
    pub super_token: Token,
    pub bitwise_and_expression_bit_neg: Vec<BitwiseAndExpressionBitNeg>,
}

/// Or( And(Id(bitwiseAndExpression), Modified(*,And(Raw(^), Id(bitwiseAndExpression)))), And(Raw(super), Modified(+,And(Raw(^), Id(bitwiseAndExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseXorExpression {
    BitwiseAndExpression(BitwiseXorExpressionBitwiseAndExpression),
    Super(BitwiseXorExpressionSuperToken),
}

/// And(Raw(&), Id(shiftExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionBitAnd {
    pub bit_and_token: Token,
    pub shift_expression: ShiftExpression,
}

/// And(Id(shiftExpression), Modified(*,And(Raw(&), Id(shiftExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseAndExpressionShiftExpression {
    pub shift_expression: ShiftExpression,
    pub shift_expression_bit_and: Vec<ShiftExpressionBitAnd>,
}

/// And(Raw(&), Id(shiftExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionBitAnd {
    pub bit_and_token: Token,
    pub shift_expression: ShiftExpression,
}

/// And(Raw(super), Modified(+,And(Raw(&), Id(shiftExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BitwiseAndExpressionSuperToken {
    pub super_token: Token,
    pub shift_expression_bit_and: Vec<ShiftExpressionBitAnd>,
}

/// Or( And(Id(shiftExpression), Modified(*,And(Raw(&), Id(shiftExpression)))), And(Raw(super), Modified(+,And(Raw(&), Id(shiftExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseAndExpression {
    ShiftExpression(BitwiseAndExpressionShiftExpression),
    Super(BitwiseAndExpressionSuperToken),
}

/// Or( Raw(&), Raw(^), Raw(|), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum BitwiseOperator {
    BitAnd(Token),
    BitNeg(Token),
    BitXor(Token),
}

/// And(Id(shiftOperator), Id(additiveExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionInner {
    pub shift_operator: ShiftOperator,
    pub additive_expression: AdditiveExpression,
}

/// And(Id(additiveExpression), Modified(*,And(Id(shiftOperator), Id(additiveExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionAdditiveExpression {
    pub additive_expression: AdditiveExpression,
    pub shift_expression_inner: Vec<ShiftExpressionInner>,
}

/// And(Id(shiftOperator), Id(additiveExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionInner {
    pub shift_operator: ShiftOperator,
    pub additive_expression: AdditiveExpression,
}

/// And(Raw(super), Modified(+,And(Id(shiftOperator), Id(additiveExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShiftExpressionSuperToken {
    pub super_token: Token,
    pub shift_expression_inner: Vec<ShiftExpressionInner>,
}

/// Or( And(Id(additiveExpression), Modified(*,And(Id(shiftOperator), Id(additiveExpression)))), And(Raw(super), Modified(+,And(Id(shiftOperator), Id(additiveExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ShiftExpression {
    AdditiveExpression(ShiftExpressionAdditiveExpression),
    Super(ShiftExpressionSuperToken),
}

/// Or( Raw(<<), Raw(>>>), Raw(>>), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ShiftOperator {
    BitLeft(Token),
    BitRight0(Token),
    BitRight(Token),
}

/// And(Id(additiveOperator), Id(multiplicativeExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditiveExpressionInner {
    pub additive_operator: AdditiveOperator,
    pub multiplicative_expression: MultiplicativeExpression,
}

/// And(Id(multiplicativeExpression), Modified(*,And(Id(additiveOperator), Id(multiplicativeExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditiveExpressionMultiplicativeExpression {
    pub multiplicative_expression: MultiplicativeExpression,
    pub additive_expression_inner: Vec<AdditiveExpressionInner>,
}

/// And(Id(additiveOperator), Id(multiplicativeExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditiveExpressionInner {
    pub additive_operator: AdditiveOperator,
    pub multiplicative_expression: MultiplicativeExpression,
}

/// And(Raw(super), Modified(+,And(Id(additiveOperator), Id(multiplicativeExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AdditiveExpressionSuperToken {
    pub super_token: Token,
    pub additive_expression_inner: Vec<AdditiveExpressionInner>,
}

/// Or( And(Id(multiplicativeExpression), Modified(*,And(Id(additiveOperator), Id(multiplicativeExpression)))), And(Raw(super), Modified(+,And(Id(additiveOperator), Id(multiplicativeExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AdditiveExpression {
    MultiplicativeExpression(AdditiveExpressionMultiplicativeExpression),
    Super(AdditiveExpressionSuperToken),
}

/// Or( Raw(+), Raw(-), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AdditiveOperator {
    Plus(Token),
    Minus(Token),
}

/// And(Id(multiplicativeOperator), Id(unaryExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultiplicativeExpressionInner {
    pub multiplicative_operator: MultiplicativeOperator,
    pub unary_expression: UnaryExpression,
}

/// And(Id(unaryExpression), Modified(*,And(Id(multiplicativeOperator), Id(unaryExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultiplicativeExpressionUnaryExpression {
    pub unary_expression: UnaryExpression,
    pub multiplicative_expression_inner: Vec<MultiplicativeExpressionInner>,
}

/// And(Id(multiplicativeOperator), Id(unaryExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultiplicativeExpressionInner {
    pub multiplicative_operator: MultiplicativeOperator,
    pub unary_expression: UnaryExpression,
}

/// And(Raw(super), Modified(+,And(Id(multiplicativeOperator), Id(unaryExpression))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MultiplicativeExpressionSuperToken {
    pub super_token: Token,
    pub multiplicative_expression_inner: Vec<MultiplicativeExpressionInner>,
}

/// Or( And(Id(unaryExpression), Modified(*,And(Id(multiplicativeOperator), Id(unaryExpression)))), And(Raw(super), Modified(+,And(Id(multiplicativeOperator), Id(unaryExpression)))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum MultiplicativeExpression {
    UnaryExpression(MultiplicativeExpressionUnaryExpression),
    Super(MultiplicativeExpressionSuperToken),
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

/// And(Id(prefixOperator), Id(unaryExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnaryExpressionPrefixOperator {
    pub prefix_operator: PrefixOperator,
    pub unary_expression: UnaryExpression,
}

/// Or( Id(minusOperator), Id(tildeOperator), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum UnaryOperator {
    MinusOperator(MinusOperator),
    TildeOperator(TildeOperator),
}

/// And(Or( Id(minusOperator), Id(tildeOperator), ), Raw(super))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnaryExpressionSuperToken {
    pub unary_operator: UnaryOperator,
    pub super_token: Token,
}

/// And(Id(incrementOperator), Id(assignableExpression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnaryExpressionIncrementOperator {
    pub increment_operator: IncrementOperator,
    pub assignable_expression: AssignableExpression,
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

/// Or( Id(minusOperator), Id(negationOperator), Id(tildeOperator), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum PrefixOperator {
    MinusOperator(MinusOperator),
    NegationOperator(NegationOperator),
    TildeOperator(TildeOperator),
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

/// And(Id(assignableExpression), Id(postfixOperator))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostfixExpressionAssignableExpression {
    pub assignable_expression: AssignableExpression,
    pub postfix_operator: PostfixOperator,
}

/// And(Id(primary), Modified(*,Id(selector)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostfixExpressionPrimary {
    pub primary: Primary,
    pub selector: Vec<Selector>,
}

/// Or( And(Id(assignableExpression), Id(postfixOperator)), And(Id(primary), Modified(*,Id(selector))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum PostfixExpression {
    AssignableExpression(PostfixExpressionAssignableExpression),
    Primary(PostfixExpressionPrimary),
}

/// Id(incrementOperator)
pub type PostfixOperator = IncrementOperator;

/// And(Id(typeName), Id(typeArguments), Raw(.), Raw(new), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorInvocationTypeName {
    pub type_name: TypeName,
    pub type_arguments: TypeArguments,
    pub period_token: Token,
    pub new_token: Token,
    pub arguments: Arguments,
}

/// And(Id(typeName), Raw(.), Raw(new), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConstructorInvocationPeriodToken {
    pub type_name: TypeName,
    pub period_token: Token,
    pub new_token: Token,
    pub arguments: Arguments,
}

/// Or( And(Id(typeName), Id(typeArguments), Raw(.), Raw(new), Id(arguments)), And(Id(typeName), Raw(.), Raw(new), Id(arguments)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ConstructorInvocation {
    TypeName(ConstructorInvocationTypeName),
    Period(ConstructorInvocationPeriodToken),
}

/// Or( Raw(!), Id(assignableSelector), Id(argumentPart), Id(typeArguments), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Selector {
    Exclamation(Token),
    AssignableSelector(AssignableSelector),
    ArgumentPart(ArgumentPart),
    TypeArguments(TypeArguments),
}

/// And(Modified(?,Id(typeArguments)), Id(arguments))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ArgumentPart {
    pub type_arguments: Option<TypeArguments>,
    pub arguments: Arguments,
}

/// Or( Raw(++), Raw(--), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum IncrementOperator {
    PlusPlus(Token),
    MinusMinus(Token),
}

/// And(Id(primary), Id(assignableSelectorPart))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableExpressionPrimary {
    pub primary: Primary,
    pub assignable_selector_part: AssignableSelectorPart,
}

/// And(Raw(super), Id(unconditionalAssignableSelector))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableExpressionUnconditionalAssignableSelector {
    pub super_token: Token,
    pub unconditional_assignable_selector: UnconditionalAssignableSelector,
}

/// Or( And(Id(primary), Id(assignableSelectorPart)), And(Raw(super), Id(unconditionalAssignableSelector)), Id(identifier), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AssignableExpression {
    Primary(AssignableExpressionPrimary),
    UnconditionalAssignableSelector(AssignableExpressionUnconditionalAssignableSelector),
    Identifier(Identifier),
}

/// And(Modified(*,Id(selector)), Id(assignableSelector))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableSelectorPart {
    pub selector: Vec<Selector>,
    pub assignable_selector: AssignableSelector,
}

/// And(Raw([), Id(expression), Raw(]))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnconditionalAssignableSelectorExpression {
    pub open_square_bracket_token: Token,
    pub expression: Expression,
    pub close_square_bracket_token: Token,
}

/// And(Raw(.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UnconditionalAssignableSelectorIdentifier {
    pub period_token: Token,
    pub identifier: Identifier,
}

/// Or( And(Raw([), Id(expression), Raw(])), And(Raw(.), Id(identifier)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum UnconditionalAssignableSelector {
    Expression(UnconditionalAssignableSelectorExpression),
    Identifier(UnconditionalAssignableSelectorIdentifier),
}

/// And(Raw(?.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssignableSelectorIdentifier {
    pub question_id_token: Token,
    pub identifier: Identifier,
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

/// Or( Id(unconditionalAssignableSelector), And(Raw(?.), Id(identifier)), And(Raw(?), Raw([), Id(expression), Raw(])), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum AssignableSelector {
    UnconditionalAssignableSelector(UnconditionalAssignableSelector),
    Identifier(AssignableSelectorIdentifier),
    Question(AssignableSelectorQuestionToken),
}

/// Or( Id(IDENTIFIER), Id(BUILT_IN_IDENTIFIER), Id(OTHER_IDENTIFIER), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Identifier {
    Identifier(Token),
    BuiltInIdentifier(Token),
    OtherIdentifier(Token),
}

/// Or( Id(IDENTIFIER), Id(OTHER_IDENTIFIER), Raw(dynamic), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeIdentifier {
    Identifier(Token),
    OtherIdentifier(Token),
    Dynamic(Token),
}

/// Or( Id(identifier), Raw(new), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum IdentifierOrNew {
    Identifier(Identifier),
    New(Token),
}

/// And(Id(typeIdentifier), Raw(.), Id(identifierOrNew))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QualifiedNameSingle {
    pub type_identifier: TypeIdentifier,
    pub period_token: Token,
    pub identifier_or_new: IdentifierOrNew,
}

/// And(Id(typeIdentifier), Raw(.), Id(typeIdentifier), Raw(.), Id(identifierOrNew))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct QualifiedNameDouble {
    pub type_identifier: TypeIdentifier,
    pub period_token: Token,
    pub type_identifier2: TypeIdentifier,
    pub period_token2: Token,
    pub identifier_or_new: IdentifierOrNew,
}

/// Or( And(Id(typeIdentifier), Raw(.), Id(identifierOrNew)), And(Id(typeIdentifier), Raw(.), Id(typeIdentifier), Raw(.), Id(identifierOrNew)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum QualifiedName {
    QualifiedNameSingle(QualifiedNameSingle),
    QualifiedNameDouble(QualifiedNameDouble),
}

/// RawRange(Raw(0),Raw(9))
pub type Digit = Token;

/// Or( Raw(\t), Raw( ), Id(NEWLINE), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum WHITESPACEItem {
    TEscape(Token),
    Space(Token),
    Newline(Token),
}

/// Modified(+,Or( Raw(\t), Raw( ), Id(NEWLINE), ))
pub type Whitespace = Vec<WHITESPACEItem>;

/// And(Id(isOperator), Id(typeNotVoid))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeTest {
    pub is_operator: IsOperator,
    pub type_not_void: TypeNotVoid,
}

/// And(Raw(is), Modified(?,Raw(!)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IsOperator {
    pub is_token: Token,
    pub exclamation_token: Option<Token>,
}

/// And(Id(asOperator), Id(typeNotVoid))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeCast {
    pub as_operator: AsOperator,
    pub type_not_void: TypeNotVoid,
}

/// Raw(as)
pub type AsOperator = Token;

/// Modified(*,Id(statement))
pub type Statements = Vec<Statement>;

/// And(Modified(*,Id(label)), Id(nonLabelledStatement))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StatementInner {
    pub label: Vec<Label>,
    pub non_labelled_statement: NonLabelledStatement,
}

type Statement = Box<StatementInner>;

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

/// And(Modified(?,Id(expression)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionStatement {
    pub expression: Option<Expression>,
    pub semicolon_token: Token,
}

/// And(Id(metadata), Id(initializedVariableDeclaration), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalVariableDeclaration {
    pub metadata: Metadata,
    pub initialized_variable_declaration: InitializedVariableDeclaration,
    pub semicolon_token: Token,
}

/// And(Id(metadata), Id(functionSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalFunctionDeclaration {
    pub metadata: Metadata,
    pub function_signature: FunctionSignature,
    pub function_body: FunctionBody,
}

/// And(Raw(else), Id(statement))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StatementElse {
    pub else_token: Token,
    pub statement: Statement,
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

/// And(Id(forInitializerStatement), Modified(?,Id(expression)), Raw(;), Modified(?,Id(expressionList)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForLoopPartsSemicolonToken {
    pub for_initializer_statement: ForInitializerStatement,
    pub expression: Option<Expression>,
    pub semicolon_token: Token,
    pub expression_list: Option<ExpressionList>,
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

/// And(Id(identifier), Raw(in), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForLoopPartsInToken {
    pub identifier: Identifier,
    pub in_token: Token,
    pub expression: Expression,
}

/// Or( And(Id(forInitializerStatement), Modified(?,Id(expression)), Raw(;), Modified(?,Id(expressionList))), And(Id(metadata), Id(declaredIdentifier), Raw(in), Id(expression)), And(Id(identifier), Raw(in), Id(expression)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ForLoopParts {
    Semicolon(ForLoopPartsSemicolonToken),
    Metadata(ForLoopPartsMetadata),
    In(ForLoopPartsInToken),
}

/// And(Modified(?,Id(expression)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ForInitializerStatementSemicolonToken {
    pub expression: Option<Expression>,
    pub semicolon_token: Token,
}

/// Or( Id(localVariableDeclaration), And(Modified(?,Id(expression)), Raw(;)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ForInitializerStatement {
    LocalVariableDeclaration(LocalVariableDeclaration),
    Semicolon(ForInitializerStatementSemicolonToken),
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

/// And(Modified(*,Id(label)), Raw(default), Raw(:), Id(statements))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DefaultCase {
    pub label: Vec<Label>,
    pub default_token: Token,
    pub colon_token: Token,
    pub statements: Statements,
}

/// And(Raw(rethrow), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RethrowStatement {
    pub rethrow_token: Token,
    pub semicolon_token: Token,
}

/// And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TryStatementOnPart {
    pub on_part: Vec<OnPart>,
    pub finally_part: Option<FinallyPart>,
}

/// Or( And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart))), Id(finallyPart), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TryStatementCatchFinally {
    TryStatementOnPart(TryStatementOnPart),
    FinallyPart(FinallyPart),
}

/// And(Raw(try), Id(block), Or( And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart))), Id(finallyPart), ))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TryStatement {
    pub try_token: Token,
    pub block: Block,
    pub try_statement_catch_finally: TryStatementCatchFinally,
}

/// And(Id(catchPart), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OnPartCatchPart {
    pub catch_part: CatchPart,
    pub block: Block,
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

/// Or( And(Id(catchPart), Id(block)), And(Raw(on), Id(typeNotVoid), Modified(?,Id(catchPart)), Id(block)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum OnPart {
    CatchPart(OnPartCatchPart),
    TypeNotVoid(OnPartTypeNotVoid),
}

/// And(Raw(,), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierItem {
    pub comma_token: Token,
    pub identifier: Identifier,
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

/// And(Raw(finally), Id(block))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FinallyPart {
    pub finally_token: Token,
    pub block: Block,
}

/// And(Raw(return), Modified(?,Id(expression)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ReturnStatement {
    pub return_token: Token,
    pub expression: Option<Expression>,
    pub semicolon_token: Token,
}

/// And(Id(identifier), Raw(:))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Label {
    pub identifier: Identifier,
    pub colon_token: Token,
}

/// And(Raw(break), Modified(?,Id(identifier)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BreakStatement {
    pub break_token: Token,
    pub identifier: Option<Identifier>,
    pub semicolon_token: Token,
}

/// And(Raw(continue), Modified(?,Id(identifier)), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ContinueStatement {
    pub continue_token: Token,
    pub identifier: Option<Identifier>,
    pub semicolon_token: Token,
}

/// And(Raw(yield), Id(expression), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct YieldStatement {
    pub yield_token: Token,
    pub expression: Expression,
    pub semicolon_token: Token,
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

/// And(Id(assertion), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssertStatement {
    pub assertion: Assertion,
    pub semicolon_token: Token,
}

/// And(Raw(,), Id(expression))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExpressionItem {
    pub comma_token: Token,
    pub expression: Expression,
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

/// And(Raw(external), Id(functionSignature), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalFunctionSignature {
    pub external_token: Token,
    pub function_signature: FunctionSignature,
    pub semicolon_token: Token,
}

/// And(Raw(external), Id(getterSignature), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalGetterSignature {
    pub external_token: Token,
    pub getter_signature: GetterSignature,
    pub semicolon_token: Token,
}

/// And(Raw(external), Id(setterSignature), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalSetterSignature {
    pub external_token: Token,
    pub setter_signature: SetterSignature,
    pub semicolon_token: Token,
}

/// And(Id(functionSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationFunctionSignature {
    pub function_signature: FunctionSignature,
    pub function_body: FunctionBody,
}

/// And(Id(getterSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationGetterSignature {
    pub getter_signature: GetterSignature,
    pub function_body: FunctionBody,
}

/// And(Id(setterSignature), Id(functionBody))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationSetterSignature {
    pub setter_signature: SetterSignature,
    pub function_body: FunctionBody,
}

/// Or( Raw(final), Raw(const), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FinalTokenOrConstToken {
    Final(Token),
    Const(Token),
}

/// And(Or( Raw(final), Raw(const), ), Id(topLevelStaticFinalDeclarations), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationTopLevelStaticFinalDeclarations {
    pub final_token_or_const_token: FinalTokenOrConstToken,
    pub top_level_static_final_declarations: TopLevelStaticFinalDeclarations,
    pub semicolon_token: Token,
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

/// And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TopLevelDeclarationVarOrType {
    pub late_token: Option<Token>,
    pub var_or_type: VarOrType,
    pub initialized_identifier_list: InitializedIdentifierList,
    pub semicolon_token: Token,
}

/// Or( Id(classDeclaration), Id(mixinDeclaration), Id(extensionDeclaration), Id(enumType), Id(typeAlias), And(Raw(external), Id(functionSignature), Raw(;)), And(Raw(external), Id(getterSignature), Raw(;)), And(Raw(external), Id(setterSignature), Raw(;)), And(Id(functionSignature), Id(functionBody)), And(Id(getterSignature), Id(functionBody)), And(Id(setterSignature), Id(functionBody)), And(Or( Raw(final), Raw(const), ), Id(topLevelStaticFinalDeclarations), Raw(;)), And(Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList), Raw(;)), And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList), Raw(;)), )
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
    TopLevelStaticFinalDeclarations(TopLevelDeclarationTopLevelStaticFinalDeclarations),
    Late(TopLevelDeclarationLateToken),
    VarOrType(TopLevelDeclarationVarOrType),
}

/// And(Id(type), Id(staticFinalDeclarationList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypedStaticFinalDeclarations {
    pub dart_type: Type,
    pub static_final_declaration_list: StaticFinalDeclarationList,
}

/// Or( Id(staticFinalDeclarationList), And(Id(type), Id(staticFinalDeclarationList)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TopLevelStaticFinalDeclarations {
    StaticFinalDeclarationList(StaticFinalDeclarationList),
    TypedStaticFinalDeclarations(TypedStaticFinalDeclarations),
}

/// And(Id(metadata), Id(topLevelDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LibraryDeclarationMetadata {
    pub metadata: Metadata,
    pub top_level_declaration: TopLevelDeclaration,
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

/// And(Raw(#!), Id(SCRIPT_TAG_CONTENT), Id(NEWLINE))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ScriptTag {
    pub hash_exclamation_token: Token,
    pub script_tag_content: Token,
    pub newline: Token,
}

/// Modified(*,Negated(Id(NEWLINE)))
pub type ScriptTagContent = Vec<Token>;

/// And(Id(metadata), Raw(library), Id(dottedIdentifierList), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LibraryName {
    pub metadata: Metadata,
    pub library_token: Token,
    pub dotted_identifier_list: DottedIdentifierList,
    pub semicolon_token: Token,
}

/// Or( Id(libraryImport), Id(libraryExport), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum ImportOrExport {
    LibraryImport(LibraryImport),
    LibraryExport(LibraryExport),
}

/// And(Raw(.), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierSelector {
    pub period_token: Token,
    pub identifier: Identifier,
}

/// And(Id(identifier), Modified(*,And(Raw(.), Id(identifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DottedIdentifierList {
    pub identifier: Identifier,
    pub identifier_selector: Vec<IdentifierSelector>,
}

/// And(Id(metadata), Id(importSpecification))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LibraryImport {
    pub metadata: Metadata,
    pub import_specification: ImportSpecification,
}

/// And(Modified(?,Raw(deferred)), Raw(as), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ImportSpecificationAsToken {
    pub deferred_token: Option<Token>,
    pub as_token: Token,
    pub identifier: Identifier,
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

/// And(Raw(show), Id(identifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ShowCombinator {
    pub show_token: Token,
    pub identifier_list: IdentifierList,
}

/// And(Raw(hide), Id(identifierList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HideCombinator {
    pub hide_token: Token,
    pub identifier_list: IdentifierList,
}

/// Or( And(Raw(show), Id(identifierList)), And(Raw(hide), Id(identifierList)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Combinator {
    ShowCombinator(ShowCombinator),
    HideCombinator(HideCombinator),
}

/// And(Raw(,), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierItem {
    pub comma_token: Token,
    pub identifier: Identifier,
}

/// And(Id(identifier), Modified(*,And(Raw(,), Id(identifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierList {
    pub identifier: Identifier,
    pub identifier_item: Vec<IdentifierItem>,
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

/// Or( Id(dottedIdentifierList), Id(uri), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum DottedIdentifierListOrUri {
    DottedIdentifierList(DottedIdentifierList),
    Uri(Uri),
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

/// And(Id(metadata), Id(topLevelDeclaration))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartDeclarationMetadata {
    pub metadata: Metadata,
    pub top_level_declaration: TopLevelDeclaration,
}

/// And(Id(partHeader), Modified(*,And(Id(metadata), Id(topLevelDeclaration))), Id(EOF))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PartDeclaration {
    pub part_header: PartHeader,
    pub metadata: Vec<PartDeclarationMetadata>,
    pub eof: Token,
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

/// And(Raw(==), Id(stringLiteral))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct StringLiteralDoubleEqual {
    pub double_equal_token: Token,
    pub string_literal: StringLiteral,
}

/// And(Id(dottedIdentifierList), Modified(?,And(Raw(==), Id(stringLiteral))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UriTest {
    pub dotted_identifier_list: DottedIdentifierList,
    pub string_literal_double_equal: Option<StringLiteralDoubleEqual>,
}

/// And(Id(functionType), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeFunctionType {
    pub function_type: FunctionType,
    pub question_token: Option<Token>,
}

/// Or( And(Id(functionType), Modified(?,Raw(?))), Id(typeNotFunction), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Type {
    FunctionType(TypeFunctionType),
    TypeNotFunction(TypeNotFunction),
}

/// And(Id(functionType), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidFunctionType {
    pub function_type: FunctionType,
    pub question_token: Option<Token>,
}

/// Or( And(Id(functionType), Modified(?,Raw(?))), Id(typeNotVoidNotFunction), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeNotVoid {
    FunctionType(TypeNotVoidFunctionType),
    TypeNotVoidNotFunction(TypeNotVoidNotFunction),
}

/// Or( Raw(void), Id(typeNotVoidNotFunction), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeNotFunction {
    Void(Token),
    TypeNotVoidNotFunction(TypeNotVoidNotFunction),
}

/// And(Id(typeName), Modified(?,Id(typeArguments)), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidNotFunctionTypeName {
    pub type_name: TypeName,
    pub type_arguments: Option<TypeArguments>,
    pub question_token: Option<Token>,
}

/// And(Raw(Function), Modified(?,Raw(?)))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidNotFunctionFunctionToken {
    pub function_token: Token,
    pub question_token: Option<Token>,
}

/// Or( And(Id(typeName), Modified(?,Id(typeArguments)), Modified(?,Raw(?))), And(Raw(Function), Modified(?,Raw(?))), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeNotVoidNotFunction {
    TypeName(TypeNotVoidNotFunctionTypeName),
    Function(TypeNotVoidNotFunctionFunctionToken),
}

/// And(Raw(.), Id(typeIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeIdentifierSelector {
    pub period_token: Token,
    pub type_identifier: TypeIdentifier,
}

/// And(Id(typeIdentifier), Modified(?,And(Raw(.), Id(typeIdentifier))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeName {
    pub type_identifier: TypeIdentifier,
    pub type_identifier_selector: Option<TypeIdentifierSelector>,
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

/// And(Raw(,), Id(type))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeItem {
    pub comma_token: Token,
    pub dart_type: Type,
}

/// And(Id(type), Modified(*,And(Raw(,), Id(type))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeList {
    pub dart_type: Type,
    pub type_item: Vec<TypeItem>,
}

/// And(Raw(,), Id(typeNotVoidNotFunction))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidNotFunctionItem {
    pub comma_token: Token,
    pub type_not_void_not_function: TypeNotVoidNotFunction,
}

/// And(Id(typeNotVoidNotFunction), Modified(*,And(Raw(,), Id(typeNotVoidNotFunction))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeNotVoidNotFunctionList {
    pub type_not_void_not_function: TypeNotVoidNotFunction,
    pub type_not_void_not_function_item: Vec<TypeNotVoidNotFunctionItem>,
}

/// And(Id(typeNotFunction), Id(functionTypeTails))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionTypeTypeNotFunction {
    pub type_not_function: TypeNotFunction,
    pub function_type_tails: FunctionTypeTails,
}

/// Or( Id(functionTypeTails), And(Id(typeNotFunction), Id(functionTypeTails)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionType {
    FunctionTypeTails(FunctionTypeTails),
    TypeNotFunction(FunctionTypeTypeNotFunction),
}

/// And(Id(functionTypeTail), Modified(?,Raw(?)), Id(functionTypeTails))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionTypeTailsMany {
    pub function_type_tail: FunctionTypeTail,
    pub question_token: Option<Token>,
    pub function_type_tails: FunctionTypeTails,
}

/// Or( And(Id(functionTypeTail), Modified(?,Raw(?)), Id(functionTypeTails)), Id(functionTypeTail), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum FunctionTypeTailsInner {
    FunctionTypeTailsMany(FunctionTypeTailsMany),
    FunctionTypeTail(FunctionTypeTail),
}

type FunctionTypeTails = Box<FunctionTypeTailsInner>;

/// And(Raw(Function), Modified(?,Id(typeParameters)), Id(parameterTypeList))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionTypeTail {
    pub function_token: Token,
    pub type_parameters: Option<TypeParameters>,
    pub parameter_type_list: ParameterTypeList,
}

/// And(Raw((), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EmptyParameters {
    pub open_paren_token: Token,
    pub close_paren_token: Token,
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

/// And(Raw((), Id(normalParameterTypes), Modified(?,Raw(,)), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ParameterTypeListNormalParameterTypes {
    pub open_paren_token: Token,
    pub normal_parameter_types: NormalParameterTypes,
    pub comma_token: Option<Token>,
    pub close_paren_token: Token,
}

/// And(Raw((), Id(optionalParameterTypes), Raw()))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ParameterTypeListOptionalParameterTypes {
    pub open_paren_token: Token,
    pub optional_parameter_types: OptionalParameterTypes,
    pub close_paren_token: Token,
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

/// And(Raw(,), Id(normalParameterType))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalParameterTypeItem {
    pub comma_token: Token,
    pub normal_parameter_type: NormalParameterType,
}

/// And(Id(normalParameterType), Modified(*,And(Raw(,), Id(normalParameterType))))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NormalParameterTypes {
    pub normal_parameter_type: NormalParameterType,
    pub normal_parameter_type_item: Vec<NormalParameterTypeItem>,
}

/// And(Id(metadata), Id(typedIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct IdentifierParameterType {
    pub metadata: Metadata,
    pub typed_identifier: TypedIdentifier,
}

/// And(Id(metadata), Id(type))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeParameterType {
    pub metadata: Metadata,
    pub dart_type: Type,
}

/// Or( And(Id(metadata), Id(typedIdentifier)), And(Id(metadata), Id(type)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum NormalParameterType {
    IdentifierParameterType(IdentifierParameterType),
    TypeParameterType(TypeParameterType),
}

/// Or( Id(optionalPositionalParameterTypes), Id(namedParameterTypes), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum OptionalParameterTypes {
    OptionalPositionalParameterTypes(OptionalPositionalParameterTypes),
    NamedParameterTypes(NamedParameterTypes),
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

/// And(Raw(,), Id(namedParameterType))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedParameterTypeItem {
    pub comma_token: Token,
    pub named_parameter_type: NamedParameterType,
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

/// And(Id(metadata), Modified(?,Raw(required)), Id(typedIdentifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NamedParameterType {
    pub metadata: Metadata,
    pub required_token: Option<Token>,
    pub typed_identifier: TypedIdentifier,
}

/// And(Id(type), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypedIdentifier {
    pub dart_type: Type,
    pub identifier: Identifier,
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

/// And(Raw(typedef), Id(functionTypeAlias))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeAliasFunctionTypeAlias {
    pub typedef_token: Token,
    pub function_type_alias: FunctionTypeAlias,
}

/// Or( And(Raw(typedef), Id(typeIdentifier), Modified(?,Id(typeParameters)), Raw(=), Id(type), Raw(;)), And(Raw(typedef), Id(functionTypeAlias)), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum TypeAlias {
    TypeIdentifier(TypeAliasTypeIdentifier),
    FunctionTypeAlias(TypeAliasFunctionTypeAlias),
}

/// And(Id(functionPrefix), Id(formalParameterPart), Raw(;))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionTypeAlias {
    pub function_prefix: FunctionPrefix,
    pub formal_parameter_part: FormalParameterPart,
    pub semicolon_token: Token,
}

/// And(Modified(?,Id(type)), Id(identifier))
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FunctionPrefix {
    pub dart_type: Option<Type>,
    pub identifier: Identifier,
}

/// Or( Id(SINGLE_LINE_COMMENT), Id(MULTI_LINE_COMMENT), )
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Comment {
    SingleLineComment(Token),
    MultiLineComment(Token),
}
