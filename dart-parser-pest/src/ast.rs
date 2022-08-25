use crate::Token;

/// And(Raw(let), Id(staticFinalDeclarationList), Raw(in), Id(expression))
struct LetExpression {
    let_token: Token,
    static_final_declaration_list: StaticFinalDeclarationList,
    in_token: Token,
    expression: Expression,
}

/// And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)))
struct FinalConstVarOrTypeV0FinalToken {
    late_token: Option<Token>,
    final_token: Token,
    dart_type: Option<Type>,
}

/// And(Raw(const), Modified(?,Id(type)))
struct FinalConstVarOrTypeV1ConstToken {
    const_token: Token,
    dart_type: Option<Type>,
}

/// And(Modified(?,Raw(late)), Id(varOrType))
struct FinalConstVarOrTypeV2VarOrType {
    late_token: Option<Token>,
    var_or_type: VarOrType,
}

/// Or( And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type))), And(Raw(const), Modified(?,Id(type))), And(Modified(?,Raw(late)), Id(varOrType)), )
enum FinalConstVarOrType {
    Final(FinalConstVarOrTypeV0FinalToken),
    Const(FinalConstVarOrTypeV1ConstToken),
    VarOrType(FinalConstVarOrTypeV2VarOrType),
}

/// Or( Raw(var), Id(type), )
enum VarOrType {
    Var(Token),
    Type(Type),
}

/// And(Raw(=), Id(expression))
struct Expressionequal {
    equal_token: Token,
    expression: Expression,
}

/// And(Raw(,), Id(initializedIdentifier))
struct InitializedIdentifiercomma {
    comma_token: Token,
    initialized_identifier: InitializedIdentifier,
}

/// And(Id(declaredIdentifier), Modified(?,And(Raw(=), Id(expression))), Modified(*,And(Raw(,), Id(initializedIdentifier))))
struct InitializedVariableDeclaration {
    declared_identifier: DeclaredIdentifier,
    expressionequal: Option<Expressionequal>,
    initialized_identifiercomma: Vec<InitializedIdentifiercomma>,
}

/// And(Id(identifier), Modified(?,And(Raw(=), Id(expression))))
struct InitializedIdentifier {
    identifier: Identifier,
    expressionequal: Option<Expressionequal>,
}

/// And(Id(initializedIdentifier), Modified(*,And(Raw(,), Id(initializedIdentifier))))
struct InitializedIdentifierList {
    initialized_identifier: InitializedIdentifier,
    initialized_identifiercomma: Vec<InitializedIdentifiercomma>,
}

/// And(Modified(?,Id(type)), Id(identifier), Id(formalParameterPart))
struct FunctionSignature {
    dart_type: Option<Type>,
    identifier: Identifier,
    formal_parameter_part: FormalParameterPart,
}

/// And(Modified(?,Id(typeParameters)), Id(formalParameterList))
struct FormalParameterPart {
    type_parameters: Option<TypeParameters>,
    formal_parameter_list: FormalParameterList,
}

/// And(Modified(?,Raw(async)), Raw(=>), Id(expression), Raw(;))
struct FunctionBodyV0ArrowToken {
    async_token: Option<Token>,
    arrow_token: Token,
    expression: Expression,
    semicolon_token: Token,
}

/// And(Raw(async), Modified(?,Raw(*)))
struct FunctionBodyGeneratorV0AsyncToken {
    async_token: Token,
    asterisk_token: Option<Token>,
}

/// And(Raw(sync), Raw(*))
struct FunctionBodyGeneratorV1SyncToken {
    syncToken: Token,
    asteriskToken: Token,
}

/// Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )
enum FunctionBodyGenerator {
    Async(FunctionBodyGeneratorV0AsyncToken),
    Sync(FunctionBodyGeneratorV1SyncToken),
}

/// And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block))
struct FunctionBodyV1Block {
    function_body_generator: Option<FunctionBodyGenerator>,
    block: Block,
}

/// Or( And(Modified(?,Raw(async)), Raw(=>), Id(expression), Raw(;)), And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block)), )
enum FunctionBody {
    Arrow(FunctionBodyV0ArrowToken),
    Block(FunctionBodyV1Block),
}

/// And(Raw({), Id(statements), Raw(}))
struct Block {
    open_curly_bracket_token: Token,
    statements: Statements,
    close_curly_bracket_token: Token,
}

/// And(Raw((), Raw()))
struct FormalParameterListV0OpenParenToken {
    openParenToken: Token,
    closeParenToken: Token,
}

/// And(Raw((), Id(normalFormalParameters), Modified(?,Raw(,)), Raw()))
struct FormalParameterListV1NormalFormalParameters {
    open_paren_token: Token,
    normal_formal_parameters: NormalFormalParameters,
    comma_token: Option<Token>,
    close_paren_token: Token,
}

/// And(Raw((), Id(normalFormalParameters), Raw(,), Id(optionalOrNamedFormalParameters), Raw()))
struct FormalParameterListV2NormalFormalParameters {
    open_paren_token: Token,
    normal_formal_parameters: NormalFormalParameters,
    comma_token: Token,
    optional_or_named_formal_parameters: OptionalOrNamedFormalParameters,
    close_paren_token: Token,
}

/// And(Raw((), Id(optionalOrNamedFormalParameters), Raw()))
struct FormalParameterListV3OptionalOrNamedFormalParameters {
    open_paren_token: Token,
    optional_or_named_formal_parameters: OptionalOrNamedFormalParameters,
    close_paren_token: Token,
}

/// Or( And(Raw((), Raw())), And(Raw((), Id(normalFormalParameters), Modified(?,Raw(,)), Raw())), And(Raw((), Id(normalFormalParameters), Raw(,), Id(optionalOrNamedFormalParameters), Raw())), And(Raw((), Id(optionalOrNamedFormalParameters), Raw())), )
enum FormalParameterList {
    OpenParen(FormalParameterListV0OpenParenToken),
    NormalFormalParameters(FormalParameterListV1NormalFormalParameters),
    NormalFormalParameters(FormalParameterListV2NormalFormalParameters),
    OptionalOrNamedFormalParameters(FormalParameterListV3OptionalOrNamedFormalParameters),
}

/// And(Raw(,), Id(normalFormalParameter))
struct NormalFormalParametercomma {
    comma_token: Token,
    normal_formal_parameter: NormalFormalParameter,
}

/// And(Id(normalFormalParameter), Modified(*,And(Raw(,), Id(normalFormalParameter))))
struct NormalFormalParameters {
    normal_formal_parameter: NormalFormalParameter,
    normal_formal_parametercomma: Vec<NormalFormalParametercomma>,
}

/// Or( Id(optionalPositionalFormalParameters), Id(namedFormalParameters), )
enum OptionalOrNamedFormalParameters {
    OptionalPositionalFormalParameters(OptionalPositionalFormalParameters),
    NamedFormalParameters(NamedFormalParameters),
}

/// And(Raw(,), Id(defaultFormalParameter))
struct DefaultFormalParametercomma {
    comma_token: Token,
    default_formal_parameter: DefaultFormalParameter,
}

/// And(Raw([), Id(defaultFormalParameter), Modified(*,And(Raw(,), Id(defaultFormalParameter))), Modified(?,Raw(,)), Raw(]))
struct OptionalPositionalFormalParameters {
    open_square_bracket_token: Token,
    default_formal_parameter: DefaultFormalParameter,
    default_formal_parametercomma: Vec<DefaultFormalParametercomma>,
    comma_token: Option<Token>,
    close_square_bracket_token: Token,
}

/// And(Raw(,), Id(defaultNamedParameter))
struct DefaultNamedParametercomma {
    comma_token: Token,
    default_named_parameter: DefaultNamedParameter,
}

/// And(Raw({), Id(defaultNamedParameter), Modified(*,And(Raw(,), Id(defaultNamedParameter))), Modified(?,Raw(,)), Raw(}))
struct NamedFormalParameters {
    open_curly_bracket_token: Token,
    default_named_parameter: DefaultNamedParameter,
    default_named_parametercomma: Vec<DefaultNamedParametercomma>,
    comma_token: Option<Token>,
    close_curly_bracket_token: Token,
}

/// And(Id(metadata), Id(normalFormalParameterNoMetadata))
struct NormalFormalParameter {
    metadata: Metadata,
    normal_formal_parameter_no_metadata: NormalFormalParameterNoMetadata,
}

/// Or( Id(functionFormalParameter), Id(fieldFormalParameter), Id(simpleFormalParameter), )
enum NormalFormalParameterNoMetadata {
    FunctionFormalParameter(FunctionFormalParameter),
    FieldFormalParameter(FieldFormalParameter),
    SimpleFormalParameter(SimpleFormalParameter),
}

/// And(Modified(?,Raw(covariant)), Modified(?,Id(type)), Id(identifier), Id(formalParameterPart), Modified(?,Raw(?)))
struct FunctionFormalParameter {
    covariant_token: Option<Token>,
    dart_type: Option<Type>,
    identifier: Identifier,
    formal_parameter_part: FormalParameterPart,
    question_token: Option<Token>,
}

/// And(Modified(?,Raw(covariant)), Id(identifier))
struct SimpleFormalParameterV1Identifier {
    covariant_token: Option<Token>,
    identifier: Identifier,
}

/// Or( Id(declaredIdentifier), And(Modified(?,Raw(covariant)), Id(identifier)), )
enum SimpleFormalParameter {
    DeclaredIdentifier(DeclaredIdentifier),
    Identifier(SimpleFormalParameterV1Identifier),
}

/// And(Modified(?,Raw(covariant)), Id(finalConstVarOrType), Id(identifier))
struct DeclaredIdentifier {
    covariant_token: Option<Token>,
    final_const_var_or_type: FinalConstVarOrType,
    identifier: Identifier,
}

/// And(Id(formalParameterPart), Modified(?,Raw(?)))
struct FieldFormalParameterFormalParameterPart {
    formal_parameter_part: FormalParameterPart,
    question_token: Option<Token>,
}

/// And(Modified(?,Id(finalConstVarOrType)), Raw(this), Raw(.), Id(identifier), Modified(?,And(Id(formalParameterPart), Modified(?,Raw(?)))))
struct FieldFormalParameter {
    final_const_var_or_type: Option<FinalConstVarOrType>,
    this_token: Token,
    period_token: Token,
    identifier: Identifier,
    formal_parameter_part: Option<FieldFormalParameterFormalParameterPart>,
}

/// And(Id(normalFormalParameter), Modified(?,And(Raw(=), Id(expression))))
struct DefaultFormalParameter {
    normal_formal_parameter: NormalFormalParameter,
    expressionequal: Option<Expressionequal>,
}

/// Or( Raw(=), Raw(:), )
enum EqualTokenOrColonToken {
    Equal(Token),
    Colon(Token),
}

/// And(Or( Raw(=), Raw(:), ), Id(expression))
struct DefaultNamedParameterAssignment {
    equal_token_or_colon_token: EqualTokenOrColonToken,
    expression: Expression,
}

/// And(Id(metadata), Modified(?,Raw(required)), Id(normalFormalParameterNoMetadata), Modified(?,And(Or( Raw(=), Raw(:), ), Id(expression))))
struct DefaultNamedParameter {
    metadata: Metadata,
    required_token: Option<Token>,
    normal_formal_parameter_no_metadata: NormalFormalParameterNoMetadata,
    default_named_parameter_assignment: Option<DefaultNamedParameterAssignment>,
}

/// And(Id(metadata), Id(classMemberDeclaration))
struct ClassDeclarationMembers {
    metadata: Metadata,
    class_member_declaration: ClassMemberDeclaration,
}

/// And(Modified(?,Raw(abstract)), Raw(class), Id(typeIdentifier), Modified(?,Id(typeParameters)), Modified(?,Id(superclass)), Modified(?,Id(interfaces)), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(}))
struct ClassDeclarationV0ClassToken {
    abstract_token: Option<Token>,
    class_token: Token,
    type_identifier: TypeIdentifier,
    type_parameters: Option<TypeParameters>,
    superclass: Option<Superclass>,
    interfaces: Option<Interfaces>,
    open_curly_bracket_token: Token,
    class_declaration_members: Vec<ClassDeclarationMembers>,
    close_curly_bracket_token: Token,
}

/// And(Modified(?,Raw(abstract)), Raw(class), Id(mixinApplicationClass))
struct ClassDeclarationMixin {
    abstract_token: Option<Token>,
    class_token: Token,
    mixin_application_class: MixinApplicationClass,
}

/// Or( And(Modified(?,Raw(abstract)), Raw(class), Id(typeIdentifier), Modified(?,Id(typeParameters)), Modified(?,Id(superclass)), Modified(?,Id(interfaces)), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(})), And(Modified(?,Raw(abstract)), Raw(class), Id(mixinApplicationClass)), )
enum ClassDeclaration {
    Class(ClassDeclarationV0ClassToken),
    ClassDeclarationMixin(ClassDeclarationMixin),
}

/// And(Raw(,), Id(typeNotVoid))
struct TypeNotVoidcomma {
    comma_token: Token,
    type_not_void: TypeNotVoid,
}

/// And(Id(typeNotVoid), Modified(*,And(Raw(,), Id(typeNotVoid))))
struct TypeNotVoidList {
    type_not_void: TypeNotVoid,
    type_not_voidcomma: Vec<TypeNotVoidcomma>,
}

/// And(Id(declaration), Raw(;))
struct ClassMemberDeclarationV0SemicolonToken {
    declaration: Declaration,
    semicolon_token: Token,
}

/// And(Id(methodSignature), Id(functionBody))
struct ClassMemberDeclarationV1MethodSignature {
    method_signature: MethodSignature,
    function_body: FunctionBody,
}

/// Or( And(Id(declaration), Raw(;)), And(Id(methodSignature), Id(functionBody)), )
enum ClassMemberDeclaration {
    Semicolon(ClassMemberDeclarationV0SemicolonToken),
    MethodSignature(ClassMemberDeclarationV1MethodSignature),
}

/// And(Id(constructorSignature), Modified(?,Id(initializers)))
struct MethodSignatureV0ConstructorSignature {
    constructor_signature: ConstructorSignature,
    initializers: Option<Initializers>,
}

/// And(Modified(?,Raw(static)), Id(functionSignature))
struct MethodSignatureV2FunctionSignature {
    static_token: Option<Token>,
    function_signature: FunctionSignature,
}

/// And(Modified(?,Raw(static)), Id(getterSignature))
struct MethodSignatureV3GetterSignature {
    static_token: Option<Token>,
    getter_signature: GetterSignature,
}

/// And(Modified(?,Raw(static)), Id(setterSignature))
struct MethodSignatureV4SetterSignature {
    static_token: Option<Token>,
    setter_signature: SetterSignature,
}

/// Or( And(Id(constructorSignature), Modified(?,Id(initializers))), Id(factoryConstructorSignature), And(Modified(?,Raw(static)), Id(functionSignature)), And(Modified(?,Raw(static)), Id(getterSignature)), And(Modified(?,Raw(static)), Id(setterSignature)), Id(operatorSignature), )
enum MethodSignature {
    ConstructorSignature(MethodSignatureV0ConstructorSignature),
    FactoryConstructorSignature(FactoryConstructorSignature),
    FunctionSignature(MethodSignatureV2FunctionSignature),
    GetterSignature(MethodSignatureV3GetterSignature),
    SetterSignature(MethodSignatureV4SetterSignature),
    OperatorSignature(OperatorSignature),
}

/// And(Raw(external), Id(factoryConstructorSignature))
struct DeclarationV0FactoryConstructorSignature {
    external_token: Token,
    factory_constructor_signature: FactoryConstructorSignature,
}

/// And(Raw(external), Id(constantConstructorSignature))
struct DeclarationV1ConstantConstructorSignature {
    external_token: Token,
    constant_constructor_signature: ConstantConstructorSignature,
}

/// And(Raw(external), Id(constructorSignature))
struct DeclarationV2ConstructorSignature {
    external_token: Token,
    constructor_signature: ConstructorSignature,
}

/// And(Raw(external), Modified(?,Raw(static)))
struct ExternalMaybeStatic {
    external_token: Token,
    static_token: Option<Token>,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(getterSignature))
struct DeclarationV3GetterSignature {
    external_maybe_static: Option<ExternalMaybeStatic>,
    getter_signature: GetterSignature,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(setterSignature))
struct DeclarationV4SetterSignature {
    external_maybe_static: Option<ExternalMaybeStatic>,
    setter_signature: SetterSignature,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(functionSignature))
struct DeclarationV5FunctionSignature {
    external_maybe_static: Option<ExternalMaybeStatic>,
    function_signature: FunctionSignature,
}

/// And(Modified(?,Raw(external)), Id(operatorSignature))
struct DeclarationV6OperatorSignature {
    external_token: Option<Token>,
    operator_signature: OperatorSignature,
}

/// And(Raw(static), Raw(const), Modified(?,Id(type)), Id(staticFinalDeclarationList))
struct DeclarationV7StaticToken {
    static_token: Token,
    const_token: Token,
    dart_type: Option<Type>,
    static_final_declaration_list: StaticFinalDeclarationList,
}

/// And(Raw(static), Raw(final), Modified(?,Id(type)), Id(staticFinalDeclarationList))
struct DeclarationV8StaticToken {
    static_token: Token,
    final_token: Token,
    dart_type: Option<Type>,
    static_final_declaration_list: StaticFinalDeclarationList,
}

/// And(Raw(static), Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList))
struct DeclarationV9StaticToken {
    static_token: Token,
    late_token: Token,
    final_token: Token,
    dart_type: Option<Type>,
    initialized_identifier_list: InitializedIdentifierList,
}

/// And(Raw(static), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
struct DeclarationV10StaticToken {
    static_token: Token,
    late_token: Option<Token>,
    var_or_type: VarOrType,
    initialized_identifier_list: InitializedIdentifierList,
}

/// And(Raw(covariant), Raw(late), Raw(final), Modified(?,Id(type)), Id(identifierList))
struct DeclarationV11CovariantToken {
    covariant_token: Token,
    late_token: Token,
    final_token: Token,
    dart_type: Option<Type>,
    identifier_list: IdentifierList,
}

/// And(Raw(covariant), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
struct DeclarationV12CovariantToken {
    covariant_token: Token,
    late_token: Option<Token>,
    var_or_type: VarOrType,
    initialized_identifier_list: InitializedIdentifierList,
}

/// And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList))
struct DeclarationV13FinalToken {
    late_token: Option<Token>,
    final_token: Token,
    dart_type: Option<Type>,
    initialized_identifier_list: InitializedIdentifierList,
}

/// And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
struct DeclarationV14VarOrType {
    late_token: Option<Token>,
    var_or_type: VarOrType,
    initialized_identifier_list: InitializedIdentifierList,
}

/// Or( Id(redirection), Id(initializers), )
enum RedirectionOrInitializers {
    Redirection(Redirection),
    Initializers(Initializers),
}

/// And(Id(constantConstructorSignature), Modified(?,Or( Id(redirection), Id(initializers), )))
struct DeclarationV16ConstantConstructorSignature {
    constant_constructor_signature: ConstantConstructorSignature,
    redirection_or_initializers: Option<RedirectionOrInitializers>,
}

/// And(Id(constructorSignature), Modified(?,Or( Id(redirection), Id(initializers), )))
struct DeclarationV17ConstructorSignature {
    constructor_signature: ConstructorSignature,
    redirection_or_initializers: Option<RedirectionOrInitializers>,
}

/// Or( And(Raw(external), Id(factoryConstructorSignature)), And(Raw(external), Id(constantConstructorSignature)), And(Raw(external), Id(constructorSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(getterSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(setterSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(functionSignature)), And(Modified(?,Raw(external)), Id(operatorSignature)), And(Raw(static), Raw(const), Modified(?,Id(type)), Id(staticFinalDeclarationList)), And(Raw(static), Raw(final), Modified(?,Id(type)), Id(staticFinalDeclarationList)), And(Raw(static), Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList)), And(Raw(static), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), And(Raw(covariant), Raw(late), Raw(final), Modified(?,Id(type)), Id(identifierList)), And(Raw(covariant), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList)), And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), Id(redirectingFactoryConstructorSignature), And(Id(constantConstructorSignature), Modified(?,Or( Id(redirection), Id(initializers), ))), And(Id(constructorSignature), Modified(?,Or( Id(redirection), Id(initializers), ))), )
enum Declaration {
    FactoryConstructorSignature(DeclarationV0FactoryConstructorSignature),
    ConstantConstructorSignature(DeclarationV1ConstantConstructorSignature),
    ConstructorSignature(DeclarationV2ConstructorSignature),
    GetterSignature(DeclarationV3GetterSignature),
    SetterSignature(DeclarationV4SetterSignature),
    FunctionSignature(DeclarationV5FunctionSignature),
    OperatorSignature(DeclarationV6OperatorSignature),
    Static(DeclarationV7StaticToken),
    Static(DeclarationV8StaticToken),
    Static(DeclarationV9StaticToken),
    Static(DeclarationV10StaticToken),
    Covariant(DeclarationV11CovariantToken),
    Covariant(DeclarationV12CovariantToken),
    Final(DeclarationV13FinalToken),
    VarOrType(DeclarationV14VarOrType),
    RedirectingFactoryConstructorSignature(RedirectingFactoryConstructorSignature),
    ConstantConstructorSignature(DeclarationV16ConstantConstructorSignature),
    ConstructorSignature(DeclarationV17ConstructorSignature),
}

/// And(Raw(,), Id(staticFinalDeclaration))
struct StaticFinalDeclarationcomma {
    comma_token: Token,
    static_final_declaration: StaticFinalDeclaration,
}

/// And(Id(staticFinalDeclaration), Modified(*,And(Raw(,), Id(staticFinalDeclaration))))
struct StaticFinalDeclarationList {
    static_final_declaration: StaticFinalDeclaration,
    static_final_declarationcomma: Vec<StaticFinalDeclarationcomma>,
}

/// And(Id(identifier), Raw(=), Id(expression))
struct StaticFinalDeclaration {
    identifier: Identifier,
    equal_token: Token,
    expression: Expression,
}

/// And(Modified(?,Id(type)), Raw(operator), Id(operator), Id(formalParameterList))
struct OperatorSignature {
    dart_type: Option<Type>,
    operator_token: Token,
    operator: Operator,
    formal_parameter_list: FormalParameterList,
}

/// Or( Raw(~), Id(binaryOperator), Raw([]), Raw([]=), )
enum Operator {
    Tilde(Token),
    BinaryOperator(BinaryOperator),
    SquareBrackets(Token),
    QuareBracketsEq(Token),
}

/// Or( Id(multiplicativeOperator), Id(additiveOperator), Id(shiftOperator), Id(relationalOperator), Raw(==), Id(bitwiseOperator), )
enum BinaryOperator {
    MultiplicativeOperator(MultiplicativeOperator),
    AdditiveOperator(AdditiveOperator),
    ShiftOperator(ShiftOperator),
    RelationalOperator(RelationalOperator),
    DoubleEqual(Token),
    BitwiseOperator(BitwiseOperator),
}

/// And(Modified(?,Id(type)), Raw(get), Id(identifier))
struct GetterSignature {
    dart_type: Option<Type>,
    get_token: Token,
    identifier: Identifier,
}

/// And(Modified(?,Id(type)), Raw(set), Id(identifier), Id(formalParameterList))
struct SetterSignature {
    dart_type: Option<Type>,
    set_token: Token,
    identifier: Identifier,
    formal_parameter_list: FormalParameterList,
}

/// And(Id(constructorName), Id(formalParameterList))
struct ConstructorSignature {
    constructor_name: ConstructorName,
    formal_parameter_list: FormalParameterList,
}

/// And(Raw(.), Id(identifier))
struct Identifierperiod {
    period_token: Token,
    identifier: Identifier,
}

/// And(Id(typeIdentifier), Modified(?,And(Raw(.), Id(identifier))))
struct ConstructorName {
    type_identifier: TypeIdentifier,
    identifierperiod: Option<Identifierperiod>,
}

/// And(Raw(:), Raw(this), Modified(?,And(Raw(.), Id(identifier))), Id(arguments))
struct Redirection {
    colon_token: Token,
    this_token: Token,
    identifierperiod: Option<Identifierperiod>,
    arguments: Arguments,
}

/// And(Raw(,), Id(initializerListEntry))
struct InitializerListEntrycomma {
    comma_token: Token,
    initializer_list_entry: InitializerListEntry,
}

/// And(Raw(:), Id(initializerListEntry), Modified(*,And(Raw(,), Id(initializerListEntry))))
struct Initializers {
    colon_token: Token,
    initializer_list_entry: InitializerListEntry,
    initializer_list_entrycomma: Vec<InitializerListEntrycomma>,
}

/// And(Raw(super), Id(arguments))
struct InitializerListEntryV0Arguments {
    super_token: Token,
    arguments: Arguments,
}

/// And(Raw(super), Raw(.), Id(identifier), Id(arguments))
struct InitializerListEntryV1SuperToken {
    super_token: Token,
    period_token: Token,
    identifier: Identifier,
    arguments: Arguments,
}

/// Or( And(Raw(super), Id(arguments)), And(Raw(super), Raw(.), Id(identifier), Id(arguments)), Id(fieldInitializer), Id(assertion), )
enum InitializerListEntry {
    Arguments(InitializerListEntryV0Arguments),
    Super(InitializerListEntryV1SuperToken),
    FieldInitializer(FieldInitializer),
    Assertion(Assertion),
}

/// And(Raw(this), Raw(.))
struct FieldInitializerThisToken {
    thisToken: Token,
    periodToken: Token,
}

/// And(Modified(?,And(Raw(this), Raw(.))), Id(identifier), Raw(=), Id(initializerExpression))
struct FieldInitializer {
    this_token: Option<FieldInitializerThisToken>,
    identifier: Identifier,
    equal_token: Token,
    initializer_expression: InitializerExpression,
}

/// Or( Id(conditionalExpression), Id(cascade), )
enum InitializerExpression {
    ConditionalExpression(ConditionalExpression),
    Cascade(Cascade),
}

/// And(Modified(?,Raw(const)), Raw(factory), Id(constructorName), Id(formalParameterList))
struct FactoryConstructorSignature {
    const_token: Option<Token>,
    factory_token: Token,
    constructor_name: ConstructorName,
    formal_parameter_list: FormalParameterList,
}

/// And(Modified(?,Raw(const)), Raw(factory), Id(constructorName), Id(formalParameterList), Raw(=), Id(constructorDesignation))
struct RedirectingFactoryConstructorSignature {
    const_token: Option<Token>,
    factory_token: Token,
    constructor_name: ConstructorName,
    formal_parameter_list: FormalParameterList,
    equal_token: Token,
    constructor_designation: ConstructorDesignation,
}

/// And(Id(typeName), Id(typeArguments), Modified(?,And(Raw(.), Id(identifier))))
struct ConstructorDesignationV2TypeName {
    type_name: TypeName,
    type_arguments: TypeArguments,
    identifierperiod: Option<Identifierperiod>,
}

/// Or( Id(typeIdentifier), Id(qualifiedName), And(Id(typeName), Id(typeArguments), Modified(?,And(Raw(.), Id(identifier)))), )
enum ConstructorDesignation {
    TypeIdentifier(TypeIdentifier),
    QualifiedName(QualifiedName),
    TypeName(ConstructorDesignationV2TypeName),
}

/// And(Raw(const), Id(constructorName), Id(formalParameterList))
struct ConstantConstructorSignature {
    const_token: Token,
    constructor_name: ConstructorName,
    formal_parameter_list: FormalParameterList,
}

/// And(Raw(extends), Id(typeNotVoid), Modified(?,Id(mixins)))
struct SuperclassV0TypeNotVoid {
    extends_token: Token,
    type_not_void: TypeNotVoid,
    mixins: Option<Mixins>,
}

/// Or( And(Raw(extends), Id(typeNotVoid), Modified(?,Id(mixins))), Id(mixins), )
enum Superclass {
    TypeNotVoid(SuperclassV0TypeNotVoid),
    Mixins(Mixins),
}

/// And(Raw(with), Id(typeNotVoidList))
struct Mixins {
    with_token: Token,
    type_not_void_list: TypeNotVoidList,
}

/// And(Raw(implements), Id(typeNotVoidList))
struct Interfaces {
    implements_token: Token,
    type_not_void_list: TypeNotVoidList,
}

/// And(Id(identifier), Modified(?,Id(typeParameters)), Raw(=), Id(mixinApplication), Raw(;))
struct MixinApplicationClass {
    identifier: Identifier,
    type_parameters: Option<TypeParameters>,
    equal_token: Token,
    mixin_application: MixinApplication,
    semicolon_token: Token,
}

/// And(Id(typeNotVoid), Id(mixins), Modified(?,Id(interfaces)))
struct MixinApplication {
    type_not_void: TypeNotVoid,
    mixins: Mixins,
    interfaces: Option<Interfaces>,
}

/// And(Raw(on), Id(typeNotVoidList))
struct TypeNotVoidListon {
    on_token: Token,
    type_not_void_list: TypeNotVoidList,
}

/// And(Id(metadata), Id(classMemberDeclaration))
struct MixinDeclarationMetadata {
    metadata: Metadata,
    class_member_declaration: ClassMemberDeclaration,
}

/// And(Raw(mixin), Id(typeIdentifier), Modified(?,Id(typeParameters)), Modified(?,And(Raw(on), Id(typeNotVoidList))), Modified(?,Id(interfaces)), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(}))
struct MixinDeclaration {
    mixin_token: Token,
    type_identifier: TypeIdentifier,
    type_parameters: Option<TypeParameters>,
    type_not_void_liston: Option<TypeNotVoidListon>,
    interfaces: Option<Interfaces>,
    open_curly_bracket_token: Token,
    metadata: Vec<MixinDeclarationMetadata>,
    close_curly_bracket_token: Token,
}

/// And(Id(metadata), Id(classMemberDeclaration))
struct ExtensionDeclarationMetadata {
    metadata: Metadata,
    class_member_declaration: ClassMemberDeclaration,
}

/// And(Raw(extension), Modified(?,Id(identifier)), Modified(?,Id(typeParameters)), Raw(on), Id(type), Raw({), Modified(*,And(Id(metadata), Id(classMemberDeclaration))), Raw(}))
struct ExtensionDeclaration {
    extension_token: Token,
    identifier: Option<Identifier>,
    type_parameters: Option<TypeParameters>,
    on_token: Token,
    dart_type: Type,
    open_curly_bracket_token: Token,
    metadata: Vec<ExtensionDeclarationMetadata>,
    close_curly_bracket_token: Token,
}

/// And(Raw(,), Id(enumEntry))
struct EnumEntrycomma {
    comma_token: Token,
    enum_entry: EnumEntry,
}

/// And(Raw(enum), Id(identifier), Raw({), Id(enumEntry), Modified(*,And(Raw(,), Id(enumEntry))), Modified(?,Raw(,)), Raw(}))
struct EnumType {
    enum_token: Token,
    identifier: Identifier,
    open_curly_bracket_token: Token,
    enum_entry: EnumEntry,
    enum_entrycomma: Vec<EnumEntrycomma>,
    comma_token: Option<Token>,
    close_curly_bracket_token: Token,
}

/// And(Id(metadata), Id(identifier))
struct EnumEntry {
    metadata: Metadata,
    identifier: Identifier,
}

/// And(Raw(extends), Id(typeNotVoid))
struct TypeNotVoidextends {
    extends_token: Token,
    type_not_void: TypeNotVoid,
}

/// And(Id(metadata), Id(identifier), Modified(?,And(Raw(extends), Id(typeNotVoid))))
struct TypeParameter {
    metadata: Metadata,
    identifier: Identifier,
    type_not_voidextends: Option<TypeNotVoidextends>,
}

/// And(Raw(,), Id(typeParameter))
struct TypeParametercomma {
    comma_token: Token,
    type_parameter: TypeParameter,
}

/// And(Raw(<), Id(typeParameter), Modified(*,And(Raw(,), Id(typeParameter))), Raw(>))
struct TypeParameters {
    less_token: Token,
    type_parameter: TypeParameter,
    type_parametercomma: Vec<TypeParametercomma>,
    more_token: Token,
}

/// And(Raw(@), Id(metadatum))
struct Metadata {
    at_token: Token,
    metadatum: Metadatum,
}

/// And(Id(constructorDesignation), Id(arguments))
struct MetadatumV2ConstructorDesignation {
    constructor_designation: ConstructorDesignation,
    arguments: Arguments,
}

/// Or( Id(identifier), Id(qualifiedName), And(Id(constructorDesignation), Id(arguments)), )
enum Metadatum {
    Identifier(Identifier),
    QualifiedName(QualifiedName),
    ConstructorDesignation(MetadatumV2ConstructorDesignation),
}

/// And(Id(assignableExpression), Id(assignmentOperator), Id(expression))
struct ExpressionV0AssignableExpression {
    assignable_expression: AssignableExpression,
    assignment_operator: AssignmentOperator,
    expression: Expression,
}

/// Or( And(Id(assignableExpression), Id(assignmentOperator), Id(expression)), Id(conditionalExpression), Id(cascade), Id(throwExpression), )
enum Expression {
    AssignableExpression(ExpressionV0AssignableExpression),
    ConditionalExpression(ConditionalExpression),
    Cascade(Cascade),
    ThrowExpression(ThrowExpression),
}

/// And(Id(assignableExpression), Id(assignmentOperator), Id(expressionWithoutCascade))
struct ExpressionWithoutCascadeV0AssignableExpression {
    assignable_expression: AssignableExpression,
    assignment_operator: AssignmentOperator,
    expression_without_cascade: ExpressionWithoutCascade,
}

/// Or( And(Id(assignableExpression), Id(assignmentOperator), Id(expressionWithoutCascade)), Id(conditionalExpression), Id(throwExpressionWithoutCascade), )
enum ExpressionWithoutCascade {
    AssignableExpression(ExpressionWithoutCascadeV0AssignableExpression),
    ConditionalExpression(ConditionalExpression),
    ThrowExpressionWithoutCascade(ThrowExpressionWithoutCascade),
}

/// And(Raw(,), Id(expression))
struct Expressioncomma {
    comma_token: Token,
    expression: Expression,
}

/// And(Id(expression), Modified(*,And(Raw(,), Id(expression))))
struct ExpressionList {
    expression: Expression,
    expressioncomma: Vec<Expressioncomma>,
}

/// And(Raw(super), Id(unconditionalAssignableSelector))
struct PrimaryV1UnconditionalAssignableSelector {
    super_token: Token,
    unconditional_assignable_selector: UnconditionalAssignableSelector,
}

/// And(Raw(super), Id(argumentPart))
struct PrimaryV2ArgumentPart {
    super_token: Token,
    argument_part: ArgumentPart,
}

/// And(Raw((), Id(expression), Raw()))
struct PrimaryV9Expression {
    open_paren_token: Token,
    expression: Expression,
    close_paren_token: Token,
}

/// Or( Id(thisExpression), And(Raw(super), Id(unconditionalAssignableSelector)), And(Raw(super), Id(argumentPart)), Id(functionExpression), Id(literal), Id(identifier), Id(newExpression), Id(constObjectExpression), Id(constructorInvocation), And(Raw((), Id(expression), Raw())), )
enum Primary {
    ThisExpression(ThisExpression),
    UnconditionalAssignableSelector(PrimaryV1UnconditionalAssignableSelector),
    ArgumentPart(PrimaryV2ArgumentPart),
    FunctionExpression(FunctionExpression),
    Literal(Literal),
    Identifier(Identifier),
    NewExpression(NewExpression),
    ConstObjectExpression(ConstObjectExpression),
    ConstructorInvocation(ConstructorInvocation),
    Expression(PrimaryV9Expression),
}

/// Or( Id(nullLiteral), Id(booleanLiteral), Id(numericLiteral), Id(stringLiteral), Id(symbolLiteral), Id(listLiteral), Id(setOrMapLiteral), )
enum Literal {
    NullLiteral(NullLiteral),
    BooleanLiteral(BooleanLiteral),
    NumericLiteral(NumericLiteral),
    StringLiteral(StringLiteral),
    SymbolLiteral(SymbolLiteral),
    ListLiteral(ListLiteral),
    SetOrMapLiteral(SetOrMapLiteral),
}

/// Or( Id(NUMBER), Id(HEX_NUMBER), )
enum NumericLiteral {
    Number(Number),
    HexNumber(HexNumber),
}

/// And(Raw(.), Modified(+,Id(DIGIT)))
struct null {
    period_token: Token,
    digit: Vec<Token>,
}

/// And(Modified(+,Id(DIGIT)), Modified(?,And(Raw(.), Modified(+,Id(DIGIT)))), Modified(?,Id(EXPONENT)))
struct null {
    digit: Vec<Token>,
    null: Option<null>,
    exponent: Option<Token>,
}

/// And(Raw(.), Modified(+,Id(DIGIT)), Modified(?,Id(EXPONENT)))
struct NUMBERV1PeriodToken {
    period_token: Token,
    digit: Vec<Token>,
    exponent: Option<Token>,
}

/// Or( And(Modified(+,Id(DIGIT)), Modified(?,And(Raw(.), Modified(+,Id(DIGIT)))), Modified(?,Id(EXPONENT))), And(Raw(.), Modified(+,Id(DIGIT)), Modified(?,Id(EXPONENT))), )
enum Number {
    null(null),
    Period(NUMBERV1PeriodToken),
}

/// Or( Raw(e), Raw(E), )
enum ExponentTokenOrScientificToken {
    Exponent(Token),
    Scientific(Token),
}

/// Or( Raw(+), Raw(-), )
enum PlusTokenOrMinusToken {
    Plus(Token),
    Minus(Token),
}

/// And(Or( Raw(e), Raw(E), ), Modified(?,Or( Raw(+), Raw(-), )), Modified(+,Id(DIGIT)))
struct Exponent {
    exponent_token_or_scientific_token: ExponentTokenOrScientificToken,
    plus_token_or_minus_token: Option<PlusTokenOrMinusToken>,
    digit: Vec<Token>,
}

/// And(Raw(0x), Modified(+,Id(HEX_DIGIT)))
struct HEXNUMBERV0Hex0xToken {
    hex0x_token: Token,
    hex_digit: Vec<Token>,
}

/// And(Raw(0X), Modified(+,Id(HEX_DIGIT)))
struct HEXNUMBERV1Hex0XToken {
    hex0_x_token: Token,
    hex_digit: Vec<Token>,
}

/// Or( And(Raw(0x), Modified(+,Id(HEX_DIGIT))), And(Raw(0X), Modified(+,Id(HEX_DIGIT))), )
enum HexNumber {
    Hex0x(HEXNUMBERV0Hex0xToken),
    Hex0X(HEXNUMBERV1Hex0XToken),
}

/// Or( RawRange(Raw(a),Raw(f)), RawRange(Raw(A),Raw(F)), Id(DIGIT), )
enum HexDigit {
    V0 { a_token_tof_token: Token },
    V1 { a_token_to_f_token: Token },
    Digit(Digit),
}

/// Or( Raw(true), Raw(false), )
enum BooleanLiteral {
    True(Token),
    False(Token),
}

/// Or( Id(multilineString), Id(singleLineString), )
enum StringLiteral {
    MultilineString(MultilineString),
    SingleLineString(SingleLineString),
}

/// And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))
struct null {
    single_line_string_sq_mid_mid: Token,
    expression: Expression,
}

/// And(Id(SINGLE_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_SQ_MID_END))
struct SingleLineStringV2SingleLineStringSqBeginMid {
    single_line_string_sq_begin_mid: Token,
    expression: Expression,
    null: Vec<null>,
    single_line_string_sq_mid_end: Token,
}

/// And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))
struct null {
    single_line_string_dq_mid_mid: Token,
    expression: Expression,
}

/// And(Id(SINGLE_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_DQ_MID_END))
struct SingleLineStringV4SingleLineStringDqBeginMid {
    single_line_string_dq_begin_mid: Token,
    expression: Expression,
    null: Vec<null>,
    single_line_string_dq_mid_end: Token,
}

/// Or( Id(RAW_SINGLE_LINE_STRING), Id(SINGLE_LINE_STRING_SQ_BEGIN_END), And(Id(SINGLE_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_SQ_MID_END)), Id(SINGLE_LINE_STRING_DQ_BEGIN_END), And(Id(SINGLE_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_DQ_MID_END)), )
enum SingleLineString {
    RawSingleLineString(RawSingleLineString),
    SingleLineStringSqBeginEnd(SingleLineStringSqBeginEnd),
    SingleLineStringSqBeginMid(SingleLineStringV2SingleLineStringSqBeginMid),
    SingleLineStringDqBeginEnd(SingleLineStringDqBeginEnd),
    SingleLineStringDqBeginMid(SingleLineStringV4SingleLineStringDqBeginMid),
}

/// And(Raw(r), Raw(\'), Modified(*,Negated(Or( Raw(\'), Raw(\r), Raw(\n), ))), Raw(\'))
struct RAWSINGLELINESTRINGV0RToken {
    r_token: Token,
    quote_token: Token,
    null: Vec<Token>,
    quoteToken2: Token,
}

/// And(Raw(r), Raw("), Modified(*,Negated(Or( Raw("), Raw(\r), Raw(\n), ))), Raw("))
struct RAWSINGLELINESTRINGV1RToken {
    r_token: Token,
    double_quote_token: Token,
    null: Vec<Token>,
    doubleQuoteToken2: Token,
}

/// Or( And(Raw(r), Raw(\'), Modified(*,Negated(Or( Raw(\'), Raw(\r), Raw(\n), ))), Raw(\')), And(Raw(r), Raw("), Modified(*,Negated(Or( Raw("), Raw(\r), Raw(\n), ))), Raw(")), )
enum RawSingleLineString {
    R(RAWSINGLELINESTRINGV0RToken),
    R(RAWSINGLELINESTRINGV1RToken),
}

/// And(Raw(\\), Negated(Or( Raw(n), Raw(r), Raw(b), Raw(t), Raw(v), Raw(x), Raw(u), Raw(\r), Raw(\n), )))
struct STRINGCONTENTCOMMONV2BackToken {
    back_token: Token,
    null: Token,
}

/// Or( Negated(Or( Raw(\\), Raw(\'), Raw("), Raw($), Raw(\r), Raw(\n), )), Id(ESCAPE_SEQUENCE), And(Raw(\\), Negated(Or( Raw(n), Raw(r), Raw(b), Raw(t), Raw(v), Raw(x), Raw(u), Raw(\r), Raw(\n), ))), Id(SIMPLE_STRING_INTERPOLATION), )
enum StringContentCommon {
    V0 { null: Token },
    EscapeSequence(EscapeSequence),
    Back(STRINGCONTENTCOMMONV2BackToken),
    SimpleStringInterpolation(SimpleStringInterpolation),
}

/// Or( Id(STRING_CONTENT_COMMON), Raw("), )
enum StringContentSq {
    StringContentCommon(StringContentCommon),
    DoubleQuote(Token),
}

/// And(Raw(\'), Modified(*,Id(STRING_CONTENT_SQ)), Raw(\'))
struct SingleLineStringSqBeginEnd {
    quote_token: Token,
    string_content_sq: Vec<Token>,
    quoteToken2: Token,
}

/// And(Raw(\'), Modified(*,Id(STRING_CONTENT_SQ)), Raw(${))
struct SingleLineStringSqBeginMid {
    quote_token: Token,
    string_content_sq: Vec<Token>,
    interpolation_start_token: Token,
}

/// And(Raw(}), Modified(*,Id(STRING_CONTENT_SQ)), Raw(${))
struct SingleLineStringSqMidMid {
    close_curly_bracket_token: Token,
    string_content_sq: Vec<Token>,
    interpolation_start_token: Token,
}

/// And(Raw(}), Modified(*,Id(STRING_CONTENT_SQ)), Raw(\'))
struct SingleLineStringSqMidEnd {
    close_curly_bracket_token: Token,
    string_content_sq: Vec<Token>,
    quote_token: Token,
}

/// Or( Id(STRING_CONTENT_COMMON), Raw(\'), )
enum StringContentDq {
    StringContentCommon(StringContentCommon),
    Quote(Token),
}

/// And(Raw("), Modified(*,Id(STRING_CONTENT_DQ)), Raw("))
struct SingleLineStringDqBeginEnd {
    double_quote_token: Token,
    string_content_dq: Vec<Token>,
    doubleQuoteToken2: Token,
}

/// And(Raw("), Modified(*,Id(STRING_CONTENT_DQ)), Raw(${))
struct SingleLineStringDqBeginMid {
    double_quote_token: Token,
    string_content_dq: Vec<Token>,
    interpolation_start_token: Token,
}

/// And(Raw(}), Modified(*,Id(STRING_CONTENT_DQ)), Raw(${))
struct SingleLineStringDqMidMid {
    close_curly_bracket_token: Token,
    string_content_dq: Vec<Token>,
    interpolation_start_token: Token,
}

/// And(Raw(}), Modified(*,Id(STRING_CONTENT_DQ)), Raw("))
struct SingleLineStringDqMidEnd {
    close_curly_bracket_token: Token,
    string_content_dq: Vec<Token>,
    double_quote_token: Token,
}

/// And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))
struct null {
    multi_line_string_sq_mid_mid: Token,
    expression: Expression,
}

/// And(Id(MULTI_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_SQ_MID_END))
struct MultilineStringV2MultiLineStringSqBeginMid {
    multi_line_string_sq_begin_mid: Token,
    expression: Expression,
    null: Vec<null>,
    multi_line_string_sq_mid_end: Token,
}

/// And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))
struct null {
    multi_line_string_dq_mid_mid: Token,
    expression: Expression,
}

/// And(Id(MULTI_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_DQ_MID_END))
struct MultilineStringV4MultiLineStringDqBeginMid {
    multi_line_string_dq_begin_mid: Token,
    expression: Expression,
    null: Vec<null>,
    multi_line_string_dq_mid_end: Token,
}

/// Or( Id(RAW_MULTI_LINE_STRING), Id(MULTI_LINE_STRING_SQ_BEGIN_END), And(Id(MULTI_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_SQ_MID_END)), Id(MULTI_LINE_STRING_DQ_BEGIN_END), And(Id(MULTI_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_DQ_MID_END)), )
enum MultilineString {
    RawMultiLineString(RawMultiLineString),
    MultiLineStringSqBeginEnd(MultiLineStringSqBeginEnd),
    MultiLineStringSqBeginMid(MultilineStringV2MultiLineStringSqBeginMid),
    MultiLineStringDqBeginEnd(MultiLineStringDqBeginEnd),
    MultiLineStringDqBeginMid(MultilineStringV4MultiLineStringDqBeginMid),
}

/// And(Raw(r), Raw(\'\'\'), Any, Raw(\'\'\'))
struct RAWMULTILINESTRINGV0RToken {
    r_token: Token,
    triple_quotes_token: Token,
    null: Token,
    tripleQuotesToken2: Token,
}

/// And(Raw(r), Raw("""), Any, Raw("""))
struct RAWMULTILINESTRINGV1RToken {
    r_token: Token,
    triple_double_quotes_token: Token,
    null: Token,
    tripleDoubleQuotesToken2: Token,
}

/// Or( And(Raw(r), Raw(\'\'\'), Any, Raw(\'\'\')), And(Raw(r), Raw("""), Any, Raw(""")), )
enum RawMultiLineString {
    R(RAWMULTILINESTRINGV0RToken),
    R(RAWMULTILINESTRINGV1RToken),
}

/// Or( Raw(\'), Raw(\'\'), )
enum QuotesSq {
    Quote(Token),
    TwoQuotes(Token),
}

/// Or( Id(STRING_CONTENT_COMMON), Raw("), Raw(\r), Raw(\n), )
enum null {
    StringContentCommon(StringContentCommon),
    DoubleQuote(Token),
    REscape(Token),
    Newline(Token),
}

/// And(Modified(?,Id(QUOTES_SQ)), Or( Id(STRING_CONTENT_COMMON), Raw("), Raw(\r), Raw(\n), ))
struct StringContentTsq {
    quotes_sq: Option<Token>,
    null: null,
}

/// And(Raw(\'\'\'), Modified(*,Id(STRING_CONTENT_TSQ)), Raw(\'\'\'))
struct MultiLineStringSqBeginEnd {
    triple_quotes_token: Token,
    string_content_tsq: Vec<Token>,
    tripleQuotesToken2: Token,
}

/// And(Raw(\'\'\'), Modified(*,Id(STRING_CONTENT_TSQ)), Modified(?,Id(QUOTES_SQ)), Raw(${))
struct MultiLineStringSqBeginMid {
    triple_quotes_token: Token,
    string_content_tsq: Vec<Token>,
    quotes_sq: Option<Token>,
    interpolation_start_token: Token,
}

/// And(Raw(}), Modified(*,Id(STRING_CONTENT_TSQ)), Modified(?,Id(QUOTES_SQ)), Raw(${))
struct MultiLineStringSqMidMid {
    close_curly_bracket_token: Token,
    string_content_tsq: Vec<Token>,
    quotes_sq: Option<Token>,
    interpolation_start_token: Token,
}

/// And(Raw(}), Modified(*,Id(STRING_CONTENT_TSQ)), Raw(\'\'\'))
struct MultiLineStringSqMidEnd {
    close_curly_bracket_token: Token,
    string_content_tsq: Vec<Token>,
    triple_quotes_token: Token,
}

/// Or( Raw("), Raw(""), )
enum QuotesDq {
    DoubleQuote(Token),
    TwoDoubleQuotes(Token),
}

/// Or( Id(STRING_CONTENT_COMMON), Raw(\'), Raw(\r), Raw(\n), )
enum null {
    StringContentCommon(StringContentCommon),
    Quote(Token),
    REscape(Token),
    Newline(Token),
}

/// And(Modified(?,Id(QUOTES_DQ)), Or( Id(STRING_CONTENT_COMMON), Raw(\'), Raw(\r), Raw(\n), ))
struct StringContentTdq {
    quotes_dq: Option<Token>,
    null: null,
}

/// And(Raw("""), Modified(*,Id(STRING_CONTENT_TDQ)), Raw("""))
struct MultiLineStringDqBeginEnd {
    triple_double_quotes_token: Token,
    string_content_tdq: Vec<Token>,
    tripleDoubleQuotesToken2: Token,
}

/// And(Raw("""), Modified(*,Id(STRING_CONTENT_TDQ)), Modified(?,Id(QUOTES_DQ)), Raw(${))
struct MultiLineStringDqBeginMid {
    triple_double_quotes_token: Token,
    string_content_tdq: Vec<Token>,
    quotes_dq: Option<Token>,
    interpolation_start_token: Token,
}

/// And(Raw(}), Modified(*,Id(STRING_CONTENT_TDQ)), Modified(?,Id(QUOTES_DQ)), Raw(${))
struct MultiLineStringDqMidMid {
    close_curly_bracket_token: Token,
    string_content_tdq: Vec<Token>,
    quotes_dq: Option<Token>,
    interpolation_start_token: Token,
}

/// And(Raw(}), Modified(*,Id(STRING_CONTENT_TDQ)), Raw("""))
struct MultiLineStringDqMidEnd {
    close_curly_bracket_token: Token,
    string_content_tdq: Vec<Token>,
    triple_double_quotes_token: Token,
}

/// And(Raw(\x), Id(HEX_DIGIT), Id(HEX_DIGIT))
struct ESCAPESEQUENCEV6HexDigit {
    f_escape_token: Token,
    hex_digit: Token,
    HEX_DIGIT2: Token,
}

/// And(Raw(\u), Id(HEX_DIGIT), Id(HEX_DIGIT), Id(HEX_DIGIT), Id(HEX_DIGIT))
struct ESCAPESEQUENCEV7HexDigit {
    u_escape_token: Token,
    hex_digit: Token,
    HEX_DIGIT2: Token,
    HEX_DIGIT3: Token,
    HEX_DIGIT4: Token,
}

/// And(Raw(\u{), Id(HEX_DIGIT_SEQUENCE), Raw(}))
struct ESCAPESEQUENCEV8HexDigitSequence {
    u_bracket_escape_token: Token,
    hex_digit_sequence: Token,
    close_curly_bracket_token: Token,
}

/// Or( Raw(\n), Raw(\r), Raw(\f), Raw(\b), Raw(\t), Raw(\v), And(Raw(\x), Id(HEX_DIGIT), Id(HEX_DIGIT)), And(Raw(\u), Id(HEX_DIGIT), Id(HEX_DIGIT), Id(HEX_DIGIT), Id(HEX_DIGIT)), And(Raw(\u{), Id(HEX_DIGIT_SEQUENCE), Raw(})), )
enum EscapeSequence {
    Newline(Token),
    REscape(Token),
    FEscape(Token),
    BEscape(Token),
    TEscape(Token),
    VEscape(Token),
    HexDigit(ESCAPESEQUENCEV6HexDigit),
    HexDigit(ESCAPESEQUENCEV7HexDigit),
    HexDigitSequence(ESCAPESEQUENCEV8HexDigitSequence),
}

/// And(Id(HEX_DIGIT), Modified(?,Id(HEX_DIGIT)), Modified(?,Id(HEX_DIGIT)), Modified(?,Id(HEX_DIGIT)), Modified(?,Id(HEX_DIGIT)), Modified(?,Id(HEX_DIGIT)))
struct HexDigitSequence {
    hex_digit: Token,
    HEX_DIGIT2: Option<Token>,
    HEX_DIGIT3: Option<Token>,
    HEX_DIGIT4: Option<Token>,
    HEX_DIGIT5: Option<Token>,
    HEX_DIGIT6: Option<Token>,
}

/// Or( Raw(\n), Raw(\r), Raw(\r\n), )
enum Newline {
    Newline(Token),
    REscape(Token),
    RnEscape(Token),
}

/// And(Raw(${), Id(expression), Raw(}))
struct StringInterpolationV1Expression {
    interpolation_start_token: Token,
    expression: Expression,
    close_curly_bracket_token: Token,
}

/// Or( Id(SIMPLE_STRING_INTERPOLATION), And(Raw(${), Id(expression), Raw(})), )
enum StringInterpolation {
    SimpleStringInterpolation(SimpleStringInterpolation),
    Expression(StringInterpolationV1Expression),
}

/// Or( Id(IDENTIFIER_NO_DOLLAR), Id(BUILT_IN_IDENTIFIER), Raw(this), )
enum null {
    IdentifierNoDollar(IdentifierNoDollar),
    BuiltInIdentifier(BuiltInIdentifier),
    This(Token),
}

/// And(Raw($), Or( Id(IDENTIFIER_NO_DOLLAR), Id(BUILT_IN_IDENTIFIER), Raw(this), ))
struct SimpleStringInterpolation {
    dollar_token: Token,
    null: null,
}

/// And(Raw(.), Id(identifier))
struct SymbolLiteralOtherIdentifiers {
    period_token: Token,
    identifier: Identifier,
}

/// And(Id(identifier), Modified(*,And(Raw(.), Id(identifier))))
struct SymbolLiteralValueV0Identifier {
    identifier: Identifier,
    symbol_literal_other_identifiers: Vec<SymbolLiteralOtherIdentifiers>,
}

/// Or( And(Id(identifier), Modified(*,And(Raw(.), Id(identifier)))), Id(operator), Raw(void), )
enum SymbolLiteralValue {
    Identifier(SymbolLiteralValueV0Identifier),
    Operator(Operator),
    Void(Token),
}

/// And(Raw(#), Or( And(Id(identifier), Modified(*,And(Raw(.), Id(identifier)))), Id(operator), Raw(void), ))
struct SymbolLiteral {
    hash_token: Token,
    symbol_literal_value: SymbolLiteralValue,
}

/// And(Modified(?,Raw(const)), Modified(?,Id(typeArguments)), Raw([), Modified(?,Id(elements)), Raw(]))
struct ListLiteral {
    const_token: Option<Token>,
    type_arguments: Option<TypeArguments>,
    open_square_bracket_token: Token,
    elements: Option<Elements>,
    close_square_bracket_token: Token,
}

/// And(Modified(?,Raw(const)), Modified(?,Id(typeArguments)), Raw({), Modified(?,Id(elements)), Raw(}))
struct SetOrMapLiteral {
    const_token: Option<Token>,
    type_arguments: Option<TypeArguments>,
    open_curly_bracket_token: Token,
    elements: Option<Elements>,
    close_curly_bracket_token: Token,
}

/// And(Raw(,), Id(element))
struct Elementcomma {
    comma_token: Token,
    element: Element,
}

/// And(Id(element), Modified(*,And(Raw(,), Id(element))), Modified(?,Raw(,)))
struct Elements {
    element: Element,
    elementcomma: Vec<Elementcomma>,
    comma_token: Option<Token>,
}

/// Or( Id(expressionElement), Id(mapElement), Id(spreadElement), Id(ifElement), Id(forElement), )
enum Element {
    ExpressionElement(ExpressionElement),
    MapElement(MapElement),
    SpreadElement(SpreadElement),
    IfElement(IfElement),
    ForElement(ForElement),
}

/// And(Id(expression), Raw(:), Id(expression))
struct MapElement {
    expression: Expression,
    colon_token: Token,
    expression2: Expression,
}

/// Or( Raw(...), Raw(...?), )
enum SpreadElementType {
    PointsExpand(Token),
    PointsExpandQuestion(Token),
}

/// And(Or( Raw(...), Raw(...?), ), Id(expression))
struct SpreadElement {
    spread_element_type: SpreadElementType,
    expression: Expression,
}

/// And(Raw(else), Id(element))
struct Elementelse {
    else_token: Token,
    element: Element,
}

/// And(Raw(if), Raw((), Id(expression), Raw()), Id(element), Modified(?,And(Raw(else), Id(element))))
struct IfElement {
    if_token: Token,
    open_paren_token: Token,
    expression: Expression,
    close_paren_token: Token,
    element: Element,
    elementelse: Option<Elementelse>,
}

/// And(Modified(?,Raw(await)), Raw(for), Raw((), Id(forLoopParts), Raw()), Id(element))
struct ForElement {
    await_token: Option<Token>,
    for_token: Token,
    open_paren_token: Token,
    for_loop_parts: ForLoopParts,
    close_paren_token: Token,
    element: Element,
}

/// And(Raw(throw), Id(expression))
struct ThrowExpression {
    throw_token: Token,
    expression: Expression,
}

/// And(Raw(throw), Id(expressionWithoutCascade))
struct ThrowExpressionWithoutCascade {
    throw_token: Token,
    expression_without_cascade: ExpressionWithoutCascade,
}

/// And(Id(formalParameterPart), Id(functionExpressionBody))
struct FunctionExpression {
    formal_parameter_part: FormalParameterPart,
    function_expression_body: FunctionExpressionBody,
}

/// And(Modified(?,Raw(async)), Raw(=>), Id(expression))
struct FunctionExpressionBodyV0ArrowToken {
    async_token: Option<Token>,
    arrow_token: Token,
    expression: Expression,
}

/// And(Raw(async), Modified(?,Raw(*)))
struct FunctionExpressionGeneratorV0AsyncToken {
    async_token: Token,
    asterisk_token: Option<Token>,
}

/// And(Raw(sync), Raw(*))
struct FunctionExpressionGeneratorV1SyncToken {
    syncToken: Token,
    asteriskToken: Token,
}

/// Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )
enum FunctionExpressionGenerator {
    Async(FunctionExpressionGeneratorV0AsyncToken),
    Sync(FunctionExpressionGeneratorV1SyncToken),
}

/// And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block))
struct FunctionExpressionBodyV1Block {
    function_expression_generator: Option<FunctionExpressionGenerator>,
    block: Block,
}

/// Or( And(Modified(?,Raw(async)), Raw(=>), Id(expression)), And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block)), )
enum FunctionExpressionBody {
    Arrow(FunctionExpressionBodyV0ArrowToken),
    Block(FunctionExpressionBodyV1Block),
}

/// And(Raw(new), Id(constructorDesignation), Id(arguments))
struct NewExpression {
    new_token: Token,
    constructor_designation: ConstructorDesignation,
    arguments: Arguments,
}

/// And(Raw(const), Id(constructorDesignation), Id(arguments))
struct ConstObjectExpression {
    const_token: Token,
    constructor_designation: ConstructorDesignation,
    arguments: Arguments,
}

/// And(Id(argumentList), Modified(?,Raw(,)))
struct ArgumentsArgumentList {
    argument_list: ArgumentList,
    comma_token: Option<Token>,
}

/// And(Raw((), Modified(?,And(Id(argumentList), Modified(?,Raw(,)))), Raw()))
struct Arguments {
    open_paren_token: Token,
    argument_list: Option<ArgumentsArgumentList>,
    close_paren_token: Token,
}

/// And(Raw(,), Id(namedArgument))
struct NamedArgumentcomma {
    comma_token: Token,
    named_argument: NamedArgument,
}

/// And(Id(namedArgument), Modified(*,And(Raw(,), Id(namedArgument))))
struct ArgumentListV0NamedArgument {
    named_argument: NamedArgument,
    named_argumentcomma: Vec<NamedArgumentcomma>,
}

/// And(Id(expressionList), Modified(*,And(Raw(,), Id(namedArgument))))
struct ArgumentListV1ExpressionList {
    expression_list: ExpressionList,
    named_argumentcomma: Vec<NamedArgumentcomma>,
}

/// Or( And(Id(namedArgument), Modified(*,And(Raw(,), Id(namedArgument)))), And(Id(expressionList), Modified(*,And(Raw(,), Id(namedArgument)))), )
enum ArgumentList {
    NamedArgument(ArgumentListV0NamedArgument),
    ExpressionList(ArgumentListV1ExpressionList),
}

/// And(Id(label), Id(expression))
struct NamedArgument {
    label: Label,
    expression: Expression,
}

/// And(Id(cascade), Raw(..), Id(cascadeSection))
struct CascadeV0PointsIdToken {
    cascade: Cascade,
    points_id_token: Token,
    cascade_section: CascadeSection,
}

/// Or( Raw(?..), Raw(..), )
enum CascadePrefixType {
    PointsIdQuestion(Token),
    PointsId(Token),
}

/// And(Id(conditionalExpression), Or( Raw(?..), Raw(..), ), Id(cascadeSection))
struct CascadeV1ConditionalExpression {
    conditional_expression: ConditionalExpression,
    cascade_prefix_type: CascadePrefixType,
    cascade_section: CascadeSection,
}

/// Or( And(Id(cascade), Raw(..), Id(cascadeSection)), And(Id(conditionalExpression), Or( Raw(?..), Raw(..), ), Id(cascadeSection)), )
enum Cascade {
    PointsId(CascadeV0PointsIdToken),
    ConditionalExpression(CascadeV1ConditionalExpression),
}

/// And(Id(cascadeSelector), Id(cascadeSectionTail))
struct CascadeSection {
    cascade_selector: CascadeSelector,
    cascade_section_tail: CascadeSectionTail,
}

/// And(Raw([), Id(expression), Raw(]))
struct CascadeSelectorV0Expression {
    open_square_bracket_token: Token,
    expression: Expression,
    close_square_bracket_token: Token,
}

/// Or( And(Raw([), Id(expression), Raw(])), Id(identifier), )
enum CascadeSelector {
    Expression(CascadeSelectorV0Expression),
    Identifier(Identifier),
}

/// And(Id(assignableSelector), Id(cascadeAssignment))
struct SelectedCascadeAssignment {
    assignable_selector: AssignableSelector,
    cascade_assignment: CascadeAssignment,
}

/// And(Modified(*,Id(selector)), Modified(?,And(Id(assignableSelector), Id(cascadeAssignment))))
struct SelectedCascade {
    selector: Vec<Selector>,
    assignment: Option<SelectedCascadeAssignment>,
}

/// Or( Id(cascadeAssignment), And(Modified(*,Id(selector)), Modified(?,And(Id(assignableSelector), Id(cascadeAssignment)))), )
enum CascadeSectionTail {
    CascadeAssignment(CascadeAssignment),
    SelectedCascade(SelectedCascade),
}

/// And(Id(assignmentOperator), Id(expressionWithoutCascade))
struct CascadeAssignment {
    assignment_operator: AssignmentOperator,
    expression_without_cascade: ExpressionWithoutCascade,
}

/// Or( Raw(=), Id(compoundAssignmentOperator), )
enum AssignmentOperator {
    Equal(Token),
    CompoundAssignmentOperator(CompoundAssignmentOperator),
}

/// Or( Raw(*=), Raw(/=), Raw(~/=), Raw(%=), Raw(+=), Raw(-=), Raw(<<=), Raw(>>>=), Raw(>>=), Raw(&=), Raw(^=), Raw(|=), Raw(??=), )
enum CompoundAssignmentOperator {
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
struct ConditionalExpressionExpressionWithoutCascade {
    question_token: Token,
    expression_without_cascade: ExpressionWithoutCascade,
    colon_token: Token,
    expressionWithoutCascade2: ExpressionWithoutCascade,
}

/// And(Id(ifNullExpression), Modified(?,And(Raw(?), Id(expressionWithoutCascade), Raw(:), Id(expressionWithoutCascade))))
struct ConditionalExpression {
    if_null_expression: IfNullExpression,
    expression_without_cascade: Option<ConditionalExpressionExpressionWithoutCascade>,
}

/// And(Raw(??), Id(logicalOrExpression))
struct LogicalOrExpressionquestionQuestion {
    question_question_token: Token,
    logical_or_expression: LogicalOrExpression,
}

/// And(Id(logicalOrExpression), Modified(*,And(Raw(??), Id(logicalOrExpression))))
struct IfNullExpression {
    logical_or_expression: LogicalOrExpression,
    logical_or_expressionquestion_question: Vec<LogicalOrExpressionquestionQuestion>,
}

/// And(Raw(||), Id(logicalAndExpression))
struct LogicalAndExpressionor {
    or_token: Token,
    logical_and_expression: LogicalAndExpression,
}

/// And(Id(logicalAndExpression), Modified(*,And(Raw(||), Id(logicalAndExpression))))
struct LogicalOrExpression {
    logical_and_expression: LogicalAndExpression,
    logical_and_expressionor: Vec<LogicalAndExpressionor>,
}

/// And(Raw(&&), Id(equalityExpression))
struct EqualityExpressionand {
    and_token: Token,
    equality_expression: EqualityExpression,
}

/// And(Id(equalityExpression), Modified(*,And(Raw(&&), Id(equalityExpression))))
struct LogicalAndExpression {
    equality_expression: EqualityExpression,
    equality_expressionand: Vec<EqualityExpressionand>,
}

/// And(Id(equalityOperator), Id(relationalExpression))
struct EqualityExpressionInner {
    equality_operator: EqualityOperator,
    relational_expression: RelationalExpression,
}

/// And(Id(relationalExpression), Modified(?,And(Id(equalityOperator), Id(relationalExpression))))
struct EqualityExpressionV0RelationalExpression {
    relational_expression: RelationalExpression,
    equality_expression_inner: Option<EqualityExpressionInner>,
}

/// And(Raw(super), Id(equalityOperator), Id(relationalExpression))
struct EqualityExpressionV1EqualityOperator {
    super_token: Token,
    equality_operator: EqualityOperator,
    relational_expression: RelationalExpression,
}

/// Or( And(Id(relationalExpression), Modified(?,And(Id(equalityOperator), Id(relationalExpression)))), And(Raw(super), Id(equalityOperator), Id(relationalExpression)), )
enum EqualityExpression {
    RelationalExpression(EqualityExpressionV0RelationalExpression),
    EqualityOperator(EqualityExpressionV1EqualityOperator),
}

/// Or( Raw(==), Raw(!=), )
enum EqualityOperator {
    DoubleEqual(Token),
    NotEqual(Token),
}

/// And(Id(relationalOperator), Id(bitwiseOrExpression))
struct BitwiseOrExpressionInterV2RelationalOperator {
    relational_operator: RelationalOperator,
    bitwise_or_expression: BitwiseOrExpression,
}

/// Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), )
enum BitwiseOrExpressionInter {
    TypeTest(TypeTest),
    TypeCast(TypeCast),
    RelationalOperator(BitwiseOrExpressionInterV2RelationalOperator),
}

/// And(Id(bitwiseOrExpression), Modified(?,Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), )))
struct RelationalExpressionV0BitwiseOrExpression {
    bitwise_or_expression: BitwiseOrExpression,
    bitwise_or_expression_inter: Option<BitwiseOrExpressionInter>,
}

/// And(Raw(super), Id(relationalOperator), Id(bitwiseOrExpression))
struct RelationalExpressionV1RelationalOperator {
    super_token: Token,
    relational_operator: RelationalOperator,
    bitwise_or_expression: BitwiseOrExpression,
}

/// Or( And(Id(bitwiseOrExpression), Modified(?,Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), ))), And(Raw(super), Id(relationalOperator), Id(bitwiseOrExpression)), )
enum RelationalExpression {
    BitwiseOrExpression(RelationalExpressionV0BitwiseOrExpression),
    RelationalOperator(RelationalExpressionV1RelationalOperator),
}

/// Or( Raw(>=), Raw(>), Raw(<=), Raw(<), )
enum RelationalOperator {
    MoreOrEqual(Token),
    More(Token),
    LessOrEqual(Token),
    Less(Token),
}

/// And(Raw(|), Id(bitwiseXorExpression))
struct BitwiseXorExpressionbitXor {
    bit_xor_token: Token,
    bitwise_xor_expression: BitwiseXorExpression,
}

/// And(Id(bitwiseXorExpression), Modified(*,And(Raw(|), Id(bitwiseXorExpression))))
struct BitwiseOrExpressionV0BitwiseXorExpression {
    bitwise_xor_expression: BitwiseXorExpression,
    bitwise_xor_expressionbit_xor: Vec<BitwiseXorExpressionbitXor>,
}

/// And(Raw(super), Modified(+,And(Raw(|), Id(bitwiseXorExpression))))
struct BitwiseOrExpressionV1SuperToken {
    super_token: Token,
    bitwise_xor_expressionbit_xor: Vec<BitwiseXorExpressionbitXor>,
}

/// Or( And(Id(bitwiseXorExpression), Modified(*,And(Raw(|), Id(bitwiseXorExpression)))), And(Raw(super), Modified(+,And(Raw(|), Id(bitwiseXorExpression)))), )
enum BitwiseOrExpression {
    BitwiseXorExpression(BitwiseOrExpressionV0BitwiseXorExpression),
    Super(BitwiseOrExpressionV1SuperToken),
}

/// And(Raw(^), Id(bitwiseAndExpression))
struct BitwiseAndExpressionbitNeg {
    bit_neg_token: Token,
    bitwise_and_expression: BitwiseAndExpression,
}

/// And(Id(bitwiseAndExpression), Modified(*,And(Raw(^), Id(bitwiseAndExpression))))
struct BitwiseXorExpressionV0BitwiseAndExpression {
    bitwise_and_expression: BitwiseAndExpression,
    bitwise_and_expressionbit_neg: Vec<BitwiseAndExpressionbitNeg>,
}

/// And(Raw(super), Modified(+,And(Raw(^), Id(bitwiseAndExpression))))
struct BitwiseXorExpressionV1SuperToken {
    super_token: Token,
    bitwise_and_expressionbit_neg: Vec<BitwiseAndExpressionbitNeg>,
}

/// Or( And(Id(bitwiseAndExpression), Modified(*,And(Raw(^), Id(bitwiseAndExpression)))), And(Raw(super), Modified(+,And(Raw(^), Id(bitwiseAndExpression)))), )
enum BitwiseXorExpression {
    BitwiseAndExpression(BitwiseXorExpressionV0BitwiseAndExpression),
    Super(BitwiseXorExpressionV1SuperToken),
}

/// And(Raw(&), Id(shiftExpression))
struct ShiftExpressionbitAnd {
    bit_and_token: Token,
    shift_expression: ShiftExpression,
}

/// And(Id(shiftExpression), Modified(*,And(Raw(&), Id(shiftExpression))))
struct BitwiseAndExpressionV0ShiftExpression {
    shift_expression: ShiftExpression,
    shift_expressionbit_and: Vec<ShiftExpressionbitAnd>,
}

/// And(Raw(super), Modified(+,And(Raw(&), Id(shiftExpression))))
struct BitwiseAndExpressionV1SuperToken {
    super_token: Token,
    shift_expressionbit_and: Vec<ShiftExpressionbitAnd>,
}

/// Or( And(Id(shiftExpression), Modified(*,And(Raw(&), Id(shiftExpression)))), And(Raw(super), Modified(+,And(Raw(&), Id(shiftExpression)))), )
enum BitwiseAndExpression {
    ShiftExpression(BitwiseAndExpressionV0ShiftExpression),
    Super(BitwiseAndExpressionV1SuperToken),
}

/// Or( Raw(&), Raw(^), Raw(|), )
enum BitwiseOperator {
    BitAnd(Token),
    BitNeg(Token),
    BitXor(Token),
}

/// And(Id(shiftOperator), Id(additiveExpression))
struct ShiftExpressionInner {
    shift_operator: ShiftOperator,
    additive_expression: AdditiveExpression,
}

/// And(Id(additiveExpression), Modified(*,And(Id(shiftOperator), Id(additiveExpression))))
struct ShiftExpressionV0AdditiveExpression {
    additive_expression: AdditiveExpression,
    shift_expression_inner: Vec<ShiftExpressionInner>,
}

/// And(Raw(super), Modified(+,And(Id(shiftOperator), Id(additiveExpression))))
struct ShiftExpressionV1SuperToken {
    super_token: Token,
    shift_expression_inner: Vec<ShiftExpressionInner>,
}

/// Or( And(Id(additiveExpression), Modified(*,And(Id(shiftOperator), Id(additiveExpression)))), And(Raw(super), Modified(+,And(Id(shiftOperator), Id(additiveExpression)))), )
enum ShiftExpression {
    AdditiveExpression(ShiftExpressionV0AdditiveExpression),
    Super(ShiftExpressionV1SuperToken),
}

/// Or( Raw(<<), Raw(>>>), Raw(>>), )
enum ShiftOperator {
    BitLeft(Token),
    BitRight0(Token),
    BitRight(Token),
}

/// And(Id(additiveOperator), Id(multiplicativeExpression))
struct AdditiveExpressionInner {
    additive_operator: AdditiveOperator,
    multiplicative_expression: MultiplicativeExpression,
}

/// And(Id(multiplicativeExpression), Modified(*,And(Id(additiveOperator), Id(multiplicativeExpression))))
struct AdditiveExpressionV0MultiplicativeExpression {
    multiplicative_expression: MultiplicativeExpression,
    additive_expression_inner: Vec<AdditiveExpressionInner>,
}

/// And(Raw(super), Modified(+,And(Id(additiveOperator), Id(multiplicativeExpression))))
struct AdditiveExpressionV1SuperToken {
    super_token: Token,
    additive_expression_inner: Vec<AdditiveExpressionInner>,
}

/// Or( And(Id(multiplicativeExpression), Modified(*,And(Id(additiveOperator), Id(multiplicativeExpression)))), And(Raw(super), Modified(+,And(Id(additiveOperator), Id(multiplicativeExpression)))), )
enum AdditiveExpression {
    MultiplicativeExpression(AdditiveExpressionV0MultiplicativeExpression),
    Super(AdditiveExpressionV1SuperToken),
}

/// Or( Raw(+), Raw(-), )
enum AdditiveOperator {
    Plus(Token),
    Minus(Token),
}

/// And(Id(multiplicativeOperator), Id(unaryExpression))
struct MultiplicativeExpressionInner {
    multiplicative_operator: MultiplicativeOperator,
    unary_expression: UnaryExpression,
}

/// And(Id(unaryExpression), Modified(*,And(Id(multiplicativeOperator), Id(unaryExpression))))
struct MultiplicativeExpressionV0UnaryExpression {
    unary_expression: UnaryExpression,
    multiplicative_expression_inner: Vec<MultiplicativeExpressionInner>,
}

/// And(Raw(super), Modified(+,And(Id(multiplicativeOperator), Id(unaryExpression))))
struct MultiplicativeExpressionV1SuperToken {
    super_token: Token,
    multiplicative_expression_inner: Vec<MultiplicativeExpressionInner>,
}

/// Or( And(Id(unaryExpression), Modified(*,And(Id(multiplicativeOperator), Id(unaryExpression)))), And(Raw(super), Modified(+,And(Id(multiplicativeOperator), Id(unaryExpression)))), )
enum MultiplicativeExpression {
    UnaryExpression(MultiplicativeExpressionV0UnaryExpression),
    Super(MultiplicativeExpressionV1SuperToken),
}

/// Or( Raw(*), Raw(/), Raw(%), Raw(~/), )
enum MultiplicativeOperator {
    Asterisk(Token),
    Divide(Token),
    Modulus(Token),
    IntegerDiv(Token),
}

/// And(Id(prefixOperator), Id(unaryExpression))
struct UnaryExpressionV0PrefixOperator {
    prefix_operator: PrefixOperator,
    unary_expression: UnaryExpression,
}

/// Or( Id(minusOperator), Id(tildeOperator), )
enum UnaryOperator {
    MinusOperator(MinusOperator),
    TildeOperator(TildeOperator),
}

/// And(Or( Id(minusOperator), Id(tildeOperator), ), Raw(super))
struct UnaryExpressionV3SuperToken {
    unary_operator: UnaryOperator,
    super_token: Token,
}

/// And(Id(incrementOperator), Id(assignableExpression))
struct UnaryExpressionV4IncrementOperator {
    increment_operator: IncrementOperator,
    assignable_expression: AssignableExpression,
}

/// Or( And(Id(prefixOperator), Id(unaryExpression)), Id(awaitExpression), Id(postfixExpression), And(Or( Id(minusOperator), Id(tildeOperator), ), Raw(super)), And(Id(incrementOperator), Id(assignableExpression)), )
enum UnaryExpression {
    PrefixOperator(UnaryExpressionV0PrefixOperator),
    AwaitExpression(AwaitExpression),
    PostfixExpression(PostfixExpression),
    Super(UnaryExpressionV3SuperToken),
    IncrementOperator(UnaryExpressionV4IncrementOperator),
}

/// Or( Id(minusOperator), Id(negationOperator), Id(tildeOperator), )
enum PrefixOperator {
    MinusOperator(MinusOperator),
    NegationOperator(NegationOperator),
    TildeOperator(TildeOperator),
}

/// And(Raw(await), Id(unaryExpression))
struct AwaitExpression {
    await_token: Token,
    unary_expression: UnaryExpression,
}

/// And(Id(assignableExpression), Id(postfixOperator))
struct PostfixExpressionV0AssignableExpression {
    assignable_expression: AssignableExpression,
    postfix_operator: PostfixOperator,
}

/// And(Id(primary), Modified(*,Id(selector)))
struct PostfixExpressionV1Primary {
    primary: Primary,
    selector: Vec<Selector>,
}

/// Or( And(Id(assignableExpression), Id(postfixOperator)), And(Id(primary), Modified(*,Id(selector))), )
enum PostfixExpression {
    AssignableExpression(PostfixExpressionV0AssignableExpression),
    Primary(PostfixExpressionV1Primary),
}

/// And(Id(typeName), Id(typeArguments), Raw(.), Id(identifier), Id(arguments))
struct ConstructorInvocation {
    type_name: TypeName,
    type_arguments: TypeArguments,
    period_token: Token,
    identifier: Identifier,
    arguments: Arguments,
}

/// Or( Raw(!), Id(assignableSelector), Id(argumentPart), )
enum Selector {
    Exclamation(Token),
    AssignableSelector(AssignableSelector),
    ArgumentPart(ArgumentPart),
}

/// And(Modified(?,Id(typeArguments)), Id(arguments))
struct ArgumentPart {
    type_arguments: Option<TypeArguments>,
    arguments: Arguments,
}

/// Or( Raw(++), Raw(--), )
enum IncrementOperator {
    PlusPlus(Token),
    MinusMinus(Token),
}

/// And(Id(primary), Id(assignableSelectorPart))
struct AssignableExpressionV0Primary {
    primary: Primary,
    assignable_selector_part: AssignableSelectorPart,
}

/// And(Raw(super), Id(unconditionalAssignableSelector))
struct AssignableExpressionV1UnconditionalAssignableSelector {
    super_token: Token,
    unconditional_assignable_selector: UnconditionalAssignableSelector,
}

/// Or( And(Id(primary), Id(assignableSelectorPart)), And(Raw(super), Id(unconditionalAssignableSelector)), Id(identifier), )
enum AssignableExpression {
    Primary(AssignableExpressionV0Primary),
    UnconditionalAssignableSelector(AssignableExpressionV1UnconditionalAssignableSelector),
    Identifier(Identifier),
}

/// And(Modified(*,Id(selector)), Id(assignableSelector))
struct AssignableSelectorPart {
    selector: Vec<Selector>,
    assignable_selector: AssignableSelector,
}

/// And(Raw([), Id(expression), Raw(]))
struct UnconditionalAssignableSelectorV0Expression {
    open_square_bracket_token: Token,
    expression: Expression,
    close_square_bracket_token: Token,
}

/// And(Raw(.), Id(identifier))
struct UnconditionalAssignableSelectorV1Identifier {
    period_token: Token,
    identifier: Identifier,
}

/// Or( And(Raw([), Id(expression), Raw(])), And(Raw(.), Id(identifier)), )
enum UnconditionalAssignableSelector {
    Expression(UnconditionalAssignableSelectorV0Expression),
    Identifier(UnconditionalAssignableSelectorV1Identifier),
}

/// And(Raw(?.), Id(identifier))
struct AssignableSelectorV1Identifier {
    question_id_token: Token,
    identifier: Identifier,
}

/// And(Raw(?), Raw([), Id(expression), Raw(]))
struct AssignableSelectorV2QuestionToken {
    question_token: Token,
    open_square_bracket_token: Token,
    expression: Expression,
    close_square_bracket_token: Token,
}

/// Or( Id(unconditionalAssignableSelector), And(Raw(?.), Id(identifier)), And(Raw(?), Raw([), Id(expression), Raw(])), )
enum AssignableSelector {
    UnconditionalAssignableSelector(UnconditionalAssignableSelector),
    Identifier(AssignableSelectorV1Identifier),
    Question(AssignableSelectorV2QuestionToken),
}

/// Or( Id(IDENTIFIER), Id(BUILT_IN_IDENTIFIER), Id(OTHER_IDENTIFIER), )
enum Identifier {
    Identifier(Identifier),
    BuiltInIdentifier(BuiltInIdentifier),
    OtherIdentifier(OtherIdentifier),
}

/// Or( Id(IDENTIFIER), Id(OTHER_IDENTIFIER), Raw(dynamic), )
enum TypeIdentifier {
    Identifier(Identifier),
    OtherIdentifier(OtherIdentifier),
    Dynamic(Token),
}

/// And(Id(typeIdentifier), Raw(.), Id(identifier))
struct QualifiedNameV0PeriodToken {
    type_identifier: TypeIdentifier,
    period_token: Token,
    identifier: Identifier,
}

/// And(Id(typeIdentifier), Raw(.), Id(typeIdentifier), Raw(.), Id(identifier))
struct QualifiedNameV1PeriodToken {
    type_identifier: TypeIdentifier,
    period_token: Token,
    typeIdentifier2: TypeIdentifier,
    periodToken2: Token,
    identifier: Identifier,
}

/// Or( And(Id(typeIdentifier), Raw(.), Id(identifier)), And(Id(typeIdentifier), Raw(.), Id(typeIdentifier), Raw(.), Id(identifier)), )
enum QualifiedName {
    Period(QualifiedNameV0PeriodToken),
    Period(QualifiedNameV1PeriodToken),
}

/// Or( Raw(abstract), Raw(as), Raw(covariant), Raw(deferred), Raw(dynamic), Raw(export), Raw(external), Raw(extension), Raw(factory), Raw(Function), Raw(get), Raw(implements), Raw(import), Raw(interface), Raw(late), Raw(library), Raw(mixin), Raw(operator), Raw(part), Raw(required), Raw(set), Raw(static), Raw(typedef), )
enum BuiltInIdentifier {
    Abstract(Token),
    As(Token),
    Covariant(Token),
    Deferred(Token),
    Dynamic(Token),
    Export(Token),
    External(Token),
    Extension(Token),
    Factory(Token),
    Function(Token),
    Get(Token),
    Implements(Token),
    Import(Token),
    Interface(Token),
    Late(Token),
    Library(Token),
    Mixin(Token),
    Operator(Token),
    Part(Token),
    Required(Token),
    Set(Token),
    Static(Token),
    Typedef(Token),
}

/// Or( Raw(async), Raw(hide), Raw(of), Raw(on), Raw(show), Raw(sync), Raw(await), Raw(yield), )
enum OtherIdentifier {
    Async(Token),
    Hide(Token),
    Of(Token),
    On(Token),
    Show(Token),
    Sync(Token),
    Await(Token),
    Yield(Token),
}

/// And(Id(IDENTIFIER_START_NO_DOLLAR), Modified(*,Id(IDENTIFIER_PART_NO_DOLLAR)))
struct IdentifierNoDollar {
    identifier_start_no_dollar: Token,
    identifier_part_no_dollar: Vec<Token>,
}

/// Or( Id(LETTER), Raw(_), )
enum IdentifierStartNoDollar {
    Letter(Letter),
    Underscore(Token),
}

/// Or( Id(IDENTIFIER_START_NO_DOLLAR), Id(DIGIT), )
enum IdentifierPartNoDollar {
    IdentifierStartNoDollar(IdentifierStartNoDollar),
    Digit(Digit),
}

/// And(Id(IDENTIFIER_START), Modified(*,Id(IDENTIFIER_PART)))
struct Identifier {
    identifier_start: Token,
    identifier_part: Vec<Token>,
}

/// Or( Id(IDENTIFIER_START_NO_DOLLAR), Raw($), )
enum IdentifierStart {
    IdentifierStartNoDollar(IdentifierStartNoDollar),
    Dollar(Token),
}

/// Or( Id(IDENTIFIER_START), Id(DIGIT), )
enum IdentifierPart {
    IdentifierStart(IdentifierStart),
    Digit(Digit),
}

/// Or( RawRange(Raw(a),Raw(z)), RawRange(Raw(A),Raw(Z)), )
enum Letter {
    V0 { a_token_toz_token: Token },
    V1 { a_token_to_z_token: Token },
}

/// Or( Raw(\t), Raw( ), Id(NEWLINE), )
enum Whitespace {
    TEscape(Token),
    Space(Token),
    Newline(Newline),
}

/// And(Id(isOperator), Id(typeNotVoid))
struct TypeTest {
    is_operator: IsOperator,
    type_not_void: TypeNotVoid,
}

/// And(Raw(is), Modified(?,Raw(!)))
struct IsOperator {
    is_token: Token,
    exclamation_token: Option<Token>,
}

/// And(Id(asOperator), Id(typeNotVoid))
struct TypeCast {
    as_operator: AsOperator,
    type_not_void: TypeNotVoid,
}

/// And(Modified(*,Id(label)), Id(nonLabelledStatement))
struct Statement {
    label: Vec<Label>,
    non_labelled_statement: NonLabelledStatement,
}

/// Or( Id(block), Id(localVariableDeclaration), Id(forStatement), Id(whileStatement), Id(doStatement), Id(switchStatement), Id(ifStatement), Id(rethrowStatement), Id(tryStatement), Id(breakStatement), Id(continueStatement), Id(returnStatement), Id(yieldStatement), Id(yieldEachStatement), Id(expressionStatement), Id(assertStatement), Id(localFunctionDeclaration), )
enum NonLabelledStatement {
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
struct ExpressionStatement {
    expression: Option<Expression>,
    semicolon_token: Token,
}

/// And(Id(metadata), Id(initializedVariableDeclaration), Raw(;))
struct LocalVariableDeclaration {
    metadata: Metadata,
    initialized_variable_declaration: InitializedVariableDeclaration,
    semicolon_token: Token,
}

/// And(Id(metadata), Id(functionSignature), Id(functionBody))
struct LocalFunctionDeclaration {
    metadata: Metadata,
    function_signature: FunctionSignature,
    function_body: FunctionBody,
}

/// And(Raw(else), Id(statement))
struct Statementelse {
    else_token: Token,
    statement: Statement,
}

/// And(Raw(if), Raw((), Id(expression), Raw()), Id(statement), Modified(?,And(Raw(else), Id(statement))))
struct IfStatement {
    if_token: Token,
    open_paren_token: Token,
    expression: Expression,
    close_paren_token: Token,
    statement: Statement,
    statementelse: Option<Statementelse>,
}

/// And(Modified(?,Raw(await)), Raw(for), Raw((), Id(forLoopParts), Raw()), Id(statement))
struct ForStatement {
    await_token: Option<Token>,
    for_token: Token,
    open_paren_token: Token,
    for_loop_parts: ForLoopParts,
    close_paren_token: Token,
    statement: Statement,
}

/// And(Id(forInitializerStatement), Modified(?,Id(expression)), Raw(;), Modified(?,Id(expressionList)))
struct ForLoopPartsV0SemicolonToken {
    for_initializer_statement: ForInitializerStatement,
    expression: Option<Expression>,
    semicolon_token: Token,
    expression_list: Option<ExpressionList>,
}

/// And(Id(metadata), Id(declaredIdentifier), Raw(in), Id(expression))
struct ForLoopPartsV1Metadata {
    metadata: Metadata,
    declared_identifier: DeclaredIdentifier,
    in_token: Token,
    expression: Expression,
}

/// And(Id(identifier), Raw(in), Id(expression))
struct ForLoopPartsV2InToken {
    identifier: Identifier,
    in_token: Token,
    expression: Expression,
}

/// Or( And(Id(forInitializerStatement), Modified(?,Id(expression)), Raw(;), Modified(?,Id(expressionList))), And(Id(metadata), Id(declaredIdentifier), Raw(in), Id(expression)), And(Id(identifier), Raw(in), Id(expression)), )
enum ForLoopParts {
    Semicolon(ForLoopPartsV0SemicolonToken),
    Metadata(ForLoopPartsV1Metadata),
    In(ForLoopPartsV2InToken),
}

/// And(Modified(?,Id(expression)), Raw(;))
struct ForInitializerStatementV1SemicolonToken {
    expression: Option<Expression>,
    semicolon_token: Token,
}

/// Or( Id(localVariableDeclaration), And(Modified(?,Id(expression)), Raw(;)), )
enum ForInitializerStatement {
    LocalVariableDeclaration(LocalVariableDeclaration),
    Semicolon(ForInitializerStatementV1SemicolonToken),
}

/// And(Raw(while), Raw((), Id(expression), Raw()), Id(statement))
struct WhileStatement {
    while_token: Token,
    open_paren_token: Token,
    expression: Expression,
    close_paren_token: Token,
    statement: Statement,
}

/// And(Raw(do), Id(statement), Raw(while), Raw((), Id(expression), Raw()), Raw(;))
struct DoStatement {
    do_token: Token,
    statement: Statement,
    while_token: Token,
    open_paren_token: Token,
    expression: Expression,
    close_paren_token: Token,
    semicolon_token: Token,
}

/// And(Raw(switch), Raw((), Id(expression), Raw()), Raw({), Modified(*,Id(switchCase)), Modified(?,Id(defaultCase)), Raw(}))
struct SwitchStatement {
    switch_token: Token,
    open_paren_token: Token,
    expression: Expression,
    close_paren_token: Token,
    open_curly_bracket_token: Token,
    switch_case: Vec<SwitchCase>,
    default_case: Option<DefaultCase>,
    close_curly_bracket_token: Token,
}

/// And(Modified(*,Id(label)), Raw(case), Id(expression), Raw(:), Id(statements))
struct SwitchCase {
    label: Vec<Label>,
    case_token: Token,
    expression: Expression,
    colon_token: Token,
    statements: Statements,
}

/// And(Modified(*,Id(label)), Raw(default), Raw(:), Id(statements))
struct DefaultCase {
    label: Vec<Label>,
    default_token: Token,
    colon_token: Token,
    statements: Statements,
}

/// And(Raw(rethrow), Raw(;))
struct RethrowStatement {
    rethrowToken: Token,
    semicolonToken: Token,
}

/// And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart)))
struct TryStatementOnPart {
    on_part: Vec<OnPart>,
    finally_part: Option<FinallyPart>,
}

/// Or( And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart))), Id(finallyPart), )
enum TryStatementCatchFinally {
    TryStatementOnPart(TryStatementOnPart),
    FinallyPart(FinallyPart),
}

/// And(Raw(try), Id(block), Or( And(Modified(+,Id(onPart)), Modified(?,Id(finallyPart))), Id(finallyPart), ))
struct TryStatement {
    try_token: Token,
    block: Block,
    try_statement_catch_finally: TryStatementCatchFinally,
}

/// And(Id(catchPart), Id(block))
struct OnPartV0CatchPart {
    catch_part: CatchPart,
    block: Block,
}

/// And(Raw(on), Id(typeNotVoid), Modified(?,Id(catchPart)), Id(block))
struct OnPartV1TypeNotVoid {
    on_token: Token,
    type_not_void: TypeNotVoid,
    catch_part: Option<CatchPart>,
    block: Block,
}

/// Or( And(Id(catchPart), Id(block)), And(Raw(on), Id(typeNotVoid), Modified(?,Id(catchPart)), Id(block)), )
enum OnPart {
    CatchPart(OnPartV0CatchPart),
    TypeNotVoid(OnPartV1TypeNotVoid),
}

/// And(Raw(,), Id(identifier))
struct Identifiercomma {
    comma_token: Token,
    identifier: Identifier,
}

/// And(Raw(catch), Raw((), Id(identifier), Modified(?,And(Raw(,), Id(identifier))), Raw()))
struct CatchPart {
    catch_token: Token,
    open_paren_token: Token,
    identifier: Identifier,
    identifiercomma: Option<Identifiercomma>,
    close_paren_token: Token,
}

/// And(Raw(finally), Id(block))
struct FinallyPart {
    finally_token: Token,
    block: Block,
}

/// And(Raw(return), Modified(?,Id(expression)), Raw(;))
struct ReturnStatement {
    return_token: Token,
    expression: Option<Expression>,
    semicolon_token: Token,
}

/// And(Id(identifier), Raw(:))
struct Label {
    identifier: Identifier,
    colon_token: Token,
}

/// And(Raw(break), Modified(?,Id(identifier)), Raw(;))
struct BreakStatement {
    break_token: Token,
    identifier: Option<Identifier>,
    semicolon_token: Token,
}

/// And(Raw(continue), Modified(?,Id(identifier)), Raw(;))
struct ContinueStatement {
    continue_token: Token,
    identifier: Option<Identifier>,
    semicolon_token: Token,
}

/// And(Raw(yield), Id(expression), Raw(;))
struct YieldStatement {
    yield_token: Token,
    expression: Expression,
    semicolon_token: Token,
}

/// And(Raw(yield), Raw(*), Id(expression), Raw(;))
struct YieldEachStatement {
    yield_token: Token,
    asterisk_token: Token,
    expression: Expression,
    semicolon_token: Token,
}

/// And(Id(assertion), Raw(;))
struct AssertStatement {
    assertion: Assertion,
    semicolon_token: Token,
}

/// And(Raw(assert), Raw((), Id(expression), Modified(?,And(Raw(,), Id(expression))), Modified(?,Raw(,)), Raw()))
struct Assertion {
    assert_token: Token,
    open_paren_token: Token,
    expression: Expression,
    expressioncomma: Option<Expressioncomma>,
    comma_token: Option<Token>,
    close_paren_token: Token,
}

/// And(Raw(external), Id(functionSignature), Raw(;))
struct TopLevelDeclarationV5FunctionSignature {
    external_token: Token,
    function_signature: FunctionSignature,
    semicolon_token: Token,
}

/// And(Raw(external), Id(getterSignature), Raw(;))
struct TopLevelDeclarationV6GetterSignature {
    external_token: Token,
    getter_signature: GetterSignature,
    semicolon_token: Token,
}

/// And(Raw(external), Id(setterSignature), Raw(;))
struct TopLevelDeclarationV7SetterSignature {
    external_token: Token,
    setter_signature: SetterSignature,
    semicolon_token: Token,
}

/// And(Id(functionSignature), Id(functionBody))
struct TopLevelDeclarationV8FunctionSignature {
    function_signature: FunctionSignature,
    function_body: FunctionBody,
}

/// And(Id(getterSignature), Id(functionBody))
struct TopLevelDeclarationV9GetterSignature {
    getter_signature: GetterSignature,
    function_body: FunctionBody,
}

/// And(Id(setterSignature), Id(functionBody))
struct TopLevelDeclarationV10SetterSignature {
    setter_signature: SetterSignature,
    function_body: FunctionBody,
}

/// Or( Raw(final), Raw(const), )
enum FinalOrConst {
    Final(Token),
    Const(Token),
}

/// And(Or( Raw(final), Raw(const), ), Modified(?,Id(type)), Id(staticFinalDeclarationList), Raw(;))
struct TopLevelDeclarationV11SemicolonToken {
    final_or_const: FinalOrConst,
    dart_type: Option<Type>,
    static_final_declaration_list: StaticFinalDeclarationList,
    semicolon_token: Token,
}

/// And(Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList), Raw(;))
struct TopLevelDeclarationV12LateToken {
    late_token: Token,
    final_token: Token,
    dart_type: Option<Type>,
    initialized_identifier_list: InitializedIdentifierList,
    semicolon_token: Token,
}

/// And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList), Raw(;))
struct TopLevelDeclarationV13VarOrType {
    late_token: Option<Token>,
    var_or_type: VarOrType,
    initialized_identifier_list: InitializedIdentifierList,
    semicolon_token: Token,
}

/// Or( Id(classDeclaration), Id(mixinDeclaration), Id(extensionDeclaration), Id(enumType), Id(typeAlias), And(Raw(external), Id(functionSignature), Raw(;)), And(Raw(external), Id(getterSignature), Raw(;)), And(Raw(external), Id(setterSignature), Raw(;)), And(Id(functionSignature), Id(functionBody)), And(Id(getterSignature), Id(functionBody)), And(Id(setterSignature), Id(functionBody)), And(Or( Raw(final), Raw(const), ), Modified(?,Id(type)), Id(staticFinalDeclarationList), Raw(;)), And(Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList), Raw(;)), And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList), Raw(;)), )
enum TopLevelDeclaration {
    ClassDeclaration(ClassDeclaration),
    MixinDeclaration(MixinDeclaration),
    ExtensionDeclaration(ExtensionDeclaration),
    EnumType(EnumType),
    TypeAlias(TypeAlias),
    FunctionSignature(TopLevelDeclarationV5FunctionSignature),
    GetterSignature(TopLevelDeclarationV6GetterSignature),
    SetterSignature(TopLevelDeclarationV7SetterSignature),
    FunctionSignature(TopLevelDeclarationV8FunctionSignature),
    GetterSignature(TopLevelDeclarationV9GetterSignature),
    SetterSignature(TopLevelDeclarationV10SetterSignature),
    Semicolon(TopLevelDeclarationV11SemicolonToken),
    Late(TopLevelDeclarationV12LateToken),
    VarOrType(TopLevelDeclarationV13VarOrType),
}

/// And(Id(metadata), Id(topLevelDeclaration))
struct LibraryDeclarationMetadata {
    metadata: Metadata,
    top_level_declaration: TopLevelDeclaration,
}

/// And(Modified(?,Id(scriptTag)), Modified(?,Id(libraryName)), Modified(*,Id(importOrExport)), Modified(*,Id(partDirective)), Modified(*,And(Id(metadata), Id(topLevelDeclaration))), Id(EOF))
struct LibraryDeclaration {
    script_tag: Option<ScriptTag>,
    library_name: Option<LibraryName>,
    import_or_export: Vec<ImportOrExport>,
    part_directive: Vec<PartDirective>,
    metadata: Vec<LibraryDeclarationMetadata>,
    eof: Token,
}

/// And(Raw(#!), Modified(*,Negated(Id(NEWLINE))), Id(NEWLINE))
struct ScriptTag {
    hash_exclamation_token: Token,
    null: Vec<Token>,
    newline: Token,
}

/// And(Id(metadata), Raw(library), Id(dottedIdentifierList), Raw(;))
struct LibraryName {
    metadata: Metadata,
    library_token: Token,
    dotted_identifier_list: DottedIdentifierList,
    semicolon_token: Token,
}

/// Or( Id(libraryImport), Id(libraryExport), )
enum ImportOrExport {
    LibraryImport(LibraryImport),
    LibraryExport(LibraryExport),
}

/// And(Id(identifier), Modified(*,And(Raw(.), Id(identifier))))
struct DottedIdentifierList {
    identifier: Identifier,
    identifierperiod: Vec<Identifierperiod>,
}

/// And(Id(metadata), Id(importSpecification))
struct LibraryImport {
    metadata: Metadata,
    import_specification: ImportSpecification,
}

/// And(Modified(?,Raw(deferred)), Raw(as), Id(identifier))
struct ImportSpecificationAsToken {
    deferred_token: Option<Token>,
    as_token: Token,
    identifier: Identifier,
}

/// And(Raw(import), Id(configurableUri), Modified(?,And(Modified(?,Raw(deferred)), Raw(as), Id(identifier))), Modified(*,Id(combinator)), Raw(;))
struct ImportSpecification {
    import_token: Token,
    configurable_uri: ConfigurableUri,
    as_token: Option<ImportSpecificationAsToken>,
    combinator: Vec<Combinator>,
    semicolon_token: Token,
}

/// And(Id(metadata), Raw(export), Id(configurableUri), Modified(*,Id(combinator)), Raw(;))
struct LibraryExport {
    metadata: Metadata,
    export_token: Token,
    configurable_uri: ConfigurableUri,
    combinator: Vec<Combinator>,
    semicolon_token: Token,
}

/// And(Raw(show), Id(identifierList))
struct CombinatorV0IdentifierList {
    show_token: Token,
    identifier_list: IdentifierList,
}

/// And(Raw(hide), Id(identifierList))
struct CombinatorV1IdentifierList {
    hide_token: Token,
    identifier_list: IdentifierList,
}

/// Or( And(Raw(show), Id(identifierList)), And(Raw(hide), Id(identifierList)), )
enum Combinator {
    IdentifierList(CombinatorV0IdentifierList),
    IdentifierList(CombinatorV1IdentifierList),
}

/// And(Id(identifier), Modified(*,And(Raw(,), Id(identifier))))
struct IdentifierList {
    identifier: Identifier,
    identifiercomma: Vec<Identifiercomma>,
}

/// And(Id(metadata), Raw(part), Id(uri), Raw(;))
struct PartDirective {
    metadata: Metadata,
    part_token: Token,
    uri: Uri,
    semicolon_token: Token,
}

/// Or( Id(dottedIdentifierList), Id(uri), )
enum DottedIdentifierListOrUri {
    DottedIdentifierList(DottedIdentifierList),
    Uri(Uri),
}

/// And(Id(metadata), Raw(part), Raw(of), Or( Id(dottedIdentifierList), Id(uri), ), Raw(;))
struct PartHeader {
    metadata: Metadata,
    part_token: Token,
    of_token: Token,
    dotted_identifier_list_or_uri: DottedIdentifierListOrUri,
    semicolon_token: Token,
}

/// And(Id(metadata), Id(topLevelDeclaration))
struct PartDeclarationMetadata {
    metadata: Metadata,
    top_level_declaration: TopLevelDeclaration,
}

/// And(Id(partHeader), Modified(*,And(Id(metadata), Id(topLevelDeclaration))), Id(EOF))
struct PartDeclaration {
    part_header: PartHeader,
    metadata: Vec<PartDeclarationMetadata>,
    eof: Token,
}

/// And(Id(uri), Modified(*,Id(configurationUri)))
struct ConfigurableUri {
    uri: Uri,
    configuration_uri: Vec<ConfigurationUri>,
}

/// And(Raw(if), Raw((), Id(uriTest), Raw()), Id(uri))
struct ConfigurationUri {
    if_token: Token,
    open_paren_token: Token,
    uri_test: UriTest,
    close_paren_token: Token,
    uri: Uri,
}

/// And(Raw(==), Id(stringLiteral))
struct StringLiteraldoubleEqual {
    double_equal_token: Token,
    string_literal: StringLiteral,
}

/// And(Id(dottedIdentifierList), Modified(?,And(Raw(==), Id(stringLiteral))))
struct UriTest {
    dotted_identifier_list: DottedIdentifierList,
    string_literaldouble_equal: Option<StringLiteraldoubleEqual>,
}

/// And(Id(functionType), Modified(?,Raw(?)))
struct TypeV0FunctionType {
    function_type: FunctionType,
    question_token: Option<Token>,
}

/// Or( And(Id(functionType), Modified(?,Raw(?))), Id(typeNotFunction), )
enum Type {
    FunctionType(TypeV0FunctionType),
    TypeNotFunction(TypeNotFunction),
}

/// And(Id(functionType), Modified(?,Raw(?)))
struct TypeNotVoidV0FunctionType {
    function_type: FunctionType,
    question_token: Option<Token>,
}

/// Or( And(Id(functionType), Modified(?,Raw(?))), Id(typeNotVoidNotFunction), )
enum TypeNotVoid {
    FunctionType(TypeNotVoidV0FunctionType),
    TypeNotVoidNotFunction(TypeNotVoidNotFunction),
}

/// Or( Raw(void), Id(typeNotVoidNotFunction), )
enum TypeNotFunction {
    Void(Token),
    TypeNotVoidNotFunction(TypeNotVoidNotFunction),
}

/// And(Id(typeName), Modified(?,Id(typeArguments)), Modified(?,Raw(?)))
struct TypeNotVoidNotFunctionV0TypeName {
    type_name: TypeName,
    type_arguments: Option<TypeArguments>,
    question_token: Option<Token>,
}

/// And(Raw(Function), Modified(?,Raw(?)))
struct TypeNotVoidNotFunctionV1FunctionToken {
    function_token: Token,
    question_token: Option<Token>,
}

/// Or( And(Id(typeName), Modified(?,Id(typeArguments)), Modified(?,Raw(?))), And(Raw(Function), Modified(?,Raw(?))), )
enum TypeNotVoidNotFunction {
    TypeName(TypeNotVoidNotFunctionV0TypeName),
    Function(TypeNotVoidNotFunctionV1FunctionToken),
}

/// And(Raw(.), Id(typeIdentifier))
struct TypeIdentifierperiod {
    period_token: Token,
    type_identifier: TypeIdentifier,
}

/// And(Id(typeIdentifier), Modified(?,And(Raw(.), Id(typeIdentifier))))
struct TypeName {
    type_identifier: TypeIdentifier,
    type_identifierperiod: Option<TypeIdentifierperiod>,
}

/// And(Raw(<), Id(typeList), Raw(>))
struct TypeArguments {
    less_token: Token,
    type_list: TypeList,
    more_token: Token,
}

/// And(Raw(,), Id(type))
struct Typecomma {
    comma_token: Token,
    dart_type: Type,
}

/// And(Id(type), Modified(*,And(Raw(,), Id(type))))
struct TypeList {
    dart_type: Type,
    typecomma: Vec<Typecomma>,
}

/// And(Raw(,), Id(typeNotVoidNotFunction))
struct TypeNotVoidNotFunctioncomma {
    comma_token: Token,
    type_not_void_not_function: TypeNotVoidNotFunction,
}

/// And(Id(typeNotVoidNotFunction), Modified(*,And(Raw(,), Id(typeNotVoidNotFunction))))
struct TypeNotVoidNotFunctionList {
    type_not_void_not_function: TypeNotVoidNotFunction,
    type_not_void_not_functioncomma: Vec<TypeNotVoidNotFunctioncomma>,
}

/// And(Id(typeNotFunction), Id(functionTypeTails))
struct FunctionTypeV1TypeNotFunction {
    type_not_function: TypeNotFunction,
    function_type_tails: FunctionTypeTails,
}

/// Or( Id(functionTypeTails), And(Id(typeNotFunction), Id(functionTypeTails)), )
enum FunctionType {
    FunctionTypeTails(FunctionTypeTails),
    TypeNotFunction(FunctionTypeV1TypeNotFunction),
}

/// And(Id(functionTypeTail), Modified(?,Raw(?)), Id(functionTypeTails))
struct FunctionTypeTailsV0FunctionTypeTail {
    function_type_tail: FunctionTypeTail,
    question_token: Option<Token>,
    function_type_tails: FunctionTypeTails,
}

/// Or( And(Id(functionTypeTail), Modified(?,Raw(?)), Id(functionTypeTails)), Id(functionTypeTail), )
enum FunctionTypeTails {
    FunctionTypeTail(FunctionTypeTailsV0FunctionTypeTail),
    FunctionTypeTail(FunctionTypeTail),
}

/// And(Raw(Function), Modified(?,Id(typeParameters)), Id(parameterTypeList))
struct FunctionTypeTail {
    function_token: Token,
    type_parameters: Option<TypeParameters>,
    parameter_type_list: ParameterTypeList,
}

/// And(Raw((), Raw()))
struct ParameterTypeListV0OpenParenToken {
    openParenToken: Token,
    closeParenToken: Token,
}

/// And(Raw((), Id(normalParameterTypes), Raw(,), Id(optionalParameterTypes), Raw()))
struct ParameterTypeListV1NormalParameterTypes {
    open_paren_token: Token,
    normal_parameter_types: NormalParameterTypes,
    comma_token: Token,
    optional_parameter_types: OptionalParameterTypes,
    close_paren_token: Token,
}

/// And(Raw((), Id(normalParameterTypes), Modified(?,Raw(,)), Raw()))
struct ParameterTypeListV2NormalParameterTypes {
    open_paren_token: Token,
    normal_parameter_types: NormalParameterTypes,
    comma_token: Option<Token>,
    close_paren_token: Token,
}

/// And(Raw((), Id(optionalParameterTypes), Raw()))
struct ParameterTypeListV3OptionalParameterTypes {
    open_paren_token: Token,
    optional_parameter_types: OptionalParameterTypes,
    close_paren_token: Token,
}

/// Or( And(Raw((), Raw())), And(Raw((), Id(normalParameterTypes), Raw(,), Id(optionalParameterTypes), Raw())), And(Raw((), Id(normalParameterTypes), Modified(?,Raw(,)), Raw())), And(Raw((), Id(optionalParameterTypes), Raw())), )
enum ParameterTypeList {
    OpenParen(ParameterTypeListV0OpenParenToken),
    NormalParameterTypes(ParameterTypeListV1NormalParameterTypes),
    NormalParameterTypes(ParameterTypeListV2NormalParameterTypes),
    OptionalParameterTypes(ParameterTypeListV3OptionalParameterTypes),
}

/// And(Raw(,), Id(normalParameterType))
struct NormalParameterTypecomma {
    comma_token: Token,
    normal_parameter_type: NormalParameterType,
}

/// And(Id(normalParameterType), Modified(*,And(Raw(,), Id(normalParameterType))))
struct NormalParameterTypes {
    normal_parameter_type: NormalParameterType,
    normal_parameter_typecomma: Vec<NormalParameterTypecomma>,
}

/// And(Id(metadata), Id(typedIdentifier))
struct NormalParameterTypeV0Metadata {
    metadata: Metadata,
    typed_identifier: TypedIdentifier,
}

/// And(Id(metadata), Id(type))
struct NormalParameterTypeV1Metadata {
    metadata: Metadata,
    dart_type: Type,
}

/// Or( And(Id(metadata), Id(typedIdentifier)), And(Id(metadata), Id(type)), )
enum NormalParameterType {
    Metadata(NormalParameterTypeV0Metadata),
    Metadata(NormalParameterTypeV1Metadata),
}

/// Or( Id(optionalPositionalParameterTypes), Id(namedParameterTypes), )
enum OptionalParameterTypes {
    OptionalPositionalParameterTypes(OptionalPositionalParameterTypes),
    NamedParameterTypes(NamedParameterTypes),
}

/// And(Raw([), Id(normalParameterTypes), Modified(?,Raw(,)), Raw(]))
struct OptionalPositionalParameterTypes {
    open_square_bracket_token: Token,
    normal_parameter_types: NormalParameterTypes,
    comma_token: Option<Token>,
    close_square_bracket_token: Token,
}

/// And(Raw(,), Id(namedParameterType))
struct NamedParameterTypecomma {
    comma_token: Token,
    named_parameter_type: NamedParameterType,
}

/// And(Raw({), Id(namedParameterType), Modified(*,And(Raw(,), Id(namedParameterType))), Modified(?,Raw(,)), Raw(}))
struct NamedParameterTypes {
    open_curly_bracket_token: Token,
    named_parameter_type: NamedParameterType,
    named_parameter_typecomma: Vec<NamedParameterTypecomma>,
    comma_token: Option<Token>,
    close_curly_bracket_token: Token,
}

/// And(Id(metadata), Modified(?,Raw(required)), Id(typedIdentifier))
struct NamedParameterType {
    metadata: Metadata,
    required_token: Option<Token>,
    typed_identifier: TypedIdentifier,
}

/// And(Id(type), Id(identifier))
struct TypedIdentifier {
    dart_type: Type,
    identifier: Identifier,
}

/// And(Raw(typedef), Id(typeIdentifier), Modified(?,Id(typeParameters)), Raw(=), Id(type), Raw(;))
struct TypeAliasV0TypeIdentifier {
    typedef_token: Token,
    type_identifier: TypeIdentifier,
    type_parameters: Option<TypeParameters>,
    equal_token: Token,
    dart_type: Type,
    semicolon_token: Token,
}

/// And(Raw(typedef), Id(functionTypeAlias))
struct TypeAliasV1FunctionTypeAlias {
    typedef_token: Token,
    function_type_alias: FunctionTypeAlias,
}

/// Or( And(Raw(typedef), Id(typeIdentifier), Modified(?,Id(typeParameters)), Raw(=), Id(type), Raw(;)), And(Raw(typedef), Id(functionTypeAlias)), )
enum TypeAlias {
    TypeIdentifier(TypeAliasV0TypeIdentifier),
    FunctionTypeAlias(TypeAliasV1FunctionTypeAlias),
}

/// And(Id(functionPrefix), Id(formalParameterPart), Raw(;))
struct FunctionTypeAlias {
    function_prefix: FunctionPrefix,
    formal_parameter_part: FormalParameterPart,
    semicolon_token: Token,
}

/// And(Modified(?,Id(type)), Id(identifier))
struct FunctionPrefix {
    dart_type: Option<Type>,
    identifier: Identifier,
}

/// Or( Raw(assert), Raw(break), Raw(case), Raw(catch), Raw(class), Raw(const), Raw(continue), Raw(default), Raw(do), Raw(else), Raw(enum), Raw(extends), Raw(false), Raw(final), Raw(finally), Raw(for), Raw(if), Raw(in), Raw(is), Raw(new), Raw(null), Raw(rethrow), Raw(return), Raw(super), Raw(switch), Raw(this), Raw(throw), Raw(true), Raw(try), Raw(var), Raw(void), Raw(while), Raw(with), )
enum ReservedWord {
    Assert(Token),
    Break(Token),
    Case(Token),
    Catch(Token),
    Class(Token),
    Const(Token),
    Continue(Token),
    Default(Token),
    Do(Token),
    Else(Token),
    Enum(Token),
    Extends(Token),
    False(Token),
    Final(Token),
    Finally(Token),
    For(Token),
    If(Token),
    In(Token),
    Is(Token),
    New(Token),
    Null(Token),
    Rethrow(Token),
    Return(Token),
    Super(Token),
    Switch(Token),
    This(Token),
    Throw(Token),
    True(Token),
    Try(Token),
    Var(Token),
    Void(Token),
    While(Token),
    With(Token),
}

/// And(Raw(//), Modified(*,Negated(Id(NEWLINE))), Modified(?,Id(NEWLINE)))
struct SingleLineComment {
    comment_token: Token,
    null: Vec<Token>,
    newline: Option<Token>,
}

/// Or( Id(MULTI_LINE_COMMENT), Negated(Raw(*/)), )
enum null {
    MultiLineComment(MultiLineComment),
    V1 { null: Token },
}

/// And(Raw(/*), Modified(*,Or( Id(MULTI_LINE_COMMENT), Negated(Raw(*/)), )), Raw(*/))
struct MultiLineComment {
    comment_multiline_start_token: Token,
    null: Vec<null>,
    comment_multiline_end_token: Token,
}

/// Or( Id(SINGLE_LINE_COMMENT), Id(MULTI_LINE_COMMENT), )
enum Comment {
    SingleLineComment(SingleLineComment),
    MultiLineComment(MultiLineComment),
}
