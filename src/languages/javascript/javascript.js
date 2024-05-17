/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting, web
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

// import * as ECMAScript from '../ecmascript';
import { FRAGMENT, IDENT_RE } from './constants';
import { GLOBAL_CLASSES } from './ecmaScript';
import { KEYWORDS } from './keywords';
import { NUMBER_RULE } from './rules/numberRule';
import { USE_STRICT_RULE } from './rules/useStrictRule';
import { getXmlTagRules } from './rules/xmlTags';

export default function registerJavascriptLanguage(hljs) {
  const { regex } = hljs;

  const XML_TAG_RULES = getXmlTagRules();

  const SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS,
    contains: [], // defined later
  };
  const HTML_TEMPLATE = {
    begin: '.?html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      subLanguage: 'xml',
    },
  };
  const CSS_TEMPLATE = {
    begin: '.?css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      subLanguage: 'css',
    },
  };
  const GRAPHQL_TEMPLATE = {
    begin: '.?gql`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      subLanguage: 'graphql',
    },
  };
  const TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
  };
  const JSDOC_COMMENT = hljs.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
    relevance: 0,
    contains: [
      {
        begin: '(?=@[A-Za-z]+)',
        relevance: 0,
        contains: [
          {
            className: 'doctag',
            begin: '@[A-Za-z]+',
          },
          {
            className: 'type',
            begin: '\\{',
            end: '\\}',
            excludeEnd: true,
            excludeBegin: true,
            relevance: 0,
          },
          {
            className: 'variable',
            begin: `${IDENT_RE}(?=\\s*(-)|$)`,
            endsParent: true,
            relevance: 0,
          },
          // eat spaces (not newlines) so we can find
          // types or variables
          {
            begin: /(?=[^\n])\s/,
            relevance: 0,
          },
        ],
      },
    ],
  });
  const COMMENT = {
    className: 'comment',
    variants: [JSDOC_COMMENT, hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE],
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER_RULE,
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS,
    contains: ['self'].concat(SUBST_INTERNALS),
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
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

  // ES6 classes
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE, '(', regex.concat(/\./, IDENT_RE), ')*'),
        ],
        scope: {
          1: 'keyword',
          3: 'title.class',
          5: 'keyword',
          7: 'title.class.inherited',
        },
      },
      // class Car
      {
        match: [/class/, /\s+/, IDENT_RE],
        scope: {
          1: 'keyword',
          3: 'title.class',
        },
      },
    ],
  };

  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      // /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, // <--- commented out because it colored imported named Objects beginning with a capital letter.
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: 'title.class',
    keywords: {
      // se we still get relevance credit for JS library classes
      _: GLOBAL_CLASSES,
    },
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
      noneOf(['super', 'import'].map((x) => `${x}\\s*\\(`)),
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
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: 'shebang',
        binary: 'node',
        relevance: 5,
      }),
      USE_STRICT_RULE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER_RULE,
      CLASS_REFERENCE,
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
          COMMENT,
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
          `\\b(?!function)${hljs.UNDERSCORE_IDENT_RE}\\(` + // first parens
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
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: 'title.function' },
        contains: [PARAMS],
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/, // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
    ],
  };
}
