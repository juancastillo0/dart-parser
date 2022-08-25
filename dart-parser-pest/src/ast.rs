use crate::Token;

/// And(Raw(let), Id(staticFinalDeclarationList), Raw(in), Id(expression))
struct LetExpression {
    let_token: Token,
    static_final_declaration_list: StaticFinalDeclarationList,
    in_token: Token,
    expression: Expression,
}

/// And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)))
struct FinalConstVarOrTypeFinalToken {
    late_token: Option<Token>,
    final_token: Token,
    dart_type: Option<Type>,
}

/// And(Raw(const), Modified(?,Id(type)))
struct FinalConstVarOrTypeConstToken {
    const_token: Token,
    dart_type: Option<Type>,
}

/// And(Modified(?,Raw(late)), Id(varOrType))
struct FinalConstVarOrTypeVarOrType {
    late_token: Option<Token>,
    var_or_type: VarOrType,
}

/// Or( And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type))), And(Raw(const), Modified(?,Id(type))), And(Modified(?,Raw(late)), Id(varOrType)), )
enum FinalConstVarOrType {
    Final(FinalConstVarOrTypeFinalToken),
    Const(FinalConstVarOrTypeConstToken),
    VarOrType(FinalConstVarOrTypeVarOrType),
}

/// Or( Raw(var), Id(type), )
enum VarOrType {
    Var(Token),
    Type(Type),
}

/// And(Raw(=), Id(expression))
struct ExpressionEqual {
    equal_token: Token,
    expression: Expression,
}

/// And(Raw(,), Id(initializedIdentifier))
struct InitializedIdentifierItem {
    comma_token: Token,
    initialized_identifier: InitializedIdentifier,
}

/// And(Id(declaredIdentifier), Modified(?,And(Raw(=), Id(expression))), Modified(*,And(Raw(,), Id(initializedIdentifier))))
struct InitializedVariableDeclaration {
    declared_identifier: DeclaredIdentifier,
    expression_equal: Option<ExpressionEqual>,
    initialized_identifier_item: Vec<InitializedIdentifierItem>,
}

/// And(Id(identifier), Modified(?,And(Raw(=), Id(expression))))
struct InitializedIdentifier {
    identifier: Identifier,
    expression_equal: Option<ExpressionEqual>,
}

/// And(Id(initializedIdentifier), Modified(*,And(Raw(,), Id(initializedIdentifier))))
struct InitializedIdentifierList {
    initialized_identifier: InitializedIdentifier,
    initialized_identifier_item: Vec<InitializedIdentifierItem>,
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
struct FunctionBodyArrowToken {
    async_token: Option<Token>,
    arrow_token: Token,
    expression: Expression,
    semicolon_token: Token,
}

/// And(Raw(async), Modified(?,Raw(*)))
struct FunctionBodyGeneratorAsyncToken {
    async_token: Token,
    asterisk_token: Option<Token>,
}

/// And(Raw(sync), Raw(*))
struct FunctionBodyGeneratorSyncToken {
    sync_token: Token,
    asterisk_token: Token,
}

/// Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )
enum FunctionBodyGenerator {
    Async(FunctionBodyGeneratorAsyncToken),
    Sync(FunctionBodyGeneratorSyncToken),
}

/// And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block))
struct FunctionBodyBlock {
    function_body_generator: Option<FunctionBodyGenerator>,
    block: Block,
}

/// Or( And(Modified(?,Raw(async)), Raw(=>), Id(expression), Raw(;)), And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block)), )
enum FunctionBody {
    Arrow(FunctionBodyArrowToken),
    Block(FunctionBodyBlock),
}

/// And(Raw({), Id(statements), Raw(}))
struct Block {
    open_curly_bracket_token: Token,
    statements: Statements,
    close_curly_bracket_token: Token,
}

/// And(Raw((), Raw()))
struct EmptyParameters {
    open_paren_token: Token,
    close_paren_token: Token,
}

/// And(Raw((), Id(normalFormalParameters), Modified(?,Raw(,)), Raw()))
struct FormalParameterListNormalFormalParameters {
    open_paren_token: Token,
    normal_formal_parameters: NormalFormalParameters,
    comma_token: Option<Token>,
    close_paren_token: Token,
}

/// And(Raw((), Id(normalFormalParameters), Raw(,), Id(optionalOrNamedFormalParameters), Raw()))
struct NormalWithOptionalOrNamedParameters {
    open_paren_token: Token,
    normal_formal_parameters: NormalFormalParameters,
    comma_token: Token,
    optional_or_named_formal_parameters: OptionalOrNamedFormalParameters,
    close_paren_token: Token,
}

/// And(Raw((), Id(optionalOrNamedFormalParameters), Raw()))
struct FormalParameterListOptionalOrNamedFormalParameters {
    open_paren_token: Token,
    optional_or_named_formal_parameters: OptionalOrNamedFormalParameters,
    close_paren_token: Token,
}

/// Or( And(Raw((), Raw())), And(Raw((), Id(normalFormalParameters), Modified(?,Raw(,)), Raw())), And(Raw((), Id(normalFormalParameters), Raw(,), Id(optionalOrNamedFormalParameters), Raw())), And(Raw((), Id(optionalOrNamedFormalParameters), Raw())), )
enum FormalParameterList {
    EmptyParameters(EmptyParameters),
    NormalFormalParameters(FormalParameterListNormalFormalParameters),
    NormalWithOptionalOrNamedParameters(NormalWithOptionalOrNamedParameters),
    OptionalOrNamedFormalParameters(FormalParameterListOptionalOrNamedFormalParameters),
}

/// And(Raw(,), Id(normalFormalParameter))
struct NormalFormalParameterItem {
    comma_token: Token,
    normal_formal_parameter: NormalFormalParameter,
}

/// And(Id(normalFormalParameter), Modified(*,And(Raw(,), Id(normalFormalParameter))))
struct NormalFormalParameters {
    normal_formal_parameter: NormalFormalParameter,
    normal_formal_parameter_item: Vec<NormalFormalParameterItem>,
}

/// Or( Id(optionalPositionalFormalParameters), Id(namedFormalParameters), )
enum OptionalOrNamedFormalParameters {
    OptionalPositionalFormalParameters(OptionalPositionalFormalParameters),
    NamedFormalParameters(NamedFormalParameters),
}

/// And(Raw(,), Id(defaultFormalParameter))
struct DefaultFormalParameterItem {
    comma_token: Token,
    default_formal_parameter: DefaultFormalParameter,
}

/// And(Raw([), Id(defaultFormalParameter), Modified(*,And(Raw(,), Id(defaultFormalParameter))), Modified(?,Raw(,)), Raw(]))
struct OptionalPositionalFormalParameters {
    open_square_bracket_token: Token,
    default_formal_parameter: DefaultFormalParameter,
    default_formal_parameter_item: Vec<DefaultFormalParameterItem>,
    comma_token: Option<Token>,
    close_square_bracket_token: Token,
}

/// And(Raw(,), Id(defaultNamedParameter))
struct DefaultNamedParameterItem {
    comma_token: Token,
    default_named_parameter: DefaultNamedParameter,
}

/// And(Raw({), Id(defaultNamedParameter), Modified(*,And(Raw(,), Id(defaultNamedParameter))), Modified(?,Raw(,)), Raw(}))
struct NamedFormalParameters {
    open_curly_bracket_token: Token,
    default_named_parameter: DefaultNamedParameter,
    default_named_parameter_item: Vec<DefaultNamedParameterItem>,
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
struct SimpleFormalParameterIdentifier {
    covariant_token: Option<Token>,
    identifier: Identifier,
}

/// Or( Id(declaredIdentifier), And(Modified(?,Raw(covariant)), Id(identifier)), )
enum SimpleFormalParameter {
    DeclaredIdentifier(DeclaredIdentifier),
    Identifier(SimpleFormalParameterIdentifier),
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
    expression_equal: Option<ExpressionEqual>,
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
struct ClassDeclarationClassToken {
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
    Class(ClassDeclarationClassToken),
    ClassDeclarationMixin(ClassDeclarationMixin),
}

/// And(Raw(,), Id(typeNotVoid))
struct TypeNotVoidItem {
    comma_token: Token,
    type_not_void: TypeNotVoid,
}

/// And(Id(typeNotVoid), Modified(*,And(Raw(,), Id(typeNotVoid))))
struct TypeNotVoidList {
    type_not_void: TypeNotVoid,
    type_not_void_item: Vec<TypeNotVoidItem>,
}

/// And(Id(declaration), Raw(;))
struct ClassMemberDeclarationSemicolonToken {
    declaration: Declaration,
    semicolon_token: Token,
}

/// And(Id(methodSignature), Id(functionBody))
struct ClassMemberDeclarationMethodSignature {
    method_signature: MethodSignature,
    function_body: FunctionBody,
}

/// Or( And(Id(declaration), Raw(;)), And(Id(methodSignature), Id(functionBody)), )
enum ClassMemberDeclaration {
    Semicolon(ClassMemberDeclarationSemicolonToken),
    MethodSignature(ClassMemberDeclarationMethodSignature),
}

/// And(Id(constructorSignature), Modified(?,Id(initializers)))
struct MethodSignatureConstructorSignature {
    constructor_signature: ConstructorSignature,
    initializers: Option<Initializers>,
}

/// And(Modified(?,Raw(static)), Id(functionSignature))
struct MethodSignatureFunctionSignature {
    static_token: Option<Token>,
    function_signature: FunctionSignature,
}

/// And(Modified(?,Raw(static)), Id(getterSignature))
struct MethodSignatureGetterSignature {
    static_token: Option<Token>,
    getter_signature: GetterSignature,
}

/// And(Modified(?,Raw(static)), Id(setterSignature))
struct MethodSignatureSetterSignature {
    static_token: Option<Token>,
    setter_signature: SetterSignature,
}

/// Or( And(Id(constructorSignature), Modified(?,Id(initializers))), Id(factoryConstructorSignature), And(Modified(?,Raw(static)), Id(functionSignature)), And(Modified(?,Raw(static)), Id(getterSignature)), And(Modified(?,Raw(static)), Id(setterSignature)), Id(operatorSignature), )
enum MethodSignature {
    ConstructorSignature(MethodSignatureConstructorSignature),
    FactoryConstructorSignature(FactoryConstructorSignature),
    FunctionSignature(MethodSignatureFunctionSignature),
    GetterSignature(MethodSignatureGetterSignature),
    SetterSignature(MethodSignatureSetterSignature),
    OperatorSignature(OperatorSignature),
}

/// And(Raw(external), Id(factoryConstructorSignature))
struct DeclarationFactoryConstructorSignature {
    external_token: Token,
    factory_constructor_signature: FactoryConstructorSignature,
}

/// And(Raw(external), Id(constantConstructorSignature))
struct ExternalConstantConstructorSignature {
    external_token: Token,
    constant_constructor_signature: ConstantConstructorSignature,
}

/// And(Raw(external), Id(constructorSignature))
struct ExternalConstructorSignature {
    external_token: Token,
    constructor_signature: ConstructorSignature,
}

/// And(Raw(external), Modified(?,Raw(static)))
struct ExternalMaybeStatic {
    external_token: Token,
    static_token: Option<Token>,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(getterSignature))
struct DeclarationGetterSignature {
    external_maybe_static: Option<ExternalMaybeStatic>,
    getter_signature: GetterSignature,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(setterSignature))
struct DeclarationSetterSignature {
    external_maybe_static: Option<ExternalMaybeStatic>,
    setter_signature: SetterSignature,
}

/// And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(functionSignature))
struct DeclarationFunctionSignature {
    external_maybe_static: Option<ExternalMaybeStatic>,
    function_signature: FunctionSignature,
}

/// And(Modified(?,Raw(external)), Id(operatorSignature))
struct DeclarationOperatorSignature {
    external_token: Option<Token>,
    operator_signature: OperatorSignature,
}

/// And(Raw(static), Raw(const), Modified(?,Id(type)), Id(staticFinalDeclarationList))
struct StaticConst {
    static_token: Token,
    const_token: Token,
    dart_type: Option<Type>,
    static_final_declaration_list: StaticFinalDeclarationList,
}

/// And(Raw(static), Raw(final), Modified(?,Id(type)), Id(staticFinalDeclarationList))
struct StaticFinal {
    static_token: Token,
    final_token: Token,
    dart_type: Option<Type>,
    static_final_declaration_list: StaticFinalDeclarationList,
}

/// And(Raw(static), Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList))
struct StaticLateFinal {
    static_token: Token,
    late_token: Token,
    final_token: Token,
    dart_type: Option<Type>,
    initialized_identifier_list: InitializedIdentifierList,
}

/// And(Raw(static), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
struct StaticVarOrType {
    static_token: Token,
    late_token: Option<Token>,
    var_or_type: VarOrType,
    initialized_identifier_list: InitializedIdentifierList,
}

/// And(Raw(covariant), Raw(late), Raw(final), Modified(?,Id(type)), Id(identifierList))
struct CovariantLateFinal {
    covariant_token: Token,
    late_token: Token,
    final_token: Token,
    dart_type: Option<Type>,
    identifier_list: IdentifierList,
}

/// And(Raw(covariant), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
struct CovariantVarOrType {
    covariant_token: Token,
    late_token: Option<Token>,
    var_or_type: VarOrType,
    initialized_identifier_list: InitializedIdentifierList,
}

/// And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList))
struct DeclarationFinalToken {
    late_token: Option<Token>,
    final_token: Token,
    dart_type: Option<Type>,
    initialized_identifier_list: InitializedIdentifierList,
}

/// And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList))
struct DeclarationVarOrType {
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
struct DeclarationConstantConstructorSignature {
    constant_constructor_signature: ConstantConstructorSignature,
    redirection_or_initializers: Option<RedirectionOrInitializers>,
}

/// And(Id(constructorSignature), Modified(?,Or( Id(redirection), Id(initializers), )))
struct DeclarationConstructorSignature {
    constructor_signature: ConstructorSignature,
    redirection_or_initializers: Option<RedirectionOrInitializers>,
}

/// Or( And(Raw(external), Id(factoryConstructorSignature)), And(Raw(external), Id(constantConstructorSignature)), And(Raw(external), Id(constructorSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(getterSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(setterSignature)), And(Modified(?,And(Raw(external), Modified(?,Raw(static)))), Id(functionSignature)), And(Modified(?,Raw(external)), Id(operatorSignature)), And(Raw(static), Raw(const), Modified(?,Id(type)), Id(staticFinalDeclarationList)), And(Raw(static), Raw(final), Modified(?,Id(type)), Id(staticFinalDeclarationList)), And(Raw(static), Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList)), And(Raw(static), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), And(Raw(covariant), Raw(late), Raw(final), Modified(?,Id(type)), Id(identifierList)), And(Raw(covariant), Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), And(Modified(?,Raw(late)), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList)), And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList)), Id(redirectingFactoryConstructorSignature), And(Id(constantConstructorSignature), Modified(?,Or( Id(redirection), Id(initializers), ))), And(Id(constructorSignature), Modified(?,Or( Id(redirection), Id(initializers), ))), )
enum Declaration {
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
struct StaticFinalDeclarationItem {
    comma_token: Token,
    static_final_declaration: StaticFinalDeclaration,
}

/// And(Id(staticFinalDeclaration), Modified(*,And(Raw(,), Id(staticFinalDeclaration))))
struct StaticFinalDeclarationList {
    static_final_declaration: StaticFinalDeclaration,
    static_final_declaration_item: Vec<StaticFinalDeclarationItem>,
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
struct IdentifierSelector {
    period_token: Token,
    identifier: Identifier,
}

/// And(Id(typeIdentifier), Modified(?,And(Raw(.), Id(identifier))))
struct ConstructorName {
    type_identifier: TypeIdentifier,
    identifier_selector: Option<IdentifierSelector>,
}

/// And(Raw(:), Raw(this), Modified(?,And(Raw(.), Id(identifier))), Id(arguments))
struct Redirection {
    colon_token: Token,
    this_token: Token,
    identifier_selector: Option<IdentifierSelector>,
    arguments: Arguments,
}

/// And(Raw(,), Id(initializerListEntry))
struct InitializerListEntryItem {
    comma_token: Token,
    initializer_list_entry: InitializerListEntry,
}

/// And(Raw(:), Id(initializerListEntry), Modified(*,And(Raw(,), Id(initializerListEntry))))
struct Initializers {
    colon_token: Token,
    initializer_list_entry: InitializerListEntry,
    initializer_list_entry_item: Vec<InitializerListEntryItem>,
}

/// And(Raw(super), Id(arguments))
struct InitializerListEntryArguments {
    super_token: Token,
    arguments: Arguments,
}

/// And(Raw(super), Raw(.), Id(identifier), Id(arguments))
struct InitializerListEntrySuperToken {
    super_token: Token,
    period_token: Token,
    identifier: Identifier,
    arguments: Arguments,
}

/// Or( And(Raw(super), Id(arguments)), And(Raw(super), Raw(.), Id(identifier), Id(arguments)), Id(fieldInitializer), Id(assertion), )
enum InitializerListEntry {
    Arguments(InitializerListEntryArguments),
    Super(InitializerListEntrySuperToken),
    FieldInitializer(FieldInitializer),
    Assertion(Assertion),
}

/// And(Raw(this), Raw(.))
struct FieldInitializerThisToken {
    this_token: Token,
    period_token: Token,
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
struct ConstructorDesignationTypeName {
    type_name: TypeName,
    type_arguments: TypeArguments,
    identifier_selector: Option<IdentifierSelector>,
}

/// Or( Id(typeIdentifier), Id(qualifiedName), And(Id(typeName), Id(typeArguments), Modified(?,And(Raw(.), Id(identifier)))), )
enum ConstructorDesignation {
    TypeIdentifier(TypeIdentifier),
    QualifiedName(QualifiedName),
    TypeName(ConstructorDesignationTypeName),
}

/// And(Raw(const), Id(constructorName), Id(formalParameterList))
struct ConstantConstructorSignature {
    const_token: Token,
    constructor_name: ConstructorName,
    formal_parameter_list: FormalParameterList,
}

/// And(Raw(extends), Id(typeNotVoid), Modified(?,Id(mixins)))
struct SuperclassTypeNotVoid {
    extends_token: Token,
    type_not_void: TypeNotVoid,
    mixins: Option<Mixins>,
}

/// Or( And(Raw(extends), Id(typeNotVoid), Modified(?,Id(mixins))), Id(mixins), )
enum Superclass {
    TypeNotVoid(SuperclassTypeNotVoid),
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
struct TypeNotVoidListOn {
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
    type_not_void_list_on: Option<TypeNotVoidListOn>,
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
struct EnumEntryItem {
    comma_token: Token,
    enum_entry: EnumEntry,
}

/// And(Raw(enum), Id(identifier), Raw({), Id(enumEntry), Modified(*,And(Raw(,), Id(enumEntry))), Modified(?,Raw(,)), Raw(}))
struct EnumType {
    enum_token: Token,
    identifier: Identifier,
    open_curly_bracket_token: Token,
    enum_entry: EnumEntry,
    enum_entry_item: Vec<EnumEntryItem>,
    comma_token: Option<Token>,
    close_curly_bracket_token: Token,
}

/// And(Id(metadata), Id(identifier))
struct EnumEntry {
    metadata: Metadata,
    identifier: Identifier,
}

/// And(Raw(extends), Id(typeNotVoid))
struct TypeNotVoidExtends {
    extends_token: Token,
    type_not_void: TypeNotVoid,
}

/// And(Id(metadata), Id(identifier), Modified(?,And(Raw(extends), Id(typeNotVoid))))
struct TypeParameter {
    metadata: Metadata,
    identifier: Identifier,
    type_not_void_extends: Option<TypeNotVoidExtends>,
}

/// And(Raw(,), Id(typeParameter))
struct TypeParameterItem {
    comma_token: Token,
    type_parameter: TypeParameter,
}

/// And(Raw(<), Id(typeParameter), Modified(*,And(Raw(,), Id(typeParameter))), Raw(>))
struct TypeParameters {
    less_token: Token,
    type_parameter: TypeParameter,
    type_parameter_item: Vec<TypeParameterItem>,
    more_token: Token,
}

/// And(Raw(@), Id(metadatum))
struct MetadataItem {
    at_token: Token,
    metadatum: Metadatum,
}

/// Modified(*,And(Raw(@), Id(metadatum)))
type Metadata = Vec<MetadataItem>;

/// And(Id(constructorDesignation), Id(arguments))
struct MetadatumConstructorDesignation {
    constructor_designation: ConstructorDesignation,
    arguments: Arguments,
}

/// Or( Id(identifier), Id(qualifiedName), And(Id(constructorDesignation), Id(arguments)), )
enum Metadatum {
    Identifier(Identifier),
    QualifiedName(QualifiedName),
    ConstructorDesignation(MetadatumConstructorDesignation),
}

/// And(Id(assignableExpression), Id(assignmentOperator), Id(expression))
struct ExpressionAssignableExpression {
    assignable_expression: AssignableExpression,
    assignment_operator: AssignmentOperator,
    expression: Expression,
}

/// Or( And(Id(assignableExpression), Id(assignmentOperator), Id(expression)), Id(conditionalExpression), Id(cascade), Id(throwExpression), )
enum Expression {
    AssignableExpression(ExpressionAssignableExpression),
    ConditionalExpression(ConditionalExpression),
    Cascade(Cascade),
    ThrowExpression(ThrowExpression),
}

/// And(Id(assignableExpression), Id(assignmentOperator), Id(expressionWithoutCascade))
struct ExpressionWithoutCascadeAssignableExpression {
    assignable_expression: AssignableExpression,
    assignment_operator: AssignmentOperator,
    expression_without_cascade: ExpressionWithoutCascade,
}

/// Or( And(Id(assignableExpression), Id(assignmentOperator), Id(expressionWithoutCascade)), Id(conditionalExpression), Id(throwExpressionWithoutCascade), )
enum ExpressionWithoutCascade {
    AssignableExpression(ExpressionWithoutCascadeAssignableExpression),
    ConditionalExpression(ConditionalExpression),
    ThrowExpressionWithoutCascade(ThrowExpressionWithoutCascade),
}

/// And(Raw(,), Id(expression))
struct ExpressionItem {
    comma_token: Token,
    expression: Expression,
}

/// And(Id(expression), Modified(*,And(Raw(,), Id(expression))))
struct ExpressionList {
    expression: Expression,
    expression_item: Vec<ExpressionItem>,
}

/// And(Raw(super), Id(unconditionalAssignableSelector))
struct PrimaryUnconditionalAssignableSelector {
    super_token: Token,
    unconditional_assignable_selector: UnconditionalAssignableSelector,
}

/// And(Raw(super), Id(argumentPart))
struct PrimaryArgumentPart {
    super_token: Token,
    argument_part: ArgumentPart,
}

/// And(Raw((), Id(expression), Raw()))
struct PrimaryExpression {
    open_paren_token: Token,
    expression: Expression,
    close_paren_token: Token,
}

/// Or( Id(thisExpression), And(Raw(super), Id(unconditionalAssignableSelector)), And(Raw(super), Id(argumentPart)), Id(functionExpression), Id(literal), Id(identifier), Id(newExpression), Id(constObjectExpression), Id(constructorInvocation), And(Raw((), Id(expression), Raw())), )
enum Primary {
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

/// Raw(null)
type NullLiteral = Token;

/// Or( Id(NUMBER), Id(HEX_NUMBER), )
enum NumericLiteral {
    Number(Token),
    HexNumber(Token),
}

/// Or( Raw(true), Raw(false), )
enum BooleanLiteral {
    True(Token),
    False(Token),
}

/// Or( Id(multilineString), Id(singleLineString), )
enum StringLiteralItem {
    MultilineString(MultilineString),
    SingleLineString(SingleLineString),
}

/// Modified(+,Or( Id(multilineString), Id(singleLineString), ))
type StringLiteral = Vec<StringLiteralItem>;

/// And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))
struct ExpressionSingleLineStringSqMidMid {
    single_line_string_sq_mid_mid: Token,
    expression: Expression,
}

/// And(Id(SINGLE_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_SQ_MID_END))
struct SingleLineStringSingleLineStringSqBeginMid {
    single_line_string_sq_begin_mid: Token,
    expression: Expression,
    expression_single_line_string_sq_mid_mid: Vec<ExpressionSingleLineStringSqMidMid>,
    single_line_string_sq_mid_end: Token,
}

/// And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))
struct ExpressionSingleLineStringDqMidMid {
    single_line_string_dq_mid_mid: Token,
    expression: Expression,
}

/// And(Id(SINGLE_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_DQ_MID_END))
struct SingleLineStringSingleLineStringDqBeginMid {
    single_line_string_dq_begin_mid: Token,
    expression: Expression,
    expression_single_line_string_dq_mid_mid: Vec<ExpressionSingleLineStringDqMidMid>,
    single_line_string_dq_mid_end: Token,
}

/// Or( Id(RAW_SINGLE_LINE_STRING), Id(SINGLE_LINE_STRING_SQ_BEGIN_END), And(Id(SINGLE_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_SQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_SQ_MID_END)), Id(SINGLE_LINE_STRING_DQ_BEGIN_END), And(Id(SINGLE_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(SINGLE_LINE_STRING_DQ_MID_MID), Id(expression))), Id(SINGLE_LINE_STRING_DQ_MID_END)), )
enum SingleLineString {
    RawSingleLineString(Token),
    SingleLineStringSqBeginEnd(Token),
    SingleLineStringSqBeginMid(SingleLineStringSingleLineStringSqBeginMid),
    SingleLineStringDqBeginEnd(Token),
    SingleLineStringDqBeginMid(SingleLineStringSingleLineStringDqBeginMid),
}

/// And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))
struct ExpressionMultiLineStringSqMidMid {
    multi_line_string_sq_mid_mid: Token,
    expression: Expression,
}

/// And(Id(MULTI_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_SQ_MID_END))
struct MultilineStringMultiLineStringSqBeginMid {
    multi_line_string_sq_begin_mid: Token,
    expression: Expression,
    expression_multi_line_string_sq_mid_mid: Vec<ExpressionMultiLineStringSqMidMid>,
    multi_line_string_sq_mid_end: Token,
}

/// And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))
struct ExpressionMultiLineStringDqMidMid {
    multi_line_string_dq_mid_mid: Token,
    expression: Expression,
}

/// And(Id(MULTI_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_DQ_MID_END))
struct MultilineStringMultiLineStringDqBeginMid {
    multi_line_string_dq_begin_mid: Token,
    expression: Expression,
    expression_multi_line_string_dq_mid_mid: Vec<ExpressionMultiLineStringDqMidMid>,
    multi_line_string_dq_mid_end: Token,
}

/// Or( Id(RAW_MULTI_LINE_STRING), Id(MULTI_LINE_STRING_SQ_BEGIN_END), And(Id(MULTI_LINE_STRING_SQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_SQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_SQ_MID_END)), Id(MULTI_LINE_STRING_DQ_BEGIN_END), And(Id(MULTI_LINE_STRING_DQ_BEGIN_MID), Id(expression), Modified(*,And(Id(MULTI_LINE_STRING_DQ_MID_MID), Id(expression))), Id(MULTI_LINE_STRING_DQ_MID_END)), )
enum MultilineString {
    RawMultiLineString(Token),
    MultiLineStringSqBeginEnd(Token),
    MultiLineStringSqBeginMid(MultilineStringMultiLineStringSqBeginMid),
    MultiLineStringDqBeginEnd(Token),
    MultiLineStringDqBeginMid(MultilineStringMultiLineStringDqBeginMid),
}

/// And(Raw(${), Id(expression), Raw(}))
struct StringInterpolationExpression {
    interpolation_start_token: Token,
    expression: Expression,
    close_curly_bracket_token: Token,
}

/// Or( Id(SIMPLE_STRING_INTERPOLATION), And(Raw(${), Id(expression), Raw(})), )
enum StringInterpolation {
    SimpleStringInterpolation(Token),
    Expression(StringInterpolationExpression),
}

/// And(Raw(.), Id(identifier))
struct SymbolLiteralOtherIdentifiers {
    period_token: Token,
    identifier: Identifier,
}

/// And(Id(identifier), Modified(*,And(Raw(.), Id(identifier))))
struct SymbolLiteralValueIdentifier {
    identifier: Identifier,
    symbol_literal_other_identifiers: Vec<SymbolLiteralOtherIdentifiers>,
}

/// Or( And(Id(identifier), Modified(*,And(Raw(.), Id(identifier)))), Id(operator), Raw(void), )
enum SymbolLiteralValue {
    Identifier(SymbolLiteralValueIdentifier),
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
struct ElementItem {
    comma_token: Token,
    element: Element,
}

/// And(Id(element), Modified(*,And(Raw(,), Id(element))), Modified(?,Raw(,)))
struct Elements {
    element: Element,
    element_item: Vec<ElementItem>,
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

/// Id(expression)
type ExpressionElement = Expression;

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
struct ElementElse {
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
    element_else: Option<ElementElse>,
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
struct FunctionExpressionBodyArrowToken {
    async_token: Option<Token>,
    arrow_token: Token,
    expression: Expression,
}

/// And(Raw(async), Modified(?,Raw(*)))
struct FunctionExpressionGeneratorAsyncToken {
    async_token: Token,
    asterisk_token: Option<Token>,
}

/// And(Raw(sync), Raw(*))
struct FunctionExpressionGeneratorSyncToken {
    sync_token: Token,
    asterisk_token: Token,
}

/// Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )
enum FunctionExpressionGenerator {
    Async(FunctionExpressionGeneratorAsyncToken),
    Sync(FunctionExpressionGeneratorSyncToken),
}

/// And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block))
struct FunctionExpressionBodyBlock {
    function_expression_generator: Option<FunctionExpressionGenerator>,
    block: Block,
}

/// Or( And(Modified(?,Raw(async)), Raw(=>), Id(expression)), And(Modified(?,Or( And(Raw(async), Modified(?,Raw(*))), And(Raw(sync), Raw(*)), )), Id(block)), )
enum FunctionExpressionBody {
    Arrow(FunctionExpressionBodyArrowToken),
    Block(FunctionExpressionBodyBlock),
}

/// Raw(this)
type ThisExpression = Token;

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
struct NamedArgumentItem {
    comma_token: Token,
    named_argument: NamedArgument,
}

/// And(Id(namedArgument), Modified(*,And(Raw(,), Id(namedArgument))))
struct ArgumentListNamedArgument {
    named_argument: NamedArgument,
    named_argument_item: Vec<NamedArgumentItem>,
}

/// And(Id(expressionList), Modified(*,And(Raw(,), Id(namedArgument))))
struct ArgumentListExpressionList {
    expression_list: ExpressionList,
    named_argument_item: Vec<NamedArgumentItem>,
}

/// Or( And(Id(namedArgument), Modified(*,And(Raw(,), Id(namedArgument)))), And(Id(expressionList), Modified(*,And(Raw(,), Id(namedArgument)))), )
enum ArgumentList {
    NamedArgument(ArgumentListNamedArgument),
    ExpressionList(ArgumentListExpressionList),
}

/// And(Id(label), Id(expression))
struct NamedArgument {
    label: Label,
    expression: Expression,
}

/// And(Id(cascade), Raw(..), Id(cascadeSection))
struct CascadePointsIdToken {
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
struct CascadeConditionalExpression {
    conditional_expression: ConditionalExpression,
    cascade_prefix_type: CascadePrefixType,
    cascade_section: CascadeSection,
}

/// Or( And(Id(cascade), Raw(..), Id(cascadeSection)), And(Id(conditionalExpression), Or( Raw(?..), Raw(..), ), Id(cascadeSection)), )
enum Cascade {
    PointsId(CascadePointsIdToken),
    ConditionalExpression(CascadeConditionalExpression),
}

/// And(Id(cascadeSelector), Id(cascadeSectionTail))
struct CascadeSection {
    cascade_selector: CascadeSelector,
    cascade_section_tail: CascadeSectionTail,
}

/// And(Raw([), Id(expression), Raw(]))
struct CascadeSelectorExpression {
    open_square_bracket_token: Token,
    expression: Expression,
    close_square_bracket_token: Token,
}

/// Or( And(Raw([), Id(expression), Raw(])), Id(identifier), )
enum CascadeSelector {
    Expression(CascadeSelectorExpression),
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
    expression_without_cascade2: ExpressionWithoutCascade,
}

/// And(Id(ifNullExpression), Modified(?,And(Raw(?), Id(expressionWithoutCascade), Raw(:), Id(expressionWithoutCascade))))
struct ConditionalExpression {
    if_null_expression: IfNullExpression,
    expression_without_cascade: Option<ConditionalExpressionExpressionWithoutCascade>,
}

/// And(Raw(??), Id(logicalOrExpression))
struct LogicalOrExpressionQuestionQuestion {
    question_question_token: Token,
    logical_or_expression: LogicalOrExpression,
}

/// And(Id(logicalOrExpression), Modified(*,And(Raw(??), Id(logicalOrExpression))))
struct IfNullExpression {
    logical_or_expression: LogicalOrExpression,
    logical_or_expression_question_question: Vec<LogicalOrExpressionQuestionQuestion>,
}

/// And(Raw(||), Id(logicalAndExpression))
struct LogicalAndExpressionOr {
    or_token: Token,
    logical_and_expression: LogicalAndExpression,
}

/// And(Id(logicalAndExpression), Modified(*,And(Raw(||), Id(logicalAndExpression))))
struct LogicalOrExpression {
    logical_and_expression: LogicalAndExpression,
    logical_and_expression_or: Vec<LogicalAndExpressionOr>,
}

/// And(Raw(&&), Id(equalityExpression))
struct EqualityExpressionAnd {
    and_token: Token,
    equality_expression: EqualityExpression,
}

/// And(Id(equalityExpression), Modified(*,And(Raw(&&), Id(equalityExpression))))
struct LogicalAndExpression {
    equality_expression: EqualityExpression,
    equality_expression_and: Vec<EqualityExpressionAnd>,
}

/// And(Id(equalityOperator), Id(relationalExpression))
struct EqualityExpressionInner {
    equality_operator: EqualityOperator,
    relational_expression: RelationalExpression,
}

/// And(Id(relationalExpression), Modified(?,And(Id(equalityOperator), Id(relationalExpression))))
struct EqualityExpressionRelationalExpression {
    relational_expression: RelationalExpression,
    equality_expression_inner: Option<EqualityExpressionInner>,
}

/// And(Raw(super), Id(equalityOperator), Id(relationalExpression))
struct EqualityExpressionEqualityOperator {
    super_token: Token,
    equality_operator: EqualityOperator,
    relational_expression: RelationalExpression,
}

/// Or( And(Id(relationalExpression), Modified(?,And(Id(equalityOperator), Id(relationalExpression)))), And(Raw(super), Id(equalityOperator), Id(relationalExpression)), )
enum EqualityExpression {
    RelationalExpression(EqualityExpressionRelationalExpression),
    EqualityOperator(EqualityExpressionEqualityOperator),
}

/// Or( Raw(==), Raw(!=), )
enum EqualityOperator {
    DoubleEqual(Token),
    NotEqual(Token),
}

/// And(Id(relationalOperator), Id(bitwiseOrExpression))
struct BitwiseOrExpressionInterRelationalOperator {
    relational_operator: RelationalOperator,
    bitwise_or_expression: BitwiseOrExpression,
}

/// Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), )
enum BitwiseOrExpressionInter {
    TypeTest(TypeTest),
    TypeCast(TypeCast),
    RelationalOperator(BitwiseOrExpressionInterRelationalOperator),
}

/// And(Id(bitwiseOrExpression), Modified(?,Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), )))
struct RelationalExpressionBitwiseOrExpression {
    bitwise_or_expression: BitwiseOrExpression,
    bitwise_or_expression_inter: Option<BitwiseOrExpressionInter>,
}

/// And(Raw(super), Id(relationalOperator), Id(bitwiseOrExpression))
struct RelationalExpressionRelationalOperator {
    super_token: Token,
    relational_operator: RelationalOperator,
    bitwise_or_expression: BitwiseOrExpression,
}

/// Or( And(Id(bitwiseOrExpression), Modified(?,Or( Id(typeTest), Id(typeCast), And(Id(relationalOperator), Id(bitwiseOrExpression)), ))), And(Raw(super), Id(relationalOperator), Id(bitwiseOrExpression)), )
enum RelationalExpression {
    BitwiseOrExpression(RelationalExpressionBitwiseOrExpression),
    RelationalOperator(RelationalExpressionRelationalOperator),
}

/// Or( Raw(>=), Raw(>), Raw(<=), Raw(<), )
enum RelationalOperator {
    MoreOrEqual(Token),
    More(Token),
    LessOrEqual(Token),
    Less(Token),
}

/// And(Raw(|), Id(bitwiseXorExpression))
struct BitwiseXorExpressionBitXor {
    bit_xor_token: Token,
    bitwise_xor_expression: BitwiseXorExpression,
}

/// And(Id(bitwiseXorExpression), Modified(*,And(Raw(|), Id(bitwiseXorExpression))))
struct BitwiseOrExpressionBitwiseXorExpression {
    bitwise_xor_expression: BitwiseXorExpression,
    bitwise_xor_expression_bit_xor: Vec<BitwiseXorExpressionBitXor>,
}

/// And(Raw(super), Modified(+,And(Raw(|), Id(bitwiseXorExpression))))
struct BitwiseOrExpressionSuperToken {
    super_token: Token,
    bitwise_xor_expression_bit_xor: Vec<BitwiseXorExpressionBitXor>,
}

/// Or( And(Id(bitwiseXorExpression), Modified(*,And(Raw(|), Id(bitwiseXorExpression)))), And(Raw(super), Modified(+,And(Raw(|), Id(bitwiseXorExpression)))), )
enum BitwiseOrExpression {
    BitwiseXorExpression(BitwiseOrExpressionBitwiseXorExpression),
    Super(BitwiseOrExpressionSuperToken),
}

/// And(Raw(^), Id(bitwiseAndExpression))
struct BitwiseAndExpressionBitNeg {
    bit_neg_token: Token,
    bitwise_and_expression: BitwiseAndExpression,
}

/// And(Id(bitwiseAndExpression), Modified(*,And(Raw(^), Id(bitwiseAndExpression))))
struct BitwiseXorExpressionBitwiseAndExpression {
    bitwise_and_expression: BitwiseAndExpression,
    bitwise_and_expression_bit_neg: Vec<BitwiseAndExpressionBitNeg>,
}

/// And(Raw(super), Modified(+,And(Raw(^), Id(bitwiseAndExpression))))
struct BitwiseXorExpressionSuperToken {
    super_token: Token,
    bitwise_and_expression_bit_neg: Vec<BitwiseAndExpressionBitNeg>,
}

/// Or( And(Id(bitwiseAndExpression), Modified(*,And(Raw(^), Id(bitwiseAndExpression)))), And(Raw(super), Modified(+,And(Raw(^), Id(bitwiseAndExpression)))), )
enum BitwiseXorExpression {
    BitwiseAndExpression(BitwiseXorExpressionBitwiseAndExpression),
    Super(BitwiseXorExpressionSuperToken),
}

/// And(Raw(&), Id(shiftExpression))
struct ShiftExpressionBitAnd {
    bit_and_token: Token,
    shift_expression: ShiftExpression,
}

/// And(Id(shiftExpression), Modified(*,And(Raw(&), Id(shiftExpression))))
struct BitwiseAndExpressionShiftExpression {
    shift_expression: ShiftExpression,
    shift_expression_bit_and: Vec<ShiftExpressionBitAnd>,
}

/// And(Raw(super), Modified(+,And(Raw(&), Id(shiftExpression))))
struct BitwiseAndExpressionSuperToken {
    super_token: Token,
    shift_expression_bit_and: Vec<ShiftExpressionBitAnd>,
}

/// Or( And(Id(shiftExpression), Modified(*,And(Raw(&), Id(shiftExpression)))), And(Raw(super), Modified(+,And(Raw(&), Id(shiftExpression)))), )
enum BitwiseAndExpression {
    ShiftExpression(BitwiseAndExpressionShiftExpression),
    Super(BitwiseAndExpressionSuperToken),
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
struct ShiftExpressionAdditiveExpression {
    additive_expression: AdditiveExpression,
    shift_expression_inner: Vec<ShiftExpressionInner>,
}

/// And(Raw(super), Modified(+,And(Id(shiftOperator), Id(additiveExpression))))
struct ShiftExpressionSuperToken {
    super_token: Token,
    shift_expression_inner: Vec<ShiftExpressionInner>,
}

/// Or( And(Id(additiveExpression), Modified(*,And(Id(shiftOperator), Id(additiveExpression)))), And(Raw(super), Modified(+,And(Id(shiftOperator), Id(additiveExpression)))), )
enum ShiftExpression {
    AdditiveExpression(ShiftExpressionAdditiveExpression),
    Super(ShiftExpressionSuperToken),
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
struct AdditiveExpressionMultiplicativeExpression {
    multiplicative_expression: MultiplicativeExpression,
    additive_expression_inner: Vec<AdditiveExpressionInner>,
}

/// And(Raw(super), Modified(+,And(Id(additiveOperator), Id(multiplicativeExpression))))
struct AdditiveExpressionSuperToken {
    super_token: Token,
    additive_expression_inner: Vec<AdditiveExpressionInner>,
}

/// Or( And(Id(multiplicativeExpression), Modified(*,And(Id(additiveOperator), Id(multiplicativeExpression)))), And(Raw(super), Modified(+,And(Id(additiveOperator), Id(multiplicativeExpression)))), )
enum AdditiveExpression {
    MultiplicativeExpression(AdditiveExpressionMultiplicativeExpression),
    Super(AdditiveExpressionSuperToken),
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
struct MultiplicativeExpressionUnaryExpression {
    unary_expression: UnaryExpression,
    multiplicative_expression_inner: Vec<MultiplicativeExpressionInner>,
}

/// And(Raw(super), Modified(+,And(Id(multiplicativeOperator), Id(unaryExpression))))
struct MultiplicativeExpressionSuperToken {
    super_token: Token,
    multiplicative_expression_inner: Vec<MultiplicativeExpressionInner>,
}

/// Or( And(Id(unaryExpression), Modified(*,And(Id(multiplicativeOperator), Id(unaryExpression)))), And(Raw(super), Modified(+,And(Id(multiplicativeOperator), Id(unaryExpression)))), )
enum MultiplicativeExpression {
    UnaryExpression(MultiplicativeExpressionUnaryExpression),
    Super(MultiplicativeExpressionSuperToken),
}

/// Or( Raw(*), Raw(/), Raw(%), Raw(~/), )
enum MultiplicativeOperator {
    Asterisk(Token),
    Divide(Token),
    Modulus(Token),
    IntegerDiv(Token),
}

/// And(Id(prefixOperator), Id(unaryExpression))
struct UnaryExpressionPrefixOperator {
    prefix_operator: PrefixOperator,
    unary_expression: UnaryExpression,
}

/// Or( Id(minusOperator), Id(tildeOperator), )
enum UnaryOperator {
    MinusOperator(MinusOperator),
    TildeOperator(TildeOperator),
}

/// And(Or( Id(minusOperator), Id(tildeOperator), ), Raw(super))
struct UnaryExpressionSuperToken {
    unary_operator: UnaryOperator,
    super_token: Token,
}

/// And(Id(incrementOperator), Id(assignableExpression))
struct UnaryExpressionIncrementOperator {
    increment_operator: IncrementOperator,
    assignable_expression: AssignableExpression,
}

/// Or( And(Id(prefixOperator), Id(unaryExpression)), Id(awaitExpression), Id(postfixExpression), And(Or( Id(minusOperator), Id(tildeOperator), ), Raw(super)), And(Id(incrementOperator), Id(assignableExpression)), )
enum UnaryExpression {
    PrefixOperator(UnaryExpressionPrefixOperator),
    AwaitExpression(AwaitExpression),
    PostfixExpression(PostfixExpression),
    Super(UnaryExpressionSuperToken),
    IncrementOperator(UnaryExpressionIncrementOperator),
}

/// Or( Id(minusOperator), Id(negationOperator), Id(tildeOperator), )
enum PrefixOperator {
    MinusOperator(MinusOperator),
    NegationOperator(NegationOperator),
    TildeOperator(TildeOperator),
}

/// Raw(-)
type MinusOperator = Token;

/// Raw(!)
type NegationOperator = Token;

/// Raw(~)
type TildeOperator = Token;

/// And(Raw(await), Id(unaryExpression))
struct AwaitExpression {
    await_token: Token,
    unary_expression: UnaryExpression,
}

/// And(Id(assignableExpression), Id(postfixOperator))
struct PostfixExpressionAssignableExpression {
    assignable_expression: AssignableExpression,
    postfix_operator: PostfixOperator,
}

/// And(Id(primary), Modified(*,Id(selector)))
struct PostfixExpressionPrimary {
    primary: Primary,
    selector: Vec<Selector>,
}

/// Or( And(Id(assignableExpression), Id(postfixOperator)), And(Id(primary), Modified(*,Id(selector))), )
enum PostfixExpression {
    AssignableExpression(PostfixExpressionAssignableExpression),
    Primary(PostfixExpressionPrimary),
}

/// Id(incrementOperator)
type PostfixOperator = IncrementOperator;

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
struct AssignableExpressionPrimary {
    primary: Primary,
    assignable_selector_part: AssignableSelectorPart,
}

/// And(Raw(super), Id(unconditionalAssignableSelector))
struct AssignableExpressionUnconditionalAssignableSelector {
    super_token: Token,
    unconditional_assignable_selector: UnconditionalAssignableSelector,
}

/// Or( And(Id(primary), Id(assignableSelectorPart)), And(Raw(super), Id(unconditionalAssignableSelector)), Id(identifier), )
enum AssignableExpression {
    Primary(AssignableExpressionPrimary),
    UnconditionalAssignableSelector(AssignableExpressionUnconditionalAssignableSelector),
    Identifier(Identifier),
}

/// And(Modified(*,Id(selector)), Id(assignableSelector))
struct AssignableSelectorPart {
    selector: Vec<Selector>,
    assignable_selector: AssignableSelector,
}

/// And(Raw([), Id(expression), Raw(]))
struct UnconditionalAssignableSelectorExpression {
    open_square_bracket_token: Token,
    expression: Expression,
    close_square_bracket_token: Token,
}

/// And(Raw(.), Id(identifier))
struct UnconditionalAssignableSelectorIdentifier {
    period_token: Token,
    identifier: Identifier,
}

/// Or( And(Raw([), Id(expression), Raw(])), And(Raw(.), Id(identifier)), )
enum UnconditionalAssignableSelector {
    Expression(UnconditionalAssignableSelectorExpression),
    Identifier(UnconditionalAssignableSelectorIdentifier),
}

/// And(Raw(?.), Id(identifier))
struct AssignableSelectorIdentifier {
    question_id_token: Token,
    identifier: Identifier,
}

/// And(Raw(?), Raw([), Id(expression), Raw(]))
struct AssignableSelectorQuestionToken {
    question_token: Token,
    open_square_bracket_token: Token,
    expression: Expression,
    close_square_bracket_token: Token,
}

/// Or( Id(unconditionalAssignableSelector), And(Raw(?.), Id(identifier)), And(Raw(?), Raw([), Id(expression), Raw(])), )
enum AssignableSelector {
    UnconditionalAssignableSelector(UnconditionalAssignableSelector),
    Identifier(AssignableSelectorIdentifier),
    Question(AssignableSelectorQuestionToken),
}

/// Or( Id(IDENTIFIER), Id(BUILT_IN_IDENTIFIER), Id(OTHER_IDENTIFIER), )
enum Identifier {
    Identifier(Token),
    BuiltInIdentifier(Token),
    OtherIdentifier(Token),
}

/// Or( Id(IDENTIFIER), Id(OTHER_IDENTIFIER), Raw(dynamic), )
enum TypeIdentifier {
    Identifier(Token),
    OtherIdentifier(Token),
    Dynamic(Token),
}

/// And(Id(typeIdentifier), Raw(.), Id(identifier))
struct QualifiedNameSingle {
    type_identifier: TypeIdentifier,
    period_token: Token,
    identifier: Identifier,
}

/// And(Id(typeIdentifier), Raw(.), Id(typeIdentifier), Raw(.), Id(identifier))
struct QualifiedNameDouble {
    type_identifier: TypeIdentifier,
    period_token: Token,
    type_identifier2: TypeIdentifier,
    period_token2: Token,
    identifier: Identifier,
}

/// Or( And(Id(typeIdentifier), Raw(.), Id(identifier)), And(Id(typeIdentifier), Raw(.), Id(typeIdentifier), Raw(.), Id(identifier)), )
enum QualifiedName {
    QualifiedNameSingle(QualifiedNameSingle),
    QualifiedNameDouble(QualifiedNameDouble),
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

/// Raw(as)
type AsOperator = Token;

/// Modified(*,Id(statement))
type Statements = Vec<Statement>;

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
struct StatementElse {
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
    statement_else: Option<StatementElse>,
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
struct ForLoopPartsSemicolonToken {
    for_initializer_statement: ForInitializerStatement,
    expression: Option<Expression>,
    semicolon_token: Token,
    expression_list: Option<ExpressionList>,
}

/// And(Id(metadata), Id(declaredIdentifier), Raw(in), Id(expression))
struct ForLoopPartsMetadata {
    metadata: Metadata,
    declared_identifier: DeclaredIdentifier,
    in_token: Token,
    expression: Expression,
}

/// And(Id(identifier), Raw(in), Id(expression))
struct ForLoopPartsInToken {
    identifier: Identifier,
    in_token: Token,
    expression: Expression,
}

/// Or( And(Id(forInitializerStatement), Modified(?,Id(expression)), Raw(;), Modified(?,Id(expressionList))), And(Id(metadata), Id(declaredIdentifier), Raw(in), Id(expression)), And(Id(identifier), Raw(in), Id(expression)), )
enum ForLoopParts {
    Semicolon(ForLoopPartsSemicolonToken),
    Metadata(ForLoopPartsMetadata),
    In(ForLoopPartsInToken),
}

/// And(Modified(?,Id(expression)), Raw(;))
struct ForInitializerStatementSemicolonToken {
    expression: Option<Expression>,
    semicolon_token: Token,
}

/// Or( Id(localVariableDeclaration), And(Modified(?,Id(expression)), Raw(;)), )
enum ForInitializerStatement {
    LocalVariableDeclaration(LocalVariableDeclaration),
    Semicolon(ForInitializerStatementSemicolonToken),
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
    rethrow_token: Token,
    semicolon_token: Token,
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
struct OnPartCatchPart {
    catch_part: CatchPart,
    block: Block,
}

/// And(Raw(on), Id(typeNotVoid), Modified(?,Id(catchPart)), Id(block))
struct OnPartTypeNotVoid {
    on_token: Token,
    type_not_void: TypeNotVoid,
    catch_part: Option<CatchPart>,
    block: Block,
}

/// Or( And(Id(catchPart), Id(block)), And(Raw(on), Id(typeNotVoid), Modified(?,Id(catchPart)), Id(block)), )
enum OnPart {
    CatchPart(OnPartCatchPart),
    TypeNotVoid(OnPartTypeNotVoid),
}

/// And(Raw(,), Id(identifier))
struct IdentifierItem {
    comma_token: Token,
    identifier: Identifier,
}

/// And(Raw(catch), Raw((), Id(identifier), Modified(?,And(Raw(,), Id(identifier))), Raw()))
struct CatchPart {
    catch_token: Token,
    open_paren_token: Token,
    identifier: Identifier,
    identifier_item: Option<IdentifierItem>,
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
    expression_item: Option<ExpressionItem>,
    comma_token: Option<Token>,
    close_paren_token: Token,
}

/// And(Raw(external), Id(functionSignature), Raw(;))
struct ExternalFunctionSignature {
    external_token: Token,
    function_signature: FunctionSignature,
    semicolon_token: Token,
}

/// And(Raw(external), Id(getterSignature), Raw(;))
struct ExternalGetterSignature {
    external_token: Token,
    getter_signature: GetterSignature,
    semicolon_token: Token,
}

/// And(Raw(external), Id(setterSignature), Raw(;))
struct ExternalSetterSignature {
    external_token: Token,
    setter_signature: SetterSignature,
    semicolon_token: Token,
}

/// And(Id(functionSignature), Id(functionBody))
struct TopLevelDeclarationFunctionSignature {
    function_signature: FunctionSignature,
    function_body: FunctionBody,
}

/// And(Id(getterSignature), Id(functionBody))
struct TopLevelDeclarationGetterSignature {
    getter_signature: GetterSignature,
    function_body: FunctionBody,
}

/// And(Id(setterSignature), Id(functionBody))
struct TopLevelDeclarationSetterSignature {
    setter_signature: SetterSignature,
    function_body: FunctionBody,
}

/// Or( Raw(final), Raw(const), )
enum FinalOrConst {
    Final(Token),
    Const(Token),
}

/// And(Or( Raw(final), Raw(const), ), Modified(?,Id(type)), Id(staticFinalDeclarationList), Raw(;))
struct TopLevelDeclarationSemicolonToken {
    final_or_const: FinalOrConst,
    dart_type: Option<Type>,
    static_final_declaration_list: StaticFinalDeclarationList,
    semicolon_token: Token,
}

/// And(Raw(late), Raw(final), Modified(?,Id(type)), Id(initializedIdentifierList), Raw(;))
struct TopLevelDeclarationLateToken {
    late_token: Token,
    final_token: Token,
    dart_type: Option<Type>,
    initialized_identifier_list: InitializedIdentifierList,
    semicolon_token: Token,
}

/// And(Modified(?,Raw(late)), Id(varOrType), Id(initializedIdentifierList), Raw(;))
struct TopLevelDeclarationVarOrType {
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
    identifier_selector: Vec<IdentifierSelector>,
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
struct ShowCombinator {
    show_token: Token,
    identifier_list: IdentifierList,
}

/// And(Raw(hide), Id(identifierList))
struct HideCombinator {
    hide_token: Token,
    identifier_list: IdentifierList,
}

/// Or( And(Raw(show), Id(identifierList)), And(Raw(hide), Id(identifierList)), )
enum Combinator {
    ShowCombinator(ShowCombinator),
    HideCombinator(HideCombinator),
}

/// And(Id(identifier), Modified(*,And(Raw(,), Id(identifier))))
struct IdentifierList {
    identifier: Identifier,
    identifier_item: Vec<IdentifierItem>,
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

/// Id(stringLiteral)
type Uri = StringLiteral;

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
struct StringLiteralDoubleEqual {
    double_equal_token: Token,
    string_literal: StringLiteral,
}

/// And(Id(dottedIdentifierList), Modified(?,And(Raw(==), Id(stringLiteral))))
struct UriTest {
    dotted_identifier_list: DottedIdentifierList,
    string_literal_double_equal: Option<StringLiteralDoubleEqual>,
}

/// And(Id(functionType), Modified(?,Raw(?)))
struct TypeFunctionType {
    function_type: FunctionType,
    question_token: Option<Token>,
}

/// Or( And(Id(functionType), Modified(?,Raw(?))), Id(typeNotFunction), )
enum Type {
    FunctionType(TypeFunctionType),
    TypeNotFunction(TypeNotFunction),
}

/// And(Id(functionType), Modified(?,Raw(?)))
struct TypeNotVoidFunctionType {
    function_type: FunctionType,
    question_token: Option<Token>,
}

/// Or( And(Id(functionType), Modified(?,Raw(?))), Id(typeNotVoidNotFunction), )
enum TypeNotVoid {
    FunctionType(TypeNotVoidFunctionType),
    TypeNotVoidNotFunction(TypeNotVoidNotFunction),
}

/// Or( Raw(void), Id(typeNotVoidNotFunction), )
enum TypeNotFunction {
    Void(Token),
    TypeNotVoidNotFunction(TypeNotVoidNotFunction),
}

/// And(Id(typeName), Modified(?,Id(typeArguments)), Modified(?,Raw(?)))
struct TypeNotVoidNotFunctionTypeName {
    type_name: TypeName,
    type_arguments: Option<TypeArguments>,
    question_token: Option<Token>,
}

/// And(Raw(Function), Modified(?,Raw(?)))
struct TypeNotVoidNotFunctionFunctionToken {
    function_token: Token,
    question_token: Option<Token>,
}

/// Or( And(Id(typeName), Modified(?,Id(typeArguments)), Modified(?,Raw(?))), And(Raw(Function), Modified(?,Raw(?))), )
enum TypeNotVoidNotFunction {
    TypeName(TypeNotVoidNotFunctionTypeName),
    Function(TypeNotVoidNotFunctionFunctionToken),
}

/// And(Raw(.), Id(typeIdentifier))
struct TypeIdentifierSelector {
    period_token: Token,
    type_identifier: TypeIdentifier,
}

/// And(Id(typeIdentifier), Modified(?,And(Raw(.), Id(typeIdentifier))))
struct TypeName {
    type_identifier: TypeIdentifier,
    type_identifier_selector: Option<TypeIdentifierSelector>,
}

/// And(Raw(<), Id(typeList), Raw(>))
struct TypeArguments {
    less_token: Token,
    type_list: TypeList,
    more_token: Token,
}

/// And(Raw(,), Id(type))
struct TypeItem {
    comma_token: Token,
    dart_type: Type,
}

/// And(Id(type), Modified(*,And(Raw(,), Id(type))))
struct TypeList {
    dart_type: Type,
    type_item: Vec<TypeItem>,
}

/// And(Raw(,), Id(typeNotVoidNotFunction))
struct TypeNotVoidNotFunctionItem {
    comma_token: Token,
    type_not_void_not_function: TypeNotVoidNotFunction,
}

/// And(Id(typeNotVoidNotFunction), Modified(*,And(Raw(,), Id(typeNotVoidNotFunction))))
struct TypeNotVoidNotFunctionList {
    type_not_void_not_function: TypeNotVoidNotFunction,
    type_not_void_not_function_item: Vec<TypeNotVoidNotFunctionItem>,
}

/// And(Id(typeNotFunction), Id(functionTypeTails))
struct FunctionTypeTypeNotFunction {
    type_not_function: TypeNotFunction,
    function_type_tails: FunctionTypeTails,
}

/// Or( Id(functionTypeTails), And(Id(typeNotFunction), Id(functionTypeTails)), )
enum FunctionType {
    FunctionTypeTails(FunctionTypeTails),
    TypeNotFunction(FunctionTypeTypeNotFunction),
}

/// And(Id(functionTypeTail), Modified(?,Raw(?)), Id(functionTypeTails))
struct FunctionTypeTailsMany {
    function_type_tail: FunctionTypeTail,
    question_token: Option<Token>,
    function_type_tails: FunctionTypeTails,
}

/// Or( And(Id(functionTypeTail), Modified(?,Raw(?)), Id(functionTypeTails)), Id(functionTypeTail), )
enum FunctionTypeTails {
    FunctionTypeTailsMany(FunctionTypeTailsMany),
    FunctionTypeTail(FunctionTypeTail),
}

/// And(Raw(Function), Modified(?,Id(typeParameters)), Id(parameterTypeList))
struct FunctionTypeTail {
    function_token: Token,
    type_parameters: Option<TypeParameters>,
    parameter_type_list: ParameterTypeList,
}

/// And(Raw((), Id(normalParameterTypes), Raw(,), Id(optionalParameterTypes), Raw()))
struct NormalWithOptionalParameters {
    open_paren_token: Token,
    normal_parameter_types: NormalParameterTypes,
    comma_token: Token,
    optional_parameter_types: OptionalParameterTypes,
    close_paren_token: Token,
}

/// And(Raw((), Id(normalParameterTypes), Modified(?,Raw(,)), Raw()))
struct ParameterTypeListNormalParameterTypes {
    open_paren_token: Token,
    normal_parameter_types: NormalParameterTypes,
    comma_token: Option<Token>,
    close_paren_token: Token,
}

/// And(Raw((), Id(optionalParameterTypes), Raw()))
struct ParameterTypeListOptionalParameterTypes {
    open_paren_token: Token,
    optional_parameter_types: OptionalParameterTypes,
    close_paren_token: Token,
}

/// Or( And(Raw((), Raw())), And(Raw((), Id(normalParameterTypes), Raw(,), Id(optionalParameterTypes), Raw())), And(Raw((), Id(normalParameterTypes), Modified(?,Raw(,)), Raw())), And(Raw((), Id(optionalParameterTypes), Raw())), )
enum ParameterTypeList {
    EmptyParameters(EmptyParameters),
    NormalWithOptionalParameters(NormalWithOptionalParameters),
    NormalParameterTypes(ParameterTypeListNormalParameterTypes),
    OptionalParameterTypes(ParameterTypeListOptionalParameterTypes),
}

/// And(Raw(,), Id(normalParameterType))
struct NormalParameterTypeItem {
    comma_token: Token,
    normal_parameter_type: NormalParameterType,
}

/// And(Id(normalParameterType), Modified(*,And(Raw(,), Id(normalParameterType))))
struct NormalParameterTypes {
    normal_parameter_type: NormalParameterType,
    normal_parameter_type_item: Vec<NormalParameterTypeItem>,
}

/// And(Id(metadata), Id(typedIdentifier))
struct IdentifierParameterType {
    metadata: Metadata,
    typed_identifier: TypedIdentifier,
}

/// And(Id(metadata), Id(type))
struct TypeParameterType {
    metadata: Metadata,
    dart_type: Type,
}

/// Or( And(Id(metadata), Id(typedIdentifier)), And(Id(metadata), Id(type)), )
enum NormalParameterType {
    IdentifierParameterType(IdentifierParameterType),
    TypeParameterType(TypeParameterType),
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
struct NamedParameterTypeItem {
    comma_token: Token,
    named_parameter_type: NamedParameterType,
}

/// And(Raw({), Id(namedParameterType), Modified(*,And(Raw(,), Id(namedParameterType))), Modified(?,Raw(,)), Raw(}))
struct NamedParameterTypes {
    open_curly_bracket_token: Token,
    named_parameter_type: NamedParameterType,
    named_parameter_type_item: Vec<NamedParameterTypeItem>,
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
struct TypeAliasTypeIdentifier {
    typedef_token: Token,
    type_identifier: TypeIdentifier,
    type_parameters: Option<TypeParameters>,
    equal_token: Token,
    dart_type: Type,
    semicolon_token: Token,
}

/// And(Raw(typedef), Id(functionTypeAlias))
struct TypeAliasFunctionTypeAlias {
    typedef_token: Token,
    function_type_alias: FunctionTypeAlias,
}

/// Or( And(Raw(typedef), Id(typeIdentifier), Modified(?,Id(typeParameters)), Raw(=), Id(type), Raw(;)), And(Raw(typedef), Id(functionTypeAlias)), )
enum TypeAlias {
    TypeIdentifier(TypeAliasTypeIdentifier),
    FunctionTypeAlias(TypeAliasFunctionTypeAlias),
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
