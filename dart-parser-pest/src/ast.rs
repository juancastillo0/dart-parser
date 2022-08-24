struct letExpression {letToken: Token,staticFinalDeclarationList: staticFinalDeclarationList,inToken: Token,expression: expression}

struct finalConstVarOrTypev0final {lateToken: Option<Token>,finalToken: Token,type: Option<type>}

struct finalConstVarOrTypev1const {constToken: Token,type: Option<type>}

struct null {lateToken: Option<Token>,varOrType: varOrType}

enum finalConstVarOrType {v0{finalConstVarOrTypev0final: finalConstVarOrTypev0final},v1{finalConstVarOrTypev1const: finalConstVarOrTypev1const},v2{null: null},}

enum varOrType {v0{varToken: Token},v1{type: type},}

struct initializedVariableDeclaration= {equalToken: Token,expression: expression}

struct initializedVariableDeclaration, {commaToken: Token,initializedIdentifier: initializedIdentifier}

struct initializedVariableDeclaration {declaredIdentifier: declaredIdentifier,initializedVariableDeclaration=: Option<initializedVariableDeclaration=>,initializedVariableDeclaration,: Vec<initializedVariableDeclaration,>}

struct initializedIdentifier= {equalToken: Token,expression: expression}

struct initializedIdentifier {identifier: identifier,initializedIdentifier=: Option<initializedIdentifier=>}

struct initializedIdentifierList, {commaToken: Token,initializedIdentifier: initializedIdentifier}

struct initializedIdentifierList {initializedIdentifier: initializedIdentifier,initializedIdentifierList,: Vec<initializedIdentifierList,>}

struct functionSignature {type: Option<type>,identifier: identifier,formalParameterPart: formalParameterPart}

struct formalParameterPart {typeParameters: Option<typeParameters>,formalParameterList: formalParameterList}

struct functionBodyv0=> {asyncToken: Option<Token>,arrowToken: Token,expression: expression,semicolonToken: Token}

struct nullv0async {asyncToken: Token,asteriskToken: Option<Token>}

enum nullv1Enum {syncToken,asteriskToken,}

enum null {v0{nullv0async: nullv0async},v1{nullv1Enum: nullv1Enum},}

struct null {null: Option<null>,block: block}

enum functionBody {v0{functionBodyv0=>: functionBodyv0=>},v1{null: null},}

struct block {openCurlyBracketToken: Token,statements: statements,closeCurlyBracketToken: Token}

enum formalParameterListv0Enum {openParenToken,closeParenToken,}

struct formalParameterListv1( {openParenToken: Token,normalFormalParameters: normalFormalParameters,commaToken: Option<Token>,closeParenToken: Token}

struct formalParameterListv2( {openParenToken: Token,normalFormalParameters: normalFormalParameters,commaToken: Token,optionalOrNamedFormalParameters: optionalOrNamedFormalParameters,closeParenToken: Token}

struct formalParameterListv3( {openParenToken: Token,optionalOrNamedFormalParameters: optionalOrNamedFormalParameters,closeParenToken: Token}

enum formalParameterList {v0{formalParameterListv0Enum: formalParameterListv0Enum},v1{formalParameterListv1(: formalParameterListv1(},v2{formalParameterListv2(: formalParameterListv2(},v3{formalParameterListv3(: formalParameterListv3(},}

struct normalFormalParameters, {commaToken: Token,normalFormalParameter: normalFormalParameter}

struct normalFormalParameters {normalFormalParameter: normalFormalParameter,normalFormalParameters,: Vec<normalFormalParameters,>}

enum optionalOrNamedFormalParameters {v0{optionalPositionalFormalParameters: optionalPositionalFormalParameters},v1{namedFormalParameters: namedFormalParameters},}

struct optionalPositionalFormalParameters, {commaToken: Token,defaultFormalParameter: defaultFormalParameter}

struct optionalPositionalFormalParameters {openSquareBracketToken: Token,defaultFormalParameter: defaultFormalParameter,optionalPositionalFormalParameters,: Vec<optionalPositionalFormalParameters,>,commaToken: Option<Token>,closeSquareBracketToken: Token}

struct namedFormalParameters, {commaToken: Token,defaultNamedParameter: defaultNamedParameter}

struct namedFormalParameters {openCurlyBracketToken: Token,defaultNamedParameter: defaultNamedParameter,namedFormalParameters,: Vec<namedFormalParameters,>,commaToken: Option<Token>,closeCurlyBracketToken: Token}

struct normalFormalParameter {metadata: metadata,normalFormalParameterNoMetadata: normalFormalParameterNoMetadata}

enum normalFormalParameterNoMetadata {v0{functionFormalParameter: functionFormalParameter},v1{fieldFormalParameter: fieldFormalParameter},v2{simpleFormalParameter: simpleFormalParameter},}

struct functionFormalParameter {covariantToken: Option<Token>,type: Option<type>,identifier: identifier,formalParameterPart: formalParameterPart,questionToken: Option<Token>}

struct null {covariantToken: Option<Token>,identifier: identifier}

enum simpleFormalParameter {v0{declaredIdentifier: declaredIdentifier},v1{null: null},}

struct declaredIdentifier {covariantToken: Option<Token>,finalConstVarOrType: finalConstVarOrType,identifier: identifier}

struct null {formalParameterPart: formalParameterPart,questionToken: Option<Token>}

struct fieldFormalParameter {finalConstVarOrType: Option<finalConstVarOrType>,thisToken: Token,periodToken: Token,identifier: identifier,null: Option<null>}

struct defaultFormalParameter= {equalToken: Token,expression: expression}

struct defaultFormalParameter {normalFormalParameter: normalFormalParameter,defaultFormalParameter=: Option<defaultFormalParameter=>}

enum null {equalToken,colonToken,}

struct null {null: null,expression: expression}

struct defaultNamedParameter {metadata: metadata,requiredToken: Option<Token>,normalFormalParameterNoMetadata: normalFormalParameterNoMetadata,null: Option<null>}

struct null {metadata: metadata,classMemberDeclaration: classMemberDeclaration}

struct classDeclarationv0class {abstractToken: Option<Token>,classToken: Token,typeIdentifier: typeIdentifier,typeParameters: Option<typeParameters>,superclass: Option<superclass>,interfaces: Option<interfaces>,openCurlyBracketToken: Token,null: Vec<null>,closeCurlyBracketToken: Token}

struct classDeclarationv1class {abstractToken: Option<Token>,classToken: Token,mixinApplicationClass: mixinApplicationClass}

enum classDeclaration {v0{classDeclarationv0class: classDeclarationv0class},v1{classDeclarationv1class: classDeclarationv1class},}

struct typeNotVoidList, {commaToken: Token,typeNotVoid: typeNotVoid}

struct typeNotVoidList {typeNotVoid: typeNotVoid,typeNotVoidList,: Vec<typeNotVoidList,>}

struct classMemberDeclarationv0; {declaration: declaration,semicolonToken: Token}

struct null {methodSignature: methodSignature,functionBody: functionBody}

enum classMemberDeclaration {v0{classMemberDeclarationv0;: classMemberDeclarationv0;},v1{null: null},}

struct null {constructorSignature: constructorSignature,initializers: Option<initializers>}

struct null {staticToken: Option<Token>,functionSignature: functionSignature}

struct null {staticToken: Option<Token>,getterSignature: getterSignature}

struct null {staticToken: Option<Token>,setterSignature: setterSignature}

enum methodSignature {v0{null: null},v1{factoryConstructorSignature: factoryConstructorSignature},v2{null: null},v3{null: null},v4{null: null},v5{operatorSignature: operatorSignature},}

struct declarationv0external {externalToken: Token,factoryConstructorSignature: factoryConstructorSignature}

struct declarationv1external {externalToken: Token,constantConstructorSignature: constantConstructorSignature}

struct declarationv2external {externalToken: Token,constructorSignature: constructorSignature}

struct null {externalToken: Token,staticToken: Option<Token>}

struct null {null: Option<null>,getterSignature: getterSignature}

struct null {externalToken: Token,staticToken: Option<Token>}

struct null {null: Option<null>,setterSignature: setterSignature}

struct null {externalToken: Token,staticToken: Option<Token>}

struct null {null: Option<null>,functionSignature: functionSignature}

struct null {externalToken: Option<Token>,operatorSignature: operatorSignature}

struct declarationv7static {staticToken: Token,constToken: Token,type: Option<type>,staticFinalDeclarationList: staticFinalDeclarationList}

struct declarationv8static {staticToken: Token,finalToken: Token,type: Option<type>,staticFinalDeclarationList: staticFinalDeclarationList}

struct declarationv9static {staticToken: Token,lateToken: Token,finalToken: Token,type: Option<type>,initializedIdentifierList: initializedIdentifierList}

struct declarationv10static {staticToken: Token,lateToken: Option<Token>,varOrType: varOrType,initializedIdentifierList: initializedIdentifierList}

struct declarationv11covariant {covariantToken: Token,lateToken: Token,finalToken: Token,type: Option<type>,identifierList: identifierList}

struct declarationv12covariant {covariantToken: Token,lateToken: Option<Token>,varOrType: varOrType,initializedIdentifierList: initializedIdentifierList}

struct declarationv13final {lateToken: Option<Token>,finalToken: Token,type: Option<type>,initializedIdentifierList: initializedIdentifierList}

struct null {lateToken: Option<Token>,varOrType: varOrType,initializedIdentifierList: initializedIdentifierList}

enum null {v0{redirection: redirection},v1{initializers: initializers},}

struct null {constantConstructorSignature: constantConstructorSignature,null: Option<null>}

enum null {v0{redirection: redirection},v1{initializers: initializers},}

struct null {constructorSignature: constructorSignature,null: Option<null>}

enum declaration {v0{declarationv0external: declarationv0external},v1{declarationv1external: declarationv1external},v2{declarationv2external: declarationv2external},v3{null: null},v4{null: null},v5{null: null},v6{null: null},v7{declarationv7static: declarationv7static},v8{declarationv8static: declarationv8static},v9{declarationv9static: declarationv9static},v10{declarationv10static: declarationv10static},v11{declarationv11covariant: declarationv11covariant},v12{declarationv12covariant: declarationv12covariant},v13{declarationv13final: declarationv13final},v14{null: null},v15{redirectingFactoryConstructorSignature: redirectingFactoryConstructorSignature},v16{null: null},v17{null: null},}

struct staticFinalDeclarationList, {commaToken: Token,staticFinalDeclaration: staticFinalDeclaration}

struct staticFinalDeclarationList {staticFinalDeclaration: staticFinalDeclaration,staticFinalDeclarationList,: Vec<staticFinalDeclarationList,>}

struct staticFinalDeclaration {identifier: identifier,equalToken: Token,expression: expression}

struct operatorSignature {type: Option<type>,operatorToken: Token,operator: operator,formalParameterList: formalParameterList}

enum operator {v0{tildeToken: Token},v1{binaryOperator: binaryOperator},v2{squareBracketsToken: Token},v3{quareBracketsEqToken: Token},}

enum binaryOperator {v0{multiplicativeOperator: multiplicativeOperator},v1{additiveOperator: additiveOperator},v2{shiftOperator: shiftOperator},v3{relationalOperator: relationalOperator},v4{doubleEqualToken: Token},v5{bitwiseOperator: bitwiseOperator},}

struct getterSignature {type: Option<type>,getToken: Token,identifier: identifier}

struct setterSignature {type: Option<type>,setToken: Token,identifier: identifier,formalParameterList: formalParameterList}

struct constructorSignature {constructorName: constructorName,formalParameterList: formalParameterList}

struct constructorName. {periodToken: Token,identifier: identifier}

struct constructorName {typeIdentifier: typeIdentifier,constructorName.: Option<constructorName.>}

struct redirection. {periodToken: Token,identifier: identifier}

struct redirection {colonToken: Token,thisToken: Token,redirection.: Option<redirection.>,arguments: arguments}

struct initializers, {commaToken: Token,initializerListEntry: initializerListEntry}

struct initializers {colonToken: Token,initializerListEntry: initializerListEntry,initializers,: Vec<initializers,>}

struct initializerListEntryv0super {superToken: Token,arguments: arguments}

struct initializerListEntryv1super {superToken: Token,periodToken: Token,identifier: identifier,arguments: arguments}

enum initializerListEntry {v0{initializerListEntryv0super: initializerListEntryv0super},v1{initializerListEntryv1super: initializerListEntryv1super},v2{fieldInitializer: fieldInitializer},v3{assertion: assertion},}

enum fieldInitializerEnum {thisToken,periodToken,}

struct fieldInitializer {fieldInitializerEnum: Option<fieldInitializerEnum>,identifier: identifier,equalToken: Token,initializerExpression: initializerExpression}

enum initializerExpression {v0{conditionalExpression: conditionalExpression},v1{cascade: cascade},}

struct factoryConstructorSignature {constToken: Option<Token>,factoryToken: Token,constructorName: constructorName,formalParameterList: formalParameterList}

struct redirectingFactoryConstructorSignature {constToken: Option<Token>,factoryToken: Token,constructorName: constructorName,formalParameterList: formalParameterList,equalToken: Token,constructorDesignation: constructorDesignation}

struct null {periodToken: Token,identifier: identifier}

struct null {typeName: typeName,typeArguments: typeArguments,null: Option<null>}

enum constructorDesignation {v0{typeIdentifier: typeIdentifier},v1{qualifiedName: qualifiedName},v2{null: null},}

struct constantConstructorSignature {constToken: Token,constructorName: constructorName,formalParameterList: formalParameterList}

struct superclassv0extends {extendsToken: Token,typeNotVoid: typeNotVoid,mixins: Option<mixins>}

enum superclass {v0{superclassv0extends: superclassv0extends},v1{mixins: mixins},}

struct mixins {withToken: Token,typeNotVoidList: typeNotVoidList}

struct interfaces {implementsToken: Token,typeNotVoidList: typeNotVoidList}

struct mixinApplicationClass {identifier: identifier,typeParameters: Option<typeParameters>,equalToken: Token,mixinApplication: mixinApplication,semicolonToken: Token}

struct mixinApplication {typeNotVoid: typeNotVoid,mixins: mixins,interfaces: Option<interfaces>}

struct mixinDeclarationon {onToken: Token,typeNotVoidList: typeNotVoidList}

struct null {metadata: metadata,classMemberDeclaration: classMemberDeclaration}

struct mixinDeclaration {mixinToken: Token,typeIdentifier: typeIdentifier,typeParameters: Option<typeParameters>,mixinDeclarationon: Option<mixinDeclarationon>,interfaces: Option<interfaces>,openCurlyBracketToken: Token,null: Vec<null>,closeCurlyBracketToken: Token}

struct null {metadata: metadata,classMemberDeclaration: classMemberDeclaration}

struct extensionDeclaration {extensionToken: Token,identifier: Option<identifier>,typeParameters: Option<typeParameters>,onToken: Token,type: type,openCurlyBracketToken: Token,null: Vec<null>,closeCurlyBracketToken: Token}

struct enumType, {commaToken: Token,enumEntry: enumEntry}

struct enumType {enumToken: Token,identifier: identifier,openCurlyBracketToken: Token,enumEntry: enumEntry,enumType,: Vec<enumType,>,commaToken: Option<Token>,closeCurlyBracketToken: Token}

struct enumEntry {metadata: metadata,identifier: identifier}

struct typeParameterextends {extendsToken: Token,typeNotVoid: typeNotVoid}

struct typeParameter {metadata: metadata,identifier: identifier,typeParameterextends: Option<typeParameterextends>}

struct typeParameters, {commaToken: Token,typeParameter: typeParameter}

struct typeParameters {lessToken: Token,typeParameter: typeParameter,typeParameters,: Vec<typeParameters,>,moreToken: Token}

struct metadata {atToken: Token,metadatum: metadatum}

struct null {constructorDesignation: constructorDesignation,arguments: arguments}

enum metadatum {v0{identifier: identifier},v1{qualifiedName: qualifiedName},v2{null: null},}

struct null {assignableExpression: assignableExpression,assignmentOperator: assignmentOperator,expression: expression}

enum expression {v0{null: null},v1{conditionalExpression: conditionalExpression},v2{cascade: cascade},v3{throwExpression: throwExpression},}

struct null {assignableExpression: assignableExpression,assignmentOperator: assignmentOperator,expressionWithoutCascade: expressionWithoutCascade}

enum expressionWithoutCascade {v0{null: null},v1{conditionalExpression: conditionalExpression},v2{throwExpressionWithoutCascade: throwExpressionWithoutCascade},}

struct expressionList, {commaToken: Token,expression: expression}

struct expressionList {expression: expression,expressionList,: Vec<expressionList,>}

struct primaryv1super {superToken: Token,unconditionalAssignableSelector: unconditionalAssignableSelector}

struct primaryv2super {superToken: Token,argumentPart: argumentPart}

struct primaryv9( {openParenToken: Token,expression: expression,closeParenToken: Token}

enum primary {v0{thisExpression: thisExpression},v1{primaryv1super: primaryv1super},v2{primaryv2super: primaryv2super},v3{functionExpression: functionExpression},v4{literal: literal},v5{identifier: identifier},v6{newExpression: newExpression},v7{constObjectExpression: constObjectExpression},v8{constructorInvocation: constructorInvocation},v9{primaryv9(: primaryv9(},}

enum literal {v0{nullLiteral: nullLiteral},v1{booleanLiteral: booleanLiteral},v2{numericLiteral: numericLiteral},v3{stringLiteral: stringLiteral},v4{symbolLiteral: symbolLiteral},v5{listLiteral: listLiteral},v6{setOrMapLiteral: setOrMapLiteral},}

enum numericLiteral {v0{NUMBER: Token},v1{HEX_NUMBER: Token},}

struct null {periodToken: Token,DIGIT: Vec<Token>}

struct null {DIGIT: Vec<Token>,null: Option<null>,EXPONENT: Option<Token>}

struct NUMBERv1. {periodToken: Token,DIGIT: Vec<Token>,EXPONENT: Option<Token>}

enum NUMBER {v0{null: null},v1{NUMBERv1.: NUMBERv1.},}

enum null {exponentToken,scientificToken,}

enum null {plusToken,minusToken,}

struct EXPONENT {null: null,null: Option<null>,DIGIT: Vec<Token>}

struct HEX_NUMBERv00x {hex0xToken: Token,HEX_DIGIT: Vec<Token>}

struct HEX_NUMBERv10X {hex0XToken: Token,HEX_DIGIT: Vec<Token>}

enum HEX_NUMBER {v0{HEX_NUMBERv00x: HEX_NUMBERv00x},v1{HEX_NUMBERv10X: HEX_NUMBERv10X},}

enum HEX_DIGIT {v0{aTokenTofToken: Token},v1{ATokenToFToken: Token},v2{DIGIT: Token},}

enum booleanLiteral {trueToken,falseToken,}

enum stringLiteral {v0{multilineString: multilineString},v1{singleLineString: singleLineString},}

struct null {SINGLE_LINE_STRING_SQ_MID_MID: Token,expression: expression}

struct null {SINGLE_LINE_STRING_SQ_BEGIN_MID: Token,expression: expression,null: Vec<null>,SINGLE_LINE_STRING_SQ_MID_END: Token}

struct null {SINGLE_LINE_STRING_DQ_MID_MID: Token,expression: expression}

struct null {SINGLE_LINE_STRING_DQ_BEGIN_MID: Token,expression: expression,null: Vec<null>,SINGLE_LINE_STRING_DQ_MID_END: Token}

enum singleLineString {v0{RAW_SINGLE_LINE_STRING: Token},v1{SINGLE_LINE_STRING_SQ_BEGIN_END: Token},v2{null: null},v3{SINGLE_LINE_STRING_DQ_BEGIN_END: Token},v4{null: null},}

struct RAW_SINGLE_LINE_STRINGv0r {rToken: Token,\'Token: Token,null: Vec<Token>,\'Token: Token}

struct RAW_SINGLE_LINE_STRINGv1r {rToken: Token,doubleQuoteToken: Token,null: Vec<Token>,doubleQuoteToken: Token}

enum RAW_SINGLE_LINE_STRING {v0{RAW_SINGLE_LINE_STRINGv0r: RAW_SINGLE_LINE_STRINGv0r},v1{RAW_SINGLE_LINE_STRINGv1r: RAW_SINGLE_LINE_STRINGv1r},}

struct STRING_CONTENT_COMMONv2\\ {\\Token: Token,null: Token}

enum STRING_CONTENT_COMMON {v0{null: Token},v1{ESCAPE_SEQUENCE: Token},v2{STRING_CONTENT_COMMONv2\\: STRING_CONTENT_COMMONv2\\},v3{SIMPLE_STRING_INTERPOLATION: Token},}

enum STRING_CONTENT_SQ {v0{STRING_CONTENT_COMMON: Token},v1{doubleQuoteToken: Token},}

struct SINGLE_LINE_STRING_SQ_BEGIN_END {\'Token: Token,STRING_CONTENT_SQ: Vec<Token>,\'Token: Token}

struct SINGLE_LINE_STRING_SQ_BEGIN_MID {\'Token: Token,STRING_CONTENT_SQ: Vec<Token>,interpolationStartToken: Token}

struct SINGLE_LINE_STRING_SQ_MID_MID {closeCurlyBracketToken: Token,STRING_CONTENT_SQ: Vec<Token>,interpolationStartToken: Token}

struct SINGLE_LINE_STRING_SQ_MID_END {closeCurlyBracketToken: Token,STRING_CONTENT_SQ: Vec<Token>,\'Token: Token}

enum STRING_CONTENT_DQ {v0{STRING_CONTENT_COMMON: Token},v1{\'Token: Token},}

struct SINGLE_LINE_STRING_DQ_BEGIN_END {doubleQuoteToken: Token,STRING_CONTENT_DQ: Vec<Token>,doubleQuoteToken: Token}

struct SINGLE_LINE_STRING_DQ_BEGIN_MID {doubleQuoteToken: Token,STRING_CONTENT_DQ: Vec<Token>,interpolationStartToken: Token}

struct SINGLE_LINE_STRING_DQ_MID_MID {closeCurlyBracketToken: Token,STRING_CONTENT_DQ: Vec<Token>,interpolationStartToken: Token}

struct SINGLE_LINE_STRING_DQ_MID_END {closeCurlyBracketToken: Token,STRING_CONTENT_DQ: Vec<Token>,doubleQuoteToken: Token}

struct null {MULTI_LINE_STRING_SQ_MID_MID: Token,expression: expression}

struct null {MULTI_LINE_STRING_SQ_BEGIN_MID: Token,expression: expression,null: Vec<null>,MULTI_LINE_STRING_SQ_MID_END: Token}

struct null {MULTI_LINE_STRING_DQ_MID_MID: Token,expression: expression}

struct null {MULTI_LINE_STRING_DQ_BEGIN_MID: Token,expression: expression,null: Vec<null>,MULTI_LINE_STRING_DQ_MID_END: Token}

enum multilineString {v0{RAW_MULTI_LINE_STRING: Token},v1{MULTI_LINE_STRING_SQ_BEGIN_END: Token},v2{null: null},v3{MULTI_LINE_STRING_DQ_BEGIN_END: Token},v4{null: null},}

struct RAW_MULTI_LINE_STRINGv0r {rToken: Token,\'\'\'Token: Token,ANY,\'\'\'Token: Token}

struct RAW_MULTI_LINE_STRINGv1r {rToken: Token,tripleDoubleQuotesToken: Token,ANY,tripleDoubleQuotesToken: Token}

enum RAW_MULTI_LINE_STRING {v0{RAW_MULTI_LINE_STRINGv0r: RAW_MULTI_LINE_STRINGv0r},v1{RAW_MULTI_LINE_STRINGv1r: RAW_MULTI_LINE_STRINGv1r},}

enum QUOTES_SQ {\'Token,\'\'Token,}

enum null {v0{STRING_CONTENT_COMMON: Token},v1{doubleQuoteToken: Token},v2{\rToken: Token},v3{\nToken: Token},}

struct STRING_CONTENT_TSQ {QUOTES_SQ: Option<Token>,null: null}

struct MULTI_LINE_STRING_SQ_BEGIN_END {\'\'\'Token: Token,STRING_CONTENT_TSQ: Vec<Token>,\'\'\'Token: Token}

struct MULTI_LINE_STRING_SQ_BEGIN_MID {\'\'\'Token: Token,STRING_CONTENT_TSQ: Vec<Token>,QUOTES_SQ: Option<Token>,interpolationStartToken: Token}

struct MULTI_LINE_STRING_SQ_MID_MID {closeCurlyBracketToken: Token,STRING_CONTENT_TSQ: Vec<Token>,QUOTES_SQ: Option<Token>,interpolationStartToken: Token}

struct MULTI_LINE_STRING_SQ_MID_END {closeCurlyBracketToken: Token,STRING_CONTENT_TSQ: Vec<Token>,\'\'\'Token: Token}

enum QUOTES_DQ {doubleQuoteToken,tqoDoubleQuotesToken,}

enum null {v0{STRING_CONTENT_COMMON: Token},v1{\'Token: Token},v2{\rToken: Token},v3{\nToken: Token},}

struct STRING_CONTENT_TDQ {QUOTES_DQ: Option<Token>,null: null}

struct MULTI_LINE_STRING_DQ_BEGIN_END {tripleDoubleQuotesToken: Token,STRING_CONTENT_TDQ: Vec<Token>,tripleDoubleQuotesToken: Token}

struct MULTI_LINE_STRING_DQ_BEGIN_MID {tripleDoubleQuotesToken: Token,STRING_CONTENT_TDQ: Vec<Token>,QUOTES_DQ: Option<Token>,interpolationStartToken: Token}

struct MULTI_LINE_STRING_DQ_MID_MID {closeCurlyBracketToken: Token,STRING_CONTENT_TDQ: Vec<Token>,QUOTES_DQ: Option<Token>,interpolationStartToken: Token}

struct MULTI_LINE_STRING_DQ_MID_END {closeCurlyBracketToken: Token,STRING_CONTENT_TDQ: Vec<Token>,tripleDoubleQuotesToken: Token}

struct ESCAPE_SEQUENCEv6\x {\xToken: Token,HEX_DIGIT: Token,HEX_DIGIT: Token}

struct ESCAPE_SEQUENCEv7\u {\uToken: Token,HEX_DIGIT: Token,HEX_DIGIT: Token,HEX_DIGIT: Token,HEX_DIGIT: Token}

struct ESCAPE_SEQUENCEv8\u{ {\u{Token: Token,HEX_DIGIT_SEQUENCE: Token,closeCurlyBracketToken: Token}

enum ESCAPE_SEQUENCE {v0{\nToken: Token},v1{\rToken: Token},v2{\fToken: Token},v3{\bToken: Token},v4{\tToken: Token},v5{\vToken: Token},v6{ESCAPE_SEQUENCEv6\x: ESCAPE_SEQUENCEv6\x},v7{ESCAPE_SEQUENCEv7\u: ESCAPE_SEQUENCEv7\u},v8{ESCAPE_SEQUENCEv8\u{: ESCAPE_SEQUENCEv8\u{},}

struct HEX_DIGIT_SEQUENCE {HEX_DIGIT: Token,HEX_DIGIT: Option<Token>,HEX_DIGIT: Option<Token>,HEX_DIGIT: Option<Token>,HEX_DIGIT: Option<Token>,HEX_DIGIT: Option<Token>}

enum NEWLINE {\nToken,\rToken,\r\nToken,}

struct stringInterpolationv1${ {interpolationStartToken: Token,expression: expression,closeCurlyBracketToken: Token}

enum stringInterpolation {v0{SIMPLE_STRING_INTERPOLATION: Token},v1{stringInterpolationv1${: stringInterpolationv1${},}

enum null {v0{IDENTIFIER_NO_DOLLAR: Token},v1{BUILT_IN_IDENTIFIER: Token},v2{thisToken: Token},}

struct SIMPLE_STRING_INTERPOLATION {dollarToken: Token,null: null}

struct null {periodToken: Token,identifier: identifier}

struct null {identifier: identifier,null: Vec<null>}

enum null {v0{null: null},v1{operator: operator},v2{voidToken: Token},}

struct symbolLiteral {hashToken: Token,null: null}

struct listLiteral {constToken: Option<Token>,typeArguments: Option<typeArguments>,openSquareBracketToken: Token,elements: Option<elements>,closeSquareBracketToken: Token}

struct setOrMapLiteral {constToken: Option<Token>,typeArguments: Option<typeArguments>,openCurlyBracketToken: Token,elements: Option<elements>,closeCurlyBracketToken: Token}

struct elements, {commaToken: Token,element: element}

struct elements {element: element,elements,: Vec<elements,>,commaToken: Option<Token>}

enum element {v0{expressionElement: expressionElement},v1{mapElement: mapElement},v2{spreadElement: spreadElement},v3{ifElement: ifElement},v4{forElement: forElement},}

struct mapElement {expression: expression,colonToken: Token,expression: expression}

enum null {pointsExpandToken,pointsExpandQuestionToken,}

struct spreadElement {null: null,expression: expression}

struct ifElementelse {elseToken: Token,element: element}

struct ifElement {ifToken: Token,openParenToken: Token,expression: expression,closeParenToken: Token,element: element,ifElementelse: Option<ifElementelse>}

struct forElement {awaitToken: Option<Token>,forToken: Token,openParenToken: Token,forLoopParts: forLoopParts,closeParenToken: Token,element: element}

struct throwExpression {throwToken: Token,expression: expression}

struct throwExpressionWithoutCascade {throwToken: Token,expressionWithoutCascade: expressionWithoutCascade}

struct functionExpression {formalParameterPart: formalParameterPart,functionExpressionBody: functionExpressionBody}

struct functionExpressionBodyv0=> {asyncToken: Option<Token>,arrowToken: Token,expression: expression}

struct nullv0async {asyncToken: Token,asteriskToken: Option<Token>}

enum nullv1Enum {syncToken,asteriskToken,}

enum null {v0{nullv0async: nullv0async},v1{nullv1Enum: nullv1Enum},}

struct null {null: Option<null>,block: block}

enum functionExpressionBody {v0{functionExpressionBodyv0=>: functionExpressionBodyv0=>},v1{null: null},}

struct newExpression {newToken: Token,constructorDesignation: constructorDesignation,arguments: arguments}

struct constObjectExpression {constToken: Token,constructorDesignation: constructorDesignation,arguments: arguments}

struct null {argumentList: argumentList,commaToken: Option<Token>}

struct arguments {openParenToken: Token,null: Option<null>,closeParenToken: Token}

struct null {commaToken: Token,namedArgument: namedArgument}

struct null {namedArgument: namedArgument,null: Vec<null>}

struct null {commaToken: Token,namedArgument: namedArgument}

struct null {expressionList: expressionList,null: Vec<null>}

enum argumentList {v0{null: null},v1{null: null},}

struct namedArgument {label: label,expression: expression}

struct cascadev0.. {cascade: cascade,pointsIdToken: Token,cascadeSection: cascadeSection}

enum null {pointsIdQuestionToken,pointsIdToken,}

struct null {conditionalExpression: conditionalExpression,null: null,cascadeSection: cascadeSection}

enum cascade {v0{cascadev0..: cascadev0..},v1{null: null},}

struct cascadeSection {cascadeSelector: cascadeSelector,cascadeSectionTail: cascadeSectionTail}

struct cascadeSelectorv0[ {openSquareBracketToken: Token,expression: expression,closeSquareBracketToken: Token}

enum cascadeSelector {v0{cascadeSelectorv0[: cascadeSelectorv0[},v1{identifier: identifier},}

struct null {assignableSelector: assignableSelector,cascadeAssignment: cascadeAssignment}

struct null {selector: Vec<selector>,null: Option<null>}

enum cascadeSectionTail {v0{cascadeAssignment: cascadeAssignment},v1{null: null},}

struct cascadeAssignment {assignmentOperator: assignmentOperator,expressionWithoutCascade: expressionWithoutCascade}

enum assignmentOperator {v0{equalToken: Token},v1{compoundAssignmentOperator: compoundAssignmentOperator},}

enum compoundAssignmentOperator {timesEqualToken,divEqualToken,EqualToken,moduleEqualToken,plusEqualToken,minusEqualToken,<<=Token,>>>=Token,>>=Token,bitAndEuqalToken,bitNegEqualToken,bitOrEqualToken,questionQuestionEqualToken,}

struct conditionalExpression? {questionToken: Token,expressionWithoutCascade: expressionWithoutCascade,colonToken: Token,expressionWithoutCascade: expressionWithoutCascade}

struct conditionalExpression {ifNullExpression: ifNullExpression,conditionalExpression?: Option<conditionalExpression?>}

struct ifNullExpression?? {questionQuestionToken: Token,logicalOrExpression: logicalOrExpression}

struct ifNullExpression {logicalOrExpression: logicalOrExpression,ifNullExpression??: Vec<ifNullExpression??>}

struct logicalOrExpression|| {orToken: Token,logicalAndExpression: logicalAndExpression}

struct logicalOrExpression {logicalAndExpression: logicalAndExpression,logicalOrExpression||: Vec<logicalOrExpression||>}

struct logicalAndExpression&& {andToken: Token,equalityExpression: equalityExpression}

struct logicalAndExpression {equalityExpression: equalityExpression,logicalAndExpression&&: Vec<logicalAndExpression&&>}

struct null {equalityOperator: equalityOperator,relationalExpression: relationalExpression}

struct null {relationalExpression: relationalExpression,null: Option<null>}

struct equalityExpressionv1super {superToken: Token,equalityOperator: equalityOperator,relationalExpression: relationalExpression}

enum equalityExpression {v0{null: null},v1{equalityExpressionv1super: equalityExpressionv1super},}

enum equalityOperator {doubleEqualToken,notEqualToken,}

struct null {relationalOperator: relationalOperator,bitwiseOrExpression: bitwiseOrExpression}

enum null {v0{typeTest: typeTest},v1{typeCast: typeCast},v2{null: null},}

struct null {bitwiseOrExpression: bitwiseOrExpression,null: Option<null>}

struct relationalExpressionv1super {superToken: Token,relationalOperator: relationalOperator,bitwiseOrExpression: bitwiseOrExpression}

enum relationalExpression {v0{null: null},v1{relationalExpressionv1super: relationalExpressionv1super},}

enum relationalOperator {moreOrEqualToken,moreToken,lessOrEqualToken,lessToken,}

struct null {bitOrToken: Token,bitwiseXorExpression: bitwiseXorExpression}

struct null {bitwiseXorExpression: bitwiseXorExpression,null: Vec<null>}

struct null {bitOrToken: Token,bitwiseXorExpression: bitwiseXorExpression}

struct bitwiseOrExpressionv1super {superToken: Token,null: Vec<null>}

enum bitwiseOrExpression {v0{null: null},v1{bitwiseOrExpressionv1super: bitwiseOrExpressionv1super},}

struct null {bitNegToken: Token,bitwiseAndExpression: bitwiseAndExpression}

struct null {bitwiseAndExpression: bitwiseAndExpression,null: Vec<null>}

struct null {bitNegToken: Token,bitwiseAndExpression: bitwiseAndExpression}

struct bitwiseXorExpressionv1super {superToken: Token,null: Vec<null>}

enum bitwiseXorExpression {v0{null: null},v1{bitwiseXorExpressionv1super: bitwiseXorExpressionv1super},}

struct null {bitAndToken: Token,shiftExpression: shiftExpression}

struct null {shiftExpression: shiftExpression,null: Vec<null>}

struct null {bitAndToken: Token,shiftExpression: shiftExpression}

struct bitwiseAndExpressionv1super {superToken: Token,null: Vec<null>}

enum bitwiseAndExpression {v0{null: null},v1{bitwiseAndExpressionv1super: bitwiseAndExpressionv1super},}

enum bitwiseOperator {bitAndToken,bitNegToken,bitOrToken,}

struct null {shiftOperator: shiftOperator,additiveExpression: additiveExpression}

struct null {additiveExpression: additiveExpression,null: Vec<null>}

struct null {shiftOperator: shiftOperator,additiveExpression: additiveExpression}

struct shiftExpressionv1super {superToken: Token,null: Vec<null>}

enum shiftExpression {v0{null: null},v1{shiftExpressionv1super: shiftExpressionv1super},}

enum shiftOperator {bitLeftToken,bitRight0Token,bitRightToken,}

struct null {additiveOperator: additiveOperator,multiplicativeExpression: multiplicativeExpression}

struct null {multiplicativeExpression: multiplicativeExpression,null: Vec<null>}

struct null {additiveOperator: additiveOperator,multiplicativeExpression: multiplicativeExpression}

struct additiveExpressionv1super {superToken: Token,null: Vec<null>}

enum additiveExpression {v0{null: null},v1{additiveExpressionv1super: additiveExpressionv1super},}

enum additiveOperator {plusToken,minusToken,}

struct null {multiplicativeOperator: multiplicativeOperator,unaryExpression: unaryExpression}

struct null {unaryExpression: unaryExpression,null: Vec<null>}

struct null {multiplicativeOperator: multiplicativeOperator,unaryExpression: unaryExpression}

struct multiplicativeExpressionv1super {superToken: Token,null: Vec<null>}

enum multiplicativeExpression {v0{null: null},v1{multiplicativeExpressionv1super: multiplicativeExpressionv1super},}

enum multiplicativeOperator {asteriskToken,divideToken,modulusToken,tildeEqualToken,}

struct null {prefixOperator: prefixOperator,unaryExpression: unaryExpression}

enum null {v0{minusOperator: minusOperator},v1{tildeOperator: tildeOperator},}

struct unaryExpressionv3super {null: null,superToken: Token}

struct null {incrementOperator: incrementOperator,assignableExpression: assignableExpression}

enum unaryExpression {v0{null: null},v1{awaitExpression: awaitExpression},v2{postfixExpression: postfixExpression},v3{unaryExpressionv3super: unaryExpressionv3super},v4{null: null},}

enum prefixOperator {v0{minusOperator: minusOperator},v1{negationOperator: negationOperator},v2{tildeOperator: tildeOperator},}

struct awaitExpression {awaitToken: Token,unaryExpression: unaryExpression}

struct null {assignableExpression: assignableExpression,postfixOperator: postfixOperator}

struct null {primary: primary,selector: Vec<selector>}

enum postfixExpression {v0{null: null},v1{null: null},}

struct constructorInvocation {typeName: typeName,typeArguments: typeArguments,periodToken: Token,identifier: identifier,arguments: arguments}

enum selector {v0{exclamationToken: Token},v1{assignableSelector: assignableSelector},v2{argumentPart: argumentPart},}

struct argumentPart {typeArguments: Option<typeArguments>,arguments: arguments}

enum incrementOperator {plusPlusToken,minusMinusToken,}

struct null {primary: primary,assignableSelectorPart: assignableSelectorPart}

struct assignableExpressionv1super {superToken: Token,unconditionalAssignableSelector: unconditionalAssignableSelector}

enum assignableExpression {v0{null: null},v1{assignableExpressionv1super: assignableExpressionv1super},v2{identifier: identifier},}

struct assignableSelectorPart {selector: Vec<selector>,assignableSelector: assignableSelector}

struct unconditionalAssignableSelectorv0[ {openSquareBracketToken: Token,expression: expression,closeSquareBracketToken: Token}

struct unconditionalAssignableSelectorv1. {periodToken: Token,identifier: identifier}

enum unconditionalAssignableSelector {v0{unconditionalAssignableSelectorv0[: unconditionalAssignableSelectorv0[},v1{unconditionalAssignableSelectorv1.: unconditionalAssignableSelectorv1.},}

struct assignableSelectorv1?. {questionIdToken: Token,identifier: identifier}

struct assignableSelectorv2? {questionToken: Token,openSquareBracketToken: Token,expression: expression,closeSquareBracketToken: Token}

enum assignableSelector {v0{unconditionalAssignableSelector: unconditionalAssignableSelector},v1{assignableSelectorv1?.: assignableSelectorv1?.},v2{assignableSelectorv2?: assignableSelectorv2?},}

enum identifier {v0{IDENTIFIER: Token},v1{BUILT_IN_IDENTIFIER: Token},v2{OTHER_IDENTIFIER: Token},}

enum typeIdentifier {v0{IDENTIFIER: Token},v1{OTHER_IDENTIFIER: Token},v2{dynamicToken: Token},}

struct qualifiedNamev0. {typeIdentifier: typeIdentifier,periodToken: Token,identifier: identifier}

struct qualifiedNamev1. {typeIdentifier: typeIdentifier,periodToken: Token,typeIdentifier: typeIdentifier,periodToken: Token,identifier: identifier}

enum qualifiedName {v0{qualifiedNamev0.: qualifiedNamev0.},v1{qualifiedNamev1.: qualifiedNamev1.},}

enum BUILT_IN_IDENTIFIER {abstractToken,asToken,covariantToken,deferredToken,dynamicToken,exportToken,externalToken,extensionToken,factoryToken,FunctionToken,getToken,implementsToken,importToken,interfaceToken,lateToken,libraryToken,mixinToken,operatorToken,partToken,requiredToken,setToken,staticToken,typedefToken,}

enum OTHER_IDENTIFIER {asyncToken,hideToken,ofToken,onToken,showToken,syncToken,awaitToken,yieldToken,}

struct IDENTIFIER_NO_DOLLAR {IDENTIFIER_START_NO_DOLLAR: Token,IDENTIFIER_PART_NO_DOLLAR: Vec<Token>}

enum IDENTIFIER_START_NO_DOLLAR {v0{LETTER: Token},v1{underscoreToken: Token},}

enum IDENTIFIER_PART_NO_DOLLAR {v0{IDENTIFIER_START_NO_DOLLAR: Token},v1{DIGIT: Token},}

struct IDENTIFIER {IDENTIFIER_START: Token,IDENTIFIER_PART: Vec<Token>}

enum IDENTIFIER_START {v0{IDENTIFIER_START_NO_DOLLAR: Token},v1{dollarToken: Token},}

enum IDENTIFIER_PART {v0{IDENTIFIER_START: Token},v1{DIGIT: Token},}

enum LETTER {v0{aTokenTozToken: Token},v1{ATokenToZToken: Token},}

enum WHITESPACE {v0{\tToken: Token},v1{spaceToken: Token},v2{NEWLINE: Token},}

struct typeTest {isOperator: isOperator,typeNotVoid: typeNotVoid}

struct isOperator {isToken: Token,exclamationToken: Option<Token>}

struct typeCast {asOperator: asOperator,typeNotVoid: typeNotVoid}

struct statement {label: Vec<label>,nonLabelledStatement: nonLabelledStatement}

enum nonLabelledStatement {v0{block: block},v1{localVariableDeclaration: localVariableDeclaration},v2{forStatement: forStatement},v3{whileStatement: whileStatement},v4{doStatement: doStatement},v5{switchStatement: switchStatement},v6{ifStatement: ifStatement},v7{rethrowStatement: rethrowStatement},v8{tryStatement: tryStatement},v9{breakStatement: breakStatement},v10{continueStatement: continueStatement},v11{returnStatement: returnStatement},v12{yieldStatement: yieldStatement},v13{yieldEachStatement: yieldEachStatement},v14{expressionStatement: expressionStatement},v15{assertStatement: assertStatement},v16{localFunctionDeclaration: localFunctionDeclaration},}

struct expressionStatement {expression: Option<expression>,semicolonToken: Token}

struct localVariableDeclaration {metadata: metadata,initializedVariableDeclaration: initializedVariableDeclaration,semicolonToken: Token}

struct localFunctionDeclaration {metadata: metadata,functionSignature: functionSignature,functionBody: functionBody}

struct ifStatementelse {elseToken: Token,statement: statement}

struct ifStatement {ifToken: Token,openParenToken: Token,expression: expression,closeParenToken: Token,statement: statement,ifStatementelse: Option<ifStatementelse>}

struct forStatement {awaitToken: Option<Token>,forToken: Token,openParenToken: Token,forLoopParts: forLoopParts,closeParenToken: Token,statement: statement}

struct forLoopPartsv0; {forInitializerStatement: forInitializerStatement,expression: Option<expression>,semicolonToken: Token,expressionList: Option<expressionList>}

struct forLoopPartsv1in {metadata: metadata,declaredIdentifier: declaredIdentifier,inToken: Token,expression: expression}

struct forLoopPartsv2in {identifier: identifier,inToken: Token,expression: expression}

enum forLoopParts {v0{forLoopPartsv0;: forLoopPartsv0;},v1{forLoopPartsv1in: forLoopPartsv1in},v2{forLoopPartsv2in: forLoopPartsv2in},}

struct forInitializerStatementv1; {expression: Option<expression>,semicolonToken: Token}

enum forInitializerStatement {v0{localVariableDeclaration: localVariableDeclaration},v1{forInitializerStatementv1;: forInitializerStatementv1;},}

struct whileStatement {whileToken: Token,openParenToken: Token,expression: expression,closeParenToken: Token,statement: statement}

struct doStatement {doToken: Token,statement: statement,whileToken: Token,openParenToken: Token,expression: expression,closeParenToken: Token,semicolonToken: Token}

struct switchStatement {switchToken: Token,openParenToken: Token,expression: expression,closeParenToken: Token,openCurlyBracketToken: Token,switchCase: Vec<switchCase>,defaultCase: Option<defaultCase>,closeCurlyBracketToken: Token}

struct switchCase {label: Vec<label>,caseToken: Token,expression: expression,colonToken: Token,statements: statements}

struct defaultCase {label: Vec<label>,defaultToken: Token,colonToken: Token,statements: statements}

enum rethrowStatement {rethrowToken,semicolonToken,}

struct null {onPart: Vec<onPart>,finallyPart: Option<finallyPart>}

enum null {v0{null: null},v1{finallyPart: finallyPart},}

struct tryStatement {tryToken: Token,block: block,null: null}

struct null {catchPart: catchPart,block: block}

struct onPartv1on {onToken: Token,typeNotVoid: typeNotVoid,catchPart: Option<catchPart>,block: block}

enum onPart {v0{null: null},v1{onPartv1on: onPartv1on},}

struct catchPart, {commaToken: Token,identifier: identifier}

struct catchPart {catchToken: Token,openParenToken: Token,identifier: identifier,catchPart,: Option<catchPart,>,closeParenToken: Token}

struct finallyPart {finallyToken: Token,block: block}

struct returnStatement {returnToken: Token,expression: Option<expression>,semicolonToken: Token}

struct label {identifier: identifier,colonToken: Token}

struct breakStatement {breakToken: Token,identifier: Option<identifier>,semicolonToken: Token}

struct continueStatement {continueToken: Token,identifier: Option<identifier>,semicolonToken: Token}

struct yieldStatement {yieldToken: Token,expression: expression,semicolonToken: Token}

struct yieldEachStatement {yieldToken: Token,asteriskToken: Token,expression: expression,semicolonToken: Token}

struct assertStatement {assertion: assertion,semicolonToken: Token}

struct assertion, {commaToken: Token,expression: expression}

struct assertion {assertToken: Token,openParenToken: Token,expression: expression,assertion,: Option<assertion,>,commaToken: Option<Token>,closeParenToken: Token}

struct topLevelDeclarationv5external {externalToken: Token,functionSignature: functionSignature,semicolonToken: Token}

struct topLevelDeclarationv6external {externalToken: Token,getterSignature: getterSignature,semicolonToken: Token}

struct topLevelDeclarationv7external {externalToken: Token,setterSignature: setterSignature,semicolonToken: Token}

struct null {functionSignature: functionSignature,functionBody: functionBody}

struct null {getterSignature: getterSignature,functionBody: functionBody}

struct null {setterSignature: setterSignature,functionBody: functionBody}

enum null {finalToken,constToken,}

struct topLevelDeclarationv11; {null: null,type: Option<type>,staticFinalDeclarationList: staticFinalDeclarationList,semicolonToken: Token}

struct topLevelDeclarationv12late {lateToken: Token,finalToken: Token,type: Option<type>,initializedIdentifierList: initializedIdentifierList,semicolonToken: Token}

struct topLevelDeclarationv13; {lateToken: Option<Token>,varOrType: varOrType,initializedIdentifierList: initializedIdentifierList,semicolonToken: Token}

enum topLevelDeclaration {v0{classDeclaration: classDeclaration},v1{mixinDeclaration: mixinDeclaration},v2{extensionDeclaration: extensionDeclaration},v3{enumType: enumType},v4{typeAlias: typeAlias},v5{topLevelDeclarationv5external: topLevelDeclarationv5external},v6{topLevelDeclarationv6external: topLevelDeclarationv6external},v7{topLevelDeclarationv7external: topLevelDeclarationv7external},v8{null: null},v9{null: null},v10{null: null},v11{topLevelDeclarationv11;: topLevelDeclarationv11;},v12{topLevelDeclarationv12late: topLevelDeclarationv12late},v13{topLevelDeclarationv13;: topLevelDeclarationv13;},}

struct null {metadata: metadata,topLevelDeclaration: topLevelDeclaration}

struct libraryDeclaration {scriptTag: Option<scriptTag>,libraryName: Option<libraryName>,importOrExport: Vec<importOrExport>,partDirective: Vec<partDirective>,null: Vec<null>,EOF: Token}

struct scriptTag {hashExclamationToken: Token,null: Vec<Token>,NEWLINE: Token}

struct libraryName {metadata: metadata,libraryToken: Token,dottedIdentifierList: dottedIdentifierList,semicolonToken: Token}

enum importOrExport {v0{libraryImport: libraryImport},v1{libraryExport: libraryExport},}

struct dottedIdentifierList. {periodToken: Token,identifier: identifier}

struct dottedIdentifierList {identifier: identifier,dottedIdentifierList.: Vec<dottedIdentifierList.>}

struct libraryImport {metadata: metadata,importSpecification: importSpecification}

struct importSpecificationas {deferredToken: Option<Token>,asToken: Token,identifier: identifier}

struct importSpecification {importToken: Token,configurableUri: configurableUri,importSpecificationas: Option<importSpecificationas>,combinator: Vec<combinator>,semicolonToken: Token}

struct libraryExport {metadata: metadata,exportToken: Token,configurableUri: configurableUri,combinator: Vec<combinator>,semicolonToken: Token}

struct combinatorv0show {showToken: Token,identifierList: identifierList}

struct combinatorv1hide {hideToken: Token,identifierList: identifierList}

enum combinator {v0{combinatorv0show: combinatorv0show},v1{combinatorv1hide: combinatorv1hide},}

struct identifierList, {commaToken: Token,identifier: identifier}

struct identifierList {identifier: identifier,identifierList,: Vec<identifierList,>}

struct partDirective {metadata: metadata,partToken: Token,uri: uri,semicolonToken: Token}

enum null {v0{dottedIdentifierList: dottedIdentifierList},v1{uri: uri},}

struct partHeader {metadata: metadata,partToken: Token,ofToken: Token,null: null,semicolonToken: Token}

struct null {metadata: metadata,topLevelDeclaration: topLevelDeclaration}

struct partDeclaration {partHeader: partHeader,null: Vec<null>,EOF: Token}

struct configurableUri {uri: uri,configurationUri: Vec<configurationUri>}

struct configurationUri {ifToken: Token,openParenToken: Token,uriTest: uriTest,closeParenToken: Token,uri: uri}

struct uriTest== {doubleEqualToken: Token,stringLiteral: stringLiteral}

struct uriTest {dottedIdentifierList: dottedIdentifierList,uriTest==: Option<uriTest==>}

struct null {functionType: functionType,questionToken: Option<Token>}

enum type {v0{null: null},v1{typeNotFunction: typeNotFunction},}

struct null {functionType: functionType,questionToken: Option<Token>}

enum typeNotVoid {v0{null: null},v1{typeNotVoidNotFunction: typeNotVoidNotFunction},}

enum typeNotFunction {v0{voidToken: Token},v1{typeNotVoidNotFunction: typeNotVoidNotFunction},}

struct null {typeName: typeName,typeArguments: Option<typeArguments>,questionToken: Option<Token>}

struct typeNotVoidNotFunctionv1Function {FunctionToken: Token,questionToken: Option<Token>}

enum typeNotVoidNotFunction {v0{null: null},v1{typeNotVoidNotFunctionv1Function: typeNotVoidNotFunctionv1Function},}

struct typeName. {periodToken: Token,typeIdentifier: typeIdentifier}

struct typeName {typeIdentifier: typeIdentifier,typeName.: Option<typeName.>}

struct typeArguments {lessToken: Token,typeList: typeList,moreToken: Token}

struct typeList, {commaToken: Token,type: type}

struct typeList {type: type,typeList,: Vec<typeList,>}

struct typeNotVoidNotFunctionList, {commaToken: Token,typeNotVoidNotFunction: typeNotVoidNotFunction}

struct typeNotVoidNotFunctionList {typeNotVoidNotFunction: typeNotVoidNotFunction,typeNotVoidNotFunctionList,: Vec<typeNotVoidNotFunctionList,>}

struct null {typeNotFunction: typeNotFunction,functionTypeTails: functionTypeTails}

enum functionType {v0{functionTypeTails: functionTypeTails},v1{null: null},}

struct null {functionTypeTail: functionTypeTail,questionToken: Option<Token>,functionTypeTails: functionTypeTails}

enum functionTypeTails {v0{null: null},v1{functionTypeTail: functionTypeTail},}

struct functionTypeTail {FunctionToken: Token,typeParameters: Option<typeParameters>,parameterTypeList: parameterTypeList}

enum parameterTypeListv0Enum {openParenToken,closeParenToken,}

struct parameterTypeListv1( {openParenToken: Token,normalParameterTypes: normalParameterTypes,commaToken: Token,optionalParameterTypes: optionalParameterTypes,closeParenToken: Token}

struct parameterTypeListv2( {openParenToken: Token,normalParameterTypes: normalParameterTypes,commaToken: Option<Token>,closeParenToken: Token}

struct parameterTypeListv3( {openParenToken: Token,optionalParameterTypes: optionalParameterTypes,closeParenToken: Token}

enum parameterTypeList {v0{parameterTypeListv0Enum: parameterTypeListv0Enum},v1{parameterTypeListv1(: parameterTypeListv1(},v2{parameterTypeListv2(: parameterTypeListv2(},v3{parameterTypeListv3(: parameterTypeListv3(},}

struct normalParameterTypes, {commaToken: Token,normalParameterType: normalParameterType}

struct normalParameterTypes {normalParameterType: normalParameterType,normalParameterTypes,: Vec<normalParameterTypes,>}

struct null {metadata: metadata,typedIdentifier: typedIdentifier}

struct null {metadata: metadata,type: type}

enum normalParameterType {v0{null: null},v1{null: null},}

enum optionalParameterTypes {v0{optionalPositionalParameterTypes: optionalPositionalParameterTypes},v1{namedParameterTypes: namedParameterTypes},}

struct optionalPositionalParameterTypes {openSquareBracketToken: Token,normalParameterTypes: normalParameterTypes,commaToken: Option<Token>,closeSquareBracketToken: Token}

struct namedParameterTypes, {commaToken: Token,namedParameterType: namedParameterType}

struct namedParameterTypes {openCurlyBracketToken: Token,namedParameterType: namedParameterType,namedParameterTypes,: Vec<namedParameterTypes,>,commaToken: Option<Token>,closeCurlyBracketToken: Token}

struct namedParameterType {metadata: metadata,requiredToken: Option<Token>,typedIdentifier: typedIdentifier}

struct typedIdentifier {type: type,identifier: identifier}

struct typeAliasv0typedef {typedefToken: Token,typeIdentifier: typeIdentifier,typeParameters: Option<typeParameters>,equalToken: Token,type: type,semicolonToken: Token}

struct typeAliasv1typedef {typedefToken: Token,functionTypeAlias: functionTypeAlias}

enum typeAlias {v0{typeAliasv0typedef: typeAliasv0typedef},v1{typeAliasv1typedef: typeAliasv1typedef},}

struct functionTypeAlias {functionPrefix: functionPrefix,formalParameterPart: formalParameterPart,semicolonToken: Token}

struct functionPrefix {type: Option<type>,identifier: identifier}

enum RESERVED_WORD {assertToken,breakToken,caseToken,catchToken,classToken,constToken,continueToken,defaultToken,doToken,elseToken,enumToken,extendsToken,falseToken,finalToken,finallyToken,forToken,ifToken,inToken,isToken,newToken,nullToken,rethrowToken,returnToken,superToken,switchToken,thisToken,throwToken,trueToken,tryToken,varToken,voidToken,whileToken,withToken,}

struct SINGLE_LINE_COMMENT {commentToken: Token,null: Vec<Token>,NEWLINE: Option<Token>}

enum null {v0{MULTI_LINE_COMMENT: Token},v1{null: Token},}

struct MULTI_LINE_COMMENT {commentMultilineStartToken: Token,null: Vec<null>,commentMultilineEndToken: Token}

enum COMMENT {v0{SINGLE_LINE_COMMENT: Token},v1{MULTI_LINE_COMMENT: Token},}