/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting, web
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

// import * as ECMAScript from '../ecmascript';
import { FRAGMENT, IDENT_RE, KEYWORDS, SUBST } from './constants';
import { ARRAY_BRACKET_RULE } from './rules/arrayBracketsRule';
import { getClassAndExtendsRule } from './rules/classAndExtendsRules';
import { getCommentRule } from './rules/commentRule';
import { CONST_AND_LET_VARIABLE_NAME_RULE } from './rules/constAndLetVariableNameRule';
import { getCssRule } from './rules/cssRule';
import { CURLY_BRACES_RULE } from './rules/curlyBracesRule';
import { getGraphQlRule } from './rules/graphQlRule';
import { getHtmlRule } from './rules/htmlRule';
import { NUMBER_RULE } from './rules/numberRule';
import { PARENTHESIS_RULE } from './rules/parenthesisRule';
import { getStringLiteralRule } from './rules/stringLiteralRule';
import { USE_STRICT_RULE } from './rules/useStrictRule';
import { VAR_VARIABLE_NAME_RULE } from './rules/varVariableNameRule';
import { getXmlTagRules } from './rules/xmlTags';

export default function registerJavascriptLanguage(hljs) {
  const { regex } = hljs;

  const XML_TAG_RULES = getXmlTagRules();
  const HTML_TEMPLATE_RULE = getHtmlRule(hljs);
  const CSS_TEMPLATE_RULE = getCssRule(hljs);
  const TEMPLATE_STRING = getStringLiteralRule(hljs);
  const COMMENT_RULE = getCommentRule(hljs);
  const CLASS_AND_EXTENDS_RULE = getClassAndExtendsRule(hljs);
  const GRAPHQL_TEMPLATE_RULE = getGraphQlRule(hljs);

  const SUBST_AND_COMMENTS = [].concat(COMMENT_RULE, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS,
      contains: ['self'].concat(SUBST_AND_COMMENTS),
    },
  ]);

  const PARAMS = {
    className: 'params',
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/, // to match the parms with
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS,
    contains: PARAMS_CONTAINS,
  };

  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [/function/, /\s+/, IDENT_RE, /(?=\s*\()/],
      },
      // anonymous function
      {
        match: [/function/, /\s*(?=\()/],
      },
    ],
    className: {
      1: 'keyword2',
      3: 'title.function',
    },
    label: 'func.def',
    contains: [PARAMS],
    illegal: /%/,
  };

  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: 'variable.constant',
  };

  function noneOf(list) {
    return regex.concat('(?!', list.join('|'), ')');
  }

  const LOWERCASE_IDENT_RE = '[a-z][A-Za-z0-9$_]*';

  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf(['super', 'import', 'constructor'].map((x) => `${x}\\s*\\(`)),
      LOWERCASE_IDENT_RE,
      IDENT_RE,
      regex.lookahead(/\s*\(/),
    ),
    className: 'title.function',
    relevance: 0,
  };

  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE, /(?![0-9A-Za-z$_(])/))),
    end: IDENT_RE,
    excludeBegin: true,
    keywords: 'prototype',
    className: 'property',
    relevance: 0,
  };

  const GETTER_OR_SETTER = {
    match: [/get|set/, /\s+/, IDENT_RE, /(?=\()/],
    className: {
      1: 'keyword',
      3: 'title.function',
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/,
      },
      PARAMS,
    ],
  };

  const FUNC_LEAD_IN_RE =
    '(\\(' +
    '[^()]*(\\(' +
    '[^()]*(\\(' +
    '[^()]*' +
    '\\)[^()]*)*' +
    '\\)[^()]*)*' +
    `\\)|${hljs.UNDERSCORE_IDENT_RE})\\s*=>`;

  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE,
      /\s*/,
      /=\s*/,
      /(async\s*)?/, // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE),
    ],
    keywords: 'async',
    className: {
      1: 'keyword2',
      3: 'title.function',
    },
    contains: [PARAMS],
  };

  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: 'shebang',
        binary: 'node',
        relevance: 5,
      }),
      USE_STRICT_RULE,
      CONST_AND_LET_VARIABLE_NAME_RULE,
      VAR_VARIABLE_NAME_RULE,
      CURLY_BRACES_RULE,
      PARENTHESIS_RULE,
      ARRAY_BRACKET_RULE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE_RULE,
      CSS_TEMPLATE_RULE,
      GRAPHQL_TEMPLATE_RULE,
      TEMPLATE_STRING,
      COMMENT_RULE,
      NUMBER_RULE,
      // Skip numbers when they are part of a variable name
      // { match: /\$\d+/ }, // <--- seems like this is not needed
      {
        className: 'attr',
        begin: IDENT_RE + regex.lookahead(':'),
        relevance: 0,
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: `(${hljs.RE_STARTERS_RE}|\\b(case|return|throw)\\b)\\s*`,
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          COMMENT_RULE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0,
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true,
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS,
                  },
                ],
              },
            ],
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0,
          },
          {
            match: /\s+/,
            relevance: 0,
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              // XML_SELF_CLOSING
              { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ },
              {
                begin: XML_TAG_RULES.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG_RULES.isTrulyOpeningTag,
                end: XML_TAG_RULES.end,
              },
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG_RULES.begin,
                end: XML_TAG_RULES.end,
                skip: true,
                contains: ['self'],
              },
            ],
          },
        ],
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: 'while if switch catch for',
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ). There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin:
          `\\b(?!function)(?<=constructor)${hljs.UNDERSCORE_IDENT_RE}\\(` + // first parens
          '[^()]*(\\(' +
          '[^()]*(\\(' +
          '[^()]*' +
          '\\)[^()]*)*' +
          '\\)[^()]*)*' +
          '\\)\\s*\\{', // end parens
        returnBegin: true,
        label: 'func.def',
        contains: [PARAMS, hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE, className: 'title.function' })],
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0,
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: `\\$${IDENT_RE}`,
        relevance: 0,
      },
      // WE DON'T NEED TO HANDLE constructor AS IF A UNIQUE CASE!!! (Or do we...?)
      // {
      //   match: [/\bconstructor(?=\s*\()/],
      //   className: { 1: 'title.func7tion' },
      //   contains: [PARAMS],
      // },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_AND_EXTENDS_RULE,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/, // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
    ],
  };
}
