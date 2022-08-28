// Generated from /Users/juanmanuelcastillo/Desktop/flutter/dart_fixer_test/lib/Dart.g by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { DartListener } from "./DartListener";
import { DartVisitor } from "./DartVisitor";


export class DartParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly ASSERT = 52;
	public static readonly BREAK = 53;
	public static readonly CASE = 54;
	public static readonly CATCH = 55;
	public static readonly CLASS = 56;
	public static readonly CONST = 57;
	public static readonly CONTINUE = 58;
	public static readonly DEFAULT = 59;
	public static readonly DO = 60;
	public static readonly ELSE = 61;
	public static readonly ENUM = 62;
	public static readonly EXTENDS = 63;
	public static readonly FALSE = 64;
	public static readonly FINAL = 65;
	public static readonly FINALLY = 66;
	public static readonly FOR = 67;
	public static readonly IF = 68;
	public static readonly IN = 69;
	public static readonly IS = 70;
	public static readonly NEW = 71;
	public static readonly NULL = 72;
	public static readonly RETHROW = 73;
	public static readonly RETURN = 74;
	public static readonly SUPER = 75;
	public static readonly SWITCH = 76;
	public static readonly THIS = 77;
	public static readonly THROW = 78;
	public static readonly TRUE = 79;
	public static readonly TRY = 80;
	public static readonly VAR = 81;
	public static readonly VOID = 82;
	public static readonly WHILE = 83;
	public static readonly WITH = 84;
	public static readonly ABSTRACT = 85;
	public static readonly AS = 86;
	public static readonly COVARIANT = 87;
	public static readonly DEFERRED = 88;
	public static readonly DYNAMIC = 89;
	public static readonly EXPORT = 90;
	public static readonly EXTENSION = 91;
	public static readonly EXTERNAL = 92;
	public static readonly FACTORY = 93;
	public static readonly FUNCTION = 94;
	public static readonly GET = 95;
	public static readonly IMPLEMENTS = 96;
	public static readonly IMPORT = 97;
	public static readonly INTERFACE = 98;
	public static readonly LATE = 99;
	public static readonly LIBRARY = 100;
	public static readonly OPERATOR = 101;
	public static readonly MIXIN = 102;
	public static readonly PART = 103;
	public static readonly REQUIRED = 104;
	public static readonly SET = 105;
	public static readonly STATIC = 106;
	public static readonly TYPEDEF = 107;
	public static readonly AWAIT = 108;
	public static readonly YIELD = 109;
	public static readonly ASYNC = 110;
	public static readonly HIDE = 111;
	public static readonly OF = 112;
	public static readonly ON = 113;
	public static readonly SHOW = 114;
	public static readonly SYNC = 115;
	public static readonly NUMBER = 116;
	public static readonly HEX_NUMBER = 117;
	public static readonly RAW_SINGLE_LINE_STRING = 118;
	public static readonly RAW_MULTI_LINE_STRING = 119;
	public static readonly SINGLE_LINE_STRING_SQ_BEGIN_END = 120;
	public static readonly SINGLE_LINE_STRING_SQ_BEGIN_MID = 121;
	public static readonly SINGLE_LINE_STRING_SQ_MID_MID = 122;
	public static readonly SINGLE_LINE_STRING_SQ_MID_END = 123;
	public static readonly SINGLE_LINE_STRING_DQ_BEGIN_END = 124;
	public static readonly SINGLE_LINE_STRING_DQ_BEGIN_MID = 125;
	public static readonly SINGLE_LINE_STRING_DQ_MID_MID = 126;
	public static readonly SINGLE_LINE_STRING_DQ_MID_END = 127;
	public static readonly MULTI_LINE_STRING_SQ_BEGIN_END = 128;
	public static readonly MULTI_LINE_STRING_SQ_BEGIN_MID = 129;
	public static readonly MULTI_LINE_STRING_SQ_MID_MID = 130;
	public static readonly MULTI_LINE_STRING_SQ_MID_END = 131;
	public static readonly MULTI_LINE_STRING_DQ_BEGIN_END = 132;
	public static readonly MULTI_LINE_STRING_DQ_BEGIN_MID = 133;
	public static readonly MULTI_LINE_STRING_DQ_MID_MID = 134;
	public static readonly MULTI_LINE_STRING_DQ_MID_END = 135;
	public static readonly LBRACE = 136;
	public static readonly RBRACE = 137;
	public static readonly SCRIPT_TAG = 138;
	public static readonly IDENTIFIER = 139;
	public static readonly SINGLE_LINE_COMMENT = 140;
	public static readonly MULTI_LINE_COMMENT = 141;
	public static readonly FEFF = 142;
	public static readonly WS = 143;
	public static readonly RULE_libraryDefinition = 0;
	public static readonly RULE_topLevelDefinition = 1;
	public static readonly RULE_declaredIdentifier = 2;
	public static readonly RULE_finalConstVarOrType = 3;
	public static readonly RULE_finalVarOrType = 4;
	public static readonly RULE_varOrType = 5;
	public static readonly RULE_initializedIdentifier = 6;
	public static readonly RULE_initializedIdentifierList = 7;
	public static readonly RULE_functionSignature = 8;
	public static readonly RULE_functionBodyPrefix = 9;
	public static readonly RULE_functionBody = 10;
	public static readonly RULE_block = 11;
	public static readonly RULE_formalParameterPart = 12;
	public static readonly RULE_formalParameterList = 13;
	public static readonly RULE_normalFormalParameters = 14;
	public static readonly RULE_optionalOrNamedFormalParameters = 15;
	public static readonly RULE_optionalPositionalFormalParameters = 16;
	public static readonly RULE_namedFormalParameters = 17;
	public static readonly RULE_normalFormalParameter = 18;
	public static readonly RULE_normalFormalParameterNoMetadata = 19;
	public static readonly RULE_functionFormalParameter = 20;
	public static readonly RULE_simpleFormalParameter = 21;
	public static readonly RULE_fieldFormalParameter = 22;
	public static readonly RULE_defaultFormalParameter = 23;
	public static readonly RULE_defaultNamedParameter = 24;
	public static readonly RULE_typeWithParameters = 25;
	public static readonly RULE_classDeclaration = 26;
	public static readonly RULE_superclass = 27;
	public static readonly RULE_mixins = 28;
	public static readonly RULE_interfaces = 29;
	public static readonly RULE_classMemberDefinition = 30;
	public static readonly RULE_mixinApplicationClass = 31;
	public static readonly RULE_mixinDeclaration = 32;
	public static readonly RULE_mixinMemberDefinition = 33;
	public static readonly RULE_extensionDeclaration = 34;
	public static readonly RULE_extensionMemberDefinition = 35;
	public static readonly RULE_methodSignature = 36;
	public static readonly RULE_declaration = 37;
	public static readonly RULE_staticFinalDeclarationList = 38;
	public static readonly RULE_staticFinalDeclaration = 39;
	public static readonly RULE_operatorSignature = 40;
	public static readonly RULE_operator = 41;
	public static readonly RULE_binaryOperator = 42;
	public static readonly RULE_getterSignature = 43;
	public static readonly RULE_setterSignature = 44;
	public static readonly RULE_constructorSignature = 45;
	public static readonly RULE_constructorName = 46;
	public static readonly RULE_redirection = 47;
	public static readonly RULE_initializers = 48;
	public static readonly RULE_initializerListEntry = 49;
	public static readonly RULE_fieldInitializer = 50;
	public static readonly RULE_initializerExpression = 51;
	public static readonly RULE_factoryConstructorSignature = 52;
	public static readonly RULE_redirectingFactoryConstructorSignature = 53;
	public static readonly RULE_constantConstructorSignature = 54;
	public static readonly RULE_mixinApplication = 55;
	public static readonly RULE_enumType = 56;
	public static readonly RULE_enumEntry = 57;
	public static readonly RULE_typeParameter = 58;
	public static readonly RULE_typeParameters = 59;
	public static readonly RULE_metadata = 60;
	public static readonly RULE_metadatum = 61;
	public static readonly RULE_expression = 62;
	public static readonly RULE_expressionWithoutCascade = 63;
	public static readonly RULE_expressionList = 64;
	public static readonly RULE_primary = 65;
	public static readonly RULE_constructorInvocation = 66;
	public static readonly RULE_literal = 67;
	public static readonly RULE_nullLiteral = 68;
	public static readonly RULE_numericLiteral = 69;
	public static readonly RULE_booleanLiteral = 70;
	public static readonly RULE_stringLiteral = 71;
	public static readonly RULE_stringLiteralWithoutInterpolation = 72;
	public static readonly RULE_setOrMapLiteral = 73;
	public static readonly RULE_listLiteral = 74;
	public static readonly RULE_elements = 75;
	public static readonly RULE_element = 76;
	public static readonly RULE_expressionElement = 77;
	public static readonly RULE_mapElement = 78;
	public static readonly RULE_spreadElement = 79;
	public static readonly RULE_ifElement = 80;
	public static readonly RULE_forElement = 81;
	public static readonly RULE_constructorTearoff = 82;
	public static readonly RULE_throwExpression = 83;
	public static readonly RULE_throwExpressionWithoutCascade = 84;
	public static readonly RULE_functionExpression = 85;
	public static readonly RULE_functionExpressionBody = 86;
	public static readonly RULE_functionExpressionBodyPrefix = 87;
	public static readonly RULE_functionExpressionWithoutCascade = 88;
	public static readonly RULE_functionExpressionWithoutCascadeBody = 89;
	public static readonly RULE_functionPrimary = 90;
	public static readonly RULE_functionPrimaryBody = 91;
	public static readonly RULE_functionPrimaryBodyPrefix = 92;
	public static readonly RULE_thisExpression = 93;
	public static readonly RULE_newExpression = 94;
	public static readonly RULE_constObjectExpression = 95;
	public static readonly RULE_arguments = 96;
	public static readonly RULE_argumentList = 97;
	public static readonly RULE_namedArgument = 98;
	public static readonly RULE_cascade = 99;
	public static readonly RULE_cascadeSection = 100;
	public static readonly RULE_cascadeSelector = 101;
	public static readonly RULE_cascadeSectionTail = 102;
	public static readonly RULE_cascadeAssignment = 103;
	public static readonly RULE_assignmentOperator = 104;
	public static readonly RULE_compoundAssignmentOperator = 105;
	public static readonly RULE_conditionalExpression = 106;
	public static readonly RULE_ifNullExpression = 107;
	public static readonly RULE_logicalOrExpression = 108;
	public static readonly RULE_logicalAndExpression = 109;
	public static readonly RULE_equalityExpression = 110;
	public static readonly RULE_equalityOperator = 111;
	public static readonly RULE_relationalExpression = 112;
	public static readonly RULE_relationalOperator = 113;
	public static readonly RULE_bitwiseOrExpression = 114;
	public static readonly RULE_bitwiseXorExpression = 115;
	public static readonly RULE_bitwiseAndExpression = 116;
	public static readonly RULE_bitwiseOperator = 117;
	public static readonly RULE_shiftExpression = 118;
	public static readonly RULE_shiftOperator = 119;
	public static readonly RULE_additiveExpression = 120;
	public static readonly RULE_additiveOperator = 121;
	public static readonly RULE_multiplicativeExpression = 122;
	public static readonly RULE_multiplicativeOperator = 123;
	public static readonly RULE_unaryExpression = 124;
	public static readonly RULE_prefixOperator = 125;
	public static readonly RULE_minusOperator = 126;
	public static readonly RULE_negationOperator = 127;
	public static readonly RULE_tildeOperator = 128;
	public static readonly RULE_awaitExpression = 129;
	public static readonly RULE_postfixExpression = 130;
	public static readonly RULE_postfixOperator = 131;
	public static readonly RULE_selector = 132;
	public static readonly RULE_argumentPart = 133;
	public static readonly RULE_incrementOperator = 134;
	public static readonly RULE_assignableExpression = 135;
	public static readonly RULE_assignableSelectorPart = 136;
	public static readonly RULE_unconditionalAssignableSelector = 137;
	public static readonly RULE_assignableSelector = 138;
	public static readonly RULE_identifierNotFUNCTION = 139;
	public static readonly RULE_identifier = 140;
	public static readonly RULE_qualifiedName = 141;
	public static readonly RULE_typeIdentifier = 142;
	public static readonly RULE_typeTest = 143;
	public static readonly RULE_isOperator = 144;
	public static readonly RULE_typeCast = 145;
	public static readonly RULE_asOperator = 146;
	public static readonly RULE_statements = 147;
	public static readonly RULE_statement = 148;
	public static readonly RULE_nonLabelledStatement = 149;
	public static readonly RULE_expressionStatement = 150;
	public static readonly RULE_localVariableDeclaration = 151;
	public static readonly RULE_initializedVariableDeclaration = 152;
	public static readonly RULE_localFunctionDeclaration = 153;
	public static readonly RULE_ifStatement = 154;
	public static readonly RULE_forStatement = 155;
	public static readonly RULE_forLoopParts = 156;
	public static readonly RULE_forInitializerStatement = 157;
	public static readonly RULE_whileStatement = 158;
	public static readonly RULE_doStatement = 159;
	public static readonly RULE_switchStatement = 160;
	public static readonly RULE_switchCase = 161;
	public static readonly RULE_defaultCase = 162;
	public static readonly RULE_rethrowStatement = 163;
	public static readonly RULE_tryStatement = 164;
	public static readonly RULE_onPart = 165;
	public static readonly RULE_onParts = 166;
	public static readonly RULE_catchPart = 167;
	public static readonly RULE_finallyPart = 168;
	public static readonly RULE_returnStatement = 169;
	public static readonly RULE_label = 170;
	public static readonly RULE_breakStatement = 171;
	public static readonly RULE_continueStatement = 172;
	public static readonly RULE_yieldStatement = 173;
	public static readonly RULE_yieldEachStatement = 174;
	public static readonly RULE_assertStatement = 175;
	public static readonly RULE_assertion = 176;
	public static readonly RULE_libraryName = 177;
	public static readonly RULE_dottedIdentifierList = 178;
	public static readonly RULE_importOrExport = 179;
	public static readonly RULE_libraryImport = 180;
	public static readonly RULE_importSpecification = 181;
	public static readonly RULE_combinator = 182;
	public static readonly RULE_identifierList = 183;
	public static readonly RULE_libraryExport = 184;
	public static readonly RULE_partDirective = 185;
	public static readonly RULE_partHeader = 186;
	public static readonly RULE_partDeclaration = 187;
	public static readonly RULE_uri = 188;
	public static readonly RULE_configurableUri = 189;
	public static readonly RULE_configurationUri = 190;
	public static readonly RULE_uriTest = 191;
	public static readonly RULE_type = 192;
	public static readonly RULE_typeNotVoid = 193;
	public static readonly RULE_typeNotFunction = 194;
	public static readonly RULE_typeNotVoidNotFunction = 195;
	public static readonly RULE_typeName = 196;
	public static readonly RULE_typeArguments = 197;
	public static readonly RULE_typeList = 198;
	public static readonly RULE_typeNotVoidNotFunctionList = 199;
	public static readonly RULE_typeAlias = 200;
	public static readonly RULE_functionTypeAlias = 201;
	public static readonly RULE_functionPrefix = 202;
	public static readonly RULE_functionTypeTail = 203;
	public static readonly RULE_functionTypeTails = 204;
	public static readonly RULE_functionType = 205;
	public static readonly RULE_parameterTypeList = 206;
	public static readonly RULE_normalParameterTypes = 207;
	public static readonly RULE_normalParameterType = 208;
	public static readonly RULE_optionalParameterTypes = 209;
	public static readonly RULE_optionalPositionalParameterTypes = 210;
	public static readonly RULE_namedParameterTypes = 211;
	public static readonly RULE_namedParameterType = 212;
	public static readonly RULE_typedIdentifier = 213;
	public static readonly RULE_constructorDesignation = 214;
	public static readonly RULE_symbolLiteral = 215;
	public static readonly RULE_singleStringWithoutInterpolation = 216;
	public static readonly RULE_singleLineString = 217;
	public static readonly RULE_multiLineString = 218;
	public static readonly RULE_reservedWord = 219;
	public static readonly RULE_builtInIdentifier = 220;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"libraryDefinition", "topLevelDefinition", "declaredIdentifier", "finalConstVarOrType", 
		"finalVarOrType", "varOrType", "initializedIdentifier", "initializedIdentifierList", 
		"functionSignature", "functionBodyPrefix", "functionBody", "block", "formalParameterPart", 
		"formalParameterList", "normalFormalParameters", "optionalOrNamedFormalParameters", 
		"optionalPositionalFormalParameters", "namedFormalParameters", "normalFormalParameter", 
		"normalFormalParameterNoMetadata", "functionFormalParameter", "simpleFormalParameter", 
		"fieldFormalParameter", "defaultFormalParameter", "defaultNamedParameter", 
		"typeWithParameters", "classDeclaration", "superclass", "mixins", "interfaces", 
		"classMemberDefinition", "mixinApplicationClass", "mixinDeclaration", 
		"mixinMemberDefinition", "extensionDeclaration", "extensionMemberDefinition", 
		"methodSignature", "declaration", "staticFinalDeclarationList", "staticFinalDeclaration", 
		"operatorSignature", "operator", "binaryOperator", "getterSignature", 
		"setterSignature", "constructorSignature", "constructorName", "redirection", 
		"initializers", "initializerListEntry", "fieldInitializer", "initializerExpression", 
		"factoryConstructorSignature", "redirectingFactoryConstructorSignature", 
		"constantConstructorSignature", "mixinApplication", "enumType", "enumEntry", 
		"typeParameter", "typeParameters", "metadata", "metadatum", "expression", 
		"expressionWithoutCascade", "expressionList", "primary", "constructorInvocation", 
		"literal", "nullLiteral", "numericLiteral", "booleanLiteral", "stringLiteral", 
		"stringLiteralWithoutInterpolation", "setOrMapLiteral", "listLiteral", 
		"elements", "element", "expressionElement", "mapElement", "spreadElement", 
		"ifElement", "forElement", "constructorTearoff", "throwExpression", "throwExpressionWithoutCascade", 
		"functionExpression", "functionExpressionBody", "functionExpressionBodyPrefix", 
		"functionExpressionWithoutCascade", "functionExpressionWithoutCascadeBody", 
		"functionPrimary", "functionPrimaryBody", "functionPrimaryBodyPrefix", 
		"thisExpression", "newExpression", "constObjectExpression", "arguments", 
		"argumentList", "namedArgument", "cascade", "cascadeSection", "cascadeSelector", 
		"cascadeSectionTail", "cascadeAssignment", "assignmentOperator", "compoundAssignmentOperator", 
		"conditionalExpression", "ifNullExpression", "logicalOrExpression", "logicalAndExpression", 
		"equalityExpression", "equalityOperator", "relationalExpression", "relationalOperator", 
		"bitwiseOrExpression", "bitwiseXorExpression", "bitwiseAndExpression", 
		"bitwiseOperator", "shiftExpression", "shiftOperator", "additiveExpression", 
		"additiveOperator", "multiplicativeExpression", "multiplicativeOperator", 
		"unaryExpression", "prefixOperator", "minusOperator", "negationOperator", 
		"tildeOperator", "awaitExpression", "postfixExpression", "postfixOperator", 
		"selector", "argumentPart", "incrementOperator", "assignableExpression", 
		"assignableSelectorPart", "unconditionalAssignableSelector", "assignableSelector", 
		"identifierNotFUNCTION", "identifier", "qualifiedName", "typeIdentifier", 
		"typeTest", "isOperator", "typeCast", "asOperator", "statements", "statement", 
		"nonLabelledStatement", "expressionStatement", "localVariableDeclaration", 
		"initializedVariableDeclaration", "localFunctionDeclaration", "ifStatement", 
		"forStatement", "forLoopParts", "forInitializerStatement", "whileStatement", 
		"doStatement", "switchStatement", "switchCase", "defaultCase", "rethrowStatement", 
		"tryStatement", "onPart", "onParts", "catchPart", "finallyPart", "returnStatement", 
		"label", "breakStatement", "continueStatement", "yieldStatement", "yieldEachStatement", 
		"assertStatement", "assertion", "libraryName", "dottedIdentifierList", 
		"importOrExport", "libraryImport", "importSpecification", "combinator", 
		"identifierList", "libraryExport", "partDirective", "partHeader", "partDeclaration", 
		"uri", "configurableUri", "configurationUri", "uriTest", "type", "typeNotVoid", 
		"typeNotFunction", "typeNotVoidNotFunction", "typeName", "typeArguments", 
		"typeList", "typeNotVoidNotFunctionList", "typeAlias", "functionTypeAlias", 
		"functionPrefix", "functionTypeTail", "functionTypeTails", "functionType", 
		"parameterTypeList", "normalParameterTypes", "normalParameterType", "optionalParameterTypes", 
		"optionalPositionalParameterTypes", "namedParameterTypes", "namedParameterType", 
		"typedIdentifier", "constructorDesignation", "symbolLiteral", "singleStringWithoutInterpolation", 
		"singleLineString", "multiLineString", "reservedWord", "builtInIdentifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "','", "'=>'", "'*'", "'('", "')'", "'['", "']'", 
		"'?'", "'.'", "':'", "'~'", "'=='", "'<'", "'>'", "'@'", "'...'", "'...?'", 
		"'..'", "'?..'", "'*='", "'/='", "'~/='", "'%='", "'+='", "'-='", "'<<='", 
		"'&='", "'^='", "'|='", "'??='", "'??'", "'||'", "'&&'", "'!='", "'<='", 
		"'|'", "'^'", "'&'", "'<<'", "'+'", "'-'", "'/'", "'%'", "'~/'", "'!'", 
		"'++'", "'--'", "'?.'", "'#'", "'assert'", "'break'", "'case'", "'catch'", 
		"'class'", "'const'", "'continue'", "'default'", "'do'", "'else'", "'enum'", 
		"'extends'", "'false'", "'final'", "'finally'", "'for'", "'if'", "'in'", 
		"'is'", "'new'", "'null'", "'rethrow'", "'return'", "'super'", "'switch'", 
		"'this'", "'throw'", "'true'", "'try'", "'var'", "'void'", "'while'", 
		"'with'", "'abstract'", "'as'", "'covariant'", "'deferred'", "'dynamic'", 
		"'export'", "'extension'", "'external'", "'factory'", "'Function'", "'get'", 
		"'implements'", "'import'", "'interface'", "'late'", "'library'", "'operator'", 
		"'mixin'", "'part'", "'required'", "'set'", "'static'", "'typedef'", "'await'", 
		"'yield'", "'async'", "'hide'", "'of'", "'on'", "'show'", "'sync'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'{'", undefined, 
		undefined, undefined, undefined, undefined, "'\uFEFF'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ASSERT", "BREAK", "CASE", "CATCH", "CLASS", 
		"CONST", "CONTINUE", "DEFAULT", "DO", "ELSE", "ENUM", "EXTENDS", "FALSE", 
		"FINAL", "FINALLY", "FOR", "IF", "IN", "IS", "NEW", "NULL", "RETHROW", 
		"RETURN", "SUPER", "SWITCH", "THIS", "THROW", "TRUE", "TRY", "VAR", "VOID", 
		"WHILE", "WITH", "ABSTRACT", "AS", "COVARIANT", "DEFERRED", "DYNAMIC", 
		"EXPORT", "EXTENSION", "EXTERNAL", "FACTORY", "FUNCTION", "GET", "IMPLEMENTS", 
		"IMPORT", "INTERFACE", "LATE", "LIBRARY", "OPERATOR", "MIXIN", "PART", 
		"REQUIRED", "SET", "STATIC", "TYPEDEF", "AWAIT", "YIELD", "ASYNC", "HIDE", 
		"OF", "ON", "SHOW", "SYNC", "NUMBER", "HEX_NUMBER", "RAW_SINGLE_LINE_STRING", 
		"RAW_MULTI_LINE_STRING", "SINGLE_LINE_STRING_SQ_BEGIN_END", "SINGLE_LINE_STRING_SQ_BEGIN_MID", 
		"SINGLE_LINE_STRING_SQ_MID_MID", "SINGLE_LINE_STRING_SQ_MID_END", "SINGLE_LINE_STRING_DQ_BEGIN_END", 
		"SINGLE_LINE_STRING_DQ_BEGIN_MID", "SINGLE_LINE_STRING_DQ_MID_MID", "SINGLE_LINE_STRING_DQ_MID_END", 
		"MULTI_LINE_STRING_SQ_BEGIN_END", "MULTI_LINE_STRING_SQ_BEGIN_MID", "MULTI_LINE_STRING_SQ_MID_MID", 
		"MULTI_LINE_STRING_SQ_MID_END", "MULTI_LINE_STRING_DQ_BEGIN_END", "MULTI_LINE_STRING_DQ_BEGIN_MID", 
		"MULTI_LINE_STRING_DQ_MID_MID", "MULTI_LINE_STRING_DQ_MID_END", "LBRACE", 
		"RBRACE", "SCRIPT_TAG", "IDENTIFIER", "SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT", 
		"FEFF", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DartParser._LITERAL_NAMES, DartParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DartParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Dart.g"; }

	// @Override
	public get ruleNames(): string[] { return DartParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DartParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	  static filePath: string | null = null;
	  static errorHasOccurred: boolean = false;

	  /// Must be invoked before the first error is reported for a library.
	  /// Will print the name of the library and indicate that it has errors.
	  static prepareForErrors(): void {
	    DartParser.errorHasOccurred = true;
	    console.error("Syntax error in " + DartParser.filePath + ":");
	  }

	  /// Parse library, return true if success, false if errors occurred.
	  public parseLibrary(filePath: string): boolean { // throws RecognitionException 
	    DartParser.filePath = filePath;
	    DartParser.errorHasOccurred = false;
	    this.libraryDefinition();
	    return !DartParser.errorHasOccurred;
	  }

	  // Enable the parser to treat AWAIT/YIELD as keywords in the body of an
	  // `async`, `async*`, or `sync*` function. Access via methods below.
	  private asyncEtcAreKeywords: Array<boolean> = [false];

	  // Use this to indicate that we are now entering an `async`, `async*`,
	  // or `sync*` function.
	  private startAsyncFunction(): void { this.asyncEtcAreKeywords.push(true); }

	  // Use this to indicate that we are now entering a function which is
	  // neither `async`, `async*`, nor `sync*`.
	  private startNonAsyncFunction(): void { this.asyncEtcAreKeywords.push(false); }

	  // Use this to indicate that we are now leaving any funciton.
	  private endFunction(): void { this.asyncEtcAreKeywords.pop(); }

	  // Whether we can recognize AWAIT/YIELD as an identifier/typeIdentifier.
	  private asyncEtcPredicate(tokenId: number): boolean {
	    if (tokenId === DartParser.AWAIT || tokenId === DartParser.YIELD) {
	      return !this.asyncEtcAreKeywords[this.asyncEtcAreKeywords.length - 1];
	    }
	    return false;
	  }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DartParser._ATN, this);
	}
	// @RuleVersion(0)
	public libraryDefinition(): LibraryDefinitionContext {
		let _localctx: LibraryDefinitionContext = new LibraryDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DartParser.RULE_libraryDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 442;
				this.match(DartParser.FEFF);
				}
				break;
			}
			this.state = 446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 445;
				this.match(DartParser.SCRIPT_TAG);
				}
				break;
			}
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 448;
				this.libraryName();
				}
				break;
			}
			this.state = 454;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 451;
					this.importOrExport();
					}
					}
				}
				this.state = 456;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 460;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 457;
					this.partDirective();
					}
					}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 468;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 463;
					this.metadata();
					this.state = 464;
					this.topLevelDefinition();
					}
					}
				}
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 471;
			this.match(DartParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelDefinition(): TopLevelDefinitionContext {
		let _localctx: TopLevelDefinitionContext = new TopLevelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DartParser.RULE_topLevelDefinition);
		let _la: number;
		try {
			this.state = 537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 473;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
				this.mixinDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 475;
				this.extensionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 476;
				this.enumType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 477;
				this.typeAlias();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 478;
				this.match(DartParser.EXTERNAL);
				this.state = 479;
				this.functionSignature();
				this.state = 480;
				this.match(DartParser.T__0);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 482;
				this.match(DartParser.EXTERNAL);
				this.state = 483;
				this.getterSignature();
				this.state = 484;
				this.match(DartParser.T__0);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 486;
				this.match(DartParser.EXTERNAL);
				this.state = 487;
				this.setterSignature();
				this.state = 488;
				this.match(DartParser.T__0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 490;
				this.match(DartParser.EXTERNAL);
				this.state = 491;
				this.finalVarOrType();
				this.state = 492;
				this.identifierList();
				this.state = 493;
				this.match(DartParser.T__0);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 495;
				this.getterSignature();
				this.state = 496;
				this.functionBody();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 498;
				this.setterSignature();
				this.state = 499;
				this.functionBody();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 501;
				this.functionSignature();
				this.state = 502;
				this.functionBody();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 504;
				_la = this._input.LA(1);
				if (!(_la === DartParser.CONST || _la === DartParser.FINAL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 506;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 505;
					this.type();
					}
					break;
				}
				this.state = 508;
				this.staticFinalDeclarationList();
				this.state = 509;
				this.match(DartParser.T__0);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 511;
				this.match(DartParser.LATE);
				this.state = 512;
				this.match(DartParser.FINAL);
				this.state = 514;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 513;
					this.type();
					}
					break;
				}
				this.state = 516;
				this.initializedIdentifierList();
				this.state = 517;
				this.match(DartParser.T__0);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 520;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 519;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 522;
				this.varOrType();
				this.state = 523;
				this.identifier();
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__1) {
					{
					this.state = 524;
					this.match(DartParser.T__1);
					this.state = 525;
					this.expression();
					}
				}

				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.T__2) {
					{
					{
					this.state = 528;
					this.match(DartParser.T__2);
					this.state = 529;
					this.initializedIdentifier();
					}
					}
					this.state = 534;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 535;
				this.match(DartParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaredIdentifier(): DeclaredIdentifierContext {
		let _localctx: DeclaredIdentifierContext = new DeclaredIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DartParser.RULE_declaredIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 539;
				this.match(DartParser.COVARIANT);
				}
				break;
			}
			this.state = 542;
			this.finalConstVarOrType();
			this.state = 543;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finalConstVarOrType(): FinalConstVarOrTypeContext {
		let _localctx: FinalConstVarOrTypeContext = new FinalConstVarOrTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DartParser.RULE_finalConstVarOrType);
		let _la: number;
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.LATE) {
					{
					this.state = 545;
					this.match(DartParser.LATE);
					}
				}

				this.state = 548;
				this.match(DartParser.FINAL);
				this.state = 550;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 549;
					this.type();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 552;
				this.match(DartParser.CONST);
				this.state = 554;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 553;
					this.type();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 557;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 556;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 559;
				this.varOrType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finalVarOrType(): FinalVarOrTypeContext {
		let _localctx: FinalVarOrTypeContext = new FinalVarOrTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DartParser.RULE_finalVarOrType);
		try {
			this.state = 567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 562;
				this.match(DartParser.FINAL);
				this.state = 564;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 563;
					this.type();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 566;
				this.varOrType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varOrType(): VarOrTypeContext {
		let _localctx: VarOrTypeContext = new VarOrTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DartParser.RULE_varOrType);
		try {
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 569;
				this.match(DartParser.VAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 570;
				this.type();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializedIdentifier(): InitializedIdentifierContext {
		let _localctx: InitializedIdentifierContext = new InitializedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DartParser.RULE_initializedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			this.identifier();
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__1) {
				{
				this.state = 574;
				this.match(DartParser.T__1);
				this.state = 575;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializedIdentifierList(): InitializedIdentifierListContext {
		let _localctx: InitializedIdentifierListContext = new InitializedIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DartParser.RULE_initializedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.initializedIdentifier();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 579;
				this.match(DartParser.T__2);
				this.state = 580;
				this.initializedIdentifier();
				}
				}
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionSignature(): FunctionSignatureContext {
		let _localctx: FunctionSignatureContext = new FunctionSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DartParser.RULE_functionSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 586;
				this.type();
				}
				break;
			}
			this.state = 589;
			this.identifierNotFUNCTION();
			this.state = 590;
			this.formalParameterPart();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBodyPrefix(): FunctionBodyPrefixContext {
		let _localctx: FunctionBodyPrefixContext = new FunctionBodyPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DartParser.RULE_functionBodyPrefix);
		let _la: number;
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.ASYNC) {
					{
					this.state = 592;
					this.match(DartParser.ASYNC);
					}
				}

				this.state = 595;
				this.match(DartParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 601;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 596;
					this.match(DartParser.ASYNC);
					}
					break;

				case 2:
					{
					this.state = 597;
					this.match(DartParser.ASYNC);
					this.state = 598;
					this.match(DartParser.T__4);
					}
					break;

				case 3:
					{
					this.state = 599;
					this.match(DartParser.SYNC);
					this.state = 600;
					this.match(DartParser.T__4);
					}
					break;
				}
				this.state = 603;
				this.match(DartParser.LBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DartParser.RULE_functionBody);
		try {
			this.state = 634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 606;
				this.match(DartParser.T__3);
				 startNonAsyncFunction(); 
				this.state = 608;
				this.expression();
				 endFunction(); 
				this.state = 610;
				this.match(DartParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				 startNonAsyncFunction(); 
				this.state = 613;
				this.block();
				 endFunction(); 
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 616;
				this.match(DartParser.ASYNC);
				this.state = 617;
				this.match(DartParser.T__3);
				 startAsyncFunction(); 
				this.state = 619;
				this.expression();
				 endFunction(); 
				this.state = 621;
				this.match(DartParser.T__0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 628;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 623;
					this.match(DartParser.ASYNC);
					}
					break;

				case 2:
					{
					this.state = 624;
					this.match(DartParser.ASYNC);
					this.state = 625;
					this.match(DartParser.T__4);
					}
					break;

				case 3:
					{
					this.state = 626;
					this.match(DartParser.SYNC);
					this.state = 627;
					this.match(DartParser.T__4);
					}
					break;
				}
				 startAsyncFunction(); 
				this.state = 631;
				this.block();
				 endFunction(); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DartParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(DartParser.LBRACE);
			this.state = 637;
			this.statements();
			this.state = 638;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterPart(): FormalParameterPartContext {
		let _localctx: FormalParameterPartContext = new FormalParameterPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DartParser.RULE_formalParameterPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 640;
				this.typeParameters();
				}
			}

			this.state = 643;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DartParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.state = 664;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 645;
				this.match(DartParser.T__5);
				this.state = 646;
				this.match(DartParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 647;
				this.match(DartParser.T__5);
				this.state = 648;
				this.normalFormalParameters();
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 649;
					this.match(DartParser.T__2);
					}
				}

				this.state = 652;
				this.match(DartParser.T__6);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 654;
				this.match(DartParser.T__5);
				this.state = 655;
				this.normalFormalParameters();
				this.state = 656;
				this.match(DartParser.T__2);
				this.state = 657;
				this.optionalOrNamedFormalParameters();
				this.state = 658;
				this.match(DartParser.T__6);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 660;
				this.match(DartParser.T__5);
				this.state = 661;
				this.optionalOrNamedFormalParameters();
				this.state = 662;
				this.match(DartParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalFormalParameters(): NormalFormalParametersContext {
		let _localctx: NormalFormalParametersContext = new NormalFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, DartParser.RULE_normalFormalParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this.normalFormalParameter();
			this.state = 671;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 667;
					this.match(DartParser.T__2);
					this.state = 668;
					this.normalFormalParameter();
					}
					}
				}
				this.state = 673;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalOrNamedFormalParameters(): OptionalOrNamedFormalParametersContext {
		let _localctx: OptionalOrNamedFormalParametersContext = new OptionalOrNamedFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DartParser.RULE_optionalOrNamedFormalParameters);
		try {
			this.state = 676;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 674;
				this.optionalPositionalFormalParameters();
				}
				break;
			case DartParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 675;
				this.namedFormalParameters();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext {
		let _localctx: OptionalPositionalFormalParametersContext = new OptionalPositionalFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DartParser.RULE_optionalPositionalFormalParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this.match(DartParser.T__7);
			this.state = 679;
			this.defaultFormalParameter();
			this.state = 684;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 680;
					this.match(DartParser.T__2);
					this.state = 681;
					this.defaultFormalParameter();
					}
					}
				}
				this.state = 686;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 687;
				this.match(DartParser.T__2);
				}
			}

			this.state = 690;
			this.match(DartParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedFormalParameters(): NamedFormalParametersContext {
		let _localctx: NamedFormalParametersContext = new NamedFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DartParser.RULE_namedFormalParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.match(DartParser.LBRACE);
			this.state = 693;
			this.defaultNamedParameter();
			this.state = 698;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 694;
					this.match(DartParser.T__2);
					this.state = 695;
					this.defaultNamedParameter();
					}
					}
				}
				this.state = 700;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 701;
				this.match(DartParser.T__2);
				}
			}

			this.state = 704;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalFormalParameter(): NormalFormalParameterContext {
		let _localctx: NormalFormalParameterContext = new NormalFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, DartParser.RULE_normalFormalParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.metadata();
			this.state = 707;
			this.normalFormalParameterNoMetadata();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalFormalParameterNoMetadata(): NormalFormalParameterNoMetadataContext {
		let _localctx: NormalFormalParameterNoMetadataContext = new NormalFormalParameterNoMetadataContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, DartParser.RULE_normalFormalParameterNoMetadata);
		try {
			this.state = 712;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.functionFormalParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 710;
				this.fieldFormalParameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 711;
				this.simpleFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionFormalParameter(): FunctionFormalParameterContext {
		let _localctx: FunctionFormalParameterContext = new FunctionFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, DartParser.RULE_functionFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 714;
				this.match(DartParser.COVARIANT);
				}
				break;
			}
			this.state = 718;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 717;
				this.type();
				}
				break;
			}
			this.state = 720;
			this.identifierNotFUNCTION();
			this.state = 721;
			this.formalParameterPart();
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__9) {
				{
				this.state = 722;
				this.match(DartParser.T__9);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleFormalParameter(): SimpleFormalParameterContext {
		let _localctx: SimpleFormalParameterContext = new SimpleFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, DartParser.RULE_simpleFormalParameter);
		try {
			this.state = 730;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 725;
				this.declaredIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 727;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 726;
					this.match(DartParser.COVARIANT);
					}
					break;
				}
				this.state = 729;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldFormalParameter(): FieldFormalParameterContext {
		let _localctx: FieldFormalParameterContext = new FieldFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, DartParser.RULE_fieldFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 732;
				this.finalConstVarOrType();
				}
				break;
			}
			this.state = 735;
			this.match(DartParser.THIS);
			this.state = 736;
			this.match(DartParser.T__10);
			this.state = 737;
			this.identifier();
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__5 || _la === DartParser.T__14) {
				{
				this.state = 738;
				this.formalParameterPart();
				this.state = 740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__9) {
					{
					this.state = 739;
					this.match(DartParser.T__9);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultFormalParameter(): DefaultFormalParameterContext {
		let _localctx: DefaultFormalParameterContext = new DefaultFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, DartParser.RULE_defaultFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this.normalFormalParameter();
			this.state = 747;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__1) {
				{
				this.state = 745;
				this.match(DartParser.T__1);
				this.state = 746;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultNamedParameter(): DefaultNamedParameterContext {
		let _localctx: DefaultNamedParameterContext = new DefaultNamedParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, DartParser.RULE_defaultNamedParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 749;
				this.match(DartParser.REQUIRED);
				}
				break;
			}
			this.state = 752;
			this.normalFormalParameter();
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__1 || _la === DartParser.T__11) {
				{
				this.state = 753;
				_la = this._input.LA(1);
				if (!(_la === DartParser.T__1 || _la === DartParser.T__11)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 754;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeWithParameters(): TypeWithParametersContext {
		let _localctx: TypeWithParametersContext = new TypeWithParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, DartParser.RULE_typeWithParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.typeIdentifier();
			this.state = 759;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 758;
				this.typeParameters();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, DartParser.RULE_classDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 791;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.ABSTRACT) {
					{
					this.state = 761;
					this.match(DartParser.ABSTRACT);
					}
				}

				this.state = 764;
				this.match(DartParser.CLASS);
				this.state = 765;
				this.typeWithParameters();
				this.state = 767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.EXTENDS) {
					{
					this.state = 766;
					this.superclass();
					}
				}

				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.WITH) {
					{
					this.state = 769;
					this.mixins();
					}
				}

				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.IMPLEMENTS) {
					{
					this.state = 772;
					this.interfaces();
					}
				}

				this.state = 775;
				this.match(DartParser.LBRACE);
				this.state = 781;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 776;
						this.metadata();
						this.state = 777;
						this.classMemberDefinition();
						}
						}
					}
					this.state = 783;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 784;
				this.match(DartParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.ABSTRACT) {
					{
					this.state = 786;
					this.match(DartParser.ABSTRACT);
					}
				}

				this.state = 789;
				this.match(DartParser.CLASS);
				this.state = 790;
				this.mixinApplicationClass();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superclass(): SuperclassContext {
		let _localctx: SuperclassContext = new SuperclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, DartParser.RULE_superclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(DartParser.EXTENDS);
			this.state = 794;
			this.typeNotVoidNotFunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixins(): MixinsContext {
		let _localctx: MixinsContext = new MixinsContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, DartParser.RULE_mixins);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.match(DartParser.WITH);
			this.state = 797;
			this.typeNotVoidNotFunctionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaces(): InterfacesContext {
		let _localctx: InterfacesContext = new InterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, DartParser.RULE_interfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this.match(DartParser.IMPLEMENTS);
			this.state = 800;
			this.typeNotVoidNotFunctionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMemberDefinition(): ClassMemberDefinitionContext {
		let _localctx: ClassMemberDefinitionContext = new ClassMemberDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, DartParser.RULE_classMemberDefinition);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.methodSignature();
				this.state = 803;
				this.functionBody();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 805;
				this.declaration();
				this.state = 806;
				this.match(DartParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinApplicationClass(): MixinApplicationClassContext {
		let _localctx: MixinApplicationClassContext = new MixinApplicationClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, DartParser.RULE_mixinApplicationClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.typeWithParameters();
			this.state = 811;
			this.match(DartParser.T__1);
			this.state = 812;
			this.mixinApplication();
			this.state = 813;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinDeclaration(): MixinDeclarationContext {
		let _localctx: MixinDeclarationContext = new MixinDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, DartParser.RULE_mixinDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.match(DartParser.MIXIN);
			this.state = 816;
			this.typeIdentifier();
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 817;
				this.typeParameters();
				}
			}

			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.ON) {
				{
				this.state = 820;
				this.match(DartParser.ON);
				this.state = 821;
				this.typeNotVoidNotFunctionList();
				}
			}

			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.IMPLEMENTS) {
				{
				this.state = 824;
				this.interfaces();
				}
			}

			this.state = 827;
			this.match(DartParser.LBRACE);
			this.state = 833;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 828;
					this.metadata();
					this.state = 829;
					this.mixinMemberDefinition();
					}
					}
				}
				this.state = 835;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			this.state = 836;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinMemberDefinition(): MixinMemberDefinitionContext {
		let _localctx: MixinMemberDefinitionContext = new MixinMemberDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, DartParser.RULE_mixinMemberDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.classMemberDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionDeclaration(): ExtensionDeclarationContext {
		let _localctx: ExtensionDeclarationContext = new ExtensionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, DartParser.RULE_extensionDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.match(DartParser.EXTENSION);
			this.state = 842;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 841;
				this.identifier();
				}
				break;
			}
			this.state = 845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 844;
				this.typeParameters();
				}
			}

			this.state = 847;
			this.match(DartParser.ON);
			this.state = 848;
			this.type();
			this.state = 849;
			this.match(DartParser.LBRACE);
			this.state = 855;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 850;
					this.metadata();
					this.state = 851;
					this.extensionMemberDefinition();
					}
					}
				}
				this.state = 857;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			this.state = 858;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionMemberDefinition(): ExtensionMemberDefinitionContext {
		let _localctx: ExtensionMemberDefinitionContext = new ExtensionMemberDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, DartParser.RULE_extensionMemberDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.classMemberDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodSignature(): MethodSignatureContext {
		let _localctx: MethodSignatureContext = new MethodSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, DartParser.RULE_methodSignature);
		try {
			this.state = 880;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 862;
				this.constructorSignature();
				this.state = 863;
				this.initializers();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 865;
				this.factoryConstructorSignature();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 867;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 866;
					this.match(DartParser.STATIC);
					}
					break;
				}
				this.state = 869;
				this.functionSignature();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 871;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 870;
					this.match(DartParser.STATIC);
					}
					break;
				}
				this.state = 873;
				this.getterSignature();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 875;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 874;
					this.match(DartParser.STATIC);
					}
					break;
				}
				this.state = 877;
				this.setterSignature();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 878;
				this.operatorSignature();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 879;
				this.constructorSignature();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, DartParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 882;
				this.match(DartParser.EXTERNAL);
				this.state = 883;
				this.factoryConstructorSignature();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 884;
				this.match(DartParser.EXTERNAL);
				this.state = 885;
				this.constantConstructorSignature();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 886;
				this.match(DartParser.EXTERNAL);
				this.state = 887;
				this.constructorSignature();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 892;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
				case 1:
					{
					this.state = 888;
					this.match(DartParser.EXTERNAL);
					this.state = 890;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
					case 1:
						{
						this.state = 889;
						this.match(DartParser.STATIC);
						}
						break;
					}
					}
					break;
				}
				this.state = 894;
				this.getterSignature();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 899;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
				case 1:
					{
					this.state = 895;
					this.match(DartParser.EXTERNAL);
					this.state = 897;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
					case 1:
						{
						this.state = 896;
						this.match(DartParser.STATIC);
						}
						break;
					}
					}
					break;
				}
				this.state = 901;
				this.setterSignature();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 906;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 902;
					this.match(DartParser.EXTERNAL);
					this.state = 904;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
					case 1:
						{
						this.state = 903;
						this.match(DartParser.STATIC);
						}
						break;
					}
					}
					break;
				}
				this.state = 908;
				this.functionSignature();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 909;
				this.match(DartParser.EXTERNAL);
				this.state = 916;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 911;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
					case 1:
						{
						this.state = 910;
						this.match(DartParser.STATIC);
						}
						break;
					}
					this.state = 913;
					this.finalVarOrType();
					}
					break;

				case 2:
					{
					this.state = 914;
					this.match(DartParser.COVARIANT);
					this.state = 915;
					this.varOrType();
					}
					break;
				}
				this.state = 918;
				this.identifierList();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 920;
				this.match(DartParser.ABSTRACT);
				this.state = 924;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 921;
					this.finalVarOrType();
					}
					break;

				case 2:
					{
					this.state = 922;
					this.match(DartParser.COVARIANT);
					this.state = 923;
					this.varOrType();
					}
					break;
				}
				this.state = 926;
				this.identifierList();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 929;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 928;
					this.match(DartParser.EXTERNAL);
					}
					break;
				}
				this.state = 931;
				this.operatorSignature();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 932;
				this.match(DartParser.STATIC);
				this.state = 933;
				_la = this._input.LA(1);
				if (!(_la === DartParser.CONST || _la === DartParser.FINAL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 935;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 934;
					this.type();
					}
					break;
				}
				this.state = 937;
				this.staticFinalDeclarationList();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 938;
				this.match(DartParser.STATIC);
				this.state = 939;
				this.match(DartParser.LATE);
				this.state = 940;
				this.match(DartParser.FINAL);
				this.state = 942;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 941;
					this.type();
					}
					break;
				}
				this.state = 944;
				this.initializedIdentifierList();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 945;
				this.match(DartParser.STATIC);
				this.state = 947;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 946;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 949;
				this.varOrType();
				this.state = 950;
				this.initializedIdentifierList();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 952;
				this.match(DartParser.COVARIANT);
				this.state = 953;
				this.match(DartParser.LATE);
				this.state = 954;
				this.match(DartParser.FINAL);
				this.state = 956;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 955;
					this.type();
					}
					break;
				}
				this.state = 958;
				this.identifierList();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 959;
				this.match(DartParser.COVARIANT);
				this.state = 961;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 960;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 963;
				this.varOrType();
				this.state = 964;
				this.initializedIdentifierList();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 967;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 966;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 974;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 969;
					this.match(DartParser.FINAL);
					this.state = 971;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
					case 1:
						{
						this.state = 970;
						this.type();
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 973;
					this.varOrType();
					}
					break;
				}
				this.state = 976;
				this.initializedIdentifierList();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 977;
				this.redirectingFactoryConstructorSignature();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 978;
				this.constantConstructorSignature();
				this.state = 981;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 979;
					this.redirection();
					}
					break;

				case 2:
					{
					this.state = 980;
					this.initializers();
					}
					break;
				}
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 983;
				this.constructorSignature();
				this.state = 986;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 984;
					this.redirection();
					}
					break;

				case 2:
					{
					this.state = 985;
					this.initializers();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext {
		let _localctx: StaticFinalDeclarationListContext = new StaticFinalDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, DartParser.RULE_staticFinalDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			this.staticFinalDeclaration();
			this.state = 995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 991;
				this.match(DartParser.T__2);
				this.state = 992;
				this.staticFinalDeclaration();
				}
				}
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticFinalDeclaration(): StaticFinalDeclarationContext {
		let _localctx: StaticFinalDeclarationContext = new StaticFinalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, DartParser.RULE_staticFinalDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.identifier();
			this.state = 999;
			this.match(DartParser.T__1);
			this.state = 1000;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorSignature(): OperatorSignatureContext {
		let _localctx: OperatorSignatureContext = new OperatorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, DartParser.RULE_operatorSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 1002;
				this.type();
				}
				break;
			}
			this.state = 1005;
			this.match(DartParser.OPERATOR);
			this.state = 1006;
			this.operator();
			this.state = 1007;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, DartParser.RULE_operator);
		try {
			this.state = 1016;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1009;
				this.match(DartParser.T__12);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1010;
				this.binaryOperator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1011;
				this.match(DartParser.T__7);
				this.state = 1012;
				this.match(DartParser.T__8);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1013;
				this.match(DartParser.T__7);
				this.state = 1014;
				this.match(DartParser.T__8);
				this.state = 1015;
				this.match(DartParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, DartParser.RULE_binaryOperator);
		try {
			this.state = 1024;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1018;
				this.multiplicativeOperator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1019;
				this.additiveOperator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1020;
				this.shiftOperator();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1021;
				this.relationalOperator();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1022;
				this.match(DartParser.T__13);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1023;
				this.bitwiseOperator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getterSignature(): GetterSignatureContext {
		let _localctx: GetterSignatureContext = new GetterSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, DartParser.RULE_getterSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1027;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1026;
				this.type();
				}
				break;
			}
			this.state = 1029;
			this.match(DartParser.GET);
			this.state = 1030;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setterSignature(): SetterSignatureContext {
		let _localctx: SetterSignatureContext = new SetterSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, DartParser.RULE_setterSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 1032;
				this.type();
				}
				break;
			}
			this.state = 1035;
			this.match(DartParser.SET);
			this.state = 1036;
			this.identifier();
			this.state = 1037;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorSignature(): ConstructorSignatureContext {
		let _localctx: ConstructorSignatureContext = new ConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, DartParser.RULE_constructorSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this.constructorName();
			this.state = 1040;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorName(): ConstructorNameContext {
		let _localctx: ConstructorNameContext = new ConstructorNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, DartParser.RULE_constructorName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.typeIdentifier();
			this.state = 1048;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__10) {
				{
				this.state = 1043;
				this.match(DartParser.T__10);
				this.state = 1046;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 1044;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1045;
					this.match(DartParser.NEW);
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public redirection(): RedirectionContext {
		let _localctx: RedirectionContext = new RedirectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, DartParser.RULE_redirection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1050;
			this.match(DartParser.T__11);
			this.state = 1051;
			this.match(DartParser.THIS);
			this.state = 1057;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__10) {
				{
				this.state = 1052;
				this.match(DartParser.T__10);
				this.state = 1055;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 1053;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1054;
					this.match(DartParser.NEW);
					}
					break;
				}
				}
			}

			this.state = 1059;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializers(): InitializersContext {
		let _localctx: InitializersContext = new InitializersContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, DartParser.RULE_initializers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			this.match(DartParser.T__11);
			this.state = 1062;
			this.initializerListEntry();
			this.state = 1067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 1063;
				this.match(DartParser.T__2);
				this.state = 1064;
				this.initializerListEntry();
				}
				}
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerListEntry(): InitializerListEntryContext {
		let _localctx: InitializerListEntryContext = new InitializerListEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, DartParser.RULE_initializerListEntry);
		try {
			this.state = 1081;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1070;
				this.match(DartParser.SUPER);
				this.state = 1071;
				this.arguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1072;
				this.match(DartParser.SUPER);
				this.state = 1073;
				this.match(DartParser.T__10);
				this.state = 1076;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1074;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1075;
					this.match(DartParser.NEW);
					}
					break;
				}
				this.state = 1078;
				this.arguments();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1079;
				this.fieldInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1080;
				this.assertion();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldInitializer(): FieldInitializerContext {
		let _localctx: FieldInitializerContext = new FieldInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, DartParser.RULE_fieldInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 1083;
				this.match(DartParser.THIS);
				this.state = 1084;
				this.match(DartParser.T__10);
				}
				break;
			}
			this.state = 1087;
			this.identifier();
			this.state = 1088;
			this.match(DartParser.T__1);
			this.state = 1089;
			this.initializerExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerExpression(): InitializerExpressionContext {
		let _localctx: InitializerExpressionContext = new InitializerExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, DartParser.RULE_initializerExpression);
		try {
			this.state = 1093;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1091;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1092;
				this.cascade(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factoryConstructorSignature(): FactoryConstructorSignatureContext {
		let _localctx: FactoryConstructorSignatureContext = new FactoryConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, DartParser.RULE_factoryConstructorSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1095;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1098;
			this.match(DartParser.FACTORY);
			this.state = 1099;
			this.constructorName();
			this.state = 1100;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public redirectingFactoryConstructorSignature(): RedirectingFactoryConstructorSignatureContext {
		let _localctx: RedirectingFactoryConstructorSignatureContext = new RedirectingFactoryConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, DartParser.RULE_redirectingFactoryConstructorSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1102;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1105;
			this.match(DartParser.FACTORY);
			this.state = 1106;
			this.constructorName();
			this.state = 1107;
			this.formalParameterList();
			this.state = 1108;
			this.match(DartParser.T__1);
			this.state = 1109;
			this.constructorDesignation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantConstructorSignature(): ConstantConstructorSignatureContext {
		let _localctx: ConstantConstructorSignatureContext = new ConstantConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, DartParser.RULE_constantConstructorSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1111;
			this.match(DartParser.CONST);
			this.state = 1112;
			this.constructorName();
			this.state = 1113;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinApplication(): MixinApplicationContext {
		let _localctx: MixinApplicationContext = new MixinApplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, DartParser.RULE_mixinApplication);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1115;
			this.typeNotVoidNotFunction();
			this.state = 1116;
			this.mixins();
			this.state = 1118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.IMPLEMENTS) {
				{
				this.state = 1117;
				this.interfaces();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumType(): EnumTypeContext {
		let _localctx: EnumTypeContext = new EnumTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, DartParser.RULE_enumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1120;
			this.match(DartParser.ENUM);
			this.state = 1121;
			this.typeIdentifier();
			this.state = 1123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1122;
				this.typeParameters();
				}
			}

			this.state = 1126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.WITH) {
				{
				this.state = 1125;
				this.mixins();
				}
			}

			this.state = 1129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.IMPLEMENTS) {
				{
				this.state = 1128;
				this.interfaces();
				}
			}

			this.state = 1131;
			this.match(DartParser.LBRACE);
			this.state = 1132;
			this.enumEntry();
			this.state = 1137;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1133;
					this.match(DartParser.T__2);
					this.state = 1134;
					this.enumEntry();
					}
					}
				}
				this.state = 1139;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			}
			this.state = 1141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 1140;
				this.match(DartParser.T__2);
				}
			}

			this.state = 1152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__0) {
				{
				this.state = 1143;
				this.match(DartParser.T__0);
				this.state = 1149;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1144;
						this.metadata();
						this.state = 1145;
						this.classMemberDefinition();
						}
						}
					}
					this.state = 1151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
				}
				}
			}

			this.state = 1154;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumEntry(): EnumEntryContext {
		let _localctx: EnumEntryContext = new EnumEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, DartParser.RULE_enumEntry);
		let _la: number;
		try {
			this.state = 1170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1156;
				this.metadata();
				this.state = 1157;
				this.identifier();
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__5 || _la === DartParser.T__14) {
					{
					this.state = 1158;
					this.argumentPart();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1161;
				this.metadata();
				this.state = 1162;
				this.identifier();
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__14) {
					{
					this.state = 1163;
					this.typeArguments();
					}
				}

				this.state = 1166;
				this.match(DartParser.T__10);
				this.state = 1167;
				this.identifier();
				this.state = 1168;
				this.arguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, DartParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1172;
			this.metadata();
			this.state = 1173;
			this.typeIdentifier();
			this.state = 1176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.EXTENDS) {
				{
				this.state = 1174;
				this.match(DartParser.EXTENDS);
				this.state = 1175;
				this.typeNotVoid();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, DartParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1178;
			this.match(DartParser.T__14);
			this.state = 1179;
			this.typeParameter();
			this.state = 1184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 1180;
				this.match(DartParser.T__2);
				this.state = 1181;
				this.typeParameter();
				}
				}
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1187;
			this.match(DartParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadata(): MetadataContext {
		let _localctx: MetadataContext = new MetadataContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, DartParser.RULE_metadata);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1189;
					this.match(DartParser.T__16);
					this.state = 1190;
					this.metadatum();
					}
					}
				}
				this.state = 1195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadatum(): MetadatumContext {
		let _localctx: MetadatumContext = new MetadatumContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, DartParser.RULE_metadatum);
		try {
			this.state = 1201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1196;
				this.constructorDesignation();
				this.state = 1197;
				this.arguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1199;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1200;
				this.qualifiedName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, DartParser.RULE_expression);
		try {
			this.state = 1211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1203;
				this.functionExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1204;
				this.throwExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1205;
				this.assignableExpression();
				this.state = 1206;
				this.assignmentOperator();
				this.state = 1207;
				this.expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1209;
				this.conditionalExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1210;
				this.cascade(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		let _localctx: ExpressionWithoutCascadeContext = new ExpressionWithoutCascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, DartParser.RULE_expressionWithoutCascade);
		try {
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1213;
				this.functionExpressionWithoutCascade();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1214;
				this.throwExpressionWithoutCascade();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1215;
				this.assignableExpression();
				this.state = 1216;
				this.assignmentOperator();
				this.state = 1217;
				this.expressionWithoutCascade();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1219;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, DartParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
			this.expression();
			this.state = 1227;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1223;
					this.match(DartParser.T__2);
					this.state = 1224;
					this.expression();
					}
					}
				}
				this.state = 1229;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, DartParser.RULE_primary);
		try {
			this.state = 1244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1230;
				this.thisExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1231;
				this.match(DartParser.SUPER);
				this.state = 1232;
				this.unconditionalAssignableSelector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1233;
				this.constObjectExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1234;
				this.newExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1235;
				this.constructorInvocation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1236;
				this.functionPrimary();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1237;
				this.match(DartParser.T__5);
				this.state = 1238;
				this.expression();
				this.state = 1239;
				this.match(DartParser.T__6);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1241;
				this.literal();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1242;
				this.identifier();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1243;
				this.constructorTearoff();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorInvocation(): ConstructorInvocationContext {
		let _localctx: ConstructorInvocationContext = new ConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, DartParser.RULE_constructorInvocation);
		try {
			this.state = 1257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1246;
				this.typeName();
				this.state = 1247;
				this.typeArguments();
				this.state = 1248;
				this.match(DartParser.T__10);
				this.state = 1249;
				this.match(DartParser.NEW);
				this.state = 1250;
				this.arguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1252;
				this.typeName();
				this.state = 1253;
				this.match(DartParser.T__10);
				this.state = 1254;
				this.match(DartParser.NEW);
				this.state = 1255;
				this.arguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, DartParser.RULE_literal);
		try {
			this.state = 1266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1259;
				this.nullLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1260;
				this.booleanLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1261;
				this.numericLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1262;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1263;
				this.symbolLiteral();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1264;
				this.setOrMapLiteral();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1265;
				this.listLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nullLiteral(): NullLiteralContext {
		let _localctx: NullLiteralContext = new NullLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, DartParser.RULE_nullLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1268;
			this.match(DartParser.NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, DartParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1270;
			_la = this._input.LA(1);
			if (!(_la === DartParser.NUMBER || _la === DartParser.HEX_NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, DartParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1272;
			_la = this._input.LA(1);
			if (!(_la === DartParser.FALSE || _la === DartParser.TRUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, DartParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1276;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case DartParser.RAW_MULTI_LINE_STRING:
					case DartParser.MULTI_LINE_STRING_SQ_BEGIN_END:
					case DartParser.MULTI_LINE_STRING_SQ_BEGIN_MID:
					case DartParser.MULTI_LINE_STRING_DQ_BEGIN_END:
					case DartParser.MULTI_LINE_STRING_DQ_BEGIN_MID:
						{
						this.state = 1274;
						this.multiLineString();
						}
						break;
					case DartParser.RAW_SINGLE_LINE_STRING:
					case DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END:
					case DartParser.SINGLE_LINE_STRING_SQ_BEGIN_MID:
					case DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END:
					case DartParser.SINGLE_LINE_STRING_DQ_BEGIN_MID:
						{
						this.state = 1275;
						this.singleLineString();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteralWithoutInterpolation(): StringLiteralWithoutInterpolationContext {
		let _localctx: StringLiteralWithoutInterpolationContext = new StringLiteralWithoutInterpolationContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, DartParser.RULE_stringLiteralWithoutInterpolation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1280;
				this.singleStringWithoutInterpolation();
				}
				}
				this.state = 1283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (DartParser.RAW_SINGLE_LINE_STRING - 118)) | (1 << (DartParser.RAW_MULTI_LINE_STRING - 118)) | (1 << (DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END - 118)) | (1 << (DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END - 118)) | (1 << (DartParser.MULTI_LINE_STRING_SQ_BEGIN_END - 118)) | (1 << (DartParser.MULTI_LINE_STRING_DQ_BEGIN_END - 118)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setOrMapLiteral(): SetOrMapLiteralContext {
		let _localctx: SetOrMapLiteralContext = new SetOrMapLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, DartParser.RULE_setOrMapLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1285;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1288;
				this.typeArguments();
				}
			}

			this.state = 1291;
			this.match(DartParser.LBRACE);
			this.state = 1293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1292;
				this.elements();
				}
				break;
			}
			this.state = 1295;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listLiteral(): ListLiteralContext {
		let _localctx: ListLiteralContext = new ListLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, DartParser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1297;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1300;
				this.typeArguments();
				}
			}

			this.state = 1303;
			this.match(DartParser.T__7);
			this.state = 1305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1304;
				this.elements();
				}
				break;
			}
			this.state = 1307;
			this.match(DartParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elements(): ElementsContext {
		let _localctx: ElementsContext = new ElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, DartParser.RULE_elements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1309;
			this.element();
			this.state = 1314;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1310;
					this.match(DartParser.T__2);
					this.state = 1311;
					this.element();
					}
					}
				}
				this.state = 1316;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			this.state = 1318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 1317;
				this.match(DartParser.T__2);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, DartParser.RULE_element);
		try {
			this.state = 1325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1320;
				this.expressionElement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1321;
				this.mapElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1322;
				this.spreadElement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1323;
				this.ifElement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1324;
				this.forElement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionElement(): ExpressionElementContext {
		let _localctx: ExpressionElementContext = new ExpressionElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, DartParser.RULE_expressionElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1327;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapElement(): MapElementContext {
		let _localctx: MapElementContext = new MapElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, DartParser.RULE_mapElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1329;
			this.expression();
			this.state = 1330;
			this.match(DartParser.T__11);
			this.state = 1331;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public spreadElement(): SpreadElementContext {
		let _localctx: SpreadElementContext = new SpreadElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, DartParser.RULE_spreadElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1333;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__17 || _la === DartParser.T__18)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1334;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElement(): IfElementContext {
		let _localctx: IfElementContext = new IfElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, DartParser.RULE_ifElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1336;
			this.match(DartParser.IF);
			this.state = 1337;
			this.match(DartParser.T__5);
			this.state = 1338;
			this.expression();
			this.state = 1339;
			this.match(DartParser.T__6);
			this.state = 1340;
			this.element();
			this.state = 1343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1341;
				this.match(DartParser.ELSE);
				this.state = 1342;
				this.element();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forElement(): ForElementContext {
		let _localctx: ForElementContext = new ForElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, DartParser.RULE_forElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.AWAIT) {
				{
				this.state = 1345;
				this.match(DartParser.AWAIT);
				}
			}

			this.state = 1348;
			this.match(DartParser.FOR);
			this.state = 1349;
			this.match(DartParser.T__5);
			this.state = 1350;
			this.forLoopParts();
			this.state = 1351;
			this.match(DartParser.T__6);
			this.state = 1352;
			this.element();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorTearoff(): ConstructorTearoffContext {
		let _localctx: ConstructorTearoffContext = new ConstructorTearoffContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, DartParser.RULE_constructorTearoff);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1354;
			this.typeName();
			this.state = 1356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1355;
				this.typeArguments();
				}
			}

			this.state = 1358;
			this.match(DartParser.T__10);
			this.state = 1359;
			this.match(DartParser.NEW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwExpression(): ThrowExpressionContext {
		let _localctx: ThrowExpressionContext = new ThrowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, DartParser.RULE_throwExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1361;
			this.match(DartParser.THROW);
			this.state = 1362;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwExpressionWithoutCascade(): ThrowExpressionWithoutCascadeContext {
		let _localctx: ThrowExpressionWithoutCascadeContext = new ThrowExpressionWithoutCascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, DartParser.RULE_throwExpressionWithoutCascade);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
			this.match(DartParser.THROW);
			this.state = 1365;
			this.expressionWithoutCascade();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpression(): FunctionExpressionContext {
		let _localctx: FunctionExpressionContext = new FunctionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, DartParser.RULE_functionExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1367;
			this.formalParameterPart();
			this.state = 1368;
			this.functionExpressionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionBody(): FunctionExpressionBodyContext {
		let _localctx: FunctionExpressionBodyContext = new FunctionExpressionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, DartParser.RULE_functionExpressionBody);
		try {
			this.state = 1381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1370;
				this.match(DartParser.T__3);
				 startNonAsyncFunction(); 
				this.state = 1372;
				this.expression();
				 endFunction(); 
				}
				break;
			case DartParser.ASYNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1375;
				this.match(DartParser.ASYNC);
				this.state = 1376;
				this.match(DartParser.T__3);
				 startAsyncFunction(); 
				this.state = 1378;
				this.expression();
				 endFunction(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionBodyPrefix(): FunctionExpressionBodyPrefixContext {
		let _localctx: FunctionExpressionBodyPrefixContext = new FunctionExpressionBodyPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, DartParser.RULE_functionExpressionBodyPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.ASYNC) {
				{
				this.state = 1383;
				this.match(DartParser.ASYNC);
				}
			}

			this.state = 1386;
			this.match(DartParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionWithoutCascade(): FunctionExpressionWithoutCascadeContext {
		let _localctx: FunctionExpressionWithoutCascadeContext = new FunctionExpressionWithoutCascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, DartParser.RULE_functionExpressionWithoutCascade);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1388;
			this.formalParameterPart();
			this.state = 1389;
			this.functionExpressionWithoutCascadeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionWithoutCascadeBody(): FunctionExpressionWithoutCascadeBodyContext {
		let _localctx: FunctionExpressionWithoutCascadeBodyContext = new FunctionExpressionWithoutCascadeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, DartParser.RULE_functionExpressionWithoutCascadeBody);
		try {
			this.state = 1402;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1391;
				this.match(DartParser.T__3);
				 startNonAsyncFunction(); 
				this.state = 1393;
				this.expressionWithoutCascade();
				 endFunction(); 
				}
				break;
			case DartParser.ASYNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1396;
				this.match(DartParser.ASYNC);
				this.state = 1397;
				this.match(DartParser.T__3);
				 startAsyncFunction(); 
				this.state = 1399;
				this.expressionWithoutCascade();
				 endFunction(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionPrimary(): FunctionPrimaryContext {
		let _localctx: FunctionPrimaryContext = new FunctionPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, DartParser.RULE_functionPrimary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1404;
			this.formalParameterPart();
			this.state = 1405;
			this.functionPrimaryBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionPrimaryBody(): FunctionPrimaryBodyContext {
		let _localctx: FunctionPrimaryBodyContext = new FunctionPrimaryBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, DartParser.RULE_functionPrimaryBody);
		try {
			this.state = 1422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				 startNonAsyncFunction(); 
				this.state = 1408;
				this.block();
				 endFunction(); 
				}
				break;
			case DartParser.ASYNC:
			case DartParser.SYNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1416;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
				case 1:
					{
					this.state = 1411;
					this.match(DartParser.ASYNC);
					}
					break;

				case 2:
					{
					this.state = 1412;
					this.match(DartParser.ASYNC);
					this.state = 1413;
					this.match(DartParser.T__4);
					}
					break;

				case 3:
					{
					this.state = 1414;
					this.match(DartParser.SYNC);
					this.state = 1415;
					this.match(DartParser.T__4);
					}
					break;
				}
				 startAsyncFunction(); 
				this.state = 1419;
				this.block();
				 endFunction(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionPrimaryBodyPrefix(): FunctionPrimaryBodyPrefixContext {
		let _localctx: FunctionPrimaryBodyPrefixContext = new FunctionPrimaryBodyPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, DartParser.RULE_functionPrimaryBodyPrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				{
				this.state = 1424;
				this.match(DartParser.ASYNC);
				}
				break;

			case 2:
				{
				this.state = 1425;
				this.match(DartParser.ASYNC);
				this.state = 1426;
				this.match(DartParser.T__4);
				}
				break;

			case 3:
				{
				this.state = 1427;
				this.match(DartParser.SYNC);
				this.state = 1428;
				this.match(DartParser.T__4);
				}
				break;
			}
			this.state = 1431;
			this.match(DartParser.LBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thisExpression(): ThisExpressionContext {
		let _localctx: ThisExpressionContext = new ThisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, DartParser.RULE_thisExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1433;
			this.match(DartParser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newExpression(): NewExpressionContext {
		let _localctx: NewExpressionContext = new NewExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, DartParser.RULE_newExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1435;
			this.match(DartParser.NEW);
			this.state = 1436;
			this.constructorDesignation();
			this.state = 1437;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constObjectExpression(): ConstObjectExpressionContext {
		let _localctx: ConstObjectExpressionContext = new ConstObjectExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, DartParser.RULE_constObjectExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1439;
			this.match(DartParser.CONST);
			this.state = 1440;
			this.constructorDesignation();
			this.state = 1441;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, DartParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1443;
			this.match(DartParser.T__5);
			this.state = 1448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1444;
				this.argumentList();
				this.state = 1446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 1445;
					this.match(DartParser.T__2);
					}
				}

				}
				break;
			}
			this.state = 1450;
			this.match(DartParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, DartParser.RULE_argumentList);
		try {
			let _alt: number;
			this.state = 1468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1452;
				this.namedArgument();
				this.state = 1457;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1453;
						this.match(DartParser.T__2);
						this.state = 1454;
						this.namedArgument();
						}
						}
					}
					this.state = 1459;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1460;
				this.expressionList();
				this.state = 1465;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1461;
						this.match(DartParser.T__2);
						this.state = 1462;
						this.namedArgument();
						}
						}
					}
					this.state = 1467;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedArgument(): NamedArgumentContext {
		let _localctx: NamedArgumentContext = new NamedArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, DartParser.RULE_namedArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.label();
			this.state = 1471;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public cascade(): CascadeContext;
	public cascade(_p: number): CascadeContext;
	// @RuleVersion(0)
	public cascade(_p?: number): CascadeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CascadeContext = new CascadeContext(this._ctx, _parentState);
		let _prevctx: CascadeContext = _localctx;
		let _startState: number = 198;
		this.enterRecursionRule(_localctx, 198, DartParser.RULE_cascade, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1474;
			this.conditionalExpression();
			this.state = 1475;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__19 || _la === DartParser.T__20)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1476;
			this.cascadeSection();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1483;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CascadeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, DartParser.RULE_cascade);
					this.state = 1478;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1479;
					this.match(DartParser.T__19);
					this.state = 1480;
					this.cascadeSection();
					}
					}
				}
				this.state = 1485;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascadeSection(): CascadeSectionContext {
		let _localctx: CascadeSectionContext = new CascadeSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, DartParser.RULE_cascadeSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1486;
			this.cascadeSelector();
			this.state = 1487;
			this.cascadeSectionTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascadeSelector(): CascadeSelectorContext {
		let _localctx: CascadeSelectorContext = new CascadeSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, DartParser.RULE_cascadeSelector);
		try {
			this.state = 1494;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1489;
				this.match(DartParser.T__7);
				this.state = 1490;
				this.expression();
				this.state = 1491;
				this.match(DartParser.T__8);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1493;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascadeSectionTail(): CascadeSectionTailContext {
		let _localctx: CascadeSectionTailContext = new CascadeSectionTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, DartParser.RULE_cascadeSectionTail);
		try {
			let _alt: number;
			this.state = 1508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1496;
				this.cascadeAssignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1500;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1497;
						this.selector();
						}
						}
					}
					this.state = 1502;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
				}
				this.state = 1506;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1503;
					this.assignableSelector();
					this.state = 1504;
					this.cascadeAssignment();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascadeAssignment(): CascadeAssignmentContext {
		let _localctx: CascadeAssignmentContext = new CascadeAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, DartParser.RULE_cascadeAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.assignmentOperator();
			this.state = 1511;
			this.expressionWithoutCascade();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, DartParser.RULE_assignmentOperator);
		try {
			this.state = 1515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1513;
				this.match(DartParser.T__1);
				}
				break;
			case DartParser.T__15:
			case DartParser.T__21:
			case DartParser.T__22:
			case DartParser.T__23:
			case DartParser.T__24:
			case DartParser.T__25:
			case DartParser.T__26:
			case DartParser.T__27:
			case DartParser.T__28:
			case DartParser.T__29:
			case DartParser.T__30:
			case DartParser.T__31:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1514;
				this.compoundAssignmentOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundAssignmentOperator(): CompoundAssignmentOperatorContext {
		let _localctx: CompoundAssignmentOperatorContext = new CompoundAssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, DartParser.RULE_compoundAssignmentOperator);
		try {
			this.state = 1535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1517;
				this.match(DartParser.T__21);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1518;
				this.match(DartParser.T__22);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1519;
				this.match(DartParser.T__23);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1520;
				this.match(DartParser.T__24);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1521;
				this.match(DartParser.T__25);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1522;
				this.match(DartParser.T__26);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1523;
				this.match(DartParser.T__27);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1524;
				this.match(DartParser.T__15);
				this.state = 1525;
				this.match(DartParser.T__15);
				this.state = 1526;
				this.match(DartParser.T__15);
				this.state = 1527;
				this.match(DartParser.T__1);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1528;
				this.match(DartParser.T__15);
				this.state = 1529;
				this.match(DartParser.T__15);
				this.state = 1530;
				this.match(DartParser.T__1);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1531;
				this.match(DartParser.T__28);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1532;
				this.match(DartParser.T__29);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1533;
				this.match(DartParser.T__30);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1534;
				this.match(DartParser.T__31);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, DartParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1537;
			this.ifNullExpression();
			this.state = 1543;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1538;
				this.match(DartParser.T__9);
				this.state = 1539;
				this.expressionWithoutCascade();
				this.state = 1540;
				this.match(DartParser.T__11);
				this.state = 1541;
				this.expressionWithoutCascade();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifNullExpression(): IfNullExpressionContext {
		let _localctx: IfNullExpressionContext = new IfNullExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, DartParser.RULE_ifNullExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1545;
			this.logicalOrExpression();
			this.state = 1550;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1546;
					this.match(DartParser.T__32);
					this.state = 1547;
					this.logicalOrExpression();
					}
					}
				}
				this.state = 1552;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, DartParser.RULE_logicalOrExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1553;
			this.logicalAndExpression();
			this.state = 1558;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1554;
					this.match(DartParser.T__33);
					this.state = 1555;
					this.logicalAndExpression();
					}
					}
				}
				this.state = 1560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, DartParser.RULE_logicalAndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1561;
			this.equalityExpression();
			this.state = 1566;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1562;
					this.match(DartParser.T__34);
					this.state = 1563;
					this.equalityExpression();
					}
					}
				}
				this.state = 1568;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, DartParser.RULE_equalityExpression);
		try {
			this.state = 1579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1569;
				this.relationalExpression();
				this.state = 1573;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1570;
					this.equalityOperator();
					this.state = 1571;
					this.relationalExpression();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1575;
				this.match(DartParser.SUPER);
				this.state = 1576;
				this.equalityOperator();
				this.state = 1577;
				this.relationalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityOperator(): EqualityOperatorContext {
		let _localctx: EqualityOperatorContext = new EqualityOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, DartParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1581;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__13 || _la === DartParser.T__35)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, DartParser.RULE_relationalExpression);
		try {
			this.state = 1595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1583;
				this.bitwiseOrExpression();
				this.state = 1589;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
				case 1:
					{
					this.state = 1584;
					this.typeTest();
					}
					break;

				case 2:
					{
					this.state = 1585;
					this.typeCast();
					}
					break;

				case 3:
					{
					this.state = 1586;
					this.relationalOperator();
					this.state = 1587;
					this.bitwiseOrExpression();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1591;
				this.match(DartParser.SUPER);
				this.state = 1592;
				this.relationalOperator();
				this.state = 1593;
				this.bitwiseOrExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalOperator(): RelationalOperatorContext {
		let _localctx: RelationalOperatorContext = new RelationalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, DartParser.RULE_relationalOperator);
		try {
			this.state = 1602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1597;
				this.match(DartParser.T__15);
				this.state = 1598;
				this.match(DartParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1599;
				this.match(DartParser.T__15);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1600;
				this.match(DartParser.T__36);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1601;
				this.match(DartParser.T__14);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOrExpression(): BitwiseOrExpressionContext {
		let _localctx: BitwiseOrExpressionContext = new BitwiseOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, DartParser.RULE_bitwiseOrExpression);
		try {
			let _alt: number;
			this.state = 1619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1604;
				this.bitwiseXorExpression();
				this.state = 1609;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1605;
						this.match(DartParser.T__37);
						this.state = 1606;
						this.bitwiseXorExpression();
						}
						}
					}
					this.state = 1611;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1612;
				this.match(DartParser.SUPER);
				this.state = 1615;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1613;
						this.match(DartParser.T__37);
						this.state = 1614;
						this.bitwiseXorExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1617;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseXorExpression(): BitwiseXorExpressionContext {
		let _localctx: BitwiseXorExpressionContext = new BitwiseXorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, DartParser.RULE_bitwiseXorExpression);
		try {
			let _alt: number;
			this.state = 1636;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1621;
				this.bitwiseAndExpression();
				this.state = 1626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1622;
						this.match(DartParser.T__38);
						this.state = 1623;
						this.bitwiseAndExpression();
						}
						}
					}
					this.state = 1628;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1629;
				this.match(DartParser.SUPER);
				this.state = 1632;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1630;
						this.match(DartParser.T__38);
						this.state = 1631;
						this.bitwiseAndExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1634;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseAndExpression(): BitwiseAndExpressionContext {
		let _localctx: BitwiseAndExpressionContext = new BitwiseAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, DartParser.RULE_bitwiseAndExpression);
		try {
			let _alt: number;
			this.state = 1653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1638;
				this.shiftExpression();
				this.state = 1643;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1639;
						this.match(DartParser.T__39);
						this.state = 1640;
						this.shiftExpression();
						}
						}
					}
					this.state = 1645;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1646;
				this.match(DartParser.SUPER);
				this.state = 1649;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1647;
						this.match(DartParser.T__39);
						this.state = 1648;
						this.shiftExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1651;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOperator(): BitwiseOperatorContext {
		let _localctx: BitwiseOperatorContext = new BitwiseOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, DartParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1655;
			_la = this._input.LA(1);
			if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (DartParser.T__37 - 38)) | (1 << (DartParser.T__38 - 38)) | (1 << (DartParser.T__39 - 38)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, DartParser.RULE_shiftExpression);
		try {
			let _alt: number;
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1657;
				this.additiveExpression();
				this.state = 1663;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1658;
						this.shiftOperator();
						this.state = 1659;
						this.additiveExpression();
						}
						}
					}
					this.state = 1665;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1666;
				this.match(DartParser.SUPER);
				this.state = 1670;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1667;
						this.shiftOperator();
						this.state = 1668;
						this.additiveExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1672;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftOperator(): ShiftOperatorContext {
		let _localctx: ShiftOperatorContext = new ShiftOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, DartParser.RULE_shiftOperator);
		try {
			this.state = 1682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1676;
				this.match(DartParser.T__40);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1677;
				this.match(DartParser.T__15);
				this.state = 1678;
				this.match(DartParser.T__15);
				this.state = 1679;
				this.match(DartParser.T__15);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1680;
				this.match(DartParser.T__15);
				this.state = 1681;
				this.match(DartParser.T__15);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, DartParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.state = 1701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1684;
				this.multiplicativeExpression();
				this.state = 1690;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1685;
						this.additiveOperator();
						this.state = 1686;
						this.multiplicativeExpression();
						}
						}
					}
					this.state = 1692;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1693;
				this.match(DartParser.SUPER);
				this.state = 1697;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1694;
						this.additiveOperator();
						this.state = 1695;
						this.multiplicativeExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1699;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveOperator(): AdditiveOperatorContext {
		let _localctx: AdditiveOperatorContext = new AdditiveOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, DartParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1703;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__41 || _la === DartParser.T__42)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, DartParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.state = 1722;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1705;
				this.unaryExpression();
				this.state = 1711;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1706;
						this.multiplicativeOperator();
						this.state = 1707;
						this.unaryExpression();
						}
						}
					}
					this.state = 1713;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1714;
				this.match(DartParser.SUPER);
				this.state = 1718;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1715;
						this.multiplicativeOperator();
						this.state = 1716;
						this.unaryExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1720;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeOperator(): MultiplicativeOperatorContext {
		let _localctx: MultiplicativeOperatorContext = new MultiplicativeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, DartParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1724;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__4 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (DartParser.T__43 - 44)) | (1 << (DartParser.T__44 - 44)) | (1 << (DartParser.T__45 - 44)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, DartParser.RULE_unaryExpression);
		try {
			this.state = 1740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1726;
				this.prefixOperator();
				this.state = 1727;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1729;
				this.awaitExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1730;
				this.postfixExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1733;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DartParser.T__42:
					{
					this.state = 1731;
					this.minusOperator();
					}
					break;
				case DartParser.T__12:
					{
					this.state = 1732;
					this.tildeOperator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1735;
				this.match(DartParser.SUPER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1737;
				this.incrementOperator();
				this.state = 1738;
				this.assignableExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixOperator(): PrefixOperatorContext {
		let _localctx: PrefixOperatorContext = new PrefixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, DartParser.RULE_prefixOperator);
		try {
			this.state = 1745;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__42:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1742;
				this.minusOperator();
				}
				break;
			case DartParser.T__46:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1743;
				this.negationOperator();
				}
				break;
			case DartParser.T__12:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1744;
				this.tildeOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minusOperator(): MinusOperatorContext {
		let _localctx: MinusOperatorContext = new MinusOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, DartParser.RULE_minusOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1747;
			this.match(DartParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public negationOperator(): NegationOperatorContext {
		let _localctx: NegationOperatorContext = new NegationOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, DartParser.RULE_negationOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1749;
			this.match(DartParser.T__46);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tildeOperator(): TildeOperatorContext {
		let _localctx: TildeOperatorContext = new TildeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, DartParser.RULE_tildeOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1751;
			this.match(DartParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public awaitExpression(): AwaitExpressionContext {
		let _localctx: AwaitExpressionContext = new AwaitExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, DartParser.RULE_awaitExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
			this.match(DartParser.AWAIT);
			this.state = 1754;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, DartParser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.state = 1766;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1756;
				this.assignableExpression();
				this.state = 1757;
				this.postfixOperator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1759;
				this.primary();
				this.state = 1763;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1760;
						this.selector();
						}
						}
					}
					this.state = 1765;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixOperator(): PostfixOperatorContext {
		let _localctx: PostfixOperatorContext = new PostfixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, DartParser.RULE_postfixOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1768;
			this.incrementOperator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, DartParser.RULE_selector);
		try {
			this.state = 1774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1770;
				this.match(DartParser.T__46);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1771;
				this.assignableSelector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1772;
				this.argumentPart();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1773;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentPart(): ArgumentPartContext {
		let _localctx: ArgumentPartContext = new ArgumentPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, DartParser.RULE_argumentPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1776;
				this.typeArguments();
				}
			}

			this.state = 1779;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incrementOperator(): IncrementOperatorContext {
		let _localctx: IncrementOperatorContext = new IncrementOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, DartParser.RULE_incrementOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1781;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__47 || _la === DartParser.T__48)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignableExpression(): AssignableExpressionContext {
		let _localctx: AssignableExpressionContext = new AssignableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, DartParser.RULE_assignableExpression);
		try {
			this.state = 1789;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1783;
				this.match(DartParser.SUPER);
				this.state = 1784;
				this.unconditionalAssignableSelector();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1785;
				this.primary();
				this.state = 1786;
				this.assignableSelectorPart();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1788;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignableSelectorPart(): AssignableSelectorPartContext {
		let _localctx: AssignableSelectorPartContext = new AssignableSelectorPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, DartParser.RULE_assignableSelectorPart);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1794;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1791;
					this.selector();
					}
					}
				}
				this.state = 1796;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			}
			this.state = 1797;
			this.assignableSelector();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext {
		let _localctx: UnconditionalAssignableSelectorContext = new UnconditionalAssignableSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, DartParser.RULE_unconditionalAssignableSelector);
		try {
			this.state = 1805;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1799;
				this.match(DartParser.T__7);
				this.state = 1800;
				this.expression();
				this.state = 1801;
				this.match(DartParser.T__8);
				}
				break;
			case DartParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1803;
				this.match(DartParser.T__10);
				this.state = 1804;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignableSelector(): AssignableSelectorContext {
		let _localctx: AssignableSelectorContext = new AssignableSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, DartParser.RULE_assignableSelector);
		try {
			this.state = 1815;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__7:
			case DartParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1807;
				this.unconditionalAssignableSelector();
				}
				break;
			case DartParser.T__49:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1808;
				this.match(DartParser.T__49);
				this.state = 1809;
				this.identifier();
				}
				break;
			case DartParser.T__9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1810;
				this.match(DartParser.T__9);
				this.state = 1811;
				this.match(DartParser.T__7);
				this.state = 1812;
				this.expression();
				this.state = 1813;
				this.match(DartParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierNotFUNCTION(): IdentifierNotFUNCTIONContext {
		let _localctx: IdentifierNotFUNCTIONContext = new IdentifierNotFUNCTIONContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, DartParser.RULE_identifierNotFUNCTION);
		let _la: number;
		try {
			this.state = 1827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1817;
				this.match(DartParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1818;
				this.builtInIdentifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1819;
				this.match(DartParser.ASYNC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1820;
				this.match(DartParser.HIDE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1821;
				this.match(DartParser.OF);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1822;
				this.match(DartParser.ON);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1823;
				this.match(DartParser.SHOW);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1824;
				this.match(DartParser.SYNC);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1825;
				if (!( asyncEtcPredicate(getCurrentToken().getType()) )) {
					throw this.createFailedPredicateException(" asyncEtcPredicate(getCurrentToken().getType()) ");
				}
				this.state = 1826;
				_la = this._input.LA(1);
				if (!(_la === DartParser.AWAIT || _la === DartParser.YIELD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, DartParser.RULE_identifier);
		try {
			this.state = 1831;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1829;
				this.identifierNotFUNCTION();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1830;
				this.match(DartParser.FUNCTION);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, DartParser.RULE_qualifiedName);
		try {
			this.state = 1847;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1833;
				this.typeIdentifier();
				this.state = 1834;
				this.match(DartParser.T__10);
				this.state = 1837;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1835;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1836;
					this.match(DartParser.NEW);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1839;
				this.typeIdentifier();
				this.state = 1840;
				this.match(DartParser.T__10);
				this.state = 1841;
				this.typeIdentifier();
				this.state = 1842;
				this.match(DartParser.T__10);
				this.state = 1845;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
				case 1:
					{
					this.state = 1843;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1844;
					this.match(DartParser.NEW);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let _localctx: TypeIdentifierContext = new TypeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, DartParser.RULE_typeIdentifier);
		let _la: number;
		try {
			this.state = 1859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1849;
				this.match(DartParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1850;
				this.match(DartParser.DYNAMIC);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1851;
				this.match(DartParser.ASYNC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1852;
				this.match(DartParser.HIDE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1853;
				this.match(DartParser.OF);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1854;
				this.match(DartParser.ON);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1855;
				this.match(DartParser.SHOW);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1856;
				this.match(DartParser.SYNC);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1857;
				if (!( asyncEtcPredicate(getCurrentToken().getType()) )) {
					throw this.createFailedPredicateException(" asyncEtcPredicate(getCurrentToken().getType()) ");
				}
				this.state = 1858;
				_la = this._input.LA(1);
				if (!(_la === DartParser.AWAIT || _la === DartParser.YIELD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTest(): TypeTestContext {
		let _localctx: TypeTestContext = new TypeTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, DartParser.RULE_typeTest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1861;
			this.isOperator();
			this.state = 1862;
			this.typeNotVoid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public isOperator(): IsOperatorContext {
		let _localctx: IsOperatorContext = new IsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, DartParser.RULE_isOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1864;
			this.match(DartParser.IS);
			this.state = 1866;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				{
				this.state = 1865;
				this.match(DartParser.T__46);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeCast(): TypeCastContext {
		let _localctx: TypeCastContext = new TypeCastContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, DartParser.RULE_typeCast);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1868;
			this.asOperator();
			this.state = 1869;
			this.typeNotVoid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asOperator(): AsOperatorContext {
		let _localctx: AsOperatorContext = new AsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, DartParser.RULE_asOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1871;
			this.match(DartParser.AS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, DartParser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1876;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1873;
					this.statement();
					}
					}
				}
				this.state = 1878;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, DartParser.RULE_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1882;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1879;
					this.label();
					}
					}
				}
				this.state = 1884;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
			}
			this.state = 1885;
			this.nonLabelledStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonLabelledStatement(): NonLabelledStatementContext {
		let _localctx: NonLabelledStatementContext = new NonLabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, DartParser.RULE_nonLabelledStatement);
		try {
			this.state = 1904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1887;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1888;
				this.localVariableDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1889;
				this.forStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1890;
				this.whileStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1891;
				this.doStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1892;
				this.switchStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1893;
				this.ifStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1894;
				this.rethrowStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1895;
				this.tryStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1896;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1897;
				this.continueStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1898;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1899;
				this.localFunctionDeclaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1900;
				this.assertStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1901;
				this.yieldStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1902;
				this.yieldEachStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1903;
				this.expressionStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, DartParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1907;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1906;
				this.expression();
				}
				break;
			}
			this.state = 1909;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, DartParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1911;
			this.metadata();
			this.state = 1912;
			this.initializedVariableDeclaration();
			this.state = 1913;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializedVariableDeclaration(): InitializedVariableDeclarationContext {
		let _localctx: InitializedVariableDeclarationContext = new InitializedVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, DartParser.RULE_initializedVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1915;
			this.declaredIdentifier();
			this.state = 1918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__1) {
				{
				this.state = 1916;
				this.match(DartParser.T__1);
				this.state = 1917;
				this.expression();
				}
			}

			this.state = 1924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 1920;
				this.match(DartParser.T__2);
				this.state = 1921;
				this.initializedIdentifier();
				}
				}
				this.state = 1926;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localFunctionDeclaration(): LocalFunctionDeclarationContext {
		let _localctx: LocalFunctionDeclarationContext = new LocalFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, DartParser.RULE_localFunctionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1927;
			this.metadata();
			this.state = 1928;
			this.functionSignature();
			this.state = 1929;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, DartParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1931;
			this.match(DartParser.IF);
			this.state = 1932;
			this.match(DartParser.T__5);
			this.state = 1933;
			this.expression();
			this.state = 1934;
			this.match(DartParser.T__6);
			this.state = 1935;
			this.statement();
			this.state = 1938;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				{
				this.state = 1936;
				this.match(DartParser.ELSE);
				this.state = 1937;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, DartParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.AWAIT) {
				{
				this.state = 1940;
				this.match(DartParser.AWAIT);
				}
			}

			this.state = 1943;
			this.match(DartParser.FOR);
			this.state = 1944;
			this.match(DartParser.T__5);
			this.state = 1945;
			this.forLoopParts();
			this.state = 1946;
			this.match(DartParser.T__6);
			this.state = 1947;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forLoopParts(): ForLoopPartsContext {
		let _localctx: ForLoopPartsContext = new ForLoopPartsContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, DartParser.RULE_forLoopParts);
		try {
			this.state = 1967;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1949;
				this.metadata();
				this.state = 1950;
				this.declaredIdentifier();
				this.state = 1951;
				this.match(DartParser.IN);
				this.state = 1952;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1954;
				this.metadata();
				this.state = 1955;
				this.identifier();
				this.state = 1956;
				this.match(DartParser.IN);
				this.state = 1957;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1959;
				this.forInitializerStatement();
				this.state = 1961;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1960;
					this.expression();
					}
					break;
				}
				this.state = 1963;
				this.match(DartParser.T__0);
				this.state = 1965;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
				case 1:
					{
					this.state = 1964;
					this.expressionList();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInitializerStatement(): ForInitializerStatementContext {
		let _localctx: ForInitializerStatementContext = new ForInitializerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, DartParser.RULE_forInitializerStatement);
		try {
			this.state = 1974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1969;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1971;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
				case 1:
					{
					this.state = 1970;
					this.expression();
					}
					break;
				}
				this.state = 1973;
				this.match(DartParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, DartParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1976;
			this.match(DartParser.WHILE);
			this.state = 1977;
			this.match(DartParser.T__5);
			this.state = 1978;
			this.expression();
			this.state = 1979;
			this.match(DartParser.T__6);
			this.state = 1980;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, DartParser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1982;
			this.match(DartParser.DO);
			this.state = 1983;
			this.statement();
			this.state = 1984;
			this.match(DartParser.WHILE);
			this.state = 1985;
			this.match(DartParser.T__5);
			this.state = 1986;
			this.expression();
			this.state = 1987;
			this.match(DartParser.T__6);
			this.state = 1988;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, DartParser.RULE_switchStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1990;
			this.match(DartParser.SWITCH);
			this.state = 1991;
			this.match(DartParser.T__5);
			this.state = 1992;
			this.expression();
			this.state = 1993;
			this.match(DartParser.T__6);
			this.state = 1994;
			this.match(DartParser.LBRACE);
			this.state = 1998;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1995;
					this.switchCase();
					}
					}
				}
				this.state = 2000;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			}
			this.state = 2002;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				{
				this.state = 2001;
				this.defaultCase();
				}
				break;
			}
			this.state = 2004;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCase(): SwitchCaseContext {
		let _localctx: SwitchCaseContext = new SwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, DartParser.RULE_switchCase);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2009;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2006;
					this.label();
					}
					}
				}
				this.state = 2011;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			}
			this.state = 2012;
			this.match(DartParser.CASE);
			this.state = 2013;
			this.expression();
			this.state = 2014;
			this.match(DartParser.T__11);
			this.state = 2015;
			this.statements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultCase(): DefaultCaseContext {
		let _localctx: DefaultCaseContext = new DefaultCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, DartParser.RULE_defaultCase);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2020;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2017;
					this.label();
					}
					}
				}
				this.state = 2022;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			}
			this.state = 2023;
			this.match(DartParser.DEFAULT);
			this.state = 2024;
			this.match(DartParser.T__11);
			this.state = 2025;
			this.statements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rethrowStatement(): RethrowStatementContext {
		let _localctx: RethrowStatementContext = new RethrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, DartParser.RULE_rethrowStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2027;
			this.match(DartParser.RETHROW);
			this.state = 2028;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, DartParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2030;
			this.match(DartParser.TRY);
			this.state = 2031;
			this.block();
			this.state = 2037;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.CATCH:
			case DartParser.ON:
				{
				this.state = 2032;
				this.onParts();
				this.state = 2034;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 2033;
					this.finallyPart();
					}
					break;
				}
				}
				break;
			case DartParser.FINALLY:
				{
				this.state = 2036;
				this.finallyPart();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onPart(): OnPartContext {
		let _localctx: OnPartContext = new OnPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, DartParser.RULE_onPart);
		let _la: number;
		try {
			this.state = 2049;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.CATCH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2039;
				this.catchPart();
				this.state = 2040;
				this.block();
				}
				break;
			case DartParser.ON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2042;
				this.match(DartParser.ON);
				this.state = 2043;
				this.typeNotVoid();
				this.state = 2045;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.CATCH) {
					{
					this.state = 2044;
					this.catchPart();
					}
				}

				this.state = 2047;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onParts(): OnPartsContext {
		let _localctx: OnPartsContext = new OnPartsContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, DartParser.RULE_onParts);
		try {
			this.state = 2055;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2051;
				this.onPart();
				this.state = 2052;
				this.onParts();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2054;
				this.onPart();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchPart(): CatchPartContext {
		let _localctx: CatchPartContext = new CatchPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, DartParser.RULE_catchPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2057;
			this.match(DartParser.CATCH);
			this.state = 2058;
			this.match(DartParser.T__5);
			this.state = 2059;
			this.identifier();
			this.state = 2062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2060;
				this.match(DartParser.T__2);
				this.state = 2061;
				this.identifier();
				}
			}

			this.state = 2064;
			this.match(DartParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyPart(): FinallyPartContext {
		let _localctx: FinallyPartContext = new FinallyPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, DartParser.RULE_finallyPart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2066;
			this.match(DartParser.FINALLY);
			this.state = 2067;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, DartParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2069;
			this.match(DartParser.RETURN);
			this.state = 2071;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				{
				this.state = 2070;
				this.expression();
				}
				break;
			}
			this.state = 2073;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, DartParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2075;
			this.identifier();
			this.state = 2076;
			this.match(DartParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, DartParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2078;
			this.match(DartParser.BREAK);
			this.state = 2080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				{
				this.state = 2079;
				this.identifier();
				}
				break;
			}
			this.state = 2082;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, DartParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2084;
			this.match(DartParser.CONTINUE);
			this.state = 2086;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				{
				this.state = 2085;
				this.identifier();
				}
				break;
			}
			this.state = 2088;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let _localctx: YieldStatementContext = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, DartParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2090;
			this.match(DartParser.YIELD);
			this.state = 2091;
			this.expression();
			this.state = 2092;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldEachStatement(): YieldEachStatementContext {
		let _localctx: YieldEachStatementContext = new YieldEachStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, DartParser.RULE_yieldEachStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2094;
			this.match(DartParser.YIELD);
			this.state = 2095;
			this.match(DartParser.T__4);
			this.state = 2096;
			this.expression();
			this.state = 2097;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, DartParser.RULE_assertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2099;
			this.assertion();
			this.state = 2100;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertion(): AssertionContext {
		let _localctx: AssertionContext = new AssertionContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, DartParser.RULE_assertion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2102;
			this.match(DartParser.ASSERT);
			this.state = 2103;
			this.match(DartParser.T__5);
			this.state = 2104;
			this.expression();
			this.state = 2107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				{
				this.state = 2105;
				this.match(DartParser.T__2);
				this.state = 2106;
				this.expression();
				}
				break;
			}
			this.state = 2110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2109;
				this.match(DartParser.T__2);
				}
			}

			this.state = 2112;
			this.match(DartParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryName(): LibraryNameContext {
		let _localctx: LibraryNameContext = new LibraryNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, DartParser.RULE_libraryName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2114;
			this.metadata();
			this.state = 2115;
			this.match(DartParser.LIBRARY);
			this.state = 2116;
			this.dottedIdentifierList();
			this.state = 2117;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dottedIdentifierList(): DottedIdentifierListContext {
		let _localctx: DottedIdentifierListContext = new DottedIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, DartParser.RULE_dottedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2119;
			this.identifier();
			this.state = 2124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__10) {
				{
				{
				this.state = 2120;
				this.match(DartParser.T__10);
				this.state = 2121;
				this.identifier();
				}
				}
				this.state = 2126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importOrExport(): ImportOrExportContext {
		let _localctx: ImportOrExportContext = new ImportOrExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, DartParser.RULE_importOrExport);
		try {
			this.state = 2129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2127;
				this.libraryImport();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2128;
				this.libraryExport();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryImport(): LibraryImportContext {
		let _localctx: LibraryImportContext = new LibraryImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, DartParser.RULE_libraryImport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2131;
			this.metadata();
			this.state = 2132;
			this.importSpecification();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importSpecification(): ImportSpecificationContext {
		let _localctx: ImportSpecificationContext = new ImportSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, DartParser.RULE_importSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2134;
			this.match(DartParser.IMPORT);
			this.state = 2135;
			this.configurableUri();
			this.state = 2141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.AS || _la === DartParser.DEFERRED) {
				{
				this.state = 2137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.DEFERRED) {
					{
					this.state = 2136;
					this.match(DartParser.DEFERRED);
					}
				}

				this.state = 2139;
				this.match(DartParser.AS);
				this.state = 2140;
				this.identifier();
				}
			}

			this.state = 2146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.HIDE || _la === DartParser.SHOW) {
				{
				{
				this.state = 2143;
				this.combinator();
				}
				}
				this.state = 2148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2149;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public combinator(): CombinatorContext {
		let _localctx: CombinatorContext = new CombinatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, DartParser.RULE_combinator);
		try {
			this.state = 2155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.SHOW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2151;
				this.match(DartParser.SHOW);
				this.state = 2152;
				this.identifierList();
				}
				break;
			case DartParser.HIDE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2153;
				this.match(DartParser.HIDE);
				this.state = 2154;
				this.identifierList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, DartParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2157;
			this.identifier();
			this.state = 2162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 2158;
				this.match(DartParser.T__2);
				this.state = 2159;
				this.identifier();
				}
				}
				this.state = 2164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryExport(): LibraryExportContext {
		let _localctx: LibraryExportContext = new LibraryExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, DartParser.RULE_libraryExport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2165;
			this.metadata();
			this.state = 2166;
			this.match(DartParser.EXPORT);
			this.state = 2167;
			this.uri();
			this.state = 2171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.HIDE || _la === DartParser.SHOW) {
				{
				{
				this.state = 2168;
				this.combinator();
				}
				}
				this.state = 2173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2174;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partDirective(): PartDirectiveContext {
		let _localctx: PartDirectiveContext = new PartDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, DartParser.RULE_partDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			this.metadata();
			this.state = 2177;
			this.match(DartParser.PART);
			this.state = 2178;
			this.uri();
			this.state = 2179;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partHeader(): PartHeaderContext {
		let _localctx: PartHeaderContext = new PartHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, DartParser.RULE_partHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2181;
			this.metadata();
			this.state = 2182;
			this.match(DartParser.PART);
			this.state = 2183;
			this.match(DartParser.OF);
			this.state = 2186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2184;
				this.dottedIdentifierList();
				}
				break;

			case 2:
				{
				this.state = 2185;
				this.uri();
				}
				break;
			}
			this.state = 2188;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partDeclaration(): PartDeclarationContext {
		let _localctx: PartDeclarationContext = new PartDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, DartParser.RULE_partDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			this.partHeader();
			this.state = 2194;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2191;
					this.topLevelDefinition();
					}
					}
				}
				this.state = 2196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
			}
			this.state = 2197;
			this.match(DartParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uri(): UriContext {
		let _localctx: UriContext = new UriContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, DartParser.RULE_uri);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2199;
			this.stringLiteralWithoutInterpolation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public configurableUri(): ConfigurableUriContext {
		let _localctx: ConfigurableUriContext = new ConfigurableUriContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, DartParser.RULE_configurableUri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2201;
			this.uri();
			this.state = 2205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.IF) {
				{
				{
				this.state = 2202;
				this.configurationUri();
				}
				}
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public configurationUri(): ConfigurationUriContext {
		let _localctx: ConfigurationUriContext = new ConfigurationUriContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, DartParser.RULE_configurationUri);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2208;
			this.match(DartParser.IF);
			this.state = 2209;
			this.match(DartParser.T__5);
			this.state = 2210;
			this.uriTest();
			this.state = 2211;
			this.match(DartParser.T__6);
			this.state = 2212;
			this.uri();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uriTest(): UriTestContext {
		let _localctx: UriTestContext = new UriTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, DartParser.RULE_uriTest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2214;
			this.dottedIdentifierList();
			this.state = 2217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__13) {
				{
				this.state = 2215;
				this.match(DartParser.T__13);
				this.state = 2216;
				this.stringLiteral();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, DartParser.RULE_type);
		try {
			this.state = 2224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2219;
				this.functionType();
				this.state = 2221;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
				case 1:
					{
					this.state = 2220;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2223;
				this.typeNotFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotVoid(): TypeNotVoidContext {
		let _localctx: TypeNotVoidContext = new TypeNotVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, DartParser.RULE_typeNotVoid);
		try {
			this.state = 2231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2226;
				this.functionType();
				this.state = 2228;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
				case 1:
					{
					this.state = 2227;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2230;
				this.typeNotVoidNotFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotFunction(): TypeNotFunctionContext {
		let _localctx: TypeNotFunctionContext = new TypeNotFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, DartParser.RULE_typeNotFunction);
		try {
			this.state = 2235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2233;
				this.typeNotVoidNotFunction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2234;
				this.match(DartParser.VOID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext {
		let _localctx: TypeNotVoidNotFunctionContext = new TypeNotVoidNotFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, DartParser.RULE_typeNotVoidNotFunction);
		try {
			this.state = 2248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2237;
				this.typeName();
				this.state = 2239;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 253, this._ctx) ) {
				case 1:
					{
					this.state = 2238;
					this.typeArguments();
					}
					break;
				}
				this.state = 2242;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
				case 1:
					{
					this.state = 2241;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2244;
				this.match(DartParser.FUNCTION);
				this.state = 2246;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 2245;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, DartParser.RULE_typeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2250;
			this.typeIdentifier();
			this.state = 2253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				this.state = 2251;
				this.match(DartParser.T__10);
				this.state = 2252;
				this.typeIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, DartParser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2255;
			this.match(DartParser.T__14);
			this.state = 2256;
			this.typeList();
			this.state = 2257;
			this.match(DartParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, DartParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2259;
			this.type();
			this.state = 2264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 2260;
				this.match(DartParser.T__2);
				this.state = 2261;
				this.type();
				}
				}
				this.state = 2266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotVoidNotFunctionList(): TypeNotVoidNotFunctionListContext {
		let _localctx: TypeNotVoidNotFunctionListContext = new TypeNotVoidNotFunctionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, DartParser.RULE_typeNotVoidNotFunctionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2267;
			this.typeNotVoidNotFunction();
			this.state = 2272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 2268;
				this.match(DartParser.T__2);
				this.state = 2269;
				this.typeNotVoidNotFunction();
				}
				}
				this.state = 2274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAlias(): TypeAliasContext {
		let _localctx: TypeAliasContext = new TypeAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, DartParser.RULE_typeAlias);
		let _la: number;
		try {
			this.state = 2286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2275;
				this.match(DartParser.TYPEDEF);
				this.state = 2276;
				this.typeIdentifier();
				this.state = 2278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__14) {
					{
					this.state = 2277;
					this.typeParameters();
					}
				}

				this.state = 2280;
				this.match(DartParser.T__1);
				this.state = 2281;
				this.type();
				this.state = 2282;
				this.match(DartParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2284;
				this.match(DartParser.TYPEDEF);
				this.state = 2285;
				this.functionTypeAlias();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeAlias(): FunctionTypeAliasContext {
		let _localctx: FunctionTypeAliasContext = new FunctionTypeAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, DartParser.RULE_functionTypeAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2288;
			this.functionPrefix();
			this.state = 2289;
			this.formalParameterPart();
			this.state = 2290;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionPrefix(): FunctionPrefixContext {
		let _localctx: FunctionPrefixContext = new FunctionPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, DartParser.RULE_functionPrefix);
		try {
			this.state = 2296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2292;
				this.type();
				this.state = 2293;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2295;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeTail(): FunctionTypeTailContext {
		let _localctx: FunctionTypeTailContext = new FunctionTypeTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, DartParser.RULE_functionTypeTail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2298;
			this.match(DartParser.FUNCTION);
			this.state = 2300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 2299;
				this.typeParameters();
				}
			}

			this.state = 2302;
			this.parameterTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeTails(): FunctionTypeTailsContext {
		let _localctx: FunctionTypeTailsContext = new FunctionTypeTailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, DartParser.RULE_functionTypeTails);
		let _la: number;
		try {
			this.state = 2311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 265, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2304;
				this.functionTypeTail();
				this.state = 2306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__9) {
					{
					this.state = 2305;
					this.match(DartParser.T__9);
					}
				}

				this.state = 2308;
				this.functionTypeTails();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2310;
				this.functionTypeTail();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, DartParser.RULE_functionType);
		try {
			this.state = 2317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2313;
				this.functionTypeTails();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2314;
				this.typeNotFunction();
				this.state = 2315;
				this.functionTypeTails();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterTypeList(): ParameterTypeListContext {
		let _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, DartParser.RULE_parameterTypeList);
		let _la: number;
		try {
			this.state = 2338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2319;
				this.match(DartParser.T__5);
				this.state = 2320;
				this.match(DartParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2321;
				this.match(DartParser.T__5);
				this.state = 2322;
				this.normalParameterTypes();
				this.state = 2323;
				this.match(DartParser.T__2);
				this.state = 2324;
				this.optionalParameterTypes();
				this.state = 2325;
				this.match(DartParser.T__6);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2327;
				this.match(DartParser.T__5);
				this.state = 2328;
				this.normalParameterTypes();
				this.state = 2330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 2329;
					this.match(DartParser.T__2);
					}
				}

				this.state = 2332;
				this.match(DartParser.T__6);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2334;
				this.match(DartParser.T__5);
				this.state = 2335;
				this.optionalParameterTypes();
				this.state = 2336;
				this.match(DartParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalParameterTypes(): NormalParameterTypesContext {
		let _localctx: NormalParameterTypesContext = new NormalParameterTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, DartParser.RULE_normalParameterTypes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2340;
			this.normalParameterType();
			this.state = 2345;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2341;
					this.match(DartParser.T__2);
					this.state = 2342;
					this.normalParameterType();
					}
					}
				}
				this.state = 2347;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalParameterType(): NormalParameterTypeContext {
		let _localctx: NormalParameterTypeContext = new NormalParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, DartParser.RULE_normalParameterType);
		try {
			this.state = 2354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2348;
				this.metadata();
				this.state = 2349;
				this.typedIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2351;
				this.metadata();
				this.state = 2352;
				this.type();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalParameterTypes(): OptionalParameterTypesContext {
		let _localctx: OptionalParameterTypesContext = new OptionalParameterTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, DartParser.RULE_optionalParameterTypes);
		try {
			this.state = 2358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2356;
				this.optionalPositionalParameterTypes();
				}
				break;
			case DartParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2357;
				this.namedParameterTypes();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalPositionalParameterTypes(): OptionalPositionalParameterTypesContext {
		let _localctx: OptionalPositionalParameterTypesContext = new OptionalPositionalParameterTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, DartParser.RULE_optionalPositionalParameterTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2360;
			this.match(DartParser.T__7);
			this.state = 2361;
			this.normalParameterTypes();
			this.state = 2363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2362;
				this.match(DartParser.T__2);
				}
			}

			this.state = 2365;
			this.match(DartParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedParameterTypes(): NamedParameterTypesContext {
		let _localctx: NamedParameterTypesContext = new NamedParameterTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, DartParser.RULE_namedParameterTypes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2367;
			this.match(DartParser.LBRACE);
			this.state = 2368;
			this.namedParameterType();
			this.state = 2373;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2369;
					this.match(DartParser.T__2);
					this.state = 2370;
					this.namedParameterType();
					}
					}
				}
				this.state = 2375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
			}
			this.state = 2377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2376;
				this.match(DartParser.T__2);
				}
			}

			this.state = 2379;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedParameterType(): NamedParameterTypeContext {
		let _localctx: NamedParameterTypeContext = new NamedParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, DartParser.RULE_namedParameterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2381;
			this.metadata();
			this.state = 2383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				this.state = 2382;
				this.match(DartParser.REQUIRED);
				}
				break;
			}
			this.state = 2385;
			this.typedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedIdentifier(): TypedIdentifierContext {
		let _localctx: TypedIdentifierContext = new TypedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, DartParser.RULE_typedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2387;
			this.type();
			this.state = 2388;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDesignation(): ConstructorDesignationContext {
		let _localctx: ConstructorDesignationContext = new ConstructorDesignationContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, DartParser.RULE_constructorDesignation);
		let _la: number;
		try {
			this.state = 2401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2390;
				this.typeIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2391;
				this.qualifiedName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2392;
				this.typeName();
				this.state = 2393;
				this.typeArguments();
				this.state = 2399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__10) {
					{
					this.state = 2394;
					this.match(DartParser.T__10);
					this.state = 2397;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
					case 1:
						{
						this.state = 2395;
						this.identifier();
						}
						break;

					case 2:
						{
						this.state = 2396;
						this.match(DartParser.NEW);
						}
						break;
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolLiteral(): SymbolLiteralContext {
		let _localctx: SymbolLiteralContext = new SymbolLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, DartParser.RULE_symbolLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2403;
			this.match(DartParser.T__50);
			this.state = 2414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
			case 1:
				{
				this.state = 2404;
				this.operator();
				}
				break;

			case 2:
				{
				{
				this.state = 2405;
				this.identifier();
				this.state = 2410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2406;
						this.match(DartParser.T__10);
						this.state = 2407;
						this.identifier();
						}
						}
					}
					this.state = 2412;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
				}
				}
				}
				break;

			case 3:
				{
				this.state = 2413;
				this.match(DartParser.VOID);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleStringWithoutInterpolation(): SingleStringWithoutInterpolationContext {
		let _localctx: SingleStringWithoutInterpolationContext = new SingleStringWithoutInterpolationContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, DartParser.RULE_singleStringWithoutInterpolation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2416;
			_la = this._input.LA(1);
			if (!(((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (DartParser.RAW_SINGLE_LINE_STRING - 118)) | (1 << (DartParser.RAW_MULTI_LINE_STRING - 118)) | (1 << (DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END - 118)) | (1 << (DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END - 118)) | (1 << (DartParser.MULTI_LINE_STRING_SQ_BEGIN_END - 118)) | (1 << (DartParser.MULTI_LINE_STRING_DQ_BEGIN_END - 118)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleLineString(): SingleLineStringContext {
		let _localctx: SingleLineStringContext = new SingleLineStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, DartParser.RULE_singleLineString);
		let _la: number;
		try {
			this.state = 2443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.RAW_SINGLE_LINE_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2418;
				this.match(DartParser.RAW_SINGLE_LINE_STRING);
				}
				break;
			case DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2419;
				this.match(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END);
				}
				break;
			case DartParser.SINGLE_LINE_STRING_SQ_BEGIN_MID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2420;
				this.match(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_MID);
				this.state = 2421;
				this.expression();
				this.state = 2426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.SINGLE_LINE_STRING_SQ_MID_MID) {
					{
					{
					this.state = 2422;
					this.match(DartParser.SINGLE_LINE_STRING_SQ_MID_MID);
					this.state = 2423;
					this.expression();
					}
					}
					this.state = 2428;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2429;
				this.match(DartParser.SINGLE_LINE_STRING_SQ_MID_END);
				}
				break;
			case DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2431;
				this.match(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END);
				}
				break;
			case DartParser.SINGLE_LINE_STRING_DQ_BEGIN_MID:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2432;
				this.match(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_MID);
				this.state = 2433;
				this.expression();
				this.state = 2438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.SINGLE_LINE_STRING_DQ_MID_MID) {
					{
					{
					this.state = 2434;
					this.match(DartParser.SINGLE_LINE_STRING_DQ_MID_MID);
					this.state = 2435;
					this.expression();
					}
					}
					this.state = 2440;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2441;
				this.match(DartParser.SINGLE_LINE_STRING_DQ_MID_END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiLineString(): MultiLineStringContext {
		let _localctx: MultiLineStringContext = new MultiLineStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, DartParser.RULE_multiLineString);
		let _la: number;
		try {
			this.state = 2470;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.RAW_MULTI_LINE_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2445;
				this.match(DartParser.RAW_MULTI_LINE_STRING);
				}
				break;
			case DartParser.MULTI_LINE_STRING_SQ_BEGIN_END:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2446;
				this.match(DartParser.MULTI_LINE_STRING_SQ_BEGIN_END);
				}
				break;
			case DartParser.MULTI_LINE_STRING_SQ_BEGIN_MID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2447;
				this.match(DartParser.MULTI_LINE_STRING_SQ_BEGIN_MID);
				this.state = 2448;
				this.expression();
				this.state = 2453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.MULTI_LINE_STRING_SQ_MID_MID) {
					{
					{
					this.state = 2449;
					this.match(DartParser.MULTI_LINE_STRING_SQ_MID_MID);
					this.state = 2450;
					this.expression();
					}
					}
					this.state = 2455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2456;
				this.match(DartParser.MULTI_LINE_STRING_SQ_MID_END);
				}
				break;
			case DartParser.MULTI_LINE_STRING_DQ_BEGIN_END:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2458;
				this.match(DartParser.MULTI_LINE_STRING_DQ_BEGIN_END);
				}
				break;
			case DartParser.MULTI_LINE_STRING_DQ_BEGIN_MID:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2459;
				this.match(DartParser.MULTI_LINE_STRING_DQ_BEGIN_MID);
				this.state = 2460;
				this.expression();
				this.state = 2465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.MULTI_LINE_STRING_DQ_MID_MID) {
					{
					{
					this.state = 2461;
					this.match(DartParser.MULTI_LINE_STRING_DQ_MID_MID);
					this.state = 2462;
					this.expression();
					}
					}
					this.state = 2467;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2468;
				this.match(DartParser.MULTI_LINE_STRING_DQ_MID_END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, DartParser.RULE_reservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2472;
			_la = this._input.LA(1);
			if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (DartParser.ASSERT - 52)) | (1 << (DartParser.BREAK - 52)) | (1 << (DartParser.CASE - 52)) | (1 << (DartParser.CATCH - 52)) | (1 << (DartParser.CLASS - 52)) | (1 << (DartParser.CONST - 52)) | (1 << (DartParser.CONTINUE - 52)) | (1 << (DartParser.DEFAULT - 52)) | (1 << (DartParser.DO - 52)) | (1 << (DartParser.ELSE - 52)) | (1 << (DartParser.ENUM - 52)) | (1 << (DartParser.EXTENDS - 52)) | (1 << (DartParser.FALSE - 52)) | (1 << (DartParser.FINAL - 52)) | (1 << (DartParser.FINALLY - 52)) | (1 << (DartParser.FOR - 52)) | (1 << (DartParser.IF - 52)) | (1 << (DartParser.IN - 52)) | (1 << (DartParser.IS - 52)) | (1 << (DartParser.NEW - 52)) | (1 << (DartParser.NULL - 52)) | (1 << (DartParser.RETHROW - 52)) | (1 << (DartParser.RETURN - 52)) | (1 << (DartParser.SUPER - 52)) | (1 << (DartParser.SWITCH - 52)) | (1 << (DartParser.THIS - 52)) | (1 << (DartParser.THROW - 52)) | (1 << (DartParser.TRUE - 52)) | (1 << (DartParser.TRY - 52)) | (1 << (DartParser.VAR - 52)) | (1 << (DartParser.VOID - 52)) | (1 << (DartParser.WHILE - 52)))) !== 0) || _la === DartParser.WITH)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public builtInIdentifier(): BuiltInIdentifierContext {
		let _localctx: BuiltInIdentifierContext = new BuiltInIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, DartParser.RULE_builtInIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2474;
			_la = this._input.LA(1);
			if (!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (DartParser.ABSTRACT - 85)) | (1 << (DartParser.AS - 85)) | (1 << (DartParser.COVARIANT - 85)) | (1 << (DartParser.DEFERRED - 85)) | (1 << (DartParser.DYNAMIC - 85)) | (1 << (DartParser.EXPORT - 85)) | (1 << (DartParser.EXTENSION - 85)) | (1 << (DartParser.EXTERNAL - 85)) | (1 << (DartParser.FACTORY - 85)) | (1 << (DartParser.FUNCTION - 85)) | (1 << (DartParser.GET - 85)) | (1 << (DartParser.IMPLEMENTS - 85)) | (1 << (DartParser.IMPORT - 85)) | (1 << (DartParser.INTERFACE - 85)) | (1 << (DartParser.LATE - 85)) | (1 << (DartParser.LIBRARY - 85)) | (1 << (DartParser.OPERATOR - 85)) | (1 << (DartParser.MIXIN - 85)) | (1 << (DartParser.PART - 85)) | (1 << (DartParser.REQUIRED - 85)) | (1 << (DartParser.SET - 85)) | (1 << (DartParser.STATIC - 85)) | (1 << (DartParser.TYPEDEF - 85)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 99:
			return this.cascade_sempred(_localctx as CascadeContext, predIndex);

		case 139:
			return this.identifierNotFUNCTION_sempred(_localctx as IdentifierNotFUNCTIONContext, predIndex);

		case 142:
			return this.typeIdentifier_sempred(_localctx as TypeIdentifierContext, predIndex);
		}
		return true;
	}
	private cascade_sempred(_localctx: CascadeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private identifierNotFUNCTION_sempred(_localctx: IdentifierNotFUNCTIONContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return  asyncEtcPredicate(getCurrentToken().getType()) ;
		}
		return true;
	}
	private typeIdentifier_sempred(_localctx: TypeIdentifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  asyncEtcPredicate(getCurrentToken().getType()) ;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x91\u09AF\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x03\x02\x05\x02\u01BE\n\x02" +
		"\x03\x02\x05\x02\u01C1\n\x02\x03\x02\x05\x02\u01C4\n\x02\x03\x02\x07\x02" +
		"\u01C7\n\x02\f\x02\x0E\x02\u01CA\v\x02\x03\x02\x07\x02\u01CD\n\x02\f\x02" +
		"\x0E\x02\u01D0\v\x02\x03\x02\x03\x02\x03\x02\x07\x02\u01D5\n\x02\f\x02" +
		"\x0E\x02\u01D8\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\u01FD\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\u0205\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u020B" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0211\n\x03\x03\x03\x03" +
		"\x03\x07\x03\u0215\n\x03\f\x03\x0E\x03\u0218\v\x03\x03\x03\x03\x03\x05" +
		"\x03\u021C\n\x03\x03\x04\x05\x04\u021F\n\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x05\x05\u0225\n\x05\x03\x05\x03\x05\x05\x05\u0229\n\x05\x03\x05\x03" +
		"\x05\x05\x05\u022D\n\x05\x03\x05\x05\x05\u0230\n\x05\x03\x05\x05\x05\u0233" +
		"\n\x05\x03\x06\x03\x06\x05\x06\u0237\n\x06\x03\x06\x05\x06\u023A\n\x06" +
		"\x03\x07\x03\x07\x05\x07\u023E\n\x07\x03\b\x03\b\x03\b\x05\b\u0243\n\b" +
		"\x03\t\x03\t\x03\t\x07\t\u0248\n\t\f\t\x0E\t\u024B\v\t\x03\n\x05\n\u024E" +
		"\n\n\x03\n\x03\n\x03\n\x03\v\x05\v\u0254\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\u025C\n\v\x03\v\x05\v\u025F\n\v\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0277\n\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\u027D\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\u0284" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u028D\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u029B\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x07\x10\u02A0\n\x10\f\x10\x0E\x10\u02A3\v\x10\x03\x11\x03\x11" +
		"\x05\x11\u02A7\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u02AD\n\x12" +
		"\f\x12\x0E\x12\u02B0\v\x12\x03\x12\x05\x12\u02B3\n\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u02BB\n\x13\f\x13\x0E\x13\u02BE" +
		"\v\x13\x03\x13\x05\x13\u02C1\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x05\x15\u02CB\n\x15\x03\x16\x05\x16\u02CE" +
		"\n\x16\x03\x16\x05\x16\u02D1\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u02D6" +
		"\n\x16\x03\x17\x03\x17\x05\x17\u02DA\n\x17\x03\x17\x05\x17\u02DD\n\x17" +
		"\x03\x18\x05\x18\u02E0\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\u02E7\n\x18\x05\x18\u02E9\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u02EE" +
		"\n\x19\x03\x1A\x05\x1A\u02F1\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02F6" +
		"\n\x1A\x03\x1B\x03\x1B\x05\x1B\u02FA\n\x1B\x03\x1C\x05\x1C\u02FD\n\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0302\n\x1C\x03\x1C\x05\x1C\u0305\n\x1C" +
		"\x03\x1C\x05\x1C\u0308\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u030E" +
		"\n\x1C\f\x1C\x0E\x1C\u0311\v\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0316" +
		"\n\x1C\x03\x1C\x03\x1C\x05\x1C\u031A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x05 \u032B\n \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x05\"\u0335" +
		"\n\"\x03\"\x03\"\x05\"\u0339\n\"\x03\"\x05\"\u033C\n\"\x03\"\x03\"\x03" +
		"\"\x03\"\x07\"\u0342\n\"\f\"\x0E\"\u0345\v\"\x03\"\x03\"\x03#\x03#\x03" +
		"$\x03$\x05$\u034D\n$\x03$\x05$\u0350\n$\x03$\x03$\x03$\x03$\x03$\x03$" +
		"\x07$\u0358\n$\f$\x0E$\u035B\v$\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x03" +
		"&\x03&\x05&\u0366\n&\x03&\x03&\x05&\u036A\n&\x03&\x03&\x05&\u036E\n&\x03" +
		"&\x03&\x03&\x05&\u0373\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x05\'\u037D\n\'\x05\'\u037F\n\'\x03\'\x03\'\x03\'\x05\'\u0384\n\'\x05" +
		"\'\u0386\n\'\x03\'\x03\'\x03\'\x05\'\u038B\n\'\x05\'\u038D\n\'\x03\'\x03" +
		"\'\x03\'\x05\'\u0392\n\'\x03\'\x03\'\x03\'\x05\'\u0397\n\'\x03\'\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x05\'\u039F\n\'\x03\'\x03\'\x03\'\x05\'\u03A4" +
		"\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03AA\n\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x05\'\u03B1\n\'\x03\'\x03\'\x03\'\x05\'\u03B6\n\'\x03\'\x03\'\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x05\'\u03BF\n\'\x03\'\x03\'\x03\'\x05\'\u03C4" +
		"\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03CA\n\'\x03\'\x03\'\x05\'\u03CE\n" +
		"\'\x03\'\x05\'\u03D1\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03D8\n\'" +
		"\x03\'\x03\'\x03\'\x05\'\u03DD\n\'\x05\'\u03DF\n\'\x03(\x03(\x03(\x07" +
		"(\u03E4\n(\f(\x0E(\u03E7\v(\x03)\x03)\x03)\x03)\x03*\x05*\u03EE\n*\x03" +
		"*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u03FB\n+\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x05,\u0403\n,\x03-\x05-\u0406\n-\x03-\x03-" +
		"\x03-\x03.\x05.\u040C\n.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030" +
		"\x030\x030\x050\u0419\n0\x050\u041B\n0\x031\x031\x031\x031\x031\x051\u0422" +
		"\n1\x051\u0424\n1\x031\x031\x032\x032\x032\x032\x072\u042C\n2\f2\x0E2" +
		"\u042F\v2\x033\x033\x033\x033\x033\x033\x053\u0437\n3\x033\x033\x033\x05" +
		"3\u043C\n3\x034\x034\x054\u0440\n4\x034\x034\x034\x034\x035\x035\x055" +
		"\u0448\n5\x036\x056\u044B\n6\x036\x036\x036\x036\x037\x057\u0452\n7\x03" +
		"7\x037\x037\x037\x037\x037\x038\x038\x038\x038\x039\x039\x039\x059\u0461" +
		"\n9\x03:\x03:\x03:\x05:\u0466\n:\x03:\x05:\u0469\n:\x03:\x05:\u046C\n" +
		":\x03:\x03:\x03:\x03:\x07:\u0472\n:\f:\x0E:\u0475\v:\x03:\x05:\u0478\n" +
		":\x03:\x03:\x03:\x03:\x07:\u047E\n:\f:\x0E:\u0481\v:\x05:\u0483\n:\x03" +
		":\x03:\x03;\x03;\x03;\x05;\u048A\n;\x03;\x03;\x03;\x05;\u048F\n;\x03;" +
		"\x03;\x03;\x03;\x05;\u0495\n;\x03<\x03<\x03<\x03<\x05<\u049B\n<\x03=\x03" +
		"=\x03=\x03=\x07=\u04A1\n=\f=\x0E=\u04A4\v=\x03=\x03=\x03>\x03>\x07>\u04AA" +
		"\n>\f>\x0E>\u04AD\v>\x03?\x03?\x03?\x03?\x03?\x05?\u04B4\n?\x03@\x03@" +
		"\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u04BE\n@\x03A\x03A\x03A\x03A\x03A" +
		"\x03A\x03A\x05A\u04C7\nA\x03B\x03B\x03B\x07B\u04CC\nB\fB\x0EB\u04CF\v" +
		"B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x05C\u04DF\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x05D\u04EC\nD\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u04F5\nE\x03F" +
		"\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x06I\u04FF\nI\rI\x0EI\u0500\x03J\x06" +
		"J\u0504\nJ\rJ\x0EJ\u0505\x03K\x05K\u0509\nK\x03K\x05K\u050C\nK\x03K\x03" +
		"K\x05K\u0510\nK\x03K\x03K\x03L\x05L\u0515\nL\x03L\x05L\u0518\nL\x03L\x03" +
		"L\x05L\u051C\nL\x03L\x03L\x03M\x03M\x03M\x07M\u0523\nM\fM\x0EM\u0526\v" +
		"M\x03M\x05M\u0529\nM\x03N\x03N\x03N\x03N\x03N\x05N\u0530\nN\x03O\x03O" +
		"\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x05R\u0542\nR\x03S\x05S\u0545\nS\x03S\x03S\x03S\x03S\x03S\x03S\x03T" +
		"\x03T\x05T\u054F\nT\x03T\x03T\x03T\x03U\x03U\x03U\x03V\x03V\x03V\x03W" +
		"\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05" +
		"X\u0568\nX\x03Y\x05Y\u056B\nY\x03Y\x03Y\x03Z\x03Z\x03Z\x03[\x03[\x03[" +
		"\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u057D\n[\x03\\\x03\\\x03" +
		"\\\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x05]\u058B\n]\x03]\x03" +
		"]\x03]\x03]\x05]\u0591\n]\x03^\x03^\x03^\x03^\x03^\x05^\u0598\n^\x03^" +
		"\x03^\x03_\x03_\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03b\x03b\x03" +
		"b\x05b\u05A9\nb\x05b\u05AB\nb\x03b\x03b\x03c\x03c\x03c\x07c\u05B2\nc\f" +
		"c\x0Ec\u05B5\vc\x03c\x03c\x03c\x07c\u05BA\nc\fc\x0Ec\u05BD\vc\x05c\u05BF" +
		"\nc\x03d\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x07e\u05CC" +
		"\ne\fe\x0Ee\u05CF\ve\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x05g\u05D9" +
		"\ng\x03h\x03h\x07h\u05DD\nh\fh\x0Eh\u05E0\vh\x03h\x03h\x03h\x05h\u05E5" +
		"\nh\x05h\u05E7\nh\x03i\x03i\x03i\x03j\x03j\x05j\u05EE\nj\x03k\x03k\x03" +
		"k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x03" +
		"k\x03k\x05k\u0602\nk\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u060A\nl\x03m" +
		"\x03m\x03m\x07m\u060F\nm\fm\x0Em\u0612\vm\x03n\x03n\x03n\x07n\u0617\n" +
		"n\fn\x0En\u061A\vn\x03o\x03o\x03o\x07o\u061F\no\fo\x0Eo\u0622\vo\x03p" +
		"\x03p\x03p\x03p\x05p\u0628\np\x03p\x03p\x03p\x03p\x05p\u062E\np\x03q\x03" +
		"q\x03r\x03r\x03r\x03r\x03r\x03r\x05r\u0638\nr\x03r\x03r\x03r\x03r\x05" +
		"r\u063E\nr\x03s\x03s\x03s\x03s\x03s\x05s\u0645\ns\x03t\x03t\x03t\x07t" +
		"\u064A\nt\ft\x0Et\u064D\vt\x03t\x03t\x03t\x06t\u0652\nt\rt\x0Et\u0653" +
		"\x05t\u0656\nt\x03u\x03u\x03u\x07u\u065B\nu\fu\x0Eu\u065E\vu\x03u\x03" +
		"u\x03u\x06u\u0663\nu\ru\x0Eu\u0664\x05u\u0667\nu\x03v\x03v\x03v\x07v\u066C" +
		"\nv\fv\x0Ev\u066F\vv\x03v\x03v\x03v\x06v\u0674\nv\rv\x0Ev\u0675\x05v\u0678" +
		"\nv\x03w\x03w\x03x\x03x\x03x\x03x\x07x\u0680\nx\fx\x0Ex\u0683\vx\x03x" +
		"\x03x\x03x\x03x\x06x\u0689\nx\rx\x0Ex\u068A\x05x\u068D\nx\x03y\x03y\x03" +
		"y\x03y\x03y\x03y\x05y\u0695\ny\x03z\x03z\x03z\x03z\x07z\u069B\nz\fz\x0E" +
		"z\u069E\vz\x03z\x03z\x03z\x03z\x06z\u06A4\nz\rz\x0Ez\u06A5\x05z\u06A8" +
		"\nz\x03{\x03{\x03|\x03|\x03|\x03|\x07|\u06B0\n|\f|\x0E|\u06B3\v|\x03|" +
		"\x03|\x03|\x03|\x06|\u06B9\n|\r|\x0E|\u06BA\x05|\u06BD\n|\x03}\x03}\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u06C8\n~\x03~\x03~\x03~\x03~\x03" +
		"~\x05~\u06CF\n~\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u06D4\n\x7F\x03\x80\x03" +
		"\x80\x03\x81\x03\x81\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x07\x84\u06E4\n\x84\f\x84\x0E\x84\u06E7\v" +
		"\x84\x05\x84\u06E9\n\x84\x03\x85\x03\x85\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x05\x86\u06F1\n\x86\x03\x87\x05\x87\u06F4\n\x87\x03\x87\x03\x87\x03\x88" +
		"\x03\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89\u0700" +
		"\n\x89\x03\x8A\x07\x8A\u0703\n\x8A\f\x8A\x0E\x8A\u0706\v\x8A\x03\x8A\x03" +
		"\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0710\n\x8B" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C" +
		"\u071A\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03" +
		"\x8D\x03\x8D\x03\x8D\x05\x8D\u0726\n\x8D\x03\x8E\x03\x8E\x05\x8E\u072A" +
		"\n\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u0730\n\x8F\x03\x8F\x03" +
		"\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u0738\n\x8F\x05\x8F\u073A" +
		"\n\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90" +
		"\x03\x90\x03\x90\x05\x90\u0746\n\x90\x03\x91\x03\x91\x03\x91\x03\x92\x03" +
		"\x92\x05\x92\u074D\n\x92\x03\x93\x03\x93\x03\x93\x03\x94\x03\x94\x03\x95" +
		"\x07\x95\u0755\n\x95\f\x95\x0E\x95\u0758\v\x95\x03\x96\x07\x96\u075B\n" +
		"\x96\f\x96\x0E\x96\u075E\v\x96\x03\x96\x03\x96\x03\x97\x03\x97\x03\x97" +
		"\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97" +
		"\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x05\x97\u0773\n\x97\x03\x98\x05" +
		"\x98\u0776\n\x98\x03\x98\x03\x98\x03\x99\x03\x99\x03\x99\x03\x99\x03\x9A" +
		"\x03\x9A\x03\x9A\x05\x9A\u0781\n\x9A\x03\x9A\x03\x9A\x07\x9A\u0785\n\x9A" +
		"\f\x9A\x0E\x9A\u0788\v\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9C\x03" +
		"\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x05\x9C\u0795\n\x9C\x03\x9D" +
		"\x05\x9D\u0798\n\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03" +
		"\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03" +
		"\x9E\x03\x9E\x03\x9E\x05\x9E\u07AC\n\x9E\x03\x9E\x03\x9E\x05\x9E\u07B0" +
		"\n\x9E\x05\x9E\u07B2\n\x9E\x03\x9F\x03\x9F\x05\x9F\u07B6\n\x9F\x03\x9F" +
		"\x05\x9F\u07B9\n\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03" +
		"\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA2\x03" +
		"\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x07\xA2\u07CF\n\xA2\f\xA2\x0E\xA2" +
		"\u07D2\v\xA2\x03\xA2\x05\xA2\u07D5\n\xA2\x03\xA2\x03\xA2\x03\xA3\x07\xA3" +
		"\u07DA\n\xA3\f\xA3\x0E\xA3\u07DD\v\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3" +
		"\x03\xA3\x03\xA4\x07\xA4\u07E5\n\xA4\f\xA4\x0E\xA4\u07E8\v\xA4\x03\xA4" +
		"\x03\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA6" +
		"\x03\xA6\x05\xA6\u07F5\n\xA6\x03\xA6\x05\xA6\u07F8\n\xA6\x03\xA7\x03\xA7" +
		"\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u0800\n\xA7\x03\xA7\x03\xA7\x05" +
		"\xA7\u0804\n\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u080A\n\xA8\x03" +
		"\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u0811\n\xA9\x03\xA9\x03\xA9" +
		"\x03\xAA\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x05\xAB\u081A\n\xAB\x03\xAB\x03" +
		"\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x05\xAD\u0823\n\xAD\x03\xAD" +
		"\x03\xAD\x03\xAE\x03\xAE\x05\xAE\u0829\n\xAE\x03\xAE\x03\xAE\x03\xAF\x03" +
		"\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB1\x03" +
		"\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x05\xB2\u083E\n\xB2" +
		"\x03\xB2\x05\xB2\u0841\n\xB2\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB3\x03" +
		"\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x07\xB4\u084D\n\xB4\f\xB4\x0E\xB4" +
		"\u0850\v\xB4\x03\xB5\x03\xB5\x05\xB5\u0854\n\xB5\x03\xB6\x03\xB6\x03\xB6" +
		"\x03\xB7\x03\xB7\x03\xB7\x05\xB7\u085C\n\xB7\x03\xB7\x03\xB7\x05\xB7\u0860" +
		"\n\xB7\x03\xB7\x07\xB7\u0863\n\xB7\f\xB7\x0E\xB7\u0866\v\xB7\x03\xB7\x03" +
		"\xB7\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u086E\n\xB8\x03\xB9\x03\xB9" +
		"\x03\xB9\x07\xB9\u0873\n\xB9\f\xB9\x0E\xB9\u0876\v\xB9\x03\xBA\x03\xBA" +
		"\x03\xBA\x03\xBA\x07\xBA\u087C\n\xBA\f\xBA\x0E\xBA\u087F\v\xBA\x03\xBA" +
		"\x03\xBA\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBC" +
		"\x03\xBC\x03\xBC\x05\xBC\u088D\n\xBC\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x07" +
		"\xBD\u0893\n\xBD\f\xBD\x0E\xBD\u0896\v\xBD\x03\xBD\x03\xBD\x03\xBE\x03" +
		"\xBE\x03\xBF\x03\xBF\x07\xBF\u089E\n\xBF\f\xBF\x0E\xBF\u08A1\v\xBF\x03" +
		"\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC1\x05" +
		"\xC1\u08AC\n\xC1\x03\xC2\x03\xC2\x05\xC2\u08B0\n\xC2\x03\xC2\x05\xC2\u08B3" +
		"\n\xC2\x03\xC3\x03\xC3\x05\xC3\u08B7\n\xC3\x03\xC3\x05\xC3\u08BA\n\xC3" +
		"\x03\xC4\x03\xC4\x05\xC4\u08BE\n\xC4\x03\xC5\x03\xC5\x05\xC5\u08C2\n\xC5" +
		"\x03\xC5\x05\xC5\u08C5\n\xC5\x03\xC5\x03\xC5\x05\xC5\u08C9\n\xC5\x05\xC5" +
		"\u08CB\n\xC5\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u08D0\n\xC6\x03\xC7\x03\xC7" +
		"\x03\xC7\x03\xC7\x03\xC8\x03\xC8\x03\xC8\x07\xC8\u08D9\n\xC8\f\xC8\x0E" +
		"\xC8\u08DC\v\xC8\x03\xC9\x03\xC9\x03\xC9\x07\xC9\u08E1\n\xC9\f\xC9\x0E" +
		"\xC9\u08E4\v\xC9\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08E9\n\xCA\x03\xCA\x03" +
		"\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08F1\n\xCA\x03\xCB\x03\xCB" +
		"\x03\xCB\x03\xCB\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u08FB\n\xCC\x03" +
		"\xCD\x03\xCD\x05\xCD\u08FF\n\xCD\x03\xCD\x03\xCD\x03\xCE\x03\xCE\x05\xCE" +
		"\u0905\n\xCE\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u090A\n\xCE\x03\xCF\x03\xCF" +
		"\x03\xCF\x03\xCF\x05\xCF\u0910\n\xCF\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03" +
		"\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x05\xD0\u091D\n\xD0" +
		"\x03";
	private static readonly _serializedATNSegment1: string =
		"\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x05\xD0\u0925\n\xD0\x03\xD1" +
		"\x03\xD1\x03\xD1\x07\xD1\u092A\n\xD1\f\xD1\x0E\xD1\u092D\v\xD1\x03\xD2" +
		"\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x05\xD2\u0935\n\xD2\x03\xD3\x03" +
		"\xD3\x05\xD3\u0939\n\xD3\x03\xD4\x03\xD4\x03\xD4\x05\xD4\u093E\n\xD4\x03" +
		"\xD4\x03\xD4\x03\xD5\x03\xD5\x03\xD5\x03\xD5\x07\xD5\u0946\n\xD5\f\xD5" +
		"\x0E\xD5\u0949\v\xD5\x03\xD5\x05\xD5\u094C\n\xD5\x03\xD5\x03\xD5\x03\xD6" +
		"\x03\xD6\x05\xD6\u0952\n\xD6\x03\xD6\x03\xD6\x03\xD7\x03\xD7\x03\xD7\x03" +
		"\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u0960\n\xD8" +
		"\x05\xD8\u0962\n\xD8\x05\xD8\u0964\n\xD8\x03\xD9\x03\xD9\x03\xD9\x03\xD9" +
		"\x03\xD9\x07\xD9\u096B\n\xD9\f\xD9\x0E\xD9\u096E\v\xD9\x03\xD9\x05\xD9" +
		"\u0971\n\xD9\x03\xDA\x03\xDA\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x03" +
		"\xDB\x07\xDB\u097B\n\xDB\f\xDB\x0E\xDB\u097E\v\xDB\x03\xDB\x03\xDB\x03" +
		"\xDB\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x07\xDB\u0987\n\xDB\f\xDB\x0E\xDB" +
		"\u098A\v\xDB\x03\xDB\x03\xDB\x05\xDB\u098E\n\xDB\x03\xDC\x03\xDC\x03\xDC" +
		"\x03\xDC\x03\xDC\x03\xDC\x07\xDC\u0996\n\xDC\f\xDC\x0E\xDC\u0999\v\xDC" +
		"\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x07\xDC\u09A2" +
		"\n\xDC\f\xDC\x0E\xDC\u09A5\v\xDC\x03\xDC\x03\xDC\x05\xDC\u09A9\n\xDC\x03" +
		"\xDD\x03\xDD\x03\xDE\x03\xDE\x03\xDE\x02\x02\x03\xC8\xDF\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02" +
		"h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82" +
		"\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94" +
		"\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6" +
		"\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8" +
		"\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA" +
		"\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC" +
		"\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE" +
		"\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100" +
		"\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E" +
		"\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C" +
		"\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A" +
		"\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138" +
		"\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146" +
		"\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154" +
		"\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162" +
		"\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170" +
		"\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E" +
		"\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C" +
		"\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02\u0196\x02\u0198\x02\u019A" +
		"\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2\x02\u01A4\x02\u01A6\x02\u01A8" +
		"\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0\x02\u01B2\x02\u01B4\x02\u01B6" +
		"\x02\u01B8\x02\u01BA\x02\x02\x11\x04\x02;;CC\x04\x02\x04\x04\x0E\x0E\x03" +
		"\x02vw\x04\x02BBQQ\x03\x02\x14\x15\x03\x02\x16\x17\x04\x02\x10\x10&&\x03" +
		"\x02(*\x03\x02,-\x04\x02\x07\x07.0\x03\x0223\x03\x02no\x06\x02xz~~\x82" +
		"\x82\x86\x86\x03\x026V\x03\x02Wm\x02\u0A7E\x02\u01BD\x03\x02\x02\x02\x04" +
		"\u021B\x03\x02\x02\x02\x06\u021E\x03\x02\x02\x02\b\u0232\x03\x02\x02\x02" +
		"\n\u0239\x03\x02\x02\x02\f\u023D\x03\x02\x02\x02\x0E\u023F\x03\x02\x02" +
		"\x02\x10\u0244\x03\x02\x02\x02\x12\u024D\x03\x02\x02\x02\x14\u025E\x03" +
		"\x02\x02\x02\x16\u027C\x03\x02\x02\x02\x18\u027E\x03\x02\x02\x02\x1A\u0283" +
		"\x03\x02\x02\x02\x1C\u029A\x03\x02\x02\x02\x1E\u029C\x03\x02\x02\x02 " +
		"\u02A6\x03\x02\x02\x02\"\u02A8\x03\x02\x02\x02$\u02B6\x03\x02\x02\x02" +
		"&\u02C4\x03\x02\x02\x02(\u02CA\x03\x02\x02\x02*\u02CD\x03\x02\x02\x02" +
		",\u02DC\x03\x02\x02\x02.\u02DF\x03\x02\x02\x020\u02EA\x03\x02\x02\x02" +
		"2\u02F0\x03\x02\x02\x024\u02F7\x03\x02\x02\x026\u0319\x03\x02\x02\x02" +
		"8\u031B\x03\x02\x02\x02:\u031E\x03\x02\x02\x02<\u0321\x03\x02\x02\x02" +
		">\u032A\x03\x02\x02\x02@\u032C\x03\x02\x02\x02B\u0331\x03\x02\x02\x02" +
		"D\u0348\x03\x02\x02\x02F\u034A\x03\x02\x02\x02H\u035E\x03\x02\x02\x02" +
		"J\u0372\x03\x02\x02\x02L\u03DE\x03\x02\x02\x02N\u03E0\x03\x02\x02\x02" +
		"P\u03E8\x03\x02\x02\x02R\u03ED\x03\x02\x02\x02T\u03FA\x03\x02\x02\x02" +
		"V\u0402\x03\x02\x02\x02X\u0405\x03\x02\x02\x02Z\u040B\x03\x02\x02\x02" +
		"\\\u0411\x03\x02\x02\x02^\u0414\x03\x02\x02\x02`\u041C\x03\x02\x02\x02" +
		"b\u0427\x03\x02\x02\x02d\u043B\x03\x02\x02\x02f\u043F\x03\x02\x02\x02" +
		"h\u0447\x03\x02\x02\x02j\u044A\x03\x02\x02\x02l\u0451\x03\x02\x02\x02" +
		"n\u0459\x03\x02\x02\x02p\u045D\x03\x02\x02\x02r\u0462\x03\x02\x02\x02" +
		"t\u0494\x03\x02\x02\x02v\u0496\x03\x02\x02\x02x\u049C\x03\x02\x02\x02" +
		"z\u04AB\x03\x02\x02\x02|\u04B3\x03\x02\x02\x02~\u04BD\x03\x02\x02\x02" +
		"\x80\u04C6\x03\x02\x02\x02\x82\u04C8\x03\x02\x02\x02\x84\u04DE\x03\x02" +
		"\x02\x02\x86\u04EB\x03\x02\x02\x02\x88\u04F4\x03\x02\x02\x02\x8A\u04F6" +
		"\x03\x02\x02\x02\x8C\u04F8\x03\x02\x02\x02\x8E\u04FA\x03\x02\x02\x02\x90" +
		"\u04FE\x03\x02\x02\x02\x92\u0503\x03\x02\x02\x02\x94\u0508\x03\x02\x02" +
		"\x02\x96\u0514\x03\x02\x02\x02\x98\u051F\x03\x02\x02\x02\x9A\u052F\x03" +
		"\x02\x02\x02\x9C\u0531\x03\x02\x02\x02\x9E\u0533\x03\x02\x02\x02\xA0\u0537" +
		"\x03\x02\x02\x02\xA2\u053A\x03\x02\x02\x02\xA4\u0544\x03\x02\x02\x02\xA6" +
		"\u054C\x03\x02\x02\x02\xA8\u0553\x03\x02\x02\x02\xAA\u0556\x03\x02\x02" +
		"\x02\xAC\u0559\x03\x02\x02\x02\xAE\u0567\x03\x02\x02\x02\xB0\u056A\x03" +
		"\x02\x02\x02\xB2\u056E\x03\x02\x02\x02\xB4\u057C\x03\x02\x02\x02\xB6\u057E" +
		"\x03\x02\x02\x02\xB8\u0590\x03\x02\x02\x02\xBA\u0597\x03\x02\x02\x02\xBC" +
		"\u059B\x03\x02\x02\x02\xBE\u059D\x03\x02\x02\x02\xC0\u05A1\x03\x02\x02" +
		"\x02\xC2\u05A5\x03\x02\x02\x02\xC4\u05BE\x03\x02\x02\x02\xC6\u05C0\x03" +
		"\x02\x02\x02\xC8\u05C3\x03\x02\x02\x02\xCA\u05D0\x03\x02\x02\x02\xCC\u05D8" +
		"\x03\x02\x02\x02\xCE\u05E6\x03\x02\x02\x02\xD0\u05E8\x03\x02\x02\x02\xD2" +
		"\u05ED\x03\x02\x02\x02\xD4\u0601\x03\x02\x02\x02\xD6\u0603\x03\x02\x02" +
		"\x02\xD8\u060B\x03\x02\x02\x02\xDA\u0613\x03\x02\x02\x02\xDC\u061B\x03" +
		"\x02\x02\x02\xDE\u062D\x03\x02\x02\x02\xE0\u062F\x03\x02\x02\x02\xE2\u063D" +
		"\x03\x02\x02\x02\xE4\u0644\x03\x02\x02\x02\xE6\u0655\x03\x02\x02\x02\xE8" +
		"\u0666\x03\x02\x02\x02\xEA\u0677\x03\x02\x02\x02\xEC\u0679\x03\x02\x02" +
		"\x02\xEE\u068C\x03\x02\x02\x02\xF0\u0694\x03\x02\x02\x02\xF2\u06A7\x03" +
		"\x02\x02\x02\xF4\u06A9\x03\x02\x02\x02\xF6\u06BC\x03\x02\x02\x02\xF8\u06BE" +
		"\x03\x02\x02\x02\xFA\u06CE\x03\x02\x02\x02\xFC\u06D3\x03\x02\x02\x02\xFE" +
		"\u06D5\x03\x02\x02\x02\u0100\u06D7\x03\x02\x02\x02\u0102\u06D9\x03\x02" +
		"\x02\x02\u0104\u06DB\x03\x02\x02\x02\u0106\u06E8\x03\x02\x02\x02\u0108" +
		"\u06EA\x03\x02\x02\x02\u010A\u06F0\x03\x02\x02\x02\u010C\u06F3\x03\x02" +
		"\x02\x02\u010E\u06F7\x03\x02\x02\x02\u0110\u06FF\x03\x02\x02\x02\u0112" +
		"\u0704\x03\x02\x02\x02\u0114\u070F\x03\x02\x02\x02\u0116\u0719\x03\x02" +
		"\x02\x02\u0118\u0725\x03\x02\x02\x02\u011A\u0729\x03\x02\x02\x02\u011C" +
		"\u0739\x03\x02\x02\x02\u011E\u0745\x03\x02\x02\x02\u0120\u0747\x03\x02" +
		"\x02\x02\u0122\u074A\x03\x02\x02\x02\u0124\u074E\x03\x02\x02\x02\u0126" +
		"\u0751\x03\x02\x02\x02\u0128\u0756\x03\x02\x02\x02\u012A\u075C\x03\x02" +
		"\x02\x02\u012C\u0772\x03\x02\x02\x02\u012E\u0775\x03\x02\x02\x02\u0130" +
		"\u0779\x03\x02\x02\x02\u0132\u077D\x03\x02\x02\x02\u0134\u0789\x03\x02" +
		"\x02\x02\u0136\u078D\x03\x02\x02\x02\u0138\u0797\x03\x02\x02\x02\u013A" +
		"\u07B1\x03\x02\x02\x02\u013C\u07B8\x03\x02\x02\x02\u013E\u07BA\x03\x02" +
		"\x02\x02\u0140\u07C0\x03\x02\x02\x02\u0142\u07C8\x03\x02\x02\x02\u0144" +
		"\u07DB\x03\x02\x02\x02\u0146\u07E6\x03\x02\x02\x02\u0148\u07ED\x03\x02" +
		"\x02\x02\u014A\u07F0\x03\x02\x02\x02\u014C\u0803\x03\x02\x02\x02\u014E" +
		"\u0809\x03\x02\x02\x02\u0150\u080B\x03\x02\x02\x02\u0152\u0814\x03\x02" +
		"\x02\x02\u0154\u0817\x03\x02\x02\x02\u0156\u081D\x03\x02\x02\x02\u0158" +
		"\u0820\x03\x02\x02\x02\u015A\u0826\x03\x02\x02\x02\u015C\u082C\x03\x02" +
		"\x02\x02\u015E\u0830\x03\x02\x02\x02\u0160\u0835\x03\x02\x02\x02\u0162" +
		"\u0838\x03\x02\x02\x02\u0164\u0844\x03\x02\x02\x02\u0166\u0849\x03\x02" +
		"\x02\x02\u0168\u0853\x03\x02\x02\x02\u016A\u0855\x03\x02\x02\x02\u016C" +
		"\u0858\x03\x02\x02\x02\u016E\u086D\x03\x02\x02\x02\u0170\u086F\x03\x02" +
		"\x02\x02\u0172\u0877\x03\x02\x02\x02\u0174\u0882\x03\x02\x02\x02\u0176" +
		"\u0887\x03\x02\x02\x02\u0178\u0890\x03\x02\x02\x02\u017A\u0899\x03\x02" +
		"\x02\x02\u017C\u089B\x03\x02\x02\x02\u017E\u08A2\x03\x02\x02\x02\u0180" +
		"\u08A8\x03\x02\x02\x02\u0182\u08B2\x03\x02\x02\x02\u0184\u08B9\x03\x02" +
		"\x02\x02\u0186\u08BD\x03\x02\x02\x02\u0188\u08CA\x03\x02\x02\x02\u018A" +
		"\u08CC\x03\x02\x02\x02\u018C\u08D1\x03\x02\x02\x02\u018E\u08D5\x03\x02" +
		"\x02\x02\u0190\u08DD\x03\x02\x02\x02\u0192\u08F0\x03\x02\x02\x02\u0194" +
		"\u08F2\x03\x02\x02\x02\u0196\u08FA\x03\x02\x02\x02\u0198\u08FC\x03\x02" +
		"\x02\x02\u019A\u0909\x03\x02\x02\x02\u019C\u090F\x03\x02\x02\x02\u019E" +
		"\u0924\x03\x02\x02\x02\u01A0\u0926\x03\x02\x02\x02\u01A2\u0934\x03\x02" +
		"\x02\x02\u01A4\u0938\x03\x02\x02\x02\u01A6\u093A\x03\x02\x02\x02\u01A8" +
		"\u0941\x03\x02\x02\x02\u01AA\u094F\x03\x02\x02\x02\u01AC\u0955\x03\x02" +
		"\x02\x02\u01AE\u0963\x03\x02\x02\x02\u01B0\u0965\x03\x02\x02\x02\u01B2" +
		"\u0972\x03\x02\x02\x02\u01B4\u098D\x03\x02\x02\x02\u01B6\u09A8\x03\x02" +
		"\x02\x02\u01B8\u09AA\x03\x02\x02\x02\u01BA\u09AC\x03\x02\x02\x02\u01BC" +
		"\u01BE\x07\x90\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02" +
		"\x02\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01C1\x07\x8C\x02\x02\u01C0" +
		"\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C3\x03\x02" +
		"\x02\x02\u01C2\u01C4\x05\u0164\xB3\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3" +
		"\u01C4\x03\x02\x02\x02\u01C4\u01C8\x03\x02\x02\x02\u01C5\u01C7\x05\u0168" +
		"\xB5\x02\u01C6\u01C5\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8" +
		"\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CE\x03\x02" +
		"\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB\u01CD\x05\u0174\xBB\x02\u01CC" +
		"\u01CB\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02" +
		"\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D6\x03\x02\x02\x02\u01D0" +
		"\u01CE\x03\x02\x02\x02\u01D1\u01D2\x05z>\x02\u01D2\u01D3\x05\x04\x03\x02" +
		"\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D1\x03\x02\x02\x02\u01D5\u01D8\x03" +
		"\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7" +
		"\u01D9\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DA\x07\x02" +
		"\x02\x03\u01DA\x03\x03\x02\x02\x02\u01DB\u021C\x056\x1C\x02\u01DC\u021C" +
		"\x05B\"\x02\u01DD\u021C\x05F$\x02\u01DE\u021C\x05r:\x02\u01DF\u021C\x05" +
		"\u0192\xCA\x02\u01E0\u01E1\x07^\x02\x02\u01E1\u01E2\x05\x12\n\x02\u01E2" +
		"\u01E3\x07\x03\x02\x02\u01E3\u021C\x03\x02\x02\x02\u01E4\u01E5\x07^\x02" +
		"\x02\u01E5\u01E6\x05X-\x02\u01E6\u01E7\x07\x03\x02\x02\u01E7\u021C\x03" +
		"\x02\x02\x02\u01E8\u01E9\x07^\x02\x02\u01E9\u01EA\x05Z.\x02\u01EA\u01EB" +
		"\x07\x03\x02\x02\u01EB\u021C\x03\x02\x02\x02\u01EC\u01ED\x07^\x02\x02" +
		"\u01ED\u01EE\x05\n\x06\x02\u01EE\u01EF\x05\u0170\xB9\x02\u01EF\u01F0\x07" +
		"\x03\x02\x02\u01F0\u021C\x03\x02\x02\x02\u01F1\u01F2\x05X-\x02\u01F2\u01F3" +
		"\x05\x16\f\x02\u01F3\u021C\x03\x02\x02\x02\u01F4\u01F5\x05Z.\x02\u01F5" +
		"\u01F6\x05\x16\f\x02\u01F6\u021C\x03\x02\x02\x02\u01F7\u01F8\x05\x12\n" +
		"\x02\u01F8\u01F9\x05\x16\f\x02\u01F9\u021C\x03\x02\x02\x02\u01FA\u01FC" +
		"\t\x02\x02\x02\u01FB\u01FD\x05\u0182\xC2\x02\u01FC\u01FB\x03\x02\x02\x02" +
		"\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x05" +
		"N(\x02\u01FF\u0200\x07\x03\x02\x02\u0200\u021C\x03\x02\x02\x02\u0201\u0202" +
		"\x07e\x02\x02\u0202\u0204\x07C\x02\x02\u0203\u0205\x05\u0182\xC2\x02\u0204" +
		"\u0203\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02" +
		"\x02\x02\u0206\u0207\x05\x10\t\x02\u0207\u0208\x07\x03\x02\x02\u0208\u021C" +
		"\x03\x02\x02\x02\u0209\u020B\x07e\x02\x02\u020A\u0209\x03\x02\x02\x02" +
		"\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x05" +
		"\f\x07\x02\u020D\u0210\x05\u011A\x8E\x02\u020E\u020F\x07\x04\x02\x02\u020F" +
		"\u0211\x05~@\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02" +
		"\u0211\u0216\x03\x02\x02\x02\u0212\u0213\x07\x05\x02\x02\u0213\u0215\x05" +
		"\x0E\b\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0219\x03\x02" +
		"\x02\x02\u0218\u0216\x03\x02\x02\x02\u0219\u021A\x07\x03\x02\x02\u021A" +
		"\u021C\x03\x02\x02\x02\u021B\u01DB\x03\x02\x02\x02\u021B\u01DC\x03\x02" +
		"\x02\x02\u021B\u01DD\x03\x02\x02\x02\u021B\u01DE\x03\x02\x02\x02\u021B" +
		"\u01DF\x03\x02\x02\x02\u021B\u01E0\x03\x02\x02\x02\u021B\u01E4\x03\x02" +
		"\x02\x02\u021B\u01E8\x03\x02\x02\x02\u021B\u01EC\x03\x02\x02\x02\u021B" +
		"\u01F1\x03\x02\x02\x02\u021B\u01F4\x03\x02\x02\x02\u021B\u01F7\x03\x02" +
		"\x02\x02\u021B\u01FA\x03\x02\x02\x02\u021B\u0201\x03\x02\x02\x02\u021B" +
		"\u020A\x03\x02\x02\x02\u021C\x05\x03\x02\x02\x02\u021D\u021F\x07Y\x02" +
		"\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220" +
		"\x03\x02\x02\x02\u0220\u0221\x05\b\x05\x02\u0221\u0222\x05\u011A\x8E\x02" +
		"\u0222\x07\x03\x02\x02\x02\u0223\u0225\x07e\x02\x02\u0224\u0223\x03\x02" +
		"\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226" +
		"\u0228\x07C\x02\x02\u0227\u0229\x05\u0182\xC2\x02\u0228\u0227\x03\x02" +
		"\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u0233\x03\x02\x02\x02\u022A" +
		"\u022C\x07;\x02\x02\u022B\u022D\x05\u0182\xC2\x02\u022C\u022B\x03\x02" +
		"\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u0233\x03\x02\x02\x02\u022E" +
		"\u0230\x07e\x02\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02" +
		"\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0233\x05\f\x07\x02\u0232\u0224" +
		"\x03\x02\x02\x02\u0232\u022A\x03\x02\x02\x02\u0232\u022F\x03\x02\x02\x02" +
		"\u0233\t\x03\x02\x02\x02\u0234\u0236\x07C\x02\x02\u0235\u0237\x05\u0182" +
		"\xC2\x02\u0236\u0235\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237" +
		"\u023A\x03\x02\x02\x02\u0238\u023A\x05\f\x07\x02\u0239\u0234\x03\x02\x02" +
		"\x02\u0239\u0238\x03\x02\x02\x02\u023A\v\x03\x02\x02\x02\u023B\u023E\x07" +
		"S\x02\x02\u023C\u023E\x05\u0182\xC2\x02\u023D\u023B\x03\x02\x02\x02\u023D" +
		"\u023C\x03\x02\x02\x02\u023E\r\x03\x02\x02\x02\u023F\u0242\x05\u011A\x8E" +
		"\x02\u0240\u0241\x07\x04\x02\x02\u0241\u0243\x05~@\x02\u0242\u0240\x03" +
		"\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\x0F\x03\x02\x02\x02\u0244" +
		"\u0249\x05\x0E\b\x02\u0245\u0246\x07\x05\x02\x02\u0246\u0248\x05\x0E\b" +
		"\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247" +
		"\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\x11\x03\x02\x02\x02" +
		"\u024B\u0249\x03\x02\x02\x02\u024C\u024E\x05\u0182\xC2\x02\u024D\u024C" +
		"\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02" +
		"\u024F\u0250\x05\u0118\x8D\x02\u0250\u0251\x05\x1A\x0E\x02\u0251\x13\x03" +
		"\x02\x02\x02\u0252\u0254\x07p\x02\x02\u0253\u0252\x03\x02\x02\x02\u0253" +
		"\u0254\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u025F\x07\x06" +
		"\x02\x02\u0256\u025C\x07p\x02\x02\u0257\u0258\x07p\x02\x02\u0258\u025C" +
		"\x07\x07\x02\x02\u0259\u025A\x07u\x02\x02\u025A\u025C\x07\x07\x02\x02" +
		"\u025B\u0256\x03\x02\x02\x02\u025B\u0257\x03\x02\x02\x02\u025B\u0259\x03" +
		"\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D" +
		"\u025F\x07\x8A\x02\x02\u025E\u0253\x03\x02\x02\x02\u025E\u025B\x03\x02" +
		"\x02\x02\u025F\x15\x03\x02\x02\x02\u0260\u0261\x07\x06\x02\x02\u0261\u0262" +
		"\b\f\x01\x02\u0262\u0263\x05~@\x02\u0263\u0264\b\f\x01\x02\u0264\u0265" +
		"\x07\x03\x02\x02\u0265\u027D\x03\x02\x02\x02\u0266\u0267\b\f\x01\x02\u0267" +
		"\u0268\x05\x18\r\x02\u0268\u0269\b\f\x01\x02\u0269\u027D\x03\x02\x02\x02" +
		"\u026A\u026B\x07p\x02\x02\u026B\u026C\x07\x06\x02\x02\u026C\u026D\b\f" +
		"\x01\x02\u026D\u026E\x05~@\x02\u026E\u026F\b\f\x01\x02\u026F\u0270\x07" +
		"\x03\x02\x02\u0270\u027D\x03\x02\x02\x02\u0271\u0277\x07p\x02\x02\u0272" +
		"\u0273\x07p\x02\x02\u0273\u0277\x07\x07\x02\x02\u0274\u0275\x07u\x02\x02" +
		"\u0275\u0277\x07\x07\x02\x02\u0276\u0271\x03\x02\x02\x02\u0276\u0272\x03" +
		"\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278" +
		"\u0279\b\f\x01\x02\u0279\u027A\x05\x18\r\x02\u027A\u027B\b\f\x01\x02\u027B" +
		"\u027D\x03\x02\x02\x02\u027C\u0260\x03\x02\x02\x02\u027C\u0266\x03\x02" +
		"\x02\x02\u027C\u026A\x03\x02\x02\x02\u027C\u0276\x03\x02\x02\x02\u027D" +
		"\x17\x03\x02\x02\x02\u027E\u027F\x07\x8A\x02\x02\u027F\u0280\x05\u0128" +
		"\x95\x02\u0280\u0281\x07\x8B\x02\x02\u0281\x19\x03\x02\x02\x02\u0282\u0284" +
		"\x05x=\x02\u0283\u0282\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284" +
		"\u0285\x03\x02\x02\x02\u0285\u0286\x05\x1C\x0F\x02\u0286\x1B\x03\x02\x02" +
		"\x02\u0287\u0288\x07\b\x02\x02\u0288\u029B\x07\t\x02\x02\u0289\u028A\x07" +
		"\b\x02\x02\u028A\u028C\x05\x1E\x10\x02\u028B\u028D\x07\x05\x02\x02\u028C" +
		"\u028B\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028E\x03\x02" +
		"\x02\x02\u028E\u028F\x07\t\x02\x02\u028F\u029B\x03\x02\x02\x02\u0290\u0291" +
		"\x07\b\x02\x02\u0291\u0292\x05\x1E\x10\x02\u0292\u0293\x07\x05\x02\x02" +
		"\u0293\u0294\x05 \x11\x02\u0294\u0295\x07\t\x02\x02\u0295\u029B\x03\x02" +
		"\x02\x02\u0296\u0297\x07\b\x02\x02\u0297\u0298\x05 \x11\x02\u0298\u0299" +
		"\x07\t\x02\x02\u0299\u029B\x03\x02\x02\x02\u029A\u0287\x03\x02\x02\x02" +
		"\u029A\u0289\x03\x02\x02\x02\u029A\u0290\x03\x02\x02\x02\u029A\u0296\x03" +
		"\x02\x02\x02\u029B\x1D\x03\x02\x02\x02\u029C\u02A1\x05&\x14\x02\u029D" +
		"\u029E\x07\x05\x02\x02\u029E\u02A0\x05&\x14\x02\u029F\u029D\x03\x02\x02" +
		"\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2" +
		"\x03\x02\x02\x02\u02A2\x1F\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02" +
		"\u02A4\u02A7\x05\"\x12\x02\u02A5\u02A7\x05$\x13\x02\u02A6\u02A4\x03\x02" +
		"\x02\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7!\x03\x02\x02\x02\u02A8\u02A9" +
		"\x07\n\x02\x02\u02A9\u02AE\x050\x19\x02\u02AA\u02AB\x07\x05\x02\x02\u02AB" +
		"\u02AD\x050\x19\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02" +
		"\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B2" +
		"\x03\x02\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02B3\x07\x05\x02\x02" +
		"\u02B2\u02B1\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\x03" +
		"\x02\x02\x02\u02B4\u02B5\x07\v\x02\x02\u02B5#\x03\x02\x02\x02\u02B6\u02B7" +
		"\x07\x8A\x02\x02\u02B7\u02BC\x052\x1A\x02\u02B8\u02B9\x07\x05\x02\x02" +
		"\u02B9\u02BB\x052\x1A\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB\u02BE\x03" +
		"\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD" +
		"\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF\u02C1\x07\x05" +
		"\x02\x02\u02C0\u02BF\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1" +
		"\u02C2\x03\x02\x02\x02\u02C2\u02C3\x07\x8B\x02\x02\u02C3%\x03\x02\x02" +
		"\x02\u02C4\u02C5\x05z>\x02\u02C5\u02C6\x05(\x15\x02\u02C6\'\x03\x02\x02" +
		"\x02\u02C7\u02CB\x05*\x16\x02\u02C8\u02CB\x05.\x18\x02\u02C9\u02CB\x05" +
		",\x17\x02\u02CA\u02C7\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA" +
		"\u02C9\x03\x02\x02\x02\u02CB)\x03\x02\x02\x02\u02CC\u02CE\x07Y\x02\x02" +
		"\u02CD\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x03" +
		"\x02\x02\x02\u02CF\u02D1\x05\u0182\xC2\x02\u02D0\u02CF\x03\x02\x02\x02" +
		"\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x05" +
		"\u0118\x8D\x02\u02D3\u02D5\x05\x1A\x0E\x02\u02D4\u02D6\x07\f\x02\x02\u02D5" +
		"\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6+\x03\x02\x02" +
		"\x02\u02D7\u02DD\x05\x06\x04\x02\u02D8\u02DA\x07Y\x02\x02\u02D9\u02D8" +
		"\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02" +
		"\u02DB\u02DD\x05\u011A\x8E\x02\u02DC\u02D7\x03\x02\x02\x02\u02DC\u02D9" +
		"\x03\x02\x02\x02\u02DD-\x03\x02\x02\x02\u02DE\u02E0\x05\b\x05\x02\u02DF" +
		"\u02DE\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E1\x03\x02" +
		"\x02\x02\u02E1\u02E2\x07O\x02\x02\u02E2\u02E3\x07\r\x02\x02\u02E3\u02E8" +
		"\x05\u011A\x8E\x02\u02E4\u02E6\x05\x1A\x0E\x02\u02E5\u02E7\x07\f\x02\x02" +
		"\u02E6\u02E5\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E9\x03" +
		"\x02\x02\x02\u02E8\u02E4\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9" +
		"/\x03\x02\x02\x02\u02EA\u02ED\x05&\x14\x02\u02EB\u02EC\x07\x04\x02\x02" +
		"\u02EC\u02EE\x05~@\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE\x03\x02" +
		"\x02\x02\u02EE1\x03\x02\x02\x02\u02EF\u02F1\x07j\x02\x02\u02F0\u02EF\x03" +
		"\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2" +
		"\u02F5\x05&\x14\x02\u02F3\u02F4\t\x03\x02\x02\u02F4\u02F6\x05~@\x02\u02F5" +
		"\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F63\x03\x02\x02" +
		"\x02\u02F7\u02F9\x05\u011E\x90\x02\u02F8\u02FA\x05x=\x02\u02F9\u02F8\x03" +
		"\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA5\x03\x02\x02\x02\u02FB" +
		"\u02FD\x07W\x02\x02\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02" +
		"\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FF\x07:\x02\x02\u02FF\u0301" +
		"\x054\x1B\x02\u0300\u0302\x058\x1D\x02\u0301\u0300\x03\x02\x02\x02\u0301" +
		"\u0302\x03\x02\x02\x02\u0302\u0304\x03\x02\x02\x02\u0303\u0305\x05:\x1E" +
		"\x02\u0304\u0303\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307" +
		"\x03\x02\x02\x02\u0306\u0308\x05<\x1F\x02\u0307\u0306\x03\x02\x02\x02" +
		"\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030F\x07" +
		"\x8A\x02\x02\u030A\u030B\x05z>\x02\u030B\u030C\x05> \x02\u030C\u030E\x03" +
		"\x02\x02\x02\u030D\u030A\x03\x02\x02\x02\u030E\u0311\x03\x02\x02\x02\u030F" +
		"\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0312\x03\x02" +
		"\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0313\x07\x8B\x02\x02\u0313" +
		"\u031A\x03\x02\x02\x02\u0314\u0316\x07W\x02\x02\u0315\u0314\x03\x02\x02" +
		"\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0318" +
		"\x07:\x02\x02\u0318\u031A\x05@!\x02\u0319\u02FC\x03\x02\x02\x02\u0319" +
		"\u0315\x03\x02\x02\x02\u031A7\x03\x02\x02\x02\u031B\u031C\x07A\x02\x02" +
		"\u031C\u031D\x05\u0188\xC5\x02\u031D9\x03\x02\x02\x02\u031E\u031F\x07" +
		"V\x02\x02\u031F\u0320\x05\u0190\xC9\x02\u0320;\x03\x02\x02\x02\u0321\u0322" +
		"\x07b\x02\x02\u0322\u0323\x05\u0190\xC9\x02\u0323=\x03\x02\x02\x02\u0324" +
		"\u0325\x05J&\x02\u0325\u0326\x05\x16\f\x02\u0326\u032B\x03\x02\x02\x02" +
		"\u0327\u0328\x05L\'\x02\u0328\u0329\x07\x03\x02\x02\u0329\u032B\x03\x02" +
		"\x02\x02\u032A\u0324\x03\x02\x02\x02\u032A\u0327\x03\x02\x02\x02\u032B" +
		"?\x03\x02\x02\x02\u032C\u032D\x054\x1B\x02\u032D\u032E\x07\x04\x02\x02" +
		"\u032E\u032F\x05p9\x02\u032F\u0330\x07\x03\x02\x02\u0330A\x03\x02\x02" +
		"\x02\u0331\u0332\x07h\x02\x02\u0332\u0334\x05\u011E\x90\x02\u0333\u0335" +
		"\x05x=\x02\u0334\u0333\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335" +
		"\u0338\x03\x02\x02\x02\u0336\u0337\x07s\x02\x02\u0337\u0339\x05\u0190" +
		"\xC9\x02\u0338\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339" +
		"\u033B\x03\x02\x02\x02\u033A\u033C\x05<\x1F\x02\u033B\u033A\x03\x02\x02" +
		"\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u0343" +
		"\x07\x8A\x02\x02\u033E\u033F\x05z>\x02\u033F\u0340\x05D#\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0340\u0342\x03\x02\x02\x02\u0341\u033E\x03\x02\x02\x02\u0342\u0345\x03" +
		"\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344" +
		"\u0346\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0346\u0347\x07\x8B" +
		"\x02\x02\u0347C\x03\x02\x02\x02\u0348\u0349\x05> \x02\u0349E\x03\x02\x02" +
		"\x02\u034A\u034C\x07]\x02\x02\u034B\u034D\x05\u011A\x8E\x02\u034C\u034B" +
		"\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034F\x03\x02\x02\x02" +
		"\u034E\u0350\x05x=\x02\u034F\u034E\x03\x02\x02\x02\u034F\u0350\x03\x02" +
		"\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0352\x07s\x02\x02\u0352\u0353" +
		"\x05\u0182\xC2\x02\u0353\u0359\x07\x8A\x02\x02\u0354\u0355\x05z>\x02\u0355" +
		"\u0356\x05H%\x02\u0356\u0358\x03\x02\x02\x02\u0357\u0354\x03\x02\x02\x02" +
		"\u0358\u035B\x03\x02\x02\x02\u0359\u0357\x03\x02\x02\x02\u0359\u035A\x03" +
		"\x02\x02\x02\u035A\u035C\x03\x02\x02\x02\u035B\u0359\x03\x02\x02\x02\u035C" +
		"\u035D\x07\x8B\x02\x02\u035DG\x03\x02\x02\x02\u035E\u035F\x05> \x02\u035F" +
		"I\x03\x02\x02\x02\u0360\u0361\x05\\/\x02\u0361\u0362\x05b2\x02\u0362\u0373" +
		"\x03\x02\x02\x02\u0363\u0373\x05j6\x02\u0364\u0366\x07l\x02\x02\u0365" +
		"\u0364\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0367\x03\x02" +
		"\x02\x02\u0367\u0373\x05\x12\n\x02\u0368\u036A\x07l\x02\x02\u0369\u0368" +
		"\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02" +
		"\u036B\u0373\x05X-\x02\u036C\u036E\x07l\x02\x02\u036D\u036C\x03\x02\x02" +
		"\x02\u036D\u036E\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0373" +
		"\x05Z.\x02\u0370\u0373\x05R*\x02\u0371\u0373\x05\\/\x02\u0372\u0360\x03" +
		"\x02\x02\x02\u0372\u0363\x03\x02\x02\x02\u0372\u0365\x03\x02\x02\x02\u0372" +
		"\u0369\x03\x02\x02\x02\u0372\u036D\x03\x02\x02\x02\u0372\u0370\x03\x02" +
		"\x02\x02\u0372\u0371\x03\x02\x02\x02\u0373K\x03\x02\x02\x02\u0374\u0375" +
		"\x07^\x02\x02\u0375\u03DF\x05j6\x02\u0376\u0377\x07^\x02\x02\u0377\u03DF" +
		"\x05n8\x02\u0378\u0379\x07^\x02\x02\u0379\u03DF\x05\\/\x02\u037A\u037C" +
		"\x07^\x02\x02\u037B\u037D\x07l\x02\x02\u037C\u037B\x03\x02\x02\x02\u037C" +
		"\u037D\x03\x02\x02\x02\u037D\u037F\x03\x02\x02\x02\u037E\u037A\x03\x02" +
		"\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380" +
		"\u03DF\x05X-\x02\u0381\u0383\x07^\x02\x02\u0382\u0384\x07l\x02\x02\u0383" +
		"\u0382\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0386\x03\x02" +
		"\x02\x02\u0385\u0381\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386" +
		"\u0387\x03\x02\x02\x02\u0387\u03DF\x05Z.\x02\u0388\u038A\x07^\x02\x02" +
		"\u0389\u038B\x07l\x02\x02\u038A\u0389\x03\x02\x02\x02\u038A\u038B\x03" +
		"\x02\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C\u0388\x03\x02\x02\x02\u038C" +
		"\u038D\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u03DF\x05\x12" +
		"\n\x02\u038F\u0396\x07^\x02\x02\u0390\u0392\x07l\x02\x02\u0391\u0390\x03" +
		"\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393" +
		"\u0397\x05\n\x06\x02\u0394\u0395\x07Y\x02\x02\u0395\u0397\x05\f\x07\x02" +
		"\u0396\u0391\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0397\u0398\x03" +
		"\x02\x02\x02\u0398\u0399\x05\u0170\xB9\x02\u0399\u03DF\x03\x02\x02\x02" +
		"\u039A\u039E\x07W\x02\x02\u039B\u039F\x05\n\x06\x02\u039C\u039D\x07Y\x02" +
		"\x02\u039D\u039F\x05\f\x07\x02\u039E\u039B\x03\x02\x02\x02\u039E\u039C" +
		"\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x05\u0170\xB9" +
		"\x02\u03A1\u03DF\x03\x02\x02\x02\u03A2\u03A4\x07^\x02\x02\u03A3\u03A2" +
		"\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02" +
		"\u03A5\u03DF\x05R*\x02\u03A6\u03A7\x07l\x02\x02\u03A7\u03A9\t\x02\x02" +
		"\x02\u03A8\u03AA\x05\u0182\xC2\x02\u03A9\u03A8\x03\x02\x02\x02\u03A9\u03AA" +
		"\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03DF\x05N(\x02\u03AC" +
		"\u03AD\x07l\x02\x02\u03AD\u03AE\x07e\x02\x02\u03AE\u03B0\x07C\x02\x02" +
		"\u03AF\u03B1\x05\u0182\xC2\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1" +
		"\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03DF\x05\x10\t\x02" +
		"\u03B3\u03B5\x07l\x02\x02\u03B4\u03B6\x07e\x02\x02\u03B5\u03B4\x03\x02" +
		"\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7" +
		"\u03B8\x05\f\x07\x02\u03B8\u03B9\x05\x10\t\x02\u03B9\u03DF\x03\x02\x02" +
		"\x02\u03BA\u03BB\x07Y\x02\x02\u03BB\u03BC\x07e\x02\x02\u03BC\u03BE\x07" +
		"C\x02\x02\u03BD\u03BF\x05\u0182\xC2\x02\u03BE\u03BD\x03\x02\x02\x02\u03BE" +
		"\u03BF\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03DF\x05\u0170" +
		"\xB9\x02\u03C1\u03C3\x07Y\x02\x02\u03C2\u03C4\x07e\x02\x02\u03C3\u03C2" +
		"\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02" +
		"\u03C5\u03C6\x05\f\x07\x02\u03C6\u03C7\x05\x10\t\x02\u03C7\u03DF\x03\x02" +
		"\x02\x02\u03C8\u03CA\x07e\x02\x02\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA" +
		"\x03\x02\x02\x02\u03CA\u03D0\x03\x02\x02\x02\u03CB\u03CD\x07C\x02\x02" +
		"\u03CC\u03CE\x05\u0182\xC2\x02\u03CD\u03CC\x03\x02\x02\x02\u03CD\u03CE" +
		"\x03\x02\x02\x02\u03CE\u03D1\x03\x02\x02\x02\u03CF\u03D1\x05\f\x07\x02" +
		"\u03D0\u03CB\x03\x02\x02\x02\u03D0\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03" +
		"\x02\x02\x02\u03D2\u03DF\x05\x10\t\x02\u03D3\u03DF\x05l7\x02\u03D4\u03D7" +
		"\x05n8\x02\u03D5\u03D8\x05`1\x02\u03D6\u03D8\x05b2\x02\u03D7\u03D5\x03" +
		"\x02\x02\x02\u03D7\u03D6\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8" +
		"\u03DF\x03\x02\x02\x02\u03D9\u03DC\x05\\/\x02\u03DA\u03DD\x05`1\x02\u03DB" +
		"\u03DD\x05b2\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DB\x03\x02\x02\x02" +
		"\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03\x02\x02\x02\u03DE\u0374\x03" +
		"\x02\x02\x02\u03DE\u0376\x03\x02\x02\x02\u03DE\u0378\x03\x02\x02\x02\u03DE" +
		"\u037E\x03\x02\x02\x02\u03DE\u0385\x03\x02\x02\x02\u03DE\u038C\x03\x02" +
		"\x02\x02\u03DE\u038F\x03\x02\x02\x02\u03DE\u039A\x03\x02\x02\x02\u03DE" +
		"\u03A3\x03\x02\x02\x02\u03DE\u03A6\x03\x02\x02\x02\u03DE\u03AC\x03\x02" +
		"\x02\x02\u03DE\u03B3\x03\x02\x02\x02\u03DE\u03BA\x03\x02\x02\x02\u03DE" +
		"\u03C1\x03\x02\x02\x02\u03DE\u03C9\x03\x02\x02\x02\u03DE\u03D3\x03\x02" +
		"\x02\x02\u03DE\u03D4\x03\x02\x02\x02\u03DE\u03D9\x03\x02\x02\x02\u03DF" +
		"M\x03\x02\x02\x02\u03E0\u03E5\x05P)\x02\u03E1\u03E2\x07\x05\x02\x02\u03E2" +
		"\u03E4\x05P)\x02\u03E3\u03E1\x03\x02\x02\x02\u03E4\u03E7\x03\x02\x02\x02" +
		"\u03E5\u03E3\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6O\x03\x02" +
		"\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8\u03E9\x05\u011A\x8E\x02\u03E9" +
		"\u03EA\x07\x04\x02\x02\u03EA\u03EB\x05~@\x02\u03EBQ\x03\x02\x02\x02\u03EC" +
		"\u03EE\x05\u0182\xC2\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02" +
		"\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F0\x07g\x02\x02\u03F0\u03F1" +
		"\x05T+\x02\u03F1\u03F2\x05\x1C\x0F\x02\u03F2S\x03\x02\x02\x02\u03F3\u03FB" +
		"\x07\x0F\x02\x02\u03F4\u03FB\x05V,\x02\u03F5\u03F6\x07\n\x02\x02\u03F6" +
		"\u03FB\x07\v\x02\x02\u03F7\u03F8\x07\n\x02\x02\u03F8\u03F9\x07\v\x02\x02" +
		"\u03F9\u03FB\x07\x04\x02\x02\u03FA\u03F3\x03\x02\x02\x02\u03FA\u03F4\x03" +
		"\x02\x02\x02\u03FA\u03F5\x03\x02\x02\x02\u03FA\u03F7\x03\x02\x02\x02\u03FB" +
		"U\x03\x02\x02\x02\u03FC\u0403\x05\xF8}\x02\u03FD\u0403\x05\xF4{\x02\u03FE" +
		"\u0403\x05\xF0y\x02\u03FF\u0403\x05\xE4s\x02\u0400\u0403\x07\x10\x02\x02" +
		"\u0401\u0403\x05\xECw\x02\u0402\u03FC\x03\x02\x02\x02\u0402\u03FD\x03" +
		"\x02\x02\x02\u0402\u03FE\x03\x02\x02\x02\u0402\u03FF\x03\x02\x02\x02\u0402" +
		"\u0400\x03\x02\x02\x02\u0402\u0401\x03\x02\x02\x02\u0403W\x03\x02\x02" +
		"\x02\u0404\u0406\x05\u0182\xC2\x02\u0405\u0404\x03\x02\x02\x02\u0405\u0406" +
		"\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407\u0408\x07a\x02\x02" +
		"\u0408\u0409\x05\u011A\x8E\x02\u0409Y\x03\x02\x02\x02\u040A\u040C\x05" +
		"\u0182\xC2\x02\u040B\u040A\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02" +
		"\u040C\u040D\x03\x02\x02\x02\u040D\u040E\x07k\x02\x02\u040E\u040F\x05" +
		"\u011A\x8E\x02\u040F\u0410\x05\x1C\x0F\x02\u0410[\x03\x02\x02\x02\u0411" +
		"\u0412\x05^0\x02\u0412\u0413\x05\x1C\x0F\x02\u0413]\x03\x02\x02\x02\u0414" +
		"\u041A\x05\u011E\x90\x02\u0415\u0418\x07\r\x02\x02\u0416\u0419\x05\u011A" +
		"\x8E\x02\u0417\u0419\x07I\x02\x02\u0418\u0416\x03\x02\x02\x02\u0418\u0417" +
		"\x03\x02\x02\x02\u0419\u041B\x03\x02\x02\x02\u041A\u0415\x03\x02\x02\x02" +
		"\u041A\u041B\x03\x02\x02\x02\u041B_\x03\x02\x02\x02\u041C\u041D\x07\x0E" +
		"\x02\x02\u041D\u0423\x07O\x02\x02\u041E\u0421\x07\r\x02\x02\u041F\u0422" +
		"\x05\u011A\x8E\x02\u0420\u0422\x07I\x02\x02\u0421\u041F\x03\x02\x02\x02" +
		"\u0421\u0420\x03\x02\x02\x02\u0422\u0424\x03\x02\x02\x02\u0423\u041E\x03" +
		"\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425" +
		"\u0426\x05\xC2b\x02\u0426a\x03\x02\x02\x02\u0427\u0428\x07\x0E\x02\x02" +
		"\u0428\u042D\x05d3\x02\u0429\u042A\x07\x05\x02\x02\u042A\u042C\x05d3\x02" +
		"\u042B\u0429\x03\x02\x02\x02\u042C\u042F\x03\x02\x02\x02\u042D\u042B\x03" +
		"\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042Ec\x03\x02\x02\x02\u042F" +
		"\u042D\x03\x02\x02\x02\u0430\u0431\x07M\x02\x02\u0431\u043C\x05\xC2b\x02" +
		"\u0432\u0433\x07M\x02\x02\u0433\u0436\x07\r\x02\x02\u0434\u0437\x05\u011A" +
		"\x8E\x02\u0435\u0437\x07I\x02\x02\u0436\u0434\x03\x02\x02\x02\u0436\u0435" +
		"\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438\u043C\x05\xC2b\x02" +
		"\u0439\u043C\x05f4\x02\u043A\u043C\x05\u0162\xB2\x02\u043B\u0430\x03\x02" +
		"\x02\x02\u043B\u0432\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043B" +
		"\u043A\x03\x02\x02\x02\u043Ce\x03\x02\x02\x02\u043D\u043E\x07O\x02\x02" +
		"\u043E\u0440\x07\r\x02\x02\u043F\u043D\x03\x02\x02\x02\u043F\u0440\x03" +
		"\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0442\x05\u011A\x8E\x02" +
		"\u0442\u0443\x07\x04\x02\x02\u0443\u0444\x05h5\x02\u0444g\x03\x02\x02" +
		"\x02\u0445\u0448\x05\xD6l\x02\u0446\u0448\x05\xC8e\x02\u0447\u0445\x03" +
		"\x02\x02\x02\u0447\u0446\x03\x02\x02\x02\u0448i\x03\x02\x02\x02\u0449" +
		"\u044B\x07;\x02\x02\u044A\u0449\x03\x02\x02\x02\u044A\u044B\x03\x02\x02" +
		"\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044D\x07_\x02\x02\u044D\u044E" +
		"\x05^0\x02\u044E\u044F\x05\x1C\x0F\x02\u044Fk\x03\x02\x02\x02\u0450\u0452" +
		"\x07;\x02\x02\u0451\u0450\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02" +
		"\u0452\u0453\x03\x02\x02\x02\u0453\u0454\x07_\x02\x02\u0454\u0455\x05" +
		"^0\x02\u0455\u0456\x05\x1C\x0F\x02\u0456\u0457\x07\x04\x02\x02\u0457\u0458" +
		"\x05\u01AE\xD8\x02\u0458m\x03\x02\x02\x02\u0459\u045A\x07;\x02\x02\u045A" +
		"\u045B\x05^0\x02\u045B\u045C\x05\x1C\x0F\x02\u045Co\x03\x02\x02\x02\u045D" +
		"\u045E\x05\u0188\xC5\x02\u045E\u0460\x05:\x1E\x02\u045F\u0461\x05<\x1F" +
		"\x02\u0460\u045F\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461q\x03" +
		"\x02\x02\x02\u0462\u0463\x07@\x02\x02\u0463\u0465\x05\u011E\x90\x02\u0464" +
		"\u0466\x05x=\x02\u0465\u0464\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02" +
		"\u0466\u0468\x03\x02\x02\x02\u0467\u0469\x05:\x1E\x02\u0468\u0467\x03" +
		"\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u046B\x03\x02\x02\x02\u046A" +
		"\u046C\x05<\x1F\x02\u046B\u046A\x03\x02\x02\x02\u046B\u046C\x03\x02\x02" +
		"\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x07\x8A\x02\x02\u046E\u0473" +
		"\x05t;\x02\u046F\u0470\x07\x05\x02\x02\u0470\u0472\x05t;\x02\u0471\u046F" +
		"\x03\x02\x02\x02\u0472\u0475\x03\x02\x02\x02\u0473\u0471\x03\x02\x02\x02" +
		"\u0473\u0474\x03\x02\x02\x02\u0474\u0477\x03\x02\x02\x02\u0475\u0473\x03" +
		"\x02\x02\x02\u0476\u0478\x07\x05\x02\x02\u0477\u0476\x03\x02\x02\x02\u0477" +
		"\u0478\x03\x02\x02\x02\u0478\u0482\x03\x02\x02\x02\u0479\u047F\x07\x03" +
		"\x02\x02\u047A\u047B\x05z>\x02\u047B\u047C\x05> \x02\u047C\u047E\x03\x02" +
		"\x02\x02\u047D\u047A\x03\x02\x02\x02\u047E\u0481\x03\x02\x02\x02\u047F" +
		"\u047D\x03\x02\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480\u0483\x03\x02" +
		"\x02\x02\u0481\u047F\x03\x02\x02\x02\u0482\u0479\x03\x02\x02\x02\u0482" +
		"\u0483\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0485\x07\x8B" +
		"\x02\x02\u0485s\x03\x02\x02\x02\u0486\u0487\x05z>\x02\u0487\u0489\x05" +
		"\u011A\x8E\x02\u0488\u048A\x05\u010C\x87\x02\u0489\u0488\x03\x02\x02\x02" +
		"\u0489\u048A\x03\x02\x02\x02\u048A\u0495\x03\x02\x02\x02\u048B\u048C\x05" +
		"z>\x02\u048C\u048E\x05\u011A\x8E\x02\u048D\u048F\x05\u018C\xC7\x02\u048E" +
		"\u048D\x03\x02\x02\x02\u048E\u048F\x03\x02\x02\x02\u048F\u0490\x03\x02" +
		"\x02\x02\u0490\u0491\x07\r\x02\x02\u0491\u0492\x05\u011A\x8E\x02\u0492" +
		"\u0493\x05\xC2b\x02\u0493\u0495\x03\x02\x02\x02\u0494\u0486\x03\x02\x02" +
		"\x02\u0494\u048B\x03\x02\x02\x02\u0495u\x03\x02\x02\x02\u0496\u0497\x05" +
		"z>\x02\u0497\u049A\x05\u011E\x90\x02\u0498\u0499\x07A\x02\x02\u0499\u049B" +
		"\x05\u0184\xC3\x02\u049A\u0498\x03\x02\x02\x02\u049A\u049B\x03\x02\x02" +
		"\x02\u049Bw\x03\x02\x02\x02\u049C\u049D\x07\x11\x02\x02\u049D\u04A2\x05" +
		"v<\x02\u049E\u049F\x07\x05\x02\x02\u049F\u04A1\x05v<\x02\u04A0\u049E\x03" +
		"\x02\x02\x02\u04A1\u04A4\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2" +
		"\u04A3\x03\x02\x02\x02\u04A3\u04A5\x03\x02\x02\x02\u04A4\u04A2\x03\x02" +
		"\x02\x02\u04A5\u04A6\x07\x12\x02\x02\u04A6y\x03\x02\x02\x02\u04A7\u04A8" +
		"\x07\x13\x02\x02\u04A8\u04AA\x05|?\x02\u04A9\u04A7\x03\x02\x02\x02\u04AA" +
		"\u04AD\x03\x02\x02\x02\u04AB\u04A9\x03\x02\x02\x02\u04AB\u04AC\x03\x02" +
		"\x02\x02\u04AC{\x03\x02\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AE\u04AF" +
		"\x05\u01AE\xD8\x02\u04AF\u04B0\x05\xC2b\x02\u04B0\u04B4\x03\x02\x02\x02" +
		"\u04B1\u04B4\x05\u011A\x8E\x02\u04B2\u04B4\x05\u011C\x8F\x02\u04B3\u04AE" +
		"\x03\x02\x02\x02\u04B3\u04B1\x03\x02\x02\x02\u04B3\u04B2\x03\x02\x02\x02" +
		"\u04B4}\x03\x02\x02\x02\u04B5\u04BE\x05\xACW\x02\u04B6\u04BE\x05\xA8U" +
		"\x02\u04B7\u04B8\x05\u0110\x89\x02\u04B8\u04B9\x05\xD2j\x02\u04B9\u04BA" +
		"\x05~@\x02\u04BA\u04BE\x03\x02\x02\x02\u04BB\u04BE\x05\xD6l\x02\u04BC" +
		"\u04BE\x05\xC8e\x02\u04BD\u04B5\x03\x02\x02\x02\u04BD\u04B6\x03\x02\x02" +
		"\x02\u04BD\u04B7\x03\x02\x02\x02\u04BD\u04BB\x03\x02\x02\x02\u04BD\u04BC" +
		"\x03\x02\x02\x02\u04BE\x7F\x03\x02\x02\x02\u04BF\u04C7\x05\xB2Z\x02\u04C0" +
		"\u04C7\x05\xAAV\x02\u04C1\u04C2\x05\u0110\x89\x02\u04C2\u04C3\x05\xD2" +
		"j\x02\u04C3\u04C4\x05\x80A\x02\u04C4\u04C7\x03\x02\x02\x02\u04C5\u04C7" +
		"\x05\xD6l\x02\u04C6\u04BF\x03\x02\x02\x02\u04C6\u04C0\x03\x02\x02\x02" +
		"\u04C6\u04C1\x03\x02\x02\x02\u04C6\u04C5\x03\x02\x02\x02\u04C7\x81\x03" +
		"\x02\x02\x02\u04C8\u04CD\x05~@\x02\u04C9\u04CA\x07\x05\x02\x02\u04CA\u04CC" +
		"\x05~@\x02\u04CB\u04C9\x03\x02\x02\x02\u04CC\u04CF\x03\x02\x02\x02\u04CD" +
		"\u04CB\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\x83\x03\x02\x02" +
		"\x02\u04CF\u04CD\x03\x02\x02\x02\u04D0\u04DF\x05\xBC_\x02\u04D1\u04D2" +
		"\x07M\x02\x02\u04D2\u04DF\x05\u0114\x8B\x02\u04D3\u04DF\x05\xC0a\x02\u04D4" +
		"\u04DF\x05\xBE`\x02\u04D5\u04DF\x05\x86D\x02\u04D6\u04DF\x05\xB6\\\x02" +
		"\u04D7\u04D8\x07\b\x02\x02\u04D8\u04D9\x05~@\x02\u04D9\u04DA\x07\t\x02" +
		"\x02\u04DA\u04DF\x03\x02\x02\x02\u04DB\u04DF\x05\x88E\x02\u04DC\u04DF" +
		"\x05\u011A\x8E\x02\u04DD\u04DF\x05\xA6T\x02\u04DE\u04D0\x03\x02\x02\x02" +
		"\u04DE\u04D1\x03\x02\x02\x02\u04DE\u04D3\x03\x02\x02\x02\u04DE\u04D4\x03" +
		"\x02\x02\x02\u04DE\u04D5\x03\x02\x02\x02\u04DE\u04D6\x03\x02\x02\x02\u04DE" +
		"\u04D7\x03\x02\x02\x02\u04DE\u04DB\x03\x02\x02\x02\u04DE\u04DC\x03\x02" +
		"\x02\x02\u04DE\u04DD\x03\x02\x02\x02\u04DF\x85\x03\x02\x02\x02\u04E0\u04E1" +
		"\x05\u018A\xC6\x02\u04E1\u04E2\x05\u018C\xC7\x02\u04E2\u04E3\x07\r\x02" +
		"\x02\u04E3\u04E4\x07I\x02\x02\u04E4\u04E5\x05\xC2b\x02\u04E5\u04EC\x03" +
		"\x02\x02\x02\u04E6\u04E7\x05\u018A\xC6\x02\u04E7\u04E8\x07\r\x02\x02\u04E8" +
		"\u04E9\x07I\x02\x02\u04E9\u04EA\x05\xC2b\x02\u04EA\u04EC\x03\x02\x02\x02" +
		"\u04EB\u04E0\x03\x02\x02\x02\u04EB\u04E6\x03\x02\x02\x02\u04EC\x87\x03" +
		"\x02\x02\x02\u04ED\u04F5\x05\x8AF\x02\u04EE\u04F5\x05\x8EH\x02\u04EF\u04F5" +
		"\x05\x8CG\x02\u04F0\u04F5\x05\x90I\x02\u04F1\u04F5\x05\u01B0\xD9\x02\u04F2" +
		"\u04F5\x05\x94K\x02\u04F3\u04F5\x05\x96L\x02\u04F4\u04ED\x03\x02\x02\x02" +
		"\u04F4\u04EE\x03\x02\x02\x02\u04F4\u04EF\x03\x02\x02\x02\u04F4\u04F0\x03" +
		"\x02\x02\x02\u04F4\u04F1\x03\x02\x02\x02\u04F4\u04F2\x03\x02\x02\x02\u04F4" +
		"\u04F3\x03\x02\x02\x02\u04F5\x89\x03\x02\x02\x02\u04F6\u04F7\x07J\x02" +
		"\x02\u04F7\x8B\x03\x02\x02\x02\u04F8\u04F9\t\x04\x02\x02\u04F9\x8D\x03" +
		"\x02\x02\x02\u04FA\u04FB\t\x05\x02\x02\u04FB\x8F\x03\x02\x02\x02\u04FC" +
		"\u04FF\x05\u01B6\xDC\x02\u04FD\u04FF\x05\u01B4\xDB\x02\u04FE\u04FC\x03" +
		"\x02\x02\x02\u04FE\u04FD\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500" +
		"\u04FE\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\x91\x03\x02\x02" +
		"\x02\u0502\u0504\x05\u01B2\xDA\x02\u0503\u0502\x03\x02\x02\x02\u0504\u0505" +
		"\x03\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02" +
		"\u0506\x93\x03\x02\x02\x02\u0507\u0509\x07;\x02\x02\u0508\u0507\x03\x02" +
		"\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050B\x03\x02\x02\x02\u050A" +
		"\u050C\x05\u018C\xC7\x02\u050B\u050A\x03\x02\x02\x02\u050B\u050C\x03\x02" +
		"\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050F\x07\x8A\x02\x02\u050E" +
		"\u0510\x05\x98M\x02\u050F\u050E\x03\x02\x02\x02\u050F\u0510\x03\x02\x02" +
		"\x02\u0510\u0511\x03\x02\x02\x02\u0511\u0512\x07\x8B\x02\x02\u0512\x95" +
		"\x03\x02\x02\x02\u0513\u0515\x07;\x02\x02\u0514\u0513\x03\x02\x02\x02" +
		"\u0514\u0515\x03\x02\x02\x02\u0515\u0517\x03\x02\x02\x02\u0516\u0518\x05" +
		"\u018C\xC7\x02\u0517\u0516\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02" +
		"\u0518\u0519\x03\x02\x02\x02\u0519\u051B\x07\n\x02\x02\u051A\u051C\x05" +
		"\x98M\x02\u051B\u051A\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C" +
		"\u051D\x03\x02\x02\x02\u051D\u051E\x07\v\x02\x02\u051E\x97\x03\x02\x02" +
		"\x02\u051F\u0524\x05\x9AN\x02\u0520\u0521\x07\x05\x02\x02\u0521\u0523" +
		"\x05\x9AN\x02\u0522\u0520\x03\x02\x02\x02\u0523\u0526\x03\x02\x02\x02" +
		"\u0524\u0522\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0528\x03" +
		"\x02\x02\x02\u0526\u0524\x03\x02\x02\x02\u0527\u0529\x07\x05\x02\x02\u0528" +
		"\u0527\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529\x99\x03\x02\x02" +
		"\x02\u052A\u0530\x05\x9CO\x02\u052B\u0530\x05\x9EP\x02\u052C\u0530\x05" +
		"\xA0Q\x02\u052D\u0530\x05\xA2R\x02\u052E\u0530\x05\xA4S\x02\u052F\u052A" +
		"\x03\x02\x02\x02\u052F\u052B\x03\x02\x02\x02\u052F\u052C\x03\x02\x02\x02" +
		"\u052F\u052D\x03\x02\x02\x02\u052F\u052E\x03\x02\x02\x02\u0530\x9B\x03" +
		"\x02\x02\x02\u0531\u0532\x05~@\x02\u0532\x9D\x03\x02\x02\x02\u0533\u0534" +
		"\x05~@\x02\u0534\u0535\x07\x0E\x02\x02\u0535\u0536\x05~@\x02\u0536\x9F" +
		"\x03\x02\x02\x02\u0537\u0538\t\x06\x02\x02\u0538\u0539\x05~@\x02\u0539" +
		"\xA1\x03\x02\x02\x02\u053A\u053B\x07F\x02\x02\u053B\u053C\x07\b\x02\x02" +
		"\u053C\u053D\x05~@\x02\u053D\u053E\x07\t\x02\x02\u053E\u0541\x05\x9AN" +
		"\x02\u053F\u0540\x07?\x02\x02\u0540\u0542\x05\x9AN\x02\u0541\u053F\x03" +
		"\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\xA3\x03\x02\x02\x02\u0543" +
		"\u0545\x07n\x02\x02\u0544\u0543\x03\x02\x02\x02\u0544\u0545\x03\x02\x02" +
		"\x02\u0545\u0546\x03\x02\x02\x02\u0546\u0547\x07E\x02\x02\u0547\u0548" +
		"\x07\b\x02\x02\u0548\u0549\x05\u013A\x9E\x02\u0549\u054A\x07\t\x02\x02" +
		"\u054A\u054B\x05\x9AN\x02\u054B\xA5\x03\x02\x02\x02\u054C\u054E\x05\u018A" +
		"\xC6\x02\u054D\u054F\x05\u018C\xC7\x02\u054E\u054D\x03\x02\x02\x02\u054E" +
		"\u054F\x03\x02\x02\x02\u054F\u0550\x03\x02\x02\x02\u0550\u0551\x07\r\x02" +
		"\x02\u0551\u0552\x07I\x02\x02\u0552\xA7\x03\x02\x02\x02\u0553\u0554\x07" +
		"P\x02\x02\u0554\u0555\x05~@\x02\u0555\xA9\x03\x02\x02\x02\u0556\u0557" +
		"\x07P\x02\x02\u0557\u0558\x05\x80A\x02\u0558\xAB\x03\x02\x02\x02\u0559" +
		"\u055A\x05\x1A\x0E\x02\u055A\u055B\x05\xAEX\x02\u055B\xAD\x03\x02\x02" +
		"\x02\u055C\u055D\x07\x06\x02\x02\u055D\u055E\bX\x01\x02\u055E\u055F\x05" +
		"~@\x02\u055F\u0560\bX\x01\x02\u0560\u0568\x03\x02\x02\x02\u0561\u0562" +
		"\x07p\x02\x02\u0562\u0563\x07\x06\x02\x02\u0563\u0564\bX\x01\x02\u0564" +
		"\u0565\x05~@\x02\u0565\u0566\bX\x01\x02\u0566\u0568\x03\x02\x02\x02\u0567" +
		"\u055C\x03\x02\x02\x02\u0567\u0561\x03\x02\x02\x02\u0568\xAF\x03\x02\x02" +
		"\x02\u0569\u056B\x07p\x02\x02\u056A\u0569\x03\x02\x02\x02\u056A\u056B" +
		"\x03\x02\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C\u056D\x07\x06\x02\x02" +
		"\u056D\xB1\x03\x02\x02\x02\u056E\u056F\x05\x1A\x0E\x02\u056F\u0570\x05" +
		"\xB4[\x02\u0570\xB3\x03\x02\x02\x02\u0571\u0572\x07\x06\x02\x02\u0572" +
		"\u0573\b[\x01\x02\u0573\u0574\x05\x80A\x02\u0574\u0575\b[\x01\x02\u0575" +
		"\u057D\x03\x02\x02\x02\u0576\u0577\x07p\x02\x02\u0577\u0578\x07\x06\x02" +
		"\x02\u0578\u0579\b[\x01\x02\u0579\u057A\x05\x80A\x02\u057A\u057B\b[\x01" +
		"\x02\u057B\u057D\x03\x02\x02\x02\u057C\u0571\x03\x02\x02\x02\u057C\u0576" +
		"\x03\x02\x02\x02\u057D\xB5\x03\x02\x02\x02\u057E\u057F\x05\x1A\x0E\x02" +
		"\u057F\u0580\x05\xB8]\x02\u0580\xB7\x03\x02\x02\x02\u0581\u0582\b]\x01" +
		"\x02\u0582\u0583\x05\x18\r\x02\u0583\u0584\b]\x01\x02\u0584\u0591\x03" +
		"\x02\x02\x02\u0585\u058B\x07p\x02\x02\u0586\u0587\x07p\x02\x02\u0587\u058B" +
		"\x07\x07\x02\x02\u0588\u0589\x07u\x02\x02\u0589\u058B\x07\x07\x02\x02" +
		"\u058A\u0585\x03\x02\x02\x02\u058A\u0586\x03\x02\x02\x02\u058A\u0588\x03" +
		"\x02\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\u058D\b]\x01\x02\u058D" +
		"\u058E\x05\x18\r\x02\u058E\u058F\b]\x01\x02\u058F\u0591\x03\x02\x02\x02" +
		"\u0590\u0581\x03\x02\x02\x02\u0590\u058A\x03\x02\x02\x02\u0591\xB9\x03" +
		"\x02\x02\x02\u0592\u0598\x07p\x02\x02\u0593\u0594\x07p\x02\x02\u0594\u0598" +
		"\x07\x07\x02\x02\u0595\u0596\x07u\x02\x02\u0596\u0598\x07\x07\x02\x02" +
		"\u0597\u0592\x03\x02\x02\x02\u0597\u0593\x03\x02\x02\x02\u0597\u0595\x03" +
		"\x02\x02\x02\u0597\u0598\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02\u0599" +
		"\u059A\x07\x8A\x02\x02\u059A\xBB\x03\x02\x02\x02\u059B\u059C\x07O\x02" +
		"\x02\u059C\xBD\x03\x02\x02\x02\u059D\u059E\x07I\x02\x02\u059E\u059F\x05" +
		"\u01AE\xD8\x02\u059F\u05A0\x05\xC2b\x02\u05A0\xBF\x03\x02\x02\x02\u05A1" +
		"\u05A2\x07;\x02\x02\u05A2\u05A3\x05\u01AE\xD8\x02\u05A3\u05A4\x05\xC2" +
		"b\x02\u05A4\xC1\x03\x02\x02\x02\u05A5\u05AA\x07\b\x02\x02\u05A6\u05A8" +
		"\x05\xC4c\x02\u05A7\u05A9\x07\x05\x02\x02\u05A8\u05A7\x03\x02\x02\x02" +
		"\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AB\x03\x02\x02\x02\u05AA\u05A6\x03" +
		"\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02\x02\u05AC" +
		"\u05AD\x07\t\x02\x02\u05AD\xC3\x03\x02\x02\x02\u05AE\u05B3\x05\xC6d\x02" +
		"\u05AF\u05B0\x07\x05\x02\x02\u05B0\u05B2\x05\xC6d\x02\u05B1\u05AF\x03" +
		"\x02\x02\x02\u05B2\u05B5\x03\x02\x02\x02\u05B3\u05B1\x03\x02\x02\x02\u05B3" +
		"\u05B4\x03\x02\x02\x02\u05B4\u05BF\x03\x02\x02\x02\u05B5\u05B3\x03\x02" +
		"\x02\x02\u05B6\u05BB\x05\x82B\x02\u05B7\u05B8\x07\x05\x02\x02\u05B8\u05BA" +
		"\x05\xC6d\x02\u05B9\u05B7\x03\x02\x02\x02\u05BA\u05BD\x03\x02\x02\x02" +
		"\u05BB\u05B9\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BF\x03" +
		"\x02\x02\x02\u05BD\u05BB\x03\x02\x02\x02\u05BE\u05AE\x03\x02\x02\x02\u05BE" +
		"\u05B6\x03\x02\x02\x02\u05BF\xC5\x03\x02\x02\x02\u05C0\u05C1\x05\u0156" +
		"\xAC\x02\u05C1\u05C2\x05~@\x02\u05C2\xC7\x03\x02\x02\x02\u05C3\u05C4\b" +
		"e\x01\x02\u05C4\u05C5\x05\xD6l\x02\u05C5\u05C6\t\x07\x02\x02\u05C6\u05C7" +
		"\x05\xCAf\x02\u05C7\u05CD\x03\x02\x02\x02\u05C8\u05C9\f\x04\x02\x02\u05C9" +
		"\u05CA\x07\x16\x02\x02\u05CA\u05CC\x05\xCAf\x02\u05CB\u05C8\x03\x02\x02" +
		"\x02\u05CC\u05CF\x03\x02\x02\x02\u05CD\u05CB\x03\x02\x02\x02\u05CD\u05CE" +
		"\x03\x02\x02\x02\u05CE\xC9\x03\x02\x02\x02\u05CF\u05CD\x03\x02\x02\x02" +
		"\u05D0\u05D1\x05\xCCg\x02\u05D1\u05D2\x05\xCEh\x02\u05D2\xCB\x03\x02\x02" +
		"\x02\u05D3\u05D4\x07\n\x02\x02\u05D4\u05D5\x05~@\x02\u05D5\u05D6\x07\v" +
		"\x02\x02\u05D6\u05D9\x03\x02\x02\x02\u05D7\u05D9\x05\u011A\x8E\x02\u05D8" +
		"\u05D3\x03\x02\x02\x02\u05D8\u05D7\x03\x02\x02\x02\u05D9\xCD\x03\x02\x02" +
		"\x02\u05DA\u05E7\x05\xD0i\x02\u05DB\u05DD\x05\u010A\x86\x02\u05DC\u05DB" +
		"\x03\x02\x02\x02\u05DD\u05E0\x03\x02\x02\x02\u05DE\u05DC\x03\x02\x02\x02" +
		"\u05DE\u05DF\x03\x02\x02\x02\u05DF\u05E4\x03\x02\x02\x02\u05E0\u05DE\x03" +
		"\x02\x02\x02\u05E1\u05E2\x05\u0116\x8C\x02\u05E2\u05E3\x05\xD0i\x02\u05E3" +
		"\u05E5\x03\x02\x02\x02\u05E4\u05E1\x03\x02\x02\x02\u05E4\u05E5\x03\x02" +
		"\x02\x02\u05E5\u05E7\x03\x02\x02\x02\u05E6\u05DA\x03\x02\x02\x02\u05E6" +
		"\u05DE\x03\x02\x02\x02\u05E7\xCF";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u05E8\u05E9\x05\xD2j\x02\u05E9\u05EA\x05\x80A\x02\u05EA" +
		"\xD1\x03\x02\x02\x02\u05EB\u05EE\x07\x04\x02\x02\u05EC\u05EE\x05\xD4k" +
		"\x02\u05ED\u05EB\x03\x02\x02\x02\u05ED\u05EC\x03\x02\x02\x02\u05EE\xD3" +
		"\x03\x02\x02\x02\u05EF\u0602\x07\x18\x02\x02\u05F0\u0602\x07\x19\x02\x02" +
		"\u05F1\u0602\x07\x1A\x02\x02\u05F2\u0602\x07\x1B\x02\x02\u05F3\u0602\x07" +
		"\x1C\x02\x02\u05F4\u0602\x07\x1D\x02\x02\u05F5\u0602\x07\x1E\x02\x02\u05F6" +
		"\u05F7\x07\x12\x02\x02\u05F7\u05F8\x07\x12\x02\x02\u05F8\u05F9\x07\x12" +
		"\x02\x02\u05F9\u0602\x07\x04\x02\x02\u05FA\u05FB\x07\x12\x02\x02\u05FB" +
		"\u05FC\x07\x12\x02\x02\u05FC\u0602\x07\x04\x02\x02\u05FD\u0602\x07\x1F" +
		"\x02\x02\u05FE\u0602\x07 \x02\x02\u05FF\u0602\x07!\x02\x02\u0600\u0602" +
		"\x07\"\x02\x02\u0601\u05EF\x03\x02\x02\x02\u0601\u05F0\x03\x02\x02\x02" +
		"\u0601\u05F1\x03\x02\x02\x02\u0601\u05F2\x03\x02\x02\x02\u0601\u05F3\x03" +
		"\x02\x02\x02\u0601\u05F4\x03\x02\x02\x02\u0601\u05F5\x03\x02\x02\x02\u0601" +
		"\u05F6\x03\x02\x02\x02\u0601\u05FA\x03\x02\x02\x02\u0601\u05FD\x03\x02" +
		"\x02\x02\u0601\u05FE\x03\x02\x02\x02\u0601\u05FF\x03\x02\x02\x02\u0601" +
		"\u0600\x03\x02\x02\x02\u0602\xD5\x03\x02\x02\x02\u0603\u0609\x05\xD8m" +
		"\x02\u0604\u0605\x07\f\x02\x02\u0605\u0606\x05\x80A\x02\u0606\u0607\x07" +
		"\x0E\x02\x02\u0607\u0608\x05\x80A\x02\u0608\u060A\x03\x02\x02\x02\u0609" +
		"\u0604\x03\x02\x02\x02\u0609\u060A\x03\x02\x02\x02\u060A\xD7\x03\x02\x02" +
		"\x02\u060B\u0610\x05\xDAn\x02\u060C\u060D\x07#\x02\x02\u060D\u060F\x05" +
		"\xDAn\x02\u060E\u060C\x03\x02\x02\x02\u060F\u0612\x03\x02\x02\x02\u0610" +
		"\u060E\x03\x02\x02\x02\u0610\u0611\x03\x02\x02\x02\u0611\xD9\x03\x02\x02" +
		"\x02\u0612\u0610\x03\x02\x02\x02\u0613\u0618\x05\xDCo\x02\u0614\u0615" +
		"\x07$\x02\x02\u0615\u0617\x05\xDCo\x02\u0616\u0614\x03\x02\x02\x02\u0617" +
		"\u061A\x03\x02\x02\x02\u0618\u0616\x03\x02\x02\x02\u0618\u0619\x03\x02" +
		"\x02\x02\u0619\xDB\x03\x02\x02\x02\u061A\u0618\x03\x02\x02\x02\u061B\u0620" +
		"\x05\xDEp\x02\u061C\u061D\x07%\x02\x02\u061D\u061F\x05\xDEp\x02\u061E" +
		"\u061C\x03\x02\x02\x02\u061F\u0622\x03\x02\x02\x02\u0620\u061E\x03\x02" +
		"\x02\x02\u0620\u0621\x03\x02\x02\x02\u0621\xDD\x03\x02\x02\x02\u0622\u0620" +
		"\x03\x02\x02\x02\u0623\u0627\x05\xE2r\x02\u0624\u0625\x05\xE0q\x02\u0625" +
		"\u0626\x05\xE2r\x02\u0626\u0628\x03\x02\x02\x02\u0627\u0624\x03\x02\x02" +
		"\x02\u0627\u0628\x03\x02\x02\x02\u0628\u062E\x03\x02\x02\x02\u0629\u062A" +
		"\x07M\x02\x02\u062A\u062B\x05\xE0q\x02\u062B\u062C\x05\xE2r\x02\u062C" +
		"\u062E\x03\x02\x02\x02\u062D\u0623\x03\x02\x02\x02\u062D\u0629\x03\x02" +
		"\x02\x02\u062E\xDF\x03\x02\x02\x02\u062F\u0630\t\b\x02\x02\u0630\xE1\x03" +
		"\x02\x02\x02\u0631\u0637\x05\xE6t\x02\u0632\u0638\x05\u0120\x91\x02\u0633" +
		"\u0638\x05\u0124\x93\x02\u0634\u0635\x05\xE4s\x02\u0635\u0636\x05\xE6" +
		"t\x02\u0636\u0638\x03\x02\x02\x02\u0637\u0632\x03\x02\x02\x02\u0637\u0633" +
		"\x03\x02\x02\x02\u0637\u0634\x03\x02\x02\x02\u0637\u0638\x03\x02\x02\x02" +
		"\u0638\u063E\x03\x02\x02\x02\u0639\u063A\x07M\x02\x02\u063A\u063B\x05" +
		"\xE4s\x02\u063B\u063C\x05\xE6t\x02\u063C\u063E\x03\x02\x02\x02\u063D\u0631" +
		"\x03\x02\x02\x02\u063D\u0639\x03\x02\x02\x02\u063E\xE3\x03\x02\x02\x02" +
		"\u063F\u0640\x07\x12\x02\x02\u0640\u0645\x07\x04\x02\x02\u0641\u0645\x07" +
		"\x12\x02\x02\u0642\u0645\x07\'\x02\x02\u0643\u0645\x07\x11\x02\x02\u0644" +
		"\u063F\x03\x02\x02\x02\u0644\u0641\x03\x02\x02\x02\u0644\u0642\x03\x02" +
		"\x02\x02\u0644\u0643\x03\x02\x02\x02\u0645\xE5\x03\x02\x02\x02\u0646\u064B" +
		"\x05\xE8u\x02\u0647\u0648\x07(\x02\x02\u0648\u064A\x05\xE8u\x02\u0649" +
		"\u0647\x03\x02\x02\x02\u064A\u064D\x03\x02\x02\x02\u064B\u0649\x03\x02" +
		"\x02\x02\u064B\u064C\x03\x02\x02\x02\u064C\u0656\x03\x02\x02\x02\u064D" +
		"\u064B\x03\x02\x02\x02\u064E\u0651\x07M\x02\x02\u064F\u0650\x07(\x02\x02" +
		"\u0650\u0652\x05\xE8u\x02\u0651\u064F\x03\x02\x02\x02\u0652\u0653\x03" +
		"\x02\x02\x02\u0653\u0651\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654" +
		"\u0656\x03\x02\x02\x02\u0655\u0646\x03\x02\x02\x02\u0655\u064E\x03\x02" +
		"\x02\x02\u0656\xE7\x03\x02\x02\x02\u0657\u065C\x05\xEAv\x02\u0658\u0659" +
		"\x07)\x02\x02\u0659\u065B\x05\xEAv\x02\u065A\u0658\x03\x02\x02\x02\u065B" +
		"\u065E\x03\x02\x02\x02\u065C\u065A\x03\x02\x02\x02\u065C\u065D\x03\x02" +
		"\x02\x02\u065D\u0667\x03\x02\x02\x02\u065E\u065C\x03\x02\x02\x02\u065F" +
		"\u0662\x07M\x02\x02\u0660\u0661\x07)\x02\x02\u0661\u0663\x05\xEAv\x02" +
		"\u0662\u0660\x03\x02\x02\x02\u0663\u0664\x03\x02\x02\x02\u0664\u0662\x03" +
		"\x02\x02\x02\u0664\u0665\x03\x02\x02\x02\u0665\u0667\x03\x02\x02\x02\u0666" +
		"\u0657\x03\x02\x02\x02\u0666\u065F\x03\x02\x02\x02\u0667\xE9\x03\x02\x02" +
		"\x02\u0668\u066D\x05\xEEx\x02\u0669\u066A\x07*\x02\x02\u066A\u066C\x05" +
		"\xEEx\x02\u066B\u0669\x03\x02\x02\x02\u066C\u066F\x03\x02\x02\x02\u066D" +
		"\u066B\x03\x02\x02\x02\u066D\u066E\x03\x02\x02\x02\u066E\u0678\x03\x02" +
		"\x02\x02\u066F\u066D\x03\x02\x02\x02\u0670\u0673\x07M\x02\x02\u0671\u0672" +
		"\x07*\x02\x02\u0672\u0674\x05\xEEx\x02\u0673\u0671\x03\x02\x02\x02\u0674" +
		"\u0675\x03\x02\x02\x02\u0675\u0673\x03\x02\x02\x02\u0675\u0676\x03\x02" +
		"\x02\x02\u0676\u0678\x03\x02\x02\x02\u0677\u0668\x03\x02\x02\x02\u0677" +
		"\u0670\x03\x02\x02\x02\u0678\xEB\x03\x02\x02\x02\u0679\u067A\t\t\x02\x02" +
		"\u067A\xED\x03\x02\x02\x02\u067B\u0681\x05\xF2z\x02\u067C\u067D\x05\xF0" +
		"y\x02\u067D\u067E\x05\xF2z\x02\u067E\u0680\x03\x02\x02\x02\u067F\u067C" +
		"\x03\x02\x02\x02\u0680\u0683\x03\x02\x02\x02\u0681\u067F\x03\x02\x02\x02" +
		"\u0681\u0682\x03\x02\x02\x02\u0682\u068D\x03\x02\x02\x02\u0683\u0681\x03" +
		"\x02\x02\x02\u0684\u0688\x07M\x02\x02\u0685\u0686\x05\xF0y\x02\u0686\u0687" +
		"\x05\xF2z\x02\u0687\u0689\x03\x02\x02\x02\u0688\u0685\x03\x02\x02\x02" +
		"\u0689\u068A\x03\x02\x02\x02\u068A\u0688\x03\x02\x02\x02\u068A\u068B\x03" +
		"\x02\x02\x02\u068B\u068D\x03\x02\x02\x02\u068C\u067B\x03\x02\x02\x02\u068C" +
		"\u0684\x03\x02\x02\x02\u068D\xEF\x03\x02\x02\x02\u068E\u0695\x07+\x02" +
		"\x02\u068F\u0690\x07\x12\x02\x02\u0690\u0691\x07\x12\x02\x02\u0691\u0695" +
		"\x07\x12\x02\x02\u0692\u0693\x07\x12\x02\x02\u0693\u0695\x07\x12\x02\x02" +
		"\u0694\u068E\x03\x02\x02\x02\u0694\u068F\x03\x02\x02\x02\u0694\u0692\x03" +
		"\x02\x02\x02\u0695\xF1\x03\x02\x02\x02\u0696\u069C\x05\xF6|\x02\u0697" +
		"\u0698\x05\xF4{\x02\u0698\u0699\x05\xF6|\x02\u0699\u069B\x03\x02\x02\x02" +
		"\u069A\u0697\x03\x02\x02\x02\u069B\u069E\x03\x02\x02\x02\u069C\u069A\x03" +
		"\x02\x02\x02\u069C\u069D\x03\x02\x02\x02\u069D\u06A8\x03\x02\x02\x02\u069E" +
		"\u069C\x03\x02\x02\x02\u069F\u06A3\x07M\x02\x02\u06A0\u06A1\x05\xF4{\x02" +
		"\u06A1\u06A2\x05\xF6|\x02\u06A2\u06A4\x03\x02\x02\x02\u06A3\u06A0\x03" +
		"\x02\x02\x02\u06A4\u06A5\x03\x02\x02\x02\u06A5\u06A3\x03\x02\x02\x02\u06A5" +
		"\u06A6\x03\x02\x02\x02\u06A6\u06A8\x03\x02\x02\x02\u06A7\u0696\x03\x02" +
		"\x02\x02\u06A7\u069F\x03\x02\x02\x02\u06A8\xF3\x03\x02\x02\x02\u06A9\u06AA" +
		"\t\n\x02\x02\u06AA\xF5\x03\x02\x02\x02\u06AB\u06B1\x05\xFA~\x02\u06AC" +
		"\u06AD\x05\xF8}\x02\u06AD\u06AE\x05\xFA~\x02\u06AE\u06B0\x03\x02\x02\x02" +
		"\u06AF\u06AC\x03\x02\x02\x02\u06B0\u06B3\x03\x02\x02\x02\u06B1\u06AF\x03" +
		"\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2\u06BD\x03\x02\x02\x02\u06B3" +
		"\u06B1\x03\x02\x02\x02\u06B4\u06B8\x07M\x02\x02\u06B5\u06B6\x05\xF8}\x02" +
		"\u06B6\u06B7\x05\xFA~\x02\u06B7\u06B9\x03\x02\x02\x02\u06B8\u06B5\x03" +
		"\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA" +
		"\u06BB\x03\x02\x02\x02\u06BB\u06BD\x03\x02\x02\x02\u06BC\u06AB\x03\x02" +
		"\x02\x02\u06BC\u06B4\x03\x02\x02\x02\u06BD\xF7\x03\x02\x02\x02\u06BE\u06BF" +
		"\t\v\x02\x02\u06BF\xF9\x03\x02\x02\x02\u06C0\u06C1\x05\xFC\x7F\x02\u06C1" +
		"\u06C2\x05\xFA~\x02\u06C2\u06CF\x03\x02\x02\x02\u06C3\u06CF\x05\u0104" +
		"\x83\x02\u06C4\u06CF\x05\u0106\x84\x02\u06C5\u06C8\x05\xFE\x80\x02\u06C6" +
		"\u06C8\x05\u0102\x82\x02\u06C7\u06C5\x03\x02\x02\x02\u06C7\u06C6\x03\x02" +
		"\x02\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06CA\x07M\x02\x02\u06CA\u06CF" +
		"\x03\x02\x02\x02\u06CB\u06CC\x05\u010E\x88\x02\u06CC\u06CD\x05\u0110\x89" +
		"\x02\u06CD\u06CF\x03\x02\x02\x02\u06CE\u06C0\x03\x02\x02\x02\u06CE\u06C3" +
		"\x03\x02\x02\x02\u06CE\u06C4\x03\x02\x02\x02\u06CE\u06C7\x03\x02\x02\x02" +
		"\u06CE\u06CB\x03\x02\x02\x02\u06CF\xFB\x03\x02\x02\x02\u06D0\u06D4\x05" +
		"\xFE\x80\x02\u06D1\u06D4\x05\u0100\x81\x02\u06D2\u06D4\x05\u0102\x82\x02" +
		"\u06D3\u06D0\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D3\u06D2\x03" +
		"\x02\x02\x02\u06D4\xFD\x03\x02\x02\x02\u06D5\u06D6\x07-\x02\x02\u06D6" +
		"\xFF\x03\x02\x02\x02\u06D7\u06D8\x071\x02\x02\u06D8\u0101\x03\x02\x02" +
		"\x02\u06D9\u06DA\x07\x0F\x02\x02\u06DA\u0103\x03\x02\x02\x02\u06DB\u06DC" +
		"\x07n\x02\x02\u06DC\u06DD\x05\xFA~\x02\u06DD\u0105\x03\x02\x02\x02\u06DE" +
		"\u06DF\x05\u0110\x89\x02\u06DF\u06E0\x05\u0108\x85\x02\u06E0\u06E9\x03" +
		"\x02\x02\x02\u06E1\u06E5\x05\x84C\x02\u06E2\u06E4\x05\u010A\x86\x02\u06E3" +
		"\u06E2\x03\x02\x02\x02\u06E4\u06E7\x03\x02\x02\x02\u06E5\u06E3\x03\x02" +
		"\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E9\x03\x02\x02\x02\u06E7" +
		"\u06E5\x03\x02\x02\x02\u06E8\u06DE\x03\x02\x02\x02\u06E8\u06E1\x03\x02" +
		"\x02\x02\u06E9\u0107\x03\x02\x02\x02\u06EA\u06EB\x05\u010E\x88\x02\u06EB" +
		"\u0109\x03\x02\x02\x02\u06EC\u06F1\x071\x02\x02\u06ED\u06F1\x05\u0116" +
		"\x8C\x02\u06EE\u06F1\x05\u010C\x87\x02\u06EF\u06F1\x05\u018C\xC7\x02\u06F0" +
		"\u06EC\x03\x02\x02\x02\u06F0\u06ED\x03\x02\x02\x02\u06F0\u06EE\x03\x02" +
		"\x02\x02\u06F0\u06EF\x03\x02\x02\x02\u06F1\u010B\x03\x02\x02\x02\u06F2" +
		"\u06F4\x05\u018C\xC7\x02\u06F3\u06F2\x03\x02\x02\x02\u06F3\u06F4\x03\x02" +
		"\x02\x02\u06F4\u06F5\x03\x02\x02\x02\u06F5\u06F6\x05\xC2b\x02\u06F6\u010D" +
		"\x03\x02\x02\x02\u06F7\u06F8\t\f\x02\x02\u06F8\u010F\x03\x02\x02\x02\u06F9" +
		"\u06FA\x07M\x02\x02\u06FA\u0700\x05\u0114\x8B\x02\u06FB\u06FC\x05\x84" +
		"C\x02\u06FC\u06FD\x05\u0112\x8A\x02\u06FD\u0700\x03\x02\x02\x02\u06FE" +
		"\u0700\x05\u011A\x8E\x02\u06FF\u06F9\x03\x02\x02\x02\u06FF\u06FB\x03\x02" +
		"\x02\x02\u06FF\u06FE\x03\x02\x02\x02\u0700\u0111\x03\x02\x02\x02\u0701" +
		"\u0703\x05\u010A\x86\x02\u0702\u0701\x03\x02\x02\x02\u0703\u0706\x03\x02" +
		"\x02\x02\u0704\u0702\x03\x02\x02\x02\u0704\u0705\x03\x02\x02\x02\u0705" +
		"\u0707\x03\x02\x02\x02\u0706\u0704\x03\x02\x02\x02\u0707\u0708\x05\u0116" +
		"\x8C\x02\u0708\u0113\x03\x02\x02\x02\u0709\u070A\x07\n\x02\x02\u070A\u070B" +
		"\x05~@\x02\u070B\u070C\x07\v\x02\x02\u070C\u0710\x03\x02\x02\x02\u070D" +
		"\u070E\x07\r\x02\x02\u070E\u0710\x05\u011A\x8E\x02\u070F\u0709\x03\x02" +
		"\x02\x02\u070F\u070D\x03\x02\x02\x02\u0710\u0115\x03\x02\x02\x02\u0711" +
		"\u071A\x05\u0114\x8B\x02\u0712\u0713\x074\x02\x02\u0713\u071A\x05\u011A" +
		"\x8E\x02\u0714\u0715\x07\f\x02\x02\u0715\u0716\x07\n\x02\x02\u0716\u0717" +
		"\x05~@\x02\u0717\u0718\x07\v\x02\x02\u0718\u071A\x03\x02\x02\x02\u0719" +
		"\u0711\x03\x02\x02\x02\u0719\u0712\x03\x02\x02\x02\u0719\u0714\x03\x02" +
		"\x02\x02\u071A\u0117\x03\x02\x02\x02\u071B\u0726\x07\x8D\x02\x02\u071C" +
		"\u0726\x05\u01BA\xDE\x02\u071D\u0726\x07p\x02\x02\u071E\u0726\x07q\x02" +
		"\x02\u071F\u0726\x07r\x02\x02\u0720\u0726\x07s\x02\x02\u0721\u0726\x07" +
		"t\x02\x02\u0722\u0726\x07u\x02\x02\u0723\u0724\x06\x8D\x03\x02\u0724\u0726" +
		"\t\r\x02\x02\u0725\u071B\x03\x02\x02\x02\u0725\u071C\x03\x02\x02\x02\u0725" +
		"\u071D\x03\x02\x02\x02\u0725\u071E\x03\x02\x02\x02\u0725\u071F\x03\x02" +
		"\x02\x02\u0725\u0720\x03\x02\x02\x02\u0725\u0721\x03\x02\x02\x02\u0725" +
		"\u0722\x03\x02\x02\x02\u0725\u0723\x03\x02\x02\x02\u0726\u0119\x03\x02" +
		"\x02\x02\u0727\u072A\x05\u0118\x8D\x02\u0728\u072A\x07`\x02\x02\u0729" +
		"\u0727\x03\x02\x02\x02\u0729\u0728\x03\x02\x02\x02\u072A\u011B\x03\x02" +
		"\x02\x02\u072B\u072C\x05\u011E\x90\x02\u072C\u072F\x07\r\x02\x02\u072D" +
		"\u0730\x05\u011A\x8E\x02\u072E\u0730\x07I\x02\x02\u072F\u072D\x03\x02" +
		"\x02\x02\u072F\u072E\x03\x02\x02\x02\u0730\u073A\x03\x02\x02\x02\u0731" +
		"\u0732\x05\u011E\x90\x02\u0732\u0733\x07\r\x02\x02\u0733\u0734\x05\u011E" +
		"\x90\x02\u0734\u0737\x07\r\x02\x02\u0735\u0738\x05\u011A\x8E\x02\u0736" +
		"\u0738\x07I\x02\x02\u0737\u0735\x03\x02\x02\x02\u0737\u0736\x03\x02\x02" +
		"\x02\u0738\u073A\x03\x02\x02\x02\u0739\u072B\x03\x02\x02\x02\u0739\u0731" +
		"\x03\x02\x02\x02\u073A\u011D\x03\x02\x02\x02\u073B\u0746\x07\x8D\x02\x02" +
		"\u073C\u0746\x07[\x02\x02\u073D\u0746\x07p\x02\x02\u073E\u0746\x07q\x02" +
		"\x02\u073F\u0746\x07r\x02\x02\u0740\u0746\x07s\x02\x02\u0741\u0746\x07" +
		"t\x02\x02\u0742\u0746\x07u\x02\x02\u0743\u0744\x06\x90\x04\x02\u0744\u0746" +
		"\t\r\x02\x02\u0745\u073B\x03\x02\x02\x02\u0745\u073C\x03\x02\x02\x02\u0745" +
		"\u073D\x03\x02\x02\x02\u0745\u073E\x03\x02\x02\x02\u0745\u073F\x03\x02" +
		"\x02\x02\u0745\u0740\x03\x02\x02\x02\u0745\u0741\x03\x02\x02\x02\u0745" +
		"\u0742\x03\x02\x02\x02\u0745\u0743\x03\x02\x02\x02\u0746\u011F\x03\x02" +
		"\x02\x02\u0747\u0748\x05\u0122\x92\x02\u0748\u0749\x05\u0184\xC3\x02\u0749" +
		"\u0121\x03\x02\x02\x02\u074A\u074C\x07H\x02\x02\u074B\u074D\x071\x02\x02" +
		"\u074C\u074B\x03\x02\x02\x02\u074C\u074D\x03\x02\x02\x02\u074D\u0123\x03" +
		"\x02\x02\x02\u074E\u074F\x05\u0126\x94\x02\u074F\u0750\x05\u0184\xC3\x02" +
		"\u0750\u0125\x03\x02\x02\x02\u0751\u0752\x07X\x02\x02\u0752\u0127\x03" +
		"\x02\x02\x02\u0753\u0755\x05\u012A\x96\x02\u0754\u0753\x03\x02\x02\x02" +
		"\u0755\u0758\x03\x02\x02\x02\u0756\u0754\x03\x02\x02\x02\u0756\u0757\x03" +
		"\x02\x02\x02\u0757\u0129\x03\x02\x02\x02\u0758\u0756\x03\x02\x02\x02\u0759" +
		"\u075B\x05\u0156\xAC\x02\u075A\u0759\x03\x02\x02\x02\u075B\u075E\x03\x02" +
		"\x02\x02\u075C\u075A\x03\x02\x02\x02\u075C\u075D\x03\x02\x02\x02\u075D" +
		"\u075F\x03\x02\x02\x02\u075E\u075C\x03\x02\x02\x02\u075F\u0760\x05\u012C" +
		"\x97\x02\u0760\u012B\x03\x02\x02\x02\u0761\u0773\x05\x18\r\x02\u0762\u0773" +
		"\x05\u0130\x99\x02\u0763\u0773\x05\u0138\x9D\x02\u0764\u0773\x05\u013E" +
		"\xA0\x02\u0765\u0773\x05\u0140\xA1\x02\u0766\u0773\x05\u0142\xA2\x02\u0767" +
		"\u0773\x05\u0136\x9C\x02\u0768\u0773\x05\u0148\xA5\x02\u0769\u0773\x05" +
		"\u014A\xA6\x02\u076A\u0773\x05\u0158\xAD\x02\u076B\u0773\x05\u015A\xAE" +
		"\x02\u076C\u0773\x05\u0154\xAB\x02\u076D\u0773\x05\u0134\x9B\x02\u076E" +
		"\u0773\x05\u0160\xB1\x02\u076F\u0773\x05\u015C\xAF\x02\u0770\u0773\x05" +
		"\u015E\xB0\x02\u0771\u0773\x05\u012E\x98\x02\u0772\u0761\x03\x02\x02\x02" +
		"\u0772\u0762\x03\x02\x02\x02\u0772\u0763\x03\x02\x02\x02\u0772\u0764\x03" +
		"\x02\x02\x02\u0772\u0765\x03\x02\x02\x02\u0772\u0766\x03\x02\x02\x02\u0772" +
		"\u0767\x03\x02\x02\x02\u0772\u0768\x03\x02\x02\x02\u0772\u0769\x03\x02" +
		"\x02\x02\u0772\u076A\x03\x02\x02\x02\u0772\u076B\x03\x02\x02\x02\u0772" +
		"\u076C\x03\x02\x02\x02\u0772\u076D\x03\x02\x02\x02\u0772\u076E\x03\x02" +
		"\x02\x02\u0772\u076F\x03\x02\x02\x02\u0772\u0770\x03\x02\x02\x02\u0772" +
		"\u0771\x03\x02\x02\x02\u0773\u012D\x03\x02\x02\x02\u0774\u0776\x05~@\x02" +
		"\u0775\u0774\x03\x02\x02\x02\u0775\u0776\x03\x02\x02\x02\u0776\u0777\x03" +
		"\x02\x02\x02\u0777\u0778\x07\x03\x02\x02\u0778\u012F\x03\x02\x02\x02\u0779" +
		"\u077A\x05z>\x02\u077A\u077B\x05\u0132\x9A\x02\u077B\u077C\x07\x03\x02" +
		"\x02\u077C\u0131\x03\x02\x02\x02\u077D\u0780\x05\x06\x04\x02\u077E\u077F" +
		"\x07\x04\x02\x02\u077F\u0781\x05~@\x02\u0780\u077E\x03\x02\x02\x02\u0780" +
		"\u0781\x03\x02\x02\x02\u0781\u0786\x03\x02\x02\x02\u0782\u0783\x07\x05" +
		"\x02\x02\u0783\u0785\x05\x0E\b\x02\u0784\u0782\x03\x02\x02\x02\u0785\u0788" +
		"\x03\x02\x02\x02\u0786\u0784\x03\x02\x02\x02\u0786\u0787\x03\x02\x02\x02" +
		"\u0787\u0133\x03\x02\x02\x02\u0788\u0786\x03\x02\x02\x02\u0789\u078A\x05" +
		"z>\x02\u078A\u078B\x05\x12\n\x02\u078B\u078C\x05\x16\f\x02\u078C\u0135" +
		"\x03\x02\x02\x02\u078D\u078E\x07F\x02\x02\u078E\u078F\x07\b\x02\x02\u078F" +
		"\u0790\x05~@\x02\u0790\u0791\x07\t\x02\x02\u0791\u0794\x05\u012A\x96\x02" +
		"\u0792\u0793\x07?\x02\x02\u0793\u0795\x05\u012A\x96\x02\u0794\u0792\x03" +
		"\x02\x02\x02\u0794\u0795\x03\x02\x02\x02\u0795\u0137\x03\x02\x02\x02\u0796" +
		"\u0798\x07n\x02\x02\u0797\u0796\x03\x02\x02\x02\u0797\u0798\x03\x02\x02" +
		"\x02\u0798\u0799\x03\x02\x02\x02\u0799\u079A\x07E\x02\x02\u079A\u079B" +
		"\x07\b\x02\x02\u079B\u079C\x05\u013A\x9E\x02\u079C\u079D\x07\t\x02\x02" +
		"\u079D\u079E\x05\u012A\x96\x02\u079E\u0139\x03\x02\x02\x02\u079F\u07A0" +
		"\x05z>\x02\u07A0\u07A1\x05\x06\x04\x02\u07A1\u07A2\x07G\x02\x02\u07A2" +
		"\u07A3\x05~@\x02\u07A3\u07B2\x03\x02\x02\x02\u07A4\u07A5\x05z>\x02\u07A5" +
		"\u07A6\x05\u011A\x8E\x02\u07A6\u07A7\x07G\x02\x02\u07A7\u07A8\x05~@\x02" +
		"\u07A8\u07B2\x03\x02\x02\x02\u07A9\u07AB\x05\u013C\x9F\x02\u07AA\u07AC" +
		"\x05~@\x02\u07AB\u07AA\x03\x02\x02\x02\u07AB\u07AC\x03\x02\x02\x02\u07AC" +
		"\u07AD\x03\x02\x02\x02\u07AD\u07AF\x07\x03\x02\x02\u07AE\u07B0\x05\x82" +
		"B\x02\u07AF\u07AE\x03\x02\x02\x02\u07AF\u07B0\x03\x02\x02\x02\u07B0\u07B2" +
		"\x03\x02\x02\x02\u07B1\u079F\x03\x02\x02\x02\u07B1\u07A4\x03\x02\x02\x02" +
		"\u07B1\u07A9\x03\x02\x02\x02\u07B2\u013B\x03\x02\x02\x02\u07B3\u07B9\x05" +
		"\u0130\x99\x02\u07B4\u07B6\x05~@\x02\u07B5\u07B4\x03\x02\x02\x02\u07B5" +
		"\u07B6\x03\x02\x02\x02\u07B6\u07B7\x03\x02\x02\x02\u07B7\u07B9\x07\x03" +
		"\x02\x02\u07B8\u07B3\x03\x02\x02\x02\u07B8\u07B5\x03\x02\x02\x02\u07B9" +
		"\u013D\x03\x02\x02\x02\u07BA\u07BB\x07U\x02\x02\u07BB\u07BC\x07\b\x02" +
		"\x02\u07BC\u07BD\x05~@\x02\u07BD\u07BE\x07\t\x02\x02\u07BE\u07BF\x05\u012A" +
		"\x96\x02\u07BF\u013F\x03\x02\x02\x02\u07C0\u07C1\x07>\x02\x02\u07C1\u07C2" +
		"\x05\u012A\x96\x02\u07C2\u07C3\x07U\x02\x02\u07C3\u07C4\x07\b\x02\x02" +
		"\u07C4\u07C5\x05~@\x02\u07C5\u07C6\x07\t\x02\x02\u07C6\u07C7\x07\x03\x02" +
		"\x02\u07C7\u0141\x03\x02\x02\x02\u07C8\u07C9\x07N\x02\x02\u07C9\u07CA" +
		"\x07\b\x02\x02\u07CA\u07CB\x05~@\x02\u07CB\u07CC\x07\t\x02\x02\u07CC\u07D0" +
		"\x07\x8A\x02\x02\u07CD\u07CF\x05\u0144\xA3\x02\u07CE\u07CD\x03\x02\x02" +
		"\x02\u07CF\u07D2\x03\x02\x02\x02\u07D0\u07CE\x03\x02\x02\x02\u07D0\u07D1" +
		"\x03\x02\x02\x02\u07D1\u07D4\x03\x02\x02\x02\u07D2\u07D0\x03\x02\x02\x02" +
		"\u07D3\u07D5\x05\u0146\xA4\x02\u07D4\u07D3\x03\x02\x02\x02\u07D4\u07D5" +
		"\x03\x02\x02\x02\u07D5\u07D6\x03\x02\x02\x02\u07D6\u07D7\x07\x8B\x02\x02" +
		"\u07D7\u0143\x03\x02\x02\x02\u07D8\u07DA\x05\u0156\xAC\x02\u07D9\u07D8" +
		"\x03\x02\x02\x02\u07DA\u07DD\x03\x02\x02\x02\u07DB\u07D9\x03\x02\x02\x02" +
		"\u07DB\u07DC\x03\x02\x02\x02\u07DC\u07DE\x03\x02\x02\x02\u07DD\u07DB\x03" +
		"\x02\x02\x02\u07DE\u07DF\x078\x02\x02\u07DF\u07E0\x05~@\x02\u07E0\u07E1" +
		"\x07\x0E\x02\x02\u07E1\u07E2\x05\u0128\x95\x02\u07E2\u0145\x03\x02\x02" +
		"\x02\u07E3\u07E5\x05\u0156\xAC\x02\u07E4\u07E3\x03\x02\x02\x02\u07E5\u07E8" +
		"\x03\x02\x02\x02\u07E6\u07E4\x03\x02\x02\x02\u07E6\u07E7\x03\x02\x02\x02" +
		"\u07E7\u07E9\x03\x02\x02\x02\u07E8\u07E6\x03\x02\x02\x02\u07E9\u07EA\x07" +
		"=\x02\x02\u07EA\u07EB\x07\x0E\x02\x02\u07EB\u07EC\x05\u0128\x95\x02\u07EC" +
		"\u0147\x03\x02\x02\x02\u07ED\u07EE\x07K\x02\x02\u07EE\u07EF\x07\x03\x02" +
		"\x02\u07EF\u0149\x03\x02\x02\x02\u07F0\u07F1\x07R\x02\x02\u07F1\u07F7" +
		"\x05\x18\r\x02\u07F2\u07F4\x05\u014E\xA8\x02\u07F3\u07F5\x05\u0152\xAA" +
		"\x02\u07F4\u07F3\x03\x02\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5\u07F8" +
		"\x03\x02\x02\x02\u07F6\u07F8\x05\u0152\xAA\x02\u07F7\u07F2\x03\x02\x02" +
		"\x02\u07F7\u07F6\x03\x02\x02\x02\u07F8\u014B\x03\x02\x02\x02\u07F9\u07FA" +
		"\x05\u0150\xA9\x02\u07FA\u07FB\x05\x18\r\x02\u07FB\u0804\x03\x02\x02\x02" +
		"\u07FC\u07FD\x07s\x02\x02\u07FD\u07FF\x05\u0184\xC3\x02\u07FE\u0800\x05" +
		"\u0150\xA9\x02\u07FF\u07FE\x03\x02\x02\x02\u07FF\u0800\x03\x02\x02\x02" +
		"\u0800\u0801\x03\x02\x02\x02\u0801\u0802\x05\x18\r\x02\u0802\u0804\x03" +
		"\x02\x02\x02\u0803\u07F9\x03\x02\x02\x02\u0803\u07FC\x03\x02\x02\x02\u0804" +
		"\u014D\x03\x02\x02\x02\u0805\u0806\x05\u014C\xA7\x02\u0806\u0807\x05\u014E" +
		"\xA8\x02\u0807\u080A\x03\x02\x02\x02\u0808\u080A\x05\u014C\xA7\x02\u0809" +
		"\u0805\x03\x02\x02\x02\u0809\u0808\x03\x02\x02\x02\u080A\u014F\x03\x02" +
		"\x02\x02\u080B\u080C\x079\x02\x02\u080C\u080D\x07\b\x02\x02\u080D\u0810" +
		"\x05\u011A\x8E\x02\u080E\u080F\x07\x05\x02\x02\u080F\u0811\x05\u011A\x8E" +
		"\x02\u0810\u080E\x03\x02\x02\x02\u0810\u0811\x03\x02\x02\x02\u0811\u0812" +
		"\x03\x02\x02\x02\u0812\u0813\x07\t\x02\x02\u0813\u0151\x03\x02\x02\x02" +
		"\u0814\u0815\x07D\x02\x02\u0815\u0816\x05\x18\r\x02\u0816\u0153\x03\x02" +
		"\x02\x02\u0817\u0819\x07L\x02\x02\u0818\u081A\x05~@\x02\u0819\u0818\x03" +
		"\x02\x02\x02\u0819\u081A\x03\x02\x02\x02\u081A\u081B\x03\x02\x02\x02\u081B" +
		"\u081C\x07\x03\x02\x02\u081C\u0155\x03\x02\x02\x02\u081D\u081E\x05\u011A" +
		"\x8E\x02\u081E\u081F\x07\x0E\x02\x02\u081F\u0157\x03\x02\x02\x02\u0820" +
		"\u0822\x077\x02\x02\u0821\u0823\x05\u011A\x8E\x02\u0822\u0821\x03\x02" +
		"\x02\x02\u0822\u0823\x03\x02\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824" +
		"\u0825\x07\x03\x02\x02\u0825\u0159\x03\x02\x02\x02\u0826\u0828\x07<\x02" +
		"\x02\u0827\u0829\x05\u011A\x8E\x02\u0828\u0827\x03\x02\x02\x02\u0828\u0829" +
		"\x03\x02\x02\x02\u0829\u082A\x03\x02\x02\x02\u082A\u082B\x07\x03\x02\x02" +
		"\u082B\u015B\x03\x02\x02\x02\u082C\u082D\x07o\x02\x02\u082D\u082E\x05" +
		"~@\x02\u082E\u082F\x07\x03\x02\x02\u082F\u015D\x03\x02\x02\x02\u0830\u0831" +
		"\x07o\x02\x02\u0831\u0832\x07\x07\x02\x02\u0832\u0833\x05~@\x02\u0833" +
		"\u0834\x07\x03\x02\x02\u0834\u015F\x03\x02\x02\x02\u0835\u0836\x05\u0162" +
		"\xB2\x02\u0836\u0837\x07\x03\x02\x02\u0837\u0161\x03\x02\x02\x02\u0838" +
		"\u0839\x076\x02\x02\u0839\u083A\x07\b\x02\x02\u083A\u083D\x05~@\x02\u083B" +
		"\u083C\x07\x05\x02\x02\u083C\u083E\x05~@\x02\u083D\u083B\x03\x02\x02\x02" +
		"\u083D\u083E\x03\x02\x02\x02\u083E\u0840\x03\x02\x02\x02\u083F\u0841\x07" +
		"\x05\x02\x02\u0840\u083F\x03\x02\x02\x02\u0840\u0841\x03\x02\x02\x02\u0841" +
		"\u0842\x03\x02\x02\x02\u0842\u0843\x07\t\x02\x02\u0843\u0163\x03\x02\x02" +
		"\x02\u0844\u0845\x05z>\x02\u0845\u0846\x07f\x02\x02\u0846\u0847\x05\u0166" +
		"\xB4\x02\u0847\u0848\x07\x03\x02\x02\u0848\u0165\x03\x02\x02\x02\u0849" +
		"\u084E\x05\u011A\x8E\x02\u084A\u084B\x07\r\x02\x02\u084B\u084D\x05\u011A" +
		"\x8E\x02\u084C\u084A\x03\x02\x02\x02\u084D\u0850\x03\x02\x02\x02\u084E" +
		"\u084C\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02\u084F\u0167\x03\x02" +
		"\x02\x02\u0850\u084E\x03\x02\x02\x02\u0851\u0854\x05\u016A\xB6\x02\u0852" +
		"\u0854\x05\u0172\xBA\x02\u0853\u0851\x03\x02\x02\x02\u0853\u0852\x03\x02" +
		"\x02\x02\u0854\u0169\x03\x02\x02\x02\u0855\u0856\x05z>\x02\u0856\u0857" +
		"\x05\u016C\xB7\x02\u0857\u016B\x03\x02\x02\x02\u0858\u0859\x07c\x02\x02" +
		"\u0859\u085F\x05\u017C\xBF\x02\u085A\u085C\x07Z\x02\x02\u085B\u085A\x03" +
		"\x02\x02\x02\u085B\u085C\x03\x02\x02\x02\u085C\u085D\x03\x02\x02\x02\u085D" +
		"\u085E\x07X\x02\x02\u085E\u0860\x05\u011A\x8E\x02\u085F\u085B\x03\x02" +
		"\x02\x02\u085F\u0860\x03\x02\x02\x02\u0860\u0864\x03\x02\x02\x02\u0861" +
		"\u0863\x05\u016E\xB8\x02\u0862\u0861\x03\x02\x02\x02\u0863\u0866\x03\x02" +
		"\x02\x02\u0864\u0862\x03\x02\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865" +
		"\u0867\x03\x02\x02\x02\u0866\u0864\x03\x02\x02\x02\u0867\u0868\x07\x03" +
		"\x02\x02\u0868\u016D\x03\x02\x02\x02\u0869\u086A\x07t\x02\x02\u086A\u086E" +
		"\x05\u0170\xB9\x02\u086B\u086C\x07q\x02\x02\u086C\u086E\x05\u0170\xB9" +
		"\x02\u086D\u0869\x03\x02\x02\x02\u086D\u086B\x03\x02\x02\x02\u086E\u016F" +
		"\x03\x02\x02\x02\u086F\u0874\x05\u011A\x8E\x02\u0870\u0871\x07\x05\x02" +
		"\x02\u0871\u0873\x05\u011A\x8E\x02\u0872\u0870\x03\x02\x02\x02\u0873\u0876" +
		"\x03\x02\x02\x02\u0874\u0872\x03\x02\x02\x02\u0874\u0875\x03\x02\x02\x02" +
		"\u0875\u0171\x03\x02\x02\x02\u0876\u0874\x03\x02\x02\x02\u0877\u0878\x05" +
		"z>\x02\u0878\u0879\x07\\\x02\x02\u0879\u087D\x05\u017A\xBE\x02\u087A\u087C" +
		"\x05\u016E\xB8\x02\u087B\u087A\x03\x02\x02\x02\u087C\u087F\x03\x02\x02" +
		"\x02\u087D\u087B\x03\x02\x02\x02\u087D\u087E\x03\x02\x02\x02\u087E\u0880" +
		"\x03\x02\x02\x02\u087F\u087D\x03\x02\x02\x02\u0880\u0881\x07\x03\x02\x02" +
		"\u0881\u0173\x03\x02\x02\x02\u0882\u0883\x05z>\x02\u0883\u0884\x07i\x02" +
		"\x02\u0884\u0885\x05\u017A\xBE\x02\u0885\u0886\x07\x03\x02\x02\u0886\u0175" +
		"\x03\x02\x02\x02\u0887\u0888\x05z>\x02\u0888\u0889\x07i\x02\x02\u0889" +
		"\u088C\x07r\x02\x02\u088A\u088D\x05\u0166\xB4\x02\u088B\u088D\x05\u017A" +
		"\xBE\x02\u088C\u088A\x03\x02\x02\x02\u088C\u088B\x03\x02\x02\x02\u088D" +
		"\u088E\x03\x02\x02\x02\u088E\u088F\x07\x03\x02\x02\u088F\u0177\x03\x02" +
		"\x02\x02\u0890\u0894\x05\u0176\xBC\x02\u0891\u0893\x05\x04\x03\x02\u0892" +
		"\u0891\x03\x02\x02\x02\u0893\u0896\x03\x02\x02\x02\u0894\u0892\x03\x02" +
		"\x02\x02\u0894\u0895\x03\x02\x02\x02\u0895\u0897\x03\x02\x02\x02\u0896" +
		"\u0894\x03\x02\x02\x02\u0897\u0898\x07\x02\x02\x03\u0898\u0179\x03\x02" +
		"\x02\x02\u0899\u089A\x05\x92J\x02\u089A\u017B\x03\x02\x02\x02\u089B\u089F" +
		"\x05\u017A\xBE\x02\u089C\u089E\x05\u017E";
	private static readonly _serializedATNSegment4: string =
		"\xC0\x02\u089D\u089C\x03\x02\x02\x02\u089E\u08A1\x03\x02\x02\x02\u089F" +
		"\u089D\x03\x02\x02\x02\u089F\u08A0\x03\x02\x02\x02\u08A0\u017D\x03\x02" +
		"\x02\x02\u08A1\u089F\x03\x02\x02\x02\u08A2\u08A3\x07F\x02\x02\u08A3\u08A4" +
		"\x07\b\x02\x02\u08A4\u08A5\x05\u0180\xC1\x02\u08A5\u08A6\x07\t\x02\x02" +
		"\u08A6\u08A7\x05\u017A\xBE\x02\u08A7\u017F\x03\x02\x02\x02\u08A8\u08AB" +
		"\x05\u0166\xB4\x02\u08A9\u08AA\x07\x10\x02\x02\u08AA\u08AC\x05\x90I\x02" +
		"\u08AB\u08A9\x03\x02\x02\x02\u08AB\u08AC\x03\x02\x02\x02\u08AC\u0181\x03" +
		"\x02\x02\x02\u08AD\u08AF\x05\u019C\xCF\x02\u08AE\u08B0\x07\f\x02\x02\u08AF" +
		"\u08AE\x03\x02\x02\x02\u08AF\u08B0\x03\x02\x02\x02\u08B0\u08B3\x03\x02" +
		"\x02\x02\u08B1\u08B3\x05\u0186\xC4\x02\u08B2\u08AD\x03\x02\x02\x02\u08B2" +
		"\u08B1\x03\x02\x02\x02\u08B3\u0183\x03\x02\x02\x02\u08B4\u08B6\x05\u019C" +
		"\xCF\x02\u08B5\u08B7\x07\f\x02\x02\u08B6\u08B5\x03\x02\x02\x02\u08B6\u08B7" +
		"\x03\x02\x02\x02\u08B7\u08BA\x03\x02\x02\x02\u08B8\u08BA\x05\u0188\xC5" +
		"\x02\u08B9\u08B4\x03\x02\x02\x02\u08B9\u08B8\x03\x02\x02\x02\u08BA\u0185" +
		"\x03\x02\x02\x02\u08BB\u08BE\x05\u0188\xC5\x02\u08BC\u08BE\x07T\x02\x02" +
		"\u08BD\u08BB\x03\x02\x02\x02\u08BD\u08BC\x03\x02\x02\x02\u08BE\u0187\x03" +
		"\x02\x02\x02\u08BF\u08C1\x05\u018A\xC6\x02\u08C0\u08C2\x05\u018C\xC7\x02" +
		"\u08C1\u08C0\x03\x02\x02\x02\u08C1\u08C2\x03\x02\x02\x02\u08C2\u08C4\x03" +
		"\x02\x02\x02\u08C3\u08C5\x07\f\x02\x02\u08C4\u08C3\x03\x02\x02\x02\u08C4" +
		"\u08C5\x03\x02\x02\x02\u08C5\u08CB\x03\x02\x02\x02\u08C6\u08C8\x07`\x02" +
		"\x02\u08C7\u08C9\x07\f\x02\x02\u08C8\u08C7\x03\x02\x02\x02\u08C8\u08C9" +
		"\x03\x02\x02\x02\u08C9\u08CB\x03\x02\x02\x02\u08CA\u08BF\x03\x02\x02\x02" +
		"\u08CA\u08C6\x03\x02\x02\x02\u08CB\u0189\x03\x02\x02\x02\u08CC\u08CF\x05" +
		"\u011E\x90\x02\u08CD\u08CE\x07\r\x02\x02\u08CE\u08D0\x05\u011E\x90\x02" +
		"\u08CF\u08CD\x03\x02\x02\x02\u08CF\u08D0\x03\x02\x02\x02\u08D0\u018B\x03" +
		"\x02\x02\x02\u08D1\u08D2\x07\x11\x02\x02\u08D2\u08D3\x05\u018E\xC8\x02" +
		"\u08D3\u08D4\x07\x12\x02\x02\u08D4\u018D\x03\x02\x02\x02\u08D5\u08DA\x05" +
		"\u0182\xC2\x02\u08D6\u08D7\x07\x05\x02\x02\u08D7\u08D9\x05\u0182\xC2\x02" +
		"\u08D8\u08D6\x03\x02\x02\x02\u08D9\u08DC\x03\x02\x02\x02\u08DA\u08D8\x03" +
		"\x02\x02\x02\u08DA\u08DB\x03\x02\x02\x02\u08DB\u018F\x03\x02\x02\x02\u08DC" +
		"\u08DA\x03\x02\x02\x02\u08DD\u08E2\x05\u0188\xC5\x02\u08DE\u08DF\x07\x05" +
		"\x02\x02\u08DF\u08E1\x05\u0188\xC5\x02\u08E0\u08DE\x03\x02\x02\x02\u08E1" +
		"\u08E4\x03\x02\x02\x02\u08E2\u08E0\x03\x02\x02\x02\u08E2\u08E3\x03\x02" +
		"\x02\x02\u08E3\u0191\x03\x02\x02\x02\u08E4\u08E2\x03\x02\x02\x02\u08E5" +
		"\u08E6\x07m\x02\x02\u08E6\u08E8\x05\u011E\x90\x02\u08E7\u08E9\x05x=\x02" +
		"\u08E8\u08E7\x03\x02\x02\x02\u08E8\u08E9\x03\x02\x02\x02\u08E9\u08EA\x03" +
		"\x02\x02\x02\u08EA\u08EB\x07\x04\x02\x02\u08EB\u08EC\x05\u0182\xC2\x02" +
		"\u08EC\u08ED\x07\x03\x02\x02\u08ED\u08F1\x03\x02\x02\x02\u08EE\u08EF\x07" +
		"m\x02\x02\u08EF\u08F1\x05\u0194\xCB\x02\u08F0\u08E5\x03\x02\x02\x02\u08F0" +
		"\u08EE\x03\x02\x02\x02\u08F1\u0193\x03\x02\x02\x02\u08F2\u08F3\x05\u0196" +
		"\xCC\x02\u08F3\u08F4\x05\x1A\x0E\x02\u08F4\u08F5\x07\x03\x02\x02\u08F5" +
		"\u0195\x03\x02\x02\x02\u08F6\u08F7\x05\u0182\xC2\x02\u08F7\u08F8\x05\u011A" +
		"\x8E\x02\u08F8\u08FB\x03\x02\x02\x02\u08F9\u08FB\x05\u011A\x8E\x02\u08FA" +
		"\u08F6\x03\x02\x02\x02\u08FA\u08F9\x03\x02\x02\x02\u08FB\u0197\x03\x02" +
		"\x02\x02\u08FC\u08FE\x07`\x02\x02\u08FD\u08FF\x05x=\x02\u08FE\u08FD\x03" +
		"\x02\x02\x02\u08FE\u08FF\x03\x02\x02\x02\u08FF\u0900\x03\x02\x02\x02\u0900" +
		"\u0901\x05\u019E\xD0\x02\u0901\u0199\x03\x02\x02\x02\u0902\u0904\x05\u0198" +
		"\xCD\x02\u0903\u0905\x07\f\x02\x02\u0904\u0903\x03\x02\x02\x02\u0904\u0905" +
		"\x03\x02\x02\x02\u0905\u0906\x03\x02\x02\x02\u0906\u0907\x05\u019A\xCE" +
		"\x02\u0907\u090A\x03\x02\x02\x02\u0908\u090A\x05\u0198\xCD\x02\u0909\u0902" +
		"\x03\x02\x02\x02\u0909\u0908\x03\x02\x02\x02\u090A\u019B\x03\x02\x02\x02" +
		"\u090B\u0910\x05\u019A\xCE\x02\u090C\u090D\x05\u0186\xC4\x02\u090D\u090E" +
		"\x05\u019A\xCE\x02\u090E\u0910\x03\x02\x02\x02\u090F\u090B\x03\x02\x02" +
		"\x02\u090F\u090C\x03\x02\x02\x02\u0910\u019D\x03\x02\x02\x02\u0911\u0912" +
		"\x07\b\x02\x02\u0912\u0925\x07\t\x02\x02\u0913\u0914\x07\b\x02\x02\u0914" +
		"\u0915\x05\u01A0\xD1\x02\u0915\u0916\x07\x05\x02\x02\u0916\u0917\x05\u01A4" +
		"\xD3\x02\u0917\u0918\x07\t\x02\x02\u0918\u0925\x03\x02\x02\x02\u0919\u091A" +
		"\x07\b\x02\x02\u091A\u091C\x05\u01A0\xD1\x02\u091B\u091D\x07\x05\x02\x02" +
		"\u091C\u091B\x03\x02\x02\x02\u091C\u091D\x03\x02\x02\x02\u091D\u091E\x03" +
		"\x02\x02\x02\u091E\u091F\x07\t\x02\x02\u091F\u0925\x03\x02\x02\x02\u0920" +
		"\u0921\x07\b\x02\x02\u0921\u0922\x05\u01A4\xD3\x02\u0922\u0923\x07\t\x02" +
		"\x02\u0923\u0925\x03\x02\x02\x02\u0924\u0911\x03\x02\x02\x02\u0924\u0913" +
		"\x03\x02\x02\x02\u0924\u0919\x03\x02\x02\x02\u0924\u0920\x03\x02\x02\x02" +
		"\u0925\u019F\x03\x02\x02\x02\u0926\u092B\x05\u01A2\xD2\x02\u0927\u0928" +
		"\x07\x05\x02\x02\u0928\u092A\x05\u01A2\xD2\x02\u0929\u0927\x03\x02\x02" +
		"\x02\u092A\u092D\x03\x02\x02\x02\u092B\u0929\x03\x02\x02\x02\u092B\u092C" +
		"\x03\x02\x02\x02\u092C\u01A1\x03\x02\x02\x02\u092D\u092B\x03\x02\x02\x02" +
		"\u092E\u092F\x05z>\x02\u092F\u0930\x05\u01AC\xD7\x02\u0930\u0935\x03\x02" +
		"\x02\x02\u0931\u0932\x05z>\x02\u0932\u0933\x05\u0182\xC2\x02\u0933\u0935" +
		"\x03\x02\x02\x02\u0934\u092E\x03\x02\x02\x02\u0934\u0931\x03\x02\x02\x02" +
		"\u0935\u01A3\x03\x02\x02\x02\u0936\u0939\x05\u01A6\xD4\x02\u0937\u0939" +
		"\x05\u01A8\xD5\x02\u0938\u0936\x03\x02\x02\x02\u0938\u0937\x03\x02\x02" +
		"\x02\u0939\u01A5\x03\x02\x02\x02\u093A\u093B\x07\n\x02\x02\u093B\u093D" +
		"\x05\u01A0\xD1\x02\u093C\u093E\x07\x05\x02\x02\u093D\u093C\x03\x02\x02" +
		"\x02\u093D\u093E\x03\x02\x02\x02\u093E\u093F\x03\x02\x02\x02\u093F\u0940" +
		"\x07\v\x02\x02\u0940\u01A7\x03\x02\x02\x02\u0941\u0942\x07\x8A\x02\x02" +
		"\u0942\u0947\x05\u01AA\xD6\x02\u0943\u0944\x07\x05\x02\x02\u0944\u0946" +
		"\x05\u01AA\xD6\x02\u0945\u0943\x03\x02\x02\x02\u0946\u0949\x03\x02\x02" +
		"\x02\u0947\u0945\x03\x02\x02\x02\u0947\u0948\x03\x02\x02\x02\u0948\u094B" +
		"\x03\x02\x02\x02\u0949\u0947\x03\x02\x02\x02\u094A\u094C\x07\x05\x02\x02" +
		"\u094B\u094A\x03\x02\x02\x02\u094B\u094C\x03\x02\x02\x02\u094C\u094D\x03" +
		"\x02\x02\x02\u094D\u094E\x07\x8B\x02\x02\u094E\u01A9\x03\x02\x02\x02\u094F" +
		"\u0951\x05z>\x02\u0950\u0952\x07j\x02\x02\u0951\u0950\x03\x02\x02\x02" +
		"\u0951\u0952\x03\x02\x02\x02\u0952\u0953\x03\x02\x02\x02\u0953\u0954\x05" +
		"\u01AC\xD7\x02\u0954\u01AB\x03\x02\x02\x02\u0955\u0956\x05\u0182\xC2\x02" +
		"\u0956\u0957\x05\u011A\x8E\x02\u0957\u01AD\x03\x02\x02\x02\u0958\u0964" +
		"\x05\u011E\x90\x02\u0959\u0964\x05\u011C\x8F\x02\u095A\u095B\x05\u018A" +
		"\xC6\x02\u095B\u0961\x05\u018C\xC7\x02\u095C\u095F\x07\r\x02\x02\u095D" +
		"\u0960\x05\u011A\x8E\x02\u095E\u0960\x07I\x02\x02\u095F\u095D\x03\x02" +
		"\x02\x02\u095F\u095E\x03\x02\x02\x02\u0960\u0962\x03\x02\x02\x02\u0961" +
		"\u095C\x03\x02\x02\x02\u0961\u0962\x03\x02\x02\x02\u0962\u0964\x03\x02" +
		"\x02\x02\u0963\u0958\x03\x02\x02\x02\u0963\u0959\x03\x02\x02\x02\u0963" +
		"\u095A\x03\x02\x02\x02\u0964\u01AF\x03\x02\x02\x02\u0965\u0970\x075\x02" +
		"\x02\u0966\u0971\x05T+\x02\u0967\u096C\x05\u011A\x8E\x02\u0968\u0969\x07" +
		"\r\x02\x02\u0969\u096B\x05\u011A\x8E\x02\u096A\u0968\x03\x02\x02\x02\u096B" +
		"\u096E\x03\x02\x02\x02\u096C\u096A\x03\x02\x02\x02\u096C\u096D\x03\x02" +
		"\x02\x02\u096D\u0971\x03\x02\x02\x02\u096E\u096C\x03\x02\x02\x02\u096F" +
		"\u0971\x07T\x02\x02\u0970\u0966\x03\x02\x02\x02\u0970\u0967\x03\x02\x02" +
		"\x02\u0970\u096F\x03\x02\x02\x02\u0971\u01B1\x03\x02\x02\x02\u0972\u0973" +
		"\t\x0E\x02\x02\u0973\u01B3\x03\x02\x02\x02\u0974\u098E\x07x\x02\x02\u0975" +
		"\u098E\x07z\x02\x02\u0976\u0977\x07{\x02\x02\u0977\u097C\x05~@\x02\u0978" +
		"\u0979\x07|\x02\x02\u0979\u097B\x05~@\x02\u097A\u0978\x03\x02\x02\x02" +
		"\u097B\u097E\x03\x02\x02\x02\u097C\u097A\x03\x02\x02\x02\u097C\u097D\x03" +
		"\x02\x02\x02\u097D\u097F\x03\x02\x02\x02\u097E\u097C\x03\x02\x02\x02\u097F" +
		"\u0980\x07}\x02\x02\u0980\u098E\x03\x02\x02\x02\u0981\u098E\x07~\x02\x02" +
		"\u0982\u0983\x07\x7F\x02\x02\u0983\u0988\x05~@\x02\u0984\u0985\x07\x80" +
		"\x02\x02\u0985\u0987\x05~@\x02\u0986\u0984\x03\x02\x02\x02\u0987\u098A" +
		"\x03\x02\x02\x02\u0988\u0986\x03\x02\x02\x02\u0988\u0989\x03\x02\x02\x02" +
		"\u0989\u098B\x03\x02\x02\x02\u098A\u0988\x03\x02\x02\x02\u098B\u098C\x07" +
		"\x81\x02\x02\u098C\u098E\x03\x02\x02\x02\u098D\u0974\x03\x02\x02\x02\u098D" +
		"\u0975\x03\x02\x02\x02\u098D\u0976\x03\x02\x02\x02\u098D\u0981\x03\x02" +
		"\x02\x02\u098D\u0982\x03\x02\x02\x02\u098E\u01B5\x03\x02\x02\x02\u098F" +
		"\u09A9\x07y\x02\x02\u0990\u09A9\x07\x82\x02\x02\u0991\u0992\x07\x83\x02" +
		"\x02\u0992\u0997\x05~@\x02\u0993\u0994\x07\x84\x02\x02\u0994\u0996\x05" +
		"~@\x02\u0995\u0993\x03\x02\x02\x02\u0996\u0999\x03\x02\x02\x02\u0997\u0995" +
		"\x03\x02\x02\x02\u0997\u0998\x03\x02\x02\x02\u0998\u099A\x03\x02\x02\x02" +
		"\u0999\u0997\x03\x02\x02\x02\u099A\u099B\x07\x85\x02\x02\u099B\u09A9\x03" +
		"\x02\x02\x02\u099C\u09A9\x07\x86\x02\x02\u099D\u099E\x07\x87\x02\x02\u099E" +
		"\u09A3\x05~@\x02\u099F\u09A0\x07\x88\x02\x02\u09A0\u09A2\x05~@\x02\u09A1" +
		"\u099F\x03\x02\x02\x02\u09A2\u09A5\x03\x02\x02\x02\u09A3\u09A1\x03\x02" +
		"\x02\x02\u09A3\u09A4\x03\x02\x02\x02\u09A4\u09A6\x03\x02\x02\x02\u09A5" +
		"\u09A3\x03\x02\x02\x02\u09A6\u09A7\x07\x89\x02\x02\u09A7\u09A9\x03\x02" +
		"\x02\x02\u09A8\u098F\x03\x02\x02\x02\u09A8\u0990\x03\x02\x02\x02\u09A8" +
		"\u0991\x03\x02\x02\x02\u09A8\u099C\x03\x02\x02\x02\u09A8\u099D\x03\x02" +
		"\x02\x02\u09A9\u01B7\x03\x02\x02\x02\u09AA\u09AB\t\x0F\x02\x02\u09AB\u01B9" +
		"\x03\x02\x02\x02\u09AC\u09AD\t\x10\x02\x02\u09AD\u01BB\x03\x02\x02\x02" +
		"\u0121\u01BD\u01C0\u01C3\u01C8\u01CE\u01D6\u01FC\u0204\u020A\u0210\u0216" +
		"\u021B\u021E\u0224\u0228\u022C\u022F\u0232\u0236\u0239\u023D\u0242\u0249" +
		"\u024D\u0253\u025B\u025E\u0276\u027C\u0283\u028C\u029A\u02A1\u02A6\u02AE" +
		"\u02B2\u02BC\u02C0\u02CA\u02CD\u02D0\u02D5\u02D9\u02DC\u02DF\u02E6\u02E8" +
		"\u02ED\u02F0\u02F5\u02F9\u02FC\u0301\u0304\u0307\u030F\u0315\u0319\u032A" +
		"\u0334\u0338\u033B\u0343\u034C\u034F\u0359\u0365\u0369\u036D\u0372\u037C" +
		"\u037E\u0383\u0385\u038A\u038C\u0391\u0396\u039E\u03A3\u03A9\u03B0\u03B5" +
		"\u03BE\u03C3\u03C9\u03CD\u03D0\u03D7\u03DC\u03DE\u03E5\u03ED\u03FA\u0402" +
		"\u0405\u040B\u0418\u041A\u0421\u0423\u042D\u0436\u043B\u043F\u0447\u044A" +
		"\u0451\u0460\u0465\u0468\u046B\u0473\u0477\u047F\u0482\u0489\u048E\u0494" +
		"\u049A\u04A2\u04AB\u04B3\u04BD\u04C6\u04CD\u04DE\u04EB\u04F4\u04FE\u0500" +
		"\u0505\u0508\u050B\u050F\u0514\u0517\u051B\u0524\u0528\u052F\u0541\u0544" +
		"\u054E\u0567\u056A\u057C\u058A\u0590\u0597\u05A8\u05AA\u05B3\u05BB\u05BE" +
		"\u05CD\u05D8\u05DE\u05E4\u05E6\u05ED\u0601\u0609\u0610\u0618\u0620\u0627" +
		"\u062D\u0637\u063D\u0644\u064B\u0653\u0655\u065C\u0664\u0666\u066D\u0675" +
		"\u0677\u0681\u068A\u068C\u0694\u069C\u06A5\u06A7\u06B1\u06BA\u06BC\u06C7" +
		"\u06CE\u06D3\u06E5\u06E8\u06F0\u06F3\u06FF\u0704\u070F\u0719\u0725\u0729" +
		"\u072F\u0737\u0739\u0745\u074C\u0756\u075C\u0772\u0775\u0780\u0786\u0794" +
		"\u0797\u07AB\u07AF\u07B1\u07B5\u07B8\u07D0\u07D4\u07DB\u07E6\u07F4\u07F7" +
		"\u07FF\u0803\u0809\u0810\u0819\u0822\u0828\u083D\u0840\u084E\u0853\u085B" +
		"\u085F\u0864\u086D\u0874\u087D\u088C\u0894\u089F\u08AB\u08AF\u08B2\u08B6" +
		"\u08B9\u08BD\u08C1\u08C4\u08C8\u08CA\u08CF\u08DA\u08E2\u08E8\u08F0\u08FA" +
		"\u08FE\u0904\u0909\u090F\u091C\u0924\u092B\u0934\u0938\u093D\u0947\u094B" +
		"\u0951\u095F\u0961\u0963\u096C\u0970\u097C\u0988\u098D\u0997\u09A3\u09A8";
	public static readonly _serializedATN: string = Utils.join(
		[
			DartParser._serializedATNSegment0,
			DartParser._serializedATNSegment1,
			DartParser._serializedATNSegment2,
			DartParser._serializedATNSegment3,
			DartParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DartParser.__ATN) {
			DartParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DartParser._serializedATN));
		}

		return DartParser.__ATN;
	}

}

export class LibraryDefinitionContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(DartParser.EOF, 0); }
	public FEFF(): TerminalNode | undefined { return this.tryGetToken(DartParser.FEFF, 0); }
	public SCRIPT_TAG(): TerminalNode | undefined { return this.tryGetToken(DartParser.SCRIPT_TAG, 0); }
	public libraryName(): LibraryNameContext | undefined {
		return this.tryGetRuleContext(0, LibraryNameContext);
	}
	public importOrExport(): ImportOrExportContext[];
	public importOrExport(i: number): ImportOrExportContext;
	public importOrExport(i?: number): ImportOrExportContext | ImportOrExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportOrExportContext);
		} else {
			return this.getRuleContext(i, ImportOrExportContext);
		}
	}
	public partDirective(): PartDirectiveContext[];
	public partDirective(i: number): PartDirectiveContext;
	public partDirective(i?: number): PartDirectiveContext | PartDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartDirectiveContext);
		} else {
			return this.getRuleContext(i, PartDirectiveContext);
		}
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public topLevelDefinition(): TopLevelDefinitionContext[];
	public topLevelDefinition(i: number): TopLevelDefinitionContext;
	public topLevelDefinition(i?: number): TopLevelDefinitionContext | TopLevelDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDefinitionContext);
		} else {
			return this.getRuleContext(i, TopLevelDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_libraryDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLibraryDefinition) {
			listener.enterLibraryDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLibraryDefinition) {
			listener.exitLibraryDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLibraryDefinition) {
			return visitor.visitLibraryDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelDefinitionContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public mixinDeclaration(): MixinDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MixinDeclarationContext);
	}
	public extensionDeclaration(): ExtensionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ExtensionDeclarationContext);
	}
	public enumType(): EnumTypeContext | undefined {
		return this.tryGetRuleContext(0, EnumTypeContext);
	}
	public typeAlias(): TypeAliasContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasContext);
	}
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTERNAL, 0); }
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public finalVarOrType(): FinalVarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, FinalVarOrTypeContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StaticFinalDeclarationListContext);
	}
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public LATE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LATE, 0); }
	public initializedIdentifierList(): InitializedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, InitializedIdentifierListContext);
	}
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public initializedIdentifier(): InitializedIdentifierContext[];
	public initializedIdentifier(i: number): InitializedIdentifierContext;
	public initializedIdentifier(i?: number): InitializedIdentifierContext | InitializedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializedIdentifierContext);
		} else {
			return this.getRuleContext(i, InitializedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_topLevelDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTopLevelDefinition) {
			listener.enterTopLevelDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTopLevelDefinition) {
			listener.exitTopLevelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTopLevelDefinition) {
			return visitor.visitTopLevelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaredIdentifierContext extends ParserRuleContext {
	public finalConstVarOrType(): FinalConstVarOrTypeContext {
		return this.getRuleContext(0, FinalConstVarOrTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_declaredIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDeclaredIdentifier) {
			listener.enterDeclaredIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDeclaredIdentifier) {
			listener.exitDeclaredIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDeclaredIdentifier) {
			return visitor.visitDeclaredIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinalConstVarOrTypeContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public LATE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LATE, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_finalConstVarOrType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFinalConstVarOrType) {
			listener.enterFinalConstVarOrType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFinalConstVarOrType) {
			listener.exitFinalConstVarOrType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFinalConstVarOrType) {
			return visitor.visitFinalConstVarOrType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinalVarOrTypeContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_finalVarOrType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFinalVarOrType) {
			listener.enterFinalVarOrType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFinalVarOrType) {
			listener.exitFinalVarOrType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFinalVarOrType) {
			return visitor.visitFinalVarOrType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarOrTypeContext extends ParserRuleContext {
	public VAR(): TerminalNode | undefined { return this.tryGetToken(DartParser.VAR, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_varOrType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterVarOrType) {
			listener.enterVarOrType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitVarOrType) {
			listener.exitVarOrType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitVarOrType) {
			return visitor.visitVarOrType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializedIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializedIdentifier) {
			listener.enterInitializedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializedIdentifier) {
			listener.exitInitializedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializedIdentifier) {
			return visitor.visitInitializedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedIdentifierListContext extends ParserRuleContext {
	public initializedIdentifier(): InitializedIdentifierContext[];
	public initializedIdentifier(i: number): InitializedIdentifierContext;
	public initializedIdentifier(i?: number): InitializedIdentifierContext | InitializedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializedIdentifierContext);
		} else {
			return this.getRuleContext(i, InitializedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializedIdentifierList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializedIdentifierList) {
			listener.enterInitializedIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializedIdentifierList) {
			listener.exitInitializedIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializedIdentifierList) {
			return visitor.visitInitializedIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSignatureContext extends ParserRuleContext {
	public identifierNotFUNCTION(): IdentifierNotFUNCTIONContext {
		return this.getRuleContext(0, IdentifierNotFUNCTIONContext);
	}
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionSignature) {
			listener.enterFunctionSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionSignature) {
			listener.exitFunctionSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionSignature) {
			return visitor.visitFunctionSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyPrefixContext extends ParserRuleContext {
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LBRACE, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionBodyPrefix; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionBodyPrefix) {
			listener.enterFunctionBodyPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionBodyPrefix) {
			listener.exitFunctionBodyPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionBodyPrefix) {
			return visitor.visitFunctionBodyPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_block; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterPartContext extends ParserRuleContext {
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_formalParameterPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFormalParameterPart) {
			listener.enterFormalParameterPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFormalParameterPart) {
			listener.exitFormalParameterPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFormalParameterPart) {
			return visitor.visitFormalParameterPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public normalFormalParameters(): NormalFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, NormalFormalParametersContext);
	}
	public optionalOrNamedFormalParameters(): OptionalOrNamedFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, OptionalOrNamedFormalParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormalParametersContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext[];
	public normalFormalParameter(i: number): NormalFormalParameterContext;
	public normalFormalParameter(i?: number): NormalFormalParameterContext | NormalFormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NormalFormalParameterContext);
		} else {
			return this.getRuleContext(i, NormalFormalParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalFormalParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalFormalParameters) {
			listener.enterNormalFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalFormalParameters) {
			listener.exitNormalFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalFormalParameters) {
			return visitor.visitNormalFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalOrNamedFormalParametersContext extends ParserRuleContext {
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, OptionalPositionalFormalParametersContext);
	}
	public namedFormalParameters(): NamedFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, NamedFormalParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_optionalOrNamedFormalParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOptionalOrNamedFormalParameters) {
			listener.enterOptionalOrNamedFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOptionalOrNamedFormalParameters) {
			listener.exitOptionalOrNamedFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOptionalOrNamedFormalParameters) {
			return visitor.visitOptionalOrNamedFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalPositionalFormalParametersContext extends ParserRuleContext {
	public defaultFormalParameter(): DefaultFormalParameterContext[];
	public defaultFormalParameter(i: number): DefaultFormalParameterContext;
	public defaultFormalParameter(i?: number): DefaultFormalParameterContext | DefaultFormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefaultFormalParameterContext);
		} else {
			return this.getRuleContext(i, DefaultFormalParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_optionalPositionalFormalParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOptionalPositionalFormalParameters) {
			listener.enterOptionalPositionalFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOptionalPositionalFormalParameters) {
			listener.exitOptionalPositionalFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOptionalPositionalFormalParameters) {
			return visitor.visitOptionalPositionalFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedFormalParametersContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public defaultNamedParameter(): DefaultNamedParameterContext[];
	public defaultNamedParameter(i: number): DefaultNamedParameterContext;
	public defaultNamedParameter(i?: number): DefaultNamedParameterContext | DefaultNamedParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefaultNamedParameterContext);
		} else {
			return this.getRuleContext(i, DefaultNamedParameterContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_namedFormalParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNamedFormalParameters) {
			listener.enterNamedFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNamedFormalParameters) {
			listener.exitNamedFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNamedFormalParameters) {
			return visitor.visitNamedFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormalParameterContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public normalFormalParameterNoMetadata(): NormalFormalParameterNoMetadataContext {
		return this.getRuleContext(0, NormalFormalParameterNoMetadataContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalFormalParameter) {
			listener.enterNormalFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalFormalParameter) {
			listener.exitNormalFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalFormalParameter) {
			return visitor.visitNormalFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormalParameterNoMetadataContext extends ParserRuleContext {
	public functionFormalParameter(): FunctionFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FunctionFormalParameterContext);
	}
	public fieldFormalParameter(): FieldFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FieldFormalParameterContext);
	}
	public simpleFormalParameter(): SimpleFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, SimpleFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalFormalParameterNoMetadata; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalFormalParameterNoMetadata) {
			listener.enterNormalFormalParameterNoMetadata(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalFormalParameterNoMetadata) {
			listener.exitNormalFormalParameterNoMetadata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalFormalParameterNoMetadata) {
			return visitor.visitNormalFormalParameterNoMetadata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionFormalParameterContext extends ParserRuleContext {
	public identifierNotFUNCTION(): IdentifierNotFUNCTIONContext {
		return this.getRuleContext(0, IdentifierNotFUNCTIONContext);
	}
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionFormalParameter) {
			listener.enterFunctionFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionFormalParameter) {
			listener.exitFunctionFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionFormalParameter) {
			return visitor.visitFunctionFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleFormalParameterContext extends ParserRuleContext {
	public declaredIdentifier(): DeclaredIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DeclaredIdentifierContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_simpleFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSimpleFormalParameter) {
			listener.enterSimpleFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSimpleFormalParameter) {
			listener.exitSimpleFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSimpleFormalParameter) {
			return visitor.visitSimpleFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldFormalParameterContext extends ParserRuleContext {
	public THIS(): TerminalNode { return this.getToken(DartParser.THIS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public finalConstVarOrType(): FinalConstVarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, FinalConstVarOrTypeContext);
	}
	public formalParameterPart(): FormalParameterPartContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_fieldFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFieldFormalParameter) {
			listener.enterFieldFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFieldFormalParameter) {
			listener.exitFieldFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFieldFormalParameter) {
			return visitor.visitFieldFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultFormalParameterContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext {
		return this.getRuleContext(0, NormalFormalParameterContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_defaultFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDefaultFormalParameter) {
			listener.enterDefaultFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDefaultFormalParameter) {
			listener.exitDefaultFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDefaultFormalParameter) {
			return visitor.visitDefaultFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultNamedParameterContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext {
		return this.getRuleContext(0, NormalFormalParameterContext);
	}
	public REQUIRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.REQUIRED, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_defaultNamedParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDefaultNamedParameter) {
			listener.enterDefaultNamedParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDefaultNamedParameter) {
			listener.exitDefaultNamedParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDefaultNamedParameter) {
			return visitor.visitDefaultNamedParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeWithParametersContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeWithParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeWithParameters) {
			listener.enterTypeWithParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeWithParameters) {
			listener.exitTypeWithParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeWithParameters) {
			return visitor.visitTypeWithParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(DartParser.CLASS, 0); }
	public typeWithParameters(): TypeWithParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeWithParametersContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(DartParser.RBRACE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(DartParser.ABSTRACT, 0); }
	public superclass(): SuperclassContext | undefined {
		return this.tryGetRuleContext(0, SuperclassContext);
	}
	public mixins(): MixinsContext | undefined {
		return this.tryGetRuleContext(0, MixinsContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public classMemberDefinition(): ClassMemberDefinitionContext[];
	public classMemberDefinition(i: number): ClassMemberDefinitionContext;
	public classMemberDefinition(i?: number): ClassMemberDefinitionContext | ClassMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, ClassMemberDefinitionContext);
		}
	}
	public mixinApplicationClass(): MixinApplicationClassContext | undefined {
		return this.tryGetRuleContext(0, MixinApplicationClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperclassContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(DartParser.EXTENDS, 0); }
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext {
		return this.getRuleContext(0, TypeNotVoidNotFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_superclass; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSuperclass) {
			listener.enterSuperclass(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSuperclass) {
			listener.exitSuperclass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSuperclass) {
			return visitor.visitSuperclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinsContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(DartParser.WITH, 0); }
	public typeNotVoidNotFunctionList(): TypeNotVoidNotFunctionListContext {
		return this.getRuleContext(0, TypeNotVoidNotFunctionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixins; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixins) {
			listener.enterMixins(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixins) {
			listener.exitMixins(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixins) {
			return visitor.visitMixins(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfacesContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(DartParser.IMPLEMENTS, 0); }
	public typeNotVoidNotFunctionList(): TypeNotVoidNotFunctionListContext {
		return this.getRuleContext(0, TypeNotVoidNotFunctionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_interfaces; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInterfaces) {
			listener.enterInterfaces(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInterfaces) {
			listener.exitInterfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInterfaces) {
			return visitor.visitInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDefinitionContext extends ParserRuleContext {
	public methodSignature(): MethodSignatureContext | undefined {
		return this.tryGetRuleContext(0, MethodSignatureContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_classMemberDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterClassMemberDefinition) {
			listener.enterClassMemberDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitClassMemberDefinition) {
			listener.exitClassMemberDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitClassMemberDefinition) {
			return visitor.visitClassMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinApplicationClassContext extends ParserRuleContext {
	public typeWithParameters(): TypeWithParametersContext {
		return this.getRuleContext(0, TypeWithParametersContext);
	}
	public mixinApplication(): MixinApplicationContext {
		return this.getRuleContext(0, MixinApplicationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixinApplicationClass; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixinApplicationClass) {
			listener.enterMixinApplicationClass(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixinApplicationClass) {
			listener.exitMixinApplicationClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixinApplicationClass) {
			return visitor.visitMixinApplicationClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinDeclarationContext extends ParserRuleContext {
	public MIXIN(): TerminalNode { return this.getToken(DartParser.MIXIN, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(DartParser.ON, 0); }
	public typeNotVoidNotFunctionList(): TypeNotVoidNotFunctionListContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidNotFunctionListContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public mixinMemberDefinition(): MixinMemberDefinitionContext[];
	public mixinMemberDefinition(i: number): MixinMemberDefinitionContext;
	public mixinMemberDefinition(i?: number): MixinMemberDefinitionContext | MixinMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MixinMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, MixinMemberDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixinDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixinDeclaration) {
			listener.enterMixinDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixinDeclaration) {
			listener.exitMixinDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixinDeclaration) {
			return visitor.visitMixinDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinMemberDefinitionContext extends ParserRuleContext {
	public classMemberDefinition(): ClassMemberDefinitionContext {
		return this.getRuleContext(0, ClassMemberDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixinMemberDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixinMemberDefinition) {
			listener.enterMixinMemberDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixinMemberDefinition) {
			listener.exitMixinMemberDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixinMemberDefinition) {
			return visitor.visitMixinMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionDeclarationContext extends ParserRuleContext {
	public EXTENSION(): TerminalNode { return this.getToken(DartParser.EXTENSION, 0); }
	public ON(): TerminalNode { return this.getToken(DartParser.ON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public extensionMemberDefinition(): ExtensionMemberDefinitionContext[];
	public extensionMemberDefinition(i: number): ExtensionMemberDefinitionContext;
	public extensionMemberDefinition(i?: number): ExtensionMemberDefinitionContext | ExtensionMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, ExtensionMemberDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_extensionDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExtensionDeclaration) {
			listener.enterExtensionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExtensionDeclaration) {
			listener.exitExtensionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExtensionDeclaration) {
			return visitor.visitExtensionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionMemberDefinitionContext extends ParserRuleContext {
	public classMemberDefinition(): ClassMemberDefinitionContext {
		return this.getRuleContext(0, ClassMemberDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_extensionMemberDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExtensionMemberDefinition) {
			listener.enterExtensionMemberDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExtensionMemberDefinition) {
			listener.exitExtensionMemberDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExtensionMemberDefinition) {
			return visitor.visitExtensionMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodSignatureContext extends ParserRuleContext {
	public constructorSignature(): ConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstructorSignatureContext);
	}
	public initializers(): InitializersContext | undefined {
		return this.tryGetRuleContext(0, InitializersContext);
	}
	public factoryConstructorSignature(): FactoryConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, FactoryConstructorSignatureContext);
	}
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.STATIC, 0); }
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public operatorSignature(): OperatorSignatureContext | undefined {
		return this.tryGetRuleContext(0, OperatorSignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_methodSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMethodSignature) {
			listener.enterMethodSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMethodSignature) {
			listener.exitMethodSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMethodSignature) {
			return visitor.visitMethodSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTERNAL, 0); }
	public factoryConstructorSignature(): FactoryConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, FactoryConstructorSignatureContext);
	}
	public constantConstructorSignature(): ConstantConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstantConstructorSignatureContext);
	}
	public constructorSignature(): ConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstructorSignatureContext);
	}
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.STATIC, 0); }
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public finalVarOrType(): FinalVarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, FinalVarOrTypeContext);
	}
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(DartParser.ABSTRACT, 0); }
	public operatorSignature(): OperatorSignatureContext | undefined {
		return this.tryGetRuleContext(0, OperatorSignatureContext);
	}
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StaticFinalDeclarationListContext);
	}
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public LATE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LATE, 0); }
	public initializedIdentifierList(): InitializedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, InitializedIdentifierListContext);
	}
	public redirectingFactoryConstructorSignature(): RedirectingFactoryConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, RedirectingFactoryConstructorSignatureContext);
	}
	public redirection(): RedirectionContext | undefined {
		return this.tryGetRuleContext(0, RedirectionContext);
	}
	public initializers(): InitializersContext | undefined {
		return this.tryGetRuleContext(0, InitializersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_declaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticFinalDeclarationListContext extends ParserRuleContext {
	public staticFinalDeclaration(): StaticFinalDeclarationContext[];
	public staticFinalDeclaration(i: number): StaticFinalDeclarationContext;
	public staticFinalDeclaration(i?: number): StaticFinalDeclarationContext | StaticFinalDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StaticFinalDeclarationContext);
		} else {
			return this.getRuleContext(i, StaticFinalDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_staticFinalDeclarationList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStaticFinalDeclarationList) {
			listener.enterStaticFinalDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStaticFinalDeclarationList) {
			listener.exitStaticFinalDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStaticFinalDeclarationList) {
			return visitor.visitStaticFinalDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticFinalDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_staticFinalDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStaticFinalDeclaration) {
			listener.enterStaticFinalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStaticFinalDeclaration) {
			listener.exitStaticFinalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStaticFinalDeclaration) {
			return visitor.visitStaticFinalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorSignatureContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(DartParser.OPERATOR, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_operatorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOperatorSignature) {
			listener.enterOperatorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOperatorSignature) {
			listener.exitOperatorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOperatorSignature) {
			return visitor.visitOperatorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public binaryOperator(): BinaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_operator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryOperatorContext extends ParserRuleContext {
	public multiplicativeOperator(): MultiplicativeOperatorContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeOperatorContext);
	}
	public additiveOperator(): AdditiveOperatorContext | undefined {
		return this.tryGetRuleContext(0, AdditiveOperatorContext);
	}
	public shiftOperator(): ShiftOperatorContext | undefined {
		return this.tryGetRuleContext(0, ShiftOperatorContext);
	}
	public relationalOperator(): RelationalOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationalOperatorContext);
	}
	public bitwiseOperator(): BitwiseOperatorContext | undefined {
		return this.tryGetRuleContext(0, BitwiseOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_binaryOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBinaryOperator) {
			listener.enterBinaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBinaryOperator) {
			listener.exitBinaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBinaryOperator) {
			return visitor.visitBinaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterSignatureContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(DartParser.GET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_getterSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterGetterSignature) {
			listener.enterGetterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitGetterSignature) {
			listener.exitGetterSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitGetterSignature) {
			return visitor.visitGetterSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterSignatureContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(DartParser.SET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_setterSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSetterSignature) {
			listener.enterSetterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSetterSignature) {
			listener.exitSetterSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSetterSignature) {
			return visitor.visitSetterSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorSignatureContext extends ParserRuleContext {
	public constructorName(): ConstructorNameContext {
		return this.getRuleContext(0, ConstructorNameContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorSignature) {
			listener.enterConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorSignature) {
			listener.exitConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorSignature) {
			return visitor.visitConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorNameContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorName; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorName) {
			listener.enterConstructorName(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorName) {
			listener.exitConstructorName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorName) {
			return visitor.visitConstructorName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedirectionContext extends ParserRuleContext {
	public THIS(): TerminalNode { return this.getToken(DartParser.THIS, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_redirection; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRedirection) {
			listener.enterRedirection(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRedirection) {
			listener.exitRedirection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRedirection) {
			return visitor.visitRedirection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializersContext extends ParserRuleContext {
	public initializerListEntry(): InitializerListEntryContext[];
	public initializerListEntry(i: number): InitializerListEntryContext;
	public initializerListEntry(i?: number): InitializerListEntryContext | InitializerListEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerListEntryContext);
		} else {
			return this.getRuleContext(i, InitializerListEntryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializers; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializers) {
			listener.enterInitializers(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializers) {
			listener.exitInitializers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializers) {
			return visitor.visitInitializers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListEntryContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	public fieldInitializer(): FieldInitializerContext | undefined {
		return this.tryGetRuleContext(0, FieldInitializerContext);
	}
	public assertion(): AssertionContext | undefined {
		return this.tryGetRuleContext(0, AssertionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializerListEntry; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializerListEntry) {
			listener.enterInitializerListEntry(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializerListEntry) {
			listener.exitInitializerListEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializerListEntry) {
			return visitor.visitInitializerListEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldInitializerContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public initializerExpression(): InitializerExpressionContext {
		return this.getRuleContext(0, InitializerExpressionContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(DartParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_fieldInitializer; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFieldInitializer) {
			listener.enterFieldInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFieldInitializer) {
			listener.exitFieldInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFieldInitializer) {
			return visitor.visitFieldInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public cascade(): CascadeContext | undefined {
		return this.tryGetRuleContext(0, CascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializerExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializerExpression) {
			listener.enterInitializerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializerExpression) {
			listener.exitInitializerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializerExpression) {
			return visitor.visitInitializerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactoryConstructorSignatureContext extends ParserRuleContext {
	public FACTORY(): TerminalNode { return this.getToken(DartParser.FACTORY, 0); }
	public constructorName(): ConstructorNameContext {
		return this.getRuleContext(0, ConstructorNameContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_factoryConstructorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFactoryConstructorSignature) {
			listener.enterFactoryConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFactoryConstructorSignature) {
			listener.exitFactoryConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFactoryConstructorSignature) {
			return visitor.visitFactoryConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedirectingFactoryConstructorSignatureContext extends ParserRuleContext {
	public FACTORY(): TerminalNode { return this.getToken(DartParser.FACTORY, 0); }
	public constructorName(): ConstructorNameContext {
		return this.getRuleContext(0, ConstructorNameContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public constructorDesignation(): ConstructorDesignationContext {
		return this.getRuleContext(0, ConstructorDesignationContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_redirectingFactoryConstructorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRedirectingFactoryConstructorSignature) {
			listener.enterRedirectingFactoryConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRedirectingFactoryConstructorSignature) {
			listener.exitRedirectingFactoryConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRedirectingFactoryConstructorSignature) {
			return visitor.visitRedirectingFactoryConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantConstructorSignatureContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(DartParser.CONST, 0); }
	public constructorName(): ConstructorNameContext {
		return this.getRuleContext(0, ConstructorNameContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constantConstructorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstantConstructorSignature) {
			listener.enterConstantConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstantConstructorSignature) {
			listener.exitConstantConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstantConstructorSignature) {
			return visitor.visitConstantConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinApplicationContext extends ParserRuleContext {
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext {
		return this.getRuleContext(0, TypeNotVoidNotFunctionContext);
	}
	public mixins(): MixinsContext {
		return this.getRuleContext(0, MixinsContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixinApplication; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixinApplication) {
			listener.enterMixinApplication(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixinApplication) {
			listener.exitMixinApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixinApplication) {
			return visitor.visitMixinApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(DartParser.ENUM, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public enumEntry(): EnumEntryContext[];
	public enumEntry(i: number): EnumEntryContext;
	public enumEntry(i?: number): EnumEntryContext | EnumEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumEntryContext);
		} else {
			return this.getRuleContext(i, EnumEntryContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public mixins(): MixinsContext | undefined {
		return this.tryGetRuleContext(0, MixinsContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public classMemberDefinition(): ClassMemberDefinitionContext[];
	public classMemberDefinition(i: number): ClassMemberDefinitionContext;
	public classMemberDefinition(i?: number): ClassMemberDefinitionContext | ClassMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, ClassMemberDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_enumType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterEnumType) {
			listener.enterEnumType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitEnumType) {
			listener.exitEnumType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitEnumType) {
			return visitor.visitEnumType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumEntryContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public argumentPart(): ArgumentPartContext | undefined {
		return this.tryGetRuleContext(0, ArgumentPartContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_enumEntry; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterEnumEntry) {
			listener.enterEnumEntry(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitEnumEntry) {
			listener.exitEnumEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitEnumEntry) {
			return visitor.visitEnumEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTENDS, 0); }
	public typeNotVoid(): TypeNotVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataContext extends ParserRuleContext {
	public metadatum(): MetadatumContext[];
	public metadatum(i: number): MetadatumContext;
	public metadatum(i?: number): MetadatumContext | MetadatumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadatumContext);
		} else {
			return this.getRuleContext(i, MetadatumContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_metadata; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMetadata) {
			listener.enterMetadata(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMetadata) {
			listener.exitMetadata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMetadata) {
			return visitor.visitMetadata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadatumContext extends ParserRuleContext {
	public constructorDesignation(): ConstructorDesignationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDesignationContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_metadatum; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMetadatum) {
			listener.enterMetadatum(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMetadatum) {
			listener.exitMetadatum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMetadatum) {
			return visitor.visitMetadatum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public functionExpression(): FunctionExpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionContext);
	}
	public throwExpression(): ThrowExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThrowExpressionContext);
	}
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public cascade(): CascadeContext | undefined {
		return this.tryGetRuleContext(0, CascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionWithoutCascadeContext extends ParserRuleContext {
	public functionExpressionWithoutCascade(): FunctionExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionWithoutCascadeContext);
	}
	public throwExpressionWithoutCascade(): ThrowExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, ThrowExpressionWithoutCascadeContext);
	}
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, ExpressionWithoutCascadeContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expressionWithoutCascade; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpressionWithoutCascade) {
			listener.enterExpressionWithoutCascade(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpressionWithoutCascade) {
			listener.exitExpressionWithoutCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpressionWithoutCascade) {
			return visitor.visitExpressionWithoutCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public thisExpression(): ThisExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThisExpressionContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public constObjectExpression(): ConstObjectExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstObjectExpressionContext);
	}
	public newExpression(): NewExpressionContext | undefined {
		return this.tryGetRuleContext(0, NewExpressionContext);
	}
	public constructorInvocation(): ConstructorInvocationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorInvocationContext);
	}
	public functionPrimary(): FunctionPrimaryContext | undefined {
		return this.tryGetRuleContext(0, FunctionPrimaryContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public constructorTearoff(): ConstructorTearoffContext | undefined {
		return this.tryGetRuleContext(0, ConstructorTearoffContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_primary; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorInvocationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public NEW(): TerminalNode { return this.getToken(DartParser.NEW, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorInvocation; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorInvocation) {
			listener.enterConstructorInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorInvocation) {
			listener.exitConstructorInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorInvocation) {
			return visitor.visitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public nullLiteral(): NullLiteralContext | undefined {
		return this.tryGetRuleContext(0, NullLiteralContext);
	}
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public symbolLiteral(): SymbolLiteralContext | undefined {
		return this.tryGetRuleContext(0, SymbolLiteralContext);
	}
	public setOrMapLiteral(): SetOrMapLiteralContext | undefined {
		return this.tryGetRuleContext(0, SetOrMapLiteralContext);
	}
	public listLiteral(): ListLiteralContext | undefined {
		return this.tryGetRuleContext(0, ListLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_literal; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullLiteralContext extends ParserRuleContext {
	public NULL(): TerminalNode { return this.getToken(DartParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_nullLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(DartParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(DartParser.HEX_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(DartParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public multiLineString(): MultiLineStringContext[];
	public multiLineString(i: number): MultiLineStringContext;
	public multiLineString(i?: number): MultiLineStringContext | MultiLineStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiLineStringContext);
		} else {
			return this.getRuleContext(i, MultiLineStringContext);
		}
	}
	public singleLineString(): SingleLineStringContext[];
	public singleLineString(i: number): SingleLineStringContext;
	public singleLineString(i?: number): SingleLineStringContext | SingleLineStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleLineStringContext);
		} else {
			return this.getRuleContext(i, SingleLineStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralWithoutInterpolationContext extends ParserRuleContext {
	public singleStringWithoutInterpolation(): SingleStringWithoutInterpolationContext[];
	public singleStringWithoutInterpolation(i: number): SingleStringWithoutInterpolationContext;
	public singleStringWithoutInterpolation(i?: number): SingleStringWithoutInterpolationContext | SingleStringWithoutInterpolationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleStringWithoutInterpolationContext);
		} else {
			return this.getRuleContext(i, SingleStringWithoutInterpolationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_stringLiteralWithoutInterpolation; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStringLiteralWithoutInterpolation) {
			listener.enterStringLiteralWithoutInterpolation(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStringLiteralWithoutInterpolation) {
			listener.exitStringLiteralWithoutInterpolation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStringLiteralWithoutInterpolation) {
			return visitor.visitStringLiteralWithoutInterpolation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetOrMapLiteralContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public elements(): ElementsContext | undefined {
		return this.tryGetRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_setOrMapLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSetOrMapLiteral) {
			listener.enterSetOrMapLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSetOrMapLiteral) {
			listener.exitSetOrMapLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSetOrMapLiteral) {
			return visitor.visitSetOrMapLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListLiteralContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public elements(): ElementsContext | undefined {
		return this.tryGetRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_listLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterListLiteral) {
			listener.enterListLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitListLiteral) {
			listener.exitListLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitListLiteral) {
			return visitor.visitListLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_elements; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterElements) {
			listener.enterElements(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitElements) {
			listener.exitElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitElements) {
			return visitor.visitElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public expressionElement(): ExpressionElementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionElementContext);
	}
	public mapElement(): MapElementContext | undefined {
		return this.tryGetRuleContext(0, MapElementContext);
	}
	public spreadElement(): SpreadElementContext | undefined {
		return this.tryGetRuleContext(0, SpreadElementContext);
	}
	public ifElement(): IfElementContext | undefined {
		return this.tryGetRuleContext(0, IfElementContext);
	}
	public forElement(): ForElementContext | undefined {
		return this.tryGetRuleContext(0, ForElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_element; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionElementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expressionElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpressionElement) {
			listener.enterExpressionElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpressionElement) {
			listener.exitExpressionElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpressionElement) {
			return visitor.visitExpressionElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapElementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mapElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMapElement) {
			listener.enterMapElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMapElement) {
			listener.exitMapElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMapElement) {
			return visitor.visitMapElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpreadElementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_spreadElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSpreadElement) {
			listener.enterSpreadElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSpreadElement) {
			listener.exitSpreadElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSpreadElement) {
			return visitor.visitSpreadElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(DartParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_ifElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIfElement) {
			listener.enterIfElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIfElement) {
			listener.exitIfElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIfElement) {
			return visitor.visitIfElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForElementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(DartParser.FOR, 0); }
	public forLoopParts(): ForLoopPartsContext {
		return this.getRuleContext(0, ForLoopPartsContext);
	}
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(DartParser.AWAIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_forElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterForElement) {
			listener.enterForElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitForElement) {
			listener.exitForElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitForElement) {
			return visitor.visitForElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorTearoffContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public NEW(): TerminalNode { return this.getToken(DartParser.NEW, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorTearoff; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorTearoff) {
			listener.enterConstructorTearoff(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorTearoff) {
			listener.exitConstructorTearoff(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorTearoff) {
			return visitor.visitConstructorTearoff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowExpressionContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(DartParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_throwExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterThrowExpression) {
			listener.enterThrowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitThrowExpression) {
			listener.exitThrowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitThrowExpression) {
			return visitor.visitThrowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowExpressionWithoutCascadeContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(DartParser.THROW, 0); }
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		return this.getRuleContext(0, ExpressionWithoutCascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_throwExpressionWithoutCascade; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterThrowExpressionWithoutCascade) {
			listener.enterThrowExpressionWithoutCascade(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitThrowExpressionWithoutCascade) {
			listener.exitThrowExpressionWithoutCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitThrowExpressionWithoutCascade) {
			return visitor.visitThrowExpressionWithoutCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionContext extends ParserRuleContext {
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public functionExpressionBody(): FunctionExpressionBodyContext {
		return this.getRuleContext(0, FunctionExpressionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpressionBody; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpressionBody) {
			listener.enterFunctionExpressionBody(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpressionBody) {
			listener.exitFunctionExpressionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpressionBody) {
			return visitor.visitFunctionExpressionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionBodyPrefixContext extends ParserRuleContext {
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpressionBodyPrefix; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpressionBodyPrefix) {
			listener.enterFunctionExpressionBodyPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpressionBodyPrefix) {
			listener.exitFunctionExpressionBodyPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpressionBodyPrefix) {
			return visitor.visitFunctionExpressionBodyPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionWithoutCascadeContext extends ParserRuleContext {
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public functionExpressionWithoutCascadeBody(): FunctionExpressionWithoutCascadeBodyContext {
		return this.getRuleContext(0, FunctionExpressionWithoutCascadeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpressionWithoutCascade; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpressionWithoutCascade) {
			listener.enterFunctionExpressionWithoutCascade(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpressionWithoutCascade) {
			listener.exitFunctionExpressionWithoutCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpressionWithoutCascade) {
			return visitor.visitFunctionExpressionWithoutCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionWithoutCascadeBodyContext extends ParserRuleContext {
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		return this.getRuleContext(0, ExpressionWithoutCascadeContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpressionWithoutCascadeBody; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpressionWithoutCascadeBody) {
			listener.enterFunctionExpressionWithoutCascadeBody(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpressionWithoutCascadeBody) {
			listener.exitFunctionExpressionWithoutCascadeBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpressionWithoutCascadeBody) {
			return visitor.visitFunctionExpressionWithoutCascadeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrimaryContext extends ParserRuleContext {
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public functionPrimaryBody(): FunctionPrimaryBodyContext {
		return this.getRuleContext(0, FunctionPrimaryBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionPrimary; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionPrimary) {
			listener.enterFunctionPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionPrimary) {
			listener.exitFunctionPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionPrimary) {
			return visitor.visitFunctionPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrimaryBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionPrimaryBody; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionPrimaryBody) {
			listener.enterFunctionPrimaryBody(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionPrimaryBody) {
			listener.exitFunctionPrimaryBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionPrimaryBody) {
			return visitor.visitFunctionPrimaryBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrimaryBodyPrefixContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionPrimaryBodyPrefix; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionPrimaryBodyPrefix) {
			listener.enterFunctionPrimaryBodyPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionPrimaryBodyPrefix) {
			listener.exitFunctionPrimaryBodyPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionPrimaryBodyPrefix) {
			return visitor.visitFunctionPrimaryBodyPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThisExpressionContext extends ParserRuleContext {
	public THIS(): TerminalNode { return this.getToken(DartParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_thisExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewExpressionContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(DartParser.NEW, 0); }
	public constructorDesignation(): ConstructorDesignationContext {
		return this.getRuleContext(0, ConstructorDesignationContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_newExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstObjectExpressionContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(DartParser.CONST, 0); }
	public constructorDesignation(): ConstructorDesignationContext {
		return this.getRuleContext(0, ConstructorDesignationContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constObjectExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstObjectExpression) {
			listener.enterConstObjectExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstObjectExpression) {
			listener.exitConstObjectExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstObjectExpression) {
			return visitor.visitConstObjectExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_arguments; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public namedArgument(): NamedArgumentContext[];
	public namedArgument(i: number): NamedArgumentContext;
	public namedArgument(i?: number): NamedArgumentContext | NamedArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedArgumentContext);
		} else {
			return this.getRuleContext(i, NamedArgumentContext);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedArgumentContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_namedArgument; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNamedArgument) {
			listener.enterNamedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNamedArgument) {
			listener.exitNamedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNamedArgument) {
			return visitor.visitNamedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeContext extends ParserRuleContext {
	public cascade(): CascadeContext | undefined {
		return this.tryGetRuleContext(0, CascadeContext);
	}
	public cascadeSection(): CascadeSectionContext {
		return this.getRuleContext(0, CascadeSectionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascade; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascade) {
			listener.enterCascade(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascade) {
			listener.exitCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascade) {
			return visitor.visitCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeSectionContext extends ParserRuleContext {
	public cascadeSelector(): CascadeSelectorContext {
		return this.getRuleContext(0, CascadeSelectorContext);
	}
	public cascadeSectionTail(): CascadeSectionTailContext {
		return this.getRuleContext(0, CascadeSectionTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascadeSection; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascadeSection) {
			listener.enterCascadeSection(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascadeSection) {
			listener.exitCascadeSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascadeSection) {
			return visitor.visitCascadeSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeSelectorContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascadeSelector; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascadeSelector) {
			listener.enterCascadeSelector(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascadeSelector) {
			listener.exitCascadeSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascadeSelector) {
			return visitor.visitCascadeSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeSectionTailContext extends ParserRuleContext {
	public cascadeAssignment(): CascadeAssignmentContext | undefined {
		return this.tryGetRuleContext(0, CascadeAssignmentContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	public assignableSelector(): AssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, AssignableSelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascadeSectionTail; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascadeSectionTail) {
			listener.enterCascadeSectionTail(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascadeSectionTail) {
			listener.exitCascadeSectionTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascadeSectionTail) {
			return visitor.visitCascadeSectionTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeAssignmentContext extends ParserRuleContext {
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		return this.getRuleContext(0, ExpressionWithoutCascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascadeAssignment; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascadeAssignment) {
			listener.enterCascadeAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascadeAssignment) {
			listener.exitCascadeAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascadeAssignment) {
			return visitor.visitCascadeAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public compoundAssignmentOperator(): CompoundAssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompoundAssignmentOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundAssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_compoundAssignmentOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCompoundAssignmentOperator) {
			listener.enterCompoundAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCompoundAssignmentOperator) {
			listener.exitCompoundAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCompoundAssignmentOperator) {
			return visitor.visitCompoundAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public ifNullExpression(): IfNullExpressionContext {
		return this.getRuleContext(0, IfNullExpressionContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext[];
	public expressionWithoutCascade(i: number): ExpressionWithoutCascadeContext;
	public expressionWithoutCascade(i?: number): ExpressionWithoutCascadeContext | ExpressionWithoutCascadeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionWithoutCascadeContext);
		} else {
			return this.getRuleContext(i, ExpressionWithoutCascadeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNullExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext[];
	public logicalOrExpression(i: number): LogicalOrExpressionContext;
	public logicalOrExpression(i?: number): LogicalOrExpressionContext | LogicalOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalOrExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalOrExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_ifNullExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIfNullExpression) {
			listener.enterIfNullExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIfNullExpression) {
			listener.exitIfNullExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIfNullExpression) {
			return visitor.visitIfNullExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	public equalityOperator(): EqualityOperatorContext | undefined {
		return this.tryGetRuleContext(0, EqualityOperatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_equalityOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterEqualityOperator) {
			listener.enterEqualityOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitEqualityOperator) {
			listener.exitEqualityOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitEqualityOperator) {
			return visitor.visitEqualityOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public bitwiseOrExpression(): BitwiseOrExpressionContext[];
	public bitwiseOrExpression(i: number): BitwiseOrExpressionContext;
	public bitwiseOrExpression(i?: number): BitwiseOrExpressionContext | BitwiseOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseOrExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseOrExpressionContext);
		}
	}
	public typeTest(): TypeTestContext | undefined {
		return this.tryGetRuleContext(0, TypeTestContext);
	}
	public typeCast(): TypeCastContext | undefined {
		return this.tryGetRuleContext(0, TypeCastContext);
	}
	public relationalOperator(): RelationalOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationalOperatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_relationalOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRelationalOperator) {
			listener.enterRelationalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRelationalOperator) {
			listener.exitRelationalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRelationalOperator) {
			return visitor.visitRelationalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOrExpressionContext extends ParserRuleContext {
	public bitwiseXorExpression(): BitwiseXorExpressionContext[];
	public bitwiseXorExpression(i: number): BitwiseXorExpressionContext;
	public bitwiseXorExpression(i?: number): BitwiseXorExpressionContext | BitwiseXorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseXorExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseXorExpressionContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_bitwiseOrExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBitwiseOrExpression) {
			listener.enterBitwiseOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBitwiseOrExpression) {
			listener.exitBitwiseOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBitwiseOrExpression) {
			return visitor.visitBitwiseOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseXorExpressionContext extends ParserRuleContext {
	public bitwiseAndExpression(): BitwiseAndExpressionContext[];
	public bitwiseAndExpression(i: number): BitwiseAndExpressionContext;
	public bitwiseAndExpression(i?: number): BitwiseAndExpressionContext | BitwiseAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseAndExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseAndExpressionContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_bitwiseXorExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBitwiseXorExpression) {
			listener.enterBitwiseXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBitwiseXorExpression) {
			listener.exitBitwiseXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBitwiseXorExpression) {
			return visitor.visitBitwiseXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseAndExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_bitwiseAndExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBitwiseAndExpression) {
			listener.enterBitwiseAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBitwiseAndExpression) {
			listener.exitBitwiseAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBitwiseAndExpression) {
			return visitor.visitBitwiseAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_bitwiseOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBitwiseOperator) {
			listener.enterBitwiseOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBitwiseOperator) {
			listener.exitBitwiseOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBitwiseOperator) {
			return visitor.visitBitwiseOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public shiftOperator(): ShiftOperatorContext[];
	public shiftOperator(i: number): ShiftOperatorContext;
	public shiftOperator(i?: number): ShiftOperatorContext | ShiftOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftOperatorContext);
		} else {
			return this.getRuleContext(i, ShiftOperatorContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_shiftOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterShiftOperator) {
			listener.enterShiftOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitShiftOperator) {
			listener.exitShiftOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitShiftOperator) {
			return visitor.visitShiftOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public additiveOperator(): AdditiveOperatorContext[];
	public additiveOperator(i: number): AdditiveOperatorContext;
	public additiveOperator(i?: number): AdditiveOperatorContext | AdditiveOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveOperatorContext);
		} else {
			return this.getRuleContext(i, AdditiveOperatorContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_additiveOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAdditiveOperator) {
			listener.enterAdditiveOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAdditiveOperator) {
			listener.exitAdditiveOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAdditiveOperator) {
			return visitor.visitAdditiveOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	public multiplicativeOperator(): MultiplicativeOperatorContext[];
	public multiplicativeOperator(i: number): MultiplicativeOperatorContext;
	public multiplicativeOperator(i?: number): MultiplicativeOperatorContext | MultiplicativeOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeOperatorContext);
		} else {
			return this.getRuleContext(i, MultiplicativeOperatorContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_multiplicativeOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMultiplicativeOperator) {
			listener.enterMultiplicativeOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMultiplicativeOperator) {
			listener.exitMultiplicativeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMultiplicativeOperator) {
			return visitor.visitMultiplicativeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public prefixOperator(): PrefixOperatorContext | undefined {
		return this.tryGetRuleContext(0, PrefixOperatorContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public awaitExpression(): AwaitExpressionContext | undefined {
		return this.tryGetRuleContext(0, AwaitExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public minusOperator(): MinusOperatorContext | undefined {
		return this.tryGetRuleContext(0, MinusOperatorContext);
	}
	public tildeOperator(): TildeOperatorContext | undefined {
		return this.tryGetRuleContext(0, TildeOperatorContext);
	}
	public incrementOperator(): IncrementOperatorContext | undefined {
		return this.tryGetRuleContext(0, IncrementOperatorContext);
	}
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixOperatorContext extends ParserRuleContext {
	public minusOperator(): MinusOperatorContext | undefined {
		return this.tryGetRuleContext(0, MinusOperatorContext);
	}
	public negationOperator(): NegationOperatorContext | undefined {
		return this.tryGetRuleContext(0, NegationOperatorContext);
	}
	public tildeOperator(): TildeOperatorContext | undefined {
		return this.tryGetRuleContext(0, TildeOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_prefixOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPrefixOperator) {
			listener.enterPrefixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPrefixOperator) {
			listener.exitPrefixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPrefixOperator) {
			return visitor.visitPrefixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MinusOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_minusOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMinusOperator) {
			listener.enterMinusOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMinusOperator) {
			listener.exitMinusOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMinusOperator) {
			return visitor.visitMinusOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegationOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_negationOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNegationOperator) {
			listener.enterNegationOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNegationOperator) {
			listener.exitNegationOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNegationOperator) {
			return visitor.visitNegationOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TildeOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_tildeOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTildeOperator) {
			listener.enterTildeOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTildeOperator) {
			listener.exitTildeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTildeOperator) {
			return visitor.visitTildeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AwaitExpressionContext extends ParserRuleContext {
	public AWAIT(): TerminalNode { return this.getToken(DartParser.AWAIT, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_awaitExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAwaitExpression) {
			listener.enterAwaitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAwaitExpression) {
			listener.exitAwaitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAwaitExpression) {
			return visitor.visitAwaitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public postfixOperator(): PostfixOperatorContext | undefined {
		return this.tryGetRuleContext(0, PostfixOperatorContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixOperatorContext extends ParserRuleContext {
	public incrementOperator(): IncrementOperatorContext {
		return this.getRuleContext(0, IncrementOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_postfixOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPostfixOperator) {
			listener.enterPostfixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPostfixOperator) {
			listener.exitPostfixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPostfixOperator) {
			return visitor.visitPostfixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public assignableSelector(): AssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, AssignableSelectorContext);
	}
	public argumentPart(): ArgumentPartContext | undefined {
		return this.tryGetRuleContext(0, ArgumentPartContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_selector; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentPartContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_argumentPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterArgumentPart) {
			listener.enterArgumentPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitArgumentPart) {
			listener.exitArgumentPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitArgumentPart) {
			return visitor.visitArgumentPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncrementOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_incrementOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIncrementOperator) {
			listener.enterIncrementOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIncrementOperator) {
			listener.exitIncrementOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIncrementOperator) {
			return visitor.visitIncrementOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableExpressionContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public assignableSelectorPart(): AssignableSelectorPartContext | undefined {
		return this.tryGetRuleContext(0, AssignableSelectorPartContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assignableExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssignableExpression) {
			listener.enterAssignableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssignableExpression) {
			listener.exitAssignableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssignableExpression) {
			return visitor.visitAssignableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableSelectorPartContext extends ParserRuleContext {
	public assignableSelector(): AssignableSelectorContext {
		return this.getRuleContext(0, AssignableSelectorContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assignableSelectorPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssignableSelectorPart) {
			listener.enterAssignableSelectorPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssignableSelectorPart) {
			listener.exitAssignableSelectorPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssignableSelectorPart) {
			return visitor.visitAssignableSelectorPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnconditionalAssignableSelectorContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_unconditionalAssignableSelector; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterUnconditionalAssignableSelector) {
			listener.enterUnconditionalAssignableSelector(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitUnconditionalAssignableSelector) {
			listener.exitUnconditionalAssignableSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitUnconditionalAssignableSelector) {
			return visitor.visitUnconditionalAssignableSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableSelectorContext extends ParserRuleContext {
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assignableSelector; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssignableSelector) {
			listener.enterAssignableSelector(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssignableSelector) {
			listener.exitAssignableSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssignableSelector) {
			return visitor.visitAssignableSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNotFUNCTIONContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(DartParser.IDENTIFIER, 0); }
	public builtInIdentifier(): BuiltInIdentifierContext | undefined {
		return this.tryGetRuleContext(0, BuiltInIdentifierContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(DartParser.HIDE, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(DartParser.OF, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(DartParser.ON, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(DartParser.SHOW, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(DartParser.AWAIT, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(DartParser.YIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_identifierNotFUNCTION; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIdentifierNotFUNCTION) {
			listener.enterIdentifierNotFUNCTION(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIdentifierNotFUNCTION) {
			listener.exitIdentifierNotFUNCTION(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIdentifierNotFUNCTION) {
			return visitor.visitIdentifierNotFUNCTION(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public identifierNotFUNCTION(): IdentifierNotFUNCTIONContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNotFUNCTIONContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(DartParser.FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_identifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext[];
	public typeIdentifier(i: number): TypeIdentifierContext;
	public typeIdentifier(i?: number): TypeIdentifierContext | TypeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeIdentifierContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(DartParser.IDENTIFIER, 0); }
	public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.DYNAMIC, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(DartParser.HIDE, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(DartParser.OF, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(DartParser.ON, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(DartParser.SHOW, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(DartParser.AWAIT, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(DartParser.YIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeIdentifier) {
			listener.enterTypeIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeIdentifier) {
			listener.exitTypeIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeIdentifier) {
			return visitor.visitTypeIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTestContext extends ParserRuleContext {
	public isOperator(): IsOperatorContext {
		return this.getRuleContext(0, IsOperatorContext);
	}
	public typeNotVoid(): TypeNotVoidContext {
		return this.getRuleContext(0, TypeNotVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeTest; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeTest) {
			listener.enterTypeTest(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeTest) {
			listener.exitTypeTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeTest) {
			return visitor.visitTypeTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsOperatorContext extends ParserRuleContext {
	public IS(): TerminalNode { return this.getToken(DartParser.IS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_isOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIsOperator) {
			listener.enterIsOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIsOperator) {
			listener.exitIsOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIsOperator) {
			return visitor.visitIsOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeCastContext extends ParserRuleContext {
	public asOperator(): AsOperatorContext {
		return this.getRuleContext(0, AsOperatorContext);
	}
	public typeNotVoid(): TypeNotVoidContext {
		return this.getRuleContext(0, TypeNotVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeCast; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeCast) {
			listener.enterTypeCast(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeCast) {
			listener.exitTypeCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeCast) {
			return visitor.visitTypeCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsOperatorContext extends ParserRuleContext {
	public AS(): TerminalNode { return this.getToken(DartParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_asOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAsOperator) {
			listener.enterAsOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAsOperator) {
			listener.exitAsOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAsOperator) {
			return visitor.visitAsOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_statements; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public nonLabelledStatement(): NonLabelledStatementContext {
		return this.getRuleContext(0, NonLabelledStatementContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_statement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonLabelledStatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public rethrowStatement(): RethrowStatementContext | undefined {
		return this.tryGetRuleContext(0, RethrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public localFunctionDeclaration(): LocalFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalFunctionDeclarationContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public yieldStatement(): YieldStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldStatementContext);
	}
	public yieldEachStatement(): YieldEachStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldEachStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_nonLabelledStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNonLabelledStatement) {
			listener.enterNonLabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNonLabelledStatement) {
			listener.exitNonLabelledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNonLabelledStatement) {
			return visitor.visitNonLabelledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public initializedVariableDeclaration(): InitializedVariableDeclarationContext {
		return this.getRuleContext(0, InitializedVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedVariableDeclarationContext extends ParserRuleContext {
	public declaredIdentifier(): DeclaredIdentifierContext {
		return this.getRuleContext(0, DeclaredIdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public initializedIdentifier(): InitializedIdentifierContext[];
	public initializedIdentifier(i: number): InitializedIdentifierContext;
	public initializedIdentifier(i?: number): InitializedIdentifierContext | InitializedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializedIdentifierContext);
		} else {
			return this.getRuleContext(i, InitializedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializedVariableDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializedVariableDeclaration) {
			listener.enterInitializedVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializedVariableDeclaration) {
			listener.exitInitializedVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializedVariableDeclaration) {
			return visitor.visitInitializedVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalFunctionDeclarationContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public functionSignature(): FunctionSignatureContext {
		return this.getRuleContext(0, FunctionSignatureContext);
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_localFunctionDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLocalFunctionDeclaration) {
			listener.enterLocalFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLocalFunctionDeclaration) {
			listener.exitLocalFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLocalFunctionDeclaration) {
			return visitor.visitLocalFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(DartParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(DartParser.FOR, 0); }
	public forLoopParts(): ForLoopPartsContext {
		return this.getRuleContext(0, ForLoopPartsContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(DartParser.AWAIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForLoopPartsContext extends ParserRuleContext {
	public metadata(): MetadataContext | undefined {
		return this.tryGetRuleContext(0, MetadataContext);
	}
	public declaredIdentifier(): DeclaredIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DeclaredIdentifierContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(DartParser.IN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public forInitializerStatement(): ForInitializerStatementContext | undefined {
		return this.tryGetRuleContext(0, ForInitializerStatementContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_forLoopParts; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterForLoopParts) {
			listener.enterForLoopParts(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitForLoopParts) {
			listener.exitForLoopParts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitForLoopParts) {
			return visitor.visitForLoopParts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitializerStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_forInitializerStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterForInitializerStatement) {
			listener.enterForInitializerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitForInitializerStatement) {
			listener.exitForInitializerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitForInitializerStatement) {
			return visitor.visitForInitializerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(DartParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(DartParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(DartParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_doStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(DartParser.SWITCH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public switchCase(): SwitchCaseContext[];
	public switchCase(i: number): SwitchCaseContext;
	public switchCase(i?: number): SwitchCaseContext | SwitchCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchCaseContext);
		} else {
			return this.getRuleContext(i, SwitchCaseContext);
		}
	}
	public defaultCase(): DefaultCaseContext | undefined {
		return this.tryGetRuleContext(0, DefaultCaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(DartParser.CASE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_switchCase; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSwitchCase) {
			listener.enterSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSwitchCase) {
			listener.exitSwitchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSwitchCase) {
			return visitor.visitSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultCaseContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(DartParser.DEFAULT, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_defaultCase; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDefaultCase) {
			listener.enterDefaultCase(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDefaultCase) {
			listener.exitDefaultCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDefaultCase) {
			return visitor.visitDefaultCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RethrowStatementContext extends ParserRuleContext {
	public RETHROW(): TerminalNode { return this.getToken(DartParser.RETHROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_rethrowStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRethrowStatement) {
			listener.enterRethrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRethrowStatement) {
			listener.exitRethrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRethrowStatement) {
			return visitor.visitRethrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(DartParser.TRY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public onParts(): OnPartsContext | undefined {
		return this.tryGetRuleContext(0, OnPartsContext);
	}
	public finallyPart(): FinallyPartContext | undefined {
		return this.tryGetRuleContext(0, FinallyPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnPartContext extends ParserRuleContext {
	public catchPart(): CatchPartContext | undefined {
		return this.tryGetRuleContext(0, CatchPartContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(DartParser.ON, 0); }
	public typeNotVoid(): TypeNotVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_onPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOnPart) {
			listener.enterOnPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOnPart) {
			listener.exitOnPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOnPart) {
			return visitor.visitOnPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnPartsContext extends ParserRuleContext {
	public onPart(): OnPartContext {
		return this.getRuleContext(0, OnPartContext);
	}
	public onParts(): OnPartsContext | undefined {
		return this.tryGetRuleContext(0, OnPartsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_onParts; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOnParts) {
			listener.enterOnParts(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOnParts) {
			listener.exitOnParts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOnParts) {
			return visitor.visitOnParts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchPartContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(DartParser.CATCH, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_catchPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCatchPart) {
			listener.enterCatchPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCatchPart) {
			listener.exitCatchPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCatchPart) {
			return visitor.visitCatchPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyPartContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(DartParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_finallyPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFinallyPart) {
			listener.enterFinallyPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFinallyPart) {
			listener.exitFinallyPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFinallyPart) {
			return visitor.visitFinallyPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(DartParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_label; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(DartParser.BREAK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(DartParser.CONTINUE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(DartParser.YIELD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldEachStatementContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(DartParser.YIELD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_yieldEachStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterYieldEachStatement) {
			listener.enterYieldEachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitYieldEachStatement) {
			listener.exitYieldEachStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitYieldEachStatement) {
			return visitor.visitYieldEachStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public assertion(): AssertionContext {
		return this.getRuleContext(0, AssertionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertionContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(DartParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assertion; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssertion) {
			listener.enterAssertion(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssertion) {
			listener.exitAssertion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssertion) {
			return visitor.visitAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryNameContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public LIBRARY(): TerminalNode { return this.getToken(DartParser.LIBRARY, 0); }
	public dottedIdentifierList(): DottedIdentifierListContext {
		return this.getRuleContext(0, DottedIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_libraryName; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLibraryName) {
			listener.enterLibraryName(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLibraryName) {
			listener.exitLibraryName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLibraryName) {
			return visitor.visitLibraryName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DottedIdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_dottedIdentifierList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDottedIdentifierList) {
			listener.enterDottedIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDottedIdentifierList) {
			listener.exitDottedIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDottedIdentifierList) {
			return visitor.visitDottedIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportOrExportContext extends ParserRuleContext {
	public libraryImport(): LibraryImportContext | undefined {
		return this.tryGetRuleContext(0, LibraryImportContext);
	}
	public libraryExport(): LibraryExportContext | undefined {
		return this.tryGetRuleContext(0, LibraryExportContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_importOrExport; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterImportOrExport) {
			listener.enterImportOrExport(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitImportOrExport) {
			listener.exitImportOrExport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitImportOrExport) {
			return visitor.visitImportOrExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryImportContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public importSpecification(): ImportSpecificationContext {
		return this.getRuleContext(0, ImportSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_libraryImport; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLibraryImport) {
			listener.enterLibraryImport(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLibraryImport) {
			listener.exitLibraryImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLibraryImport) {
			return visitor.visitLibraryImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportSpecificationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(DartParser.IMPORT, 0); }
	public configurableUri(): ConfigurableUriContext {
		return this.getRuleContext(0, ConfigurableUriContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(DartParser.AS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public combinator(): CombinatorContext[];
	public combinator(i: number): CombinatorContext;
	public combinator(i?: number): CombinatorContext | CombinatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinatorContext);
		} else {
			return this.getRuleContext(i, CombinatorContext);
		}
	}
	public DEFERRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.DEFERRED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_importSpecification; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterImportSpecification) {
			listener.enterImportSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitImportSpecification) {
			listener.exitImportSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitImportSpecification) {
			return visitor.visitImportSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombinatorContext extends ParserRuleContext {
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(DartParser.SHOW, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(DartParser.HIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_combinator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCombinator) {
			listener.enterCombinator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCombinator) {
			listener.exitCombinator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCombinator) {
			return visitor.visitCombinator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryExportContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public EXPORT(): TerminalNode { return this.getToken(DartParser.EXPORT, 0); }
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	public combinator(): CombinatorContext[];
	public combinator(i: number): CombinatorContext;
	public combinator(i?: number): CombinatorContext | CombinatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinatorContext);
		} else {
			return this.getRuleContext(i, CombinatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_libraryExport; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLibraryExport) {
			listener.enterLibraryExport(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLibraryExport) {
			listener.exitLibraryExport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLibraryExport) {
			return visitor.visitLibraryExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartDirectiveContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public PART(): TerminalNode { return this.getToken(DartParser.PART, 0); }
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_partDirective; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPartDirective) {
			listener.enterPartDirective(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPartDirective) {
			listener.exitPartDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPartDirective) {
			return visitor.visitPartDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartHeaderContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public PART(): TerminalNode { return this.getToken(DartParser.PART, 0); }
	public OF(): TerminalNode { return this.getToken(DartParser.OF, 0); }
	public dottedIdentifierList(): DottedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, DottedIdentifierListContext);
	}
	public uri(): UriContext | undefined {
		return this.tryGetRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_partHeader; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPartHeader) {
			listener.enterPartHeader(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPartHeader) {
			listener.exitPartHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPartHeader) {
			return visitor.visitPartHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartDeclarationContext extends ParserRuleContext {
	public partHeader(): PartHeaderContext {
		return this.getRuleContext(0, PartHeaderContext);
	}
	public EOF(): TerminalNode { return this.getToken(DartParser.EOF, 0); }
	public topLevelDefinition(): TopLevelDefinitionContext[];
	public topLevelDefinition(i: number): TopLevelDefinitionContext;
	public topLevelDefinition(i?: number): TopLevelDefinitionContext | TopLevelDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDefinitionContext);
		} else {
			return this.getRuleContext(i, TopLevelDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_partDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPartDeclaration) {
			listener.enterPartDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPartDeclaration) {
			listener.exitPartDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPartDeclaration) {
			return visitor.visitPartDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UriContext extends ParserRuleContext {
	public stringLiteralWithoutInterpolation(): StringLiteralWithoutInterpolationContext {
		return this.getRuleContext(0, StringLiteralWithoutInterpolationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_uri; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterUri) {
			listener.enterUri(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitUri) {
			listener.exitUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitUri) {
			return visitor.visitUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigurableUriContext extends ParserRuleContext {
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	public configurationUri(): ConfigurationUriContext[];
	public configurationUri(i: number): ConfigurationUriContext;
	public configurationUri(i?: number): ConfigurationUriContext | ConfigurationUriContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConfigurationUriContext);
		} else {
			return this.getRuleContext(i, ConfigurationUriContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_configurableUri; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConfigurableUri) {
			listener.enterConfigurableUri(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConfigurableUri) {
			listener.exitConfigurableUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConfigurableUri) {
			return visitor.visitConfigurableUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigurationUriContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(DartParser.IF, 0); }
	public uriTest(): UriTestContext {
		return this.getRuleContext(0, UriTestContext);
	}
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_configurationUri; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConfigurationUri) {
			listener.enterConfigurationUri(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConfigurationUri) {
			listener.exitConfigurationUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConfigurationUri) {
			return visitor.visitConfigurationUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UriTestContext extends ParserRuleContext {
	public dottedIdentifierList(): DottedIdentifierListContext {
		return this.getRuleContext(0, DottedIdentifierListContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_uriTest; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterUriTest) {
			listener.enterUriTest(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitUriTest) {
			listener.exitUriTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitUriTest) {
			return visitor.visitUriTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public typeNotFunction(): TypeNotFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeNotFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_type; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotVoidContext extends ParserRuleContext {
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidNotFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeNotVoid; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeNotVoid) {
			listener.enterTypeNotVoid(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeNotVoid) {
			listener.exitTypeNotVoid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeNotVoid) {
			return visitor.visitTypeNotVoid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotFunctionContext extends ParserRuleContext {
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidNotFunctionContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(DartParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeNotFunction; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeNotFunction) {
			listener.enterTypeNotFunction(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeNotFunction) {
			listener.exitTypeNotFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeNotFunction) {
			return visitor.visitTypeNotFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotVoidNotFunctionContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(DartParser.FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeNotVoidNotFunction; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeNotVoidNotFunction) {
			listener.enterTypeNotVoidNotFunction(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeNotVoidNotFunction) {
			listener.exitTypeNotVoidNotFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeNotVoidNotFunction) {
			return visitor.visitTypeNotVoidNotFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext[];
	public typeIdentifier(i: number): TypeIdentifierContext;
	public typeIdentifier(i?: number): TypeIdentifierContext | TypeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeName; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotVoidNotFunctionListContext extends ParserRuleContext {
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext[];
	public typeNotVoidNotFunction(i: number): TypeNotVoidNotFunctionContext;
	public typeNotVoidNotFunction(i?: number): TypeNotVoidNotFunctionContext | TypeNotVoidNotFunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNotVoidNotFunctionContext);
		} else {
			return this.getRuleContext(i, TypeNotVoidNotFunctionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeNotVoidNotFunctionList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeNotVoidNotFunctionList) {
			listener.enterTypeNotVoidNotFunctionList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeNotVoidNotFunctionList) {
			listener.exitTypeNotVoidNotFunctionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeNotVoidNotFunctionList) {
			return visitor.visitTypeNotVoidNotFunctionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasContext extends ParserRuleContext {
	public TYPEDEF(): TerminalNode { return this.getToken(DartParser.TYPEDEF, 0); }
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public functionTypeAlias(): FunctionTypeAliasContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeAlias; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeAlias) {
			listener.enterTypeAlias(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeAlias) {
			listener.exitTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeAlias) {
			return visitor.visitTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeAliasContext extends ParserRuleContext {
	public functionPrefix(): FunctionPrefixContext {
		return this.getRuleContext(0, FunctionPrefixContext);
	}
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionTypeAlias; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionTypeAlias) {
			listener.enterFunctionTypeAlias(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionTypeAlias) {
			listener.exitFunctionTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionTypeAlias) {
			return visitor.visitFunctionTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrefixContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionPrefix; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionPrefix) {
			listener.enterFunctionPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionPrefix) {
			listener.exitFunctionPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionPrefix) {
			return visitor.visitFunctionPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeTailContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(DartParser.FUNCTION, 0); }
	public parameterTypeList(): ParameterTypeListContext {
		return this.getRuleContext(0, ParameterTypeListContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionTypeTail; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionTypeTail) {
			listener.enterFunctionTypeTail(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionTypeTail) {
			listener.exitFunctionTypeTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionTypeTail) {
			return visitor.visitFunctionTypeTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeTailsContext extends ParserRuleContext {
	public functionTypeTail(): FunctionTypeTailContext {
		return this.getRuleContext(0, FunctionTypeTailContext);
	}
	public functionTypeTails(): FunctionTypeTailsContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeTailsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionTypeTails; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionTypeTails) {
			listener.enterFunctionTypeTails(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionTypeTails) {
			listener.exitFunctionTypeTails(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionTypeTails) {
			return visitor.visitFunctionTypeTails(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public functionTypeTails(): FunctionTypeTailsContext {
		return this.getRuleContext(0, FunctionTypeTailsContext);
	}
	public typeNotFunction(): TypeNotFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeNotFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterTypeListContext extends ParserRuleContext {
	public normalParameterTypes(): NormalParameterTypesContext | undefined {
		return this.tryGetRuleContext(0, NormalParameterTypesContext);
	}
	public optionalParameterTypes(): OptionalParameterTypesContext | undefined {
		return this.tryGetRuleContext(0, OptionalParameterTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_parameterTypeList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterParameterTypeList) {
			listener.enterParameterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitParameterTypeList) {
			listener.exitParameterTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitParameterTypeList) {
			return visitor.visitParameterTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalParameterTypesContext extends ParserRuleContext {
	public normalParameterType(): NormalParameterTypeContext[];
	public normalParameterType(i: number): NormalParameterTypeContext;
	public normalParameterType(i?: number): NormalParameterTypeContext | NormalParameterTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NormalParameterTypeContext);
		} else {
			return this.getRuleContext(i, NormalParameterTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalParameterTypes; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalParameterTypes) {
			listener.enterNormalParameterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalParameterTypes) {
			listener.exitNormalParameterTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalParameterTypes) {
			return visitor.visitNormalParameterTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalParameterTypeContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public typedIdentifier(): TypedIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypedIdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalParameterType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalParameterType) {
			listener.enterNormalParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalParameterType) {
			listener.exitNormalParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalParameterType) {
			return visitor.visitNormalParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalParameterTypesContext extends ParserRuleContext {
	public optionalPositionalParameterTypes(): OptionalPositionalParameterTypesContext | undefined {
		return this.tryGetRuleContext(0, OptionalPositionalParameterTypesContext);
	}
	public namedParameterTypes(): NamedParameterTypesContext | undefined {
		return this.tryGetRuleContext(0, NamedParameterTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_optionalParameterTypes; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOptionalParameterTypes) {
			listener.enterOptionalParameterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOptionalParameterTypes) {
			listener.exitOptionalParameterTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOptionalParameterTypes) {
			return visitor.visitOptionalParameterTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalPositionalParameterTypesContext extends ParserRuleContext {
	public normalParameterTypes(): NormalParameterTypesContext {
		return this.getRuleContext(0, NormalParameterTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_optionalPositionalParameterTypes; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOptionalPositionalParameterTypes) {
			listener.enterOptionalPositionalParameterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOptionalPositionalParameterTypes) {
			listener.exitOptionalPositionalParameterTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOptionalPositionalParameterTypes) {
			return visitor.visitOptionalPositionalParameterTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedParameterTypesContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public namedParameterType(): NamedParameterTypeContext[];
	public namedParameterType(i: number): NamedParameterTypeContext;
	public namedParameterType(i?: number): NamedParameterTypeContext | NamedParameterTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedParameterTypeContext);
		} else {
			return this.getRuleContext(i, NamedParameterTypeContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_namedParameterTypes; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNamedParameterTypes) {
			listener.enterNamedParameterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNamedParameterTypes) {
			listener.exitNamedParameterTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNamedParameterTypes) {
			return visitor.visitNamedParameterTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedParameterTypeContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public typedIdentifier(): TypedIdentifierContext {
		return this.getRuleContext(0, TypedIdentifierContext);
	}
	public REQUIRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.REQUIRED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_namedParameterType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNamedParameterType) {
			listener.enterNamedParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNamedParameterType) {
			listener.exitNamedParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNamedParameterType) {
			return visitor.visitNamedParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedIdentifierContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typedIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypedIdentifier) {
			listener.enterTypedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypedIdentifier) {
			listener.exitTypedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypedIdentifier) {
			return visitor.visitTypedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDesignationContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorDesignation; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorDesignation) {
			listener.enterConstructorDesignation(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorDesignation) {
			listener.exitConstructorDesignation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorDesignation) {
			return visitor.visitConstructorDesignation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolLiteralContext extends ParserRuleContext {
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(DartParser.VOID, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_symbolLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSymbolLiteral) {
			listener.enterSymbolLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSymbolLiteral) {
			listener.exitSymbolLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSymbolLiteral) {
			return visitor.visitSymbolLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStringWithoutInterpolationContext extends ParserRuleContext {
	public RAW_SINGLE_LINE_STRING(): TerminalNode | undefined { return this.tryGetToken(DartParser.RAW_SINGLE_LINE_STRING, 0); }
	public RAW_MULTI_LINE_STRING(): TerminalNode | undefined { return this.tryGetToken(DartParser.RAW_MULTI_LINE_STRING, 0); }
	public SINGLE_LINE_STRING_DQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END, 0); }
	public SINGLE_LINE_STRING_SQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END, 0); }
	public MULTI_LINE_STRING_DQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_DQ_BEGIN_END, 0); }
	public MULTI_LINE_STRING_SQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_SQ_BEGIN_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_singleStringWithoutInterpolation; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSingleStringWithoutInterpolation) {
			listener.enterSingleStringWithoutInterpolation(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSingleStringWithoutInterpolation) {
			listener.exitSingleStringWithoutInterpolation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSingleStringWithoutInterpolation) {
			return visitor.visitSingleStringWithoutInterpolation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleLineStringContext extends ParserRuleContext {
	public RAW_SINGLE_LINE_STRING(): TerminalNode | undefined { return this.tryGetToken(DartParser.RAW_SINGLE_LINE_STRING, 0); }
	public SINGLE_LINE_STRING_SQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END, 0); }
	public SINGLE_LINE_STRING_SQ_BEGIN_MID(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_MID, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SINGLE_LINE_STRING_SQ_MID_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_SQ_MID_END, 0); }
	public SINGLE_LINE_STRING_SQ_MID_MID(): TerminalNode[];
	public SINGLE_LINE_STRING_SQ_MID_MID(i: number): TerminalNode;
	public SINGLE_LINE_STRING_SQ_MID_MID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DartParser.SINGLE_LINE_STRING_SQ_MID_MID);
		} else {
			return this.getToken(DartParser.SINGLE_LINE_STRING_SQ_MID_MID, i);
		}
	}
	public SINGLE_LINE_STRING_DQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END, 0); }
	public SINGLE_LINE_STRING_DQ_BEGIN_MID(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_MID, 0); }
	public SINGLE_LINE_STRING_DQ_MID_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_DQ_MID_END, 0); }
	public SINGLE_LINE_STRING_DQ_MID_MID(): TerminalNode[];
	public SINGLE_LINE_STRING_DQ_MID_MID(i: number): TerminalNode;
	public SINGLE_LINE_STRING_DQ_MID_MID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DartParser.SINGLE_LINE_STRING_DQ_MID_MID);
		} else {
			return this.getToken(DartParser.SINGLE_LINE_STRING_DQ_MID_MID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_singleLineString; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSingleLineString) {
			listener.enterSingleLineString(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSingleLineString) {
			listener.exitSingleLineString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSingleLineString) {
			return visitor.visitSingleLineString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiLineStringContext extends ParserRuleContext {
	public RAW_MULTI_LINE_STRING(): TerminalNode | undefined { return this.tryGetToken(DartParser.RAW_MULTI_LINE_STRING, 0); }
	public MULTI_LINE_STRING_SQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_SQ_BEGIN_END, 0); }
	public MULTI_LINE_STRING_SQ_BEGIN_MID(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_SQ_BEGIN_MID, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULTI_LINE_STRING_SQ_MID_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_SQ_MID_END, 0); }
	public MULTI_LINE_STRING_SQ_MID_MID(): TerminalNode[];
	public MULTI_LINE_STRING_SQ_MID_MID(i: number): TerminalNode;
	public MULTI_LINE_STRING_SQ_MID_MID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DartParser.MULTI_LINE_STRING_SQ_MID_MID);
		} else {
			return this.getToken(DartParser.MULTI_LINE_STRING_SQ_MID_MID, i);
		}
	}
	public MULTI_LINE_STRING_DQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_DQ_BEGIN_END, 0); }
	public MULTI_LINE_STRING_DQ_BEGIN_MID(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_DQ_BEGIN_MID, 0); }
	public MULTI_LINE_STRING_DQ_MID_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_DQ_MID_END, 0); }
	public MULTI_LINE_STRING_DQ_MID_MID(): TerminalNode[];
	public MULTI_LINE_STRING_DQ_MID_MID(i: number): TerminalNode;
	public MULTI_LINE_STRING_DQ_MID_MID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DartParser.MULTI_LINE_STRING_DQ_MID_MID);
		} else {
			return this.getToken(DartParser.MULTI_LINE_STRING_DQ_MID_MID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_multiLineString; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMultiLineString) {
			listener.enterMultiLineString(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMultiLineString) {
			listener.exitMultiLineString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMultiLineString) {
			return visitor.visitMultiLineString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASSERT, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(DartParser.BREAK, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(DartParser.CASE, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(DartParser.CATCH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(DartParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONTINUE, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(DartParser.DEFAULT, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(DartParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(DartParser.ENUM, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTENDS, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.FALSE, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINALLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(DartParser.FOR, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(DartParser.IF, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(DartParser.IN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(DartParser.IS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(DartParser.NULL, 0); }
	public RETHROW(): TerminalNode | undefined { return this.tryGetToken(DartParser.RETHROW, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(DartParser.RETURN, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(DartParser.SWITCH, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(DartParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(DartParser.THROW, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(DartParser.TRUE, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(DartParser.TRY, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(DartParser.VAR, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(DartParser.VOID, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(DartParser.WHILE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(DartParser.WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltInIdentifierContext extends ParserRuleContext {
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(DartParser.ABSTRACT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(DartParser.AS, 0); }
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	public DEFERRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.DEFERRED, 0); }
	public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.DYNAMIC, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXPORT, 0); }
	public EXTENSION(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTENSION, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTERNAL, 0); }
	public FACTORY(): TerminalNode | undefined { return this.tryGetToken(DartParser.FACTORY, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(DartParser.FUNCTION, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(DartParser.GET, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(DartParser.IMPLEMENTS, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(DartParser.IMPORT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(DartParser.INTERFACE, 0); }
	public LATE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LATE, 0); }
	public LIBRARY(): TerminalNode | undefined { return this.tryGetToken(DartParser.LIBRARY, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(DartParser.OPERATOR, 0); }
	public MIXIN(): TerminalNode | undefined { return this.tryGetToken(DartParser.MIXIN, 0); }
	public PART(): TerminalNode | undefined { return this.tryGetToken(DartParser.PART, 0); }
	public REQUIRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.REQUIRED, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(DartParser.SET, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.STATIC, 0); }
	public TYPEDEF(): TerminalNode | undefined { return this.tryGetToken(DartParser.TYPEDEF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_builtInIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBuiltInIdentifier) {
			listener.enterBuiltInIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBuiltInIdentifier) {
			listener.exitBuiltInIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBuiltInIdentifier) {
			return visitor.visitBuiltInIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


