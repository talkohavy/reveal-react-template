/*
Language: TypeScript
Author: Panu Horsmalahti <panu.horsmalahti@iki.fi>
Contributors: Ike Ku <dempfi@yahoo.com>
Description: TypeScript is a strict superset of JavaScript
Website: https://www.typescriptlang.org
Category: common, scripting
*/

import javascript from './javascript';
import { IDENT_RE } from './javascript/constants';
import { GLOBAL_CLASSES, GLOBAL_FUNCTIONS, GLOBAL_VARIABLES, LITERALS } from './javascript/ecmaScript';
import { KEYWORDS as JAVASCRIPT_KEYWORDS } from './javascript/keywords';

export default function registerTypescriptLanguage(hljs) {
  const tsLanguage = javascript(hljs);

  const TYPES = ['any', 'void', 'number', 'boolean', 'string', 'object', 'never', 'symbol', 'bigint', 'unknown'];
  const NAMESPACE = {
    begin: [/namespace/, /\s+/, hljs.IDENT_RE],
    beginScope: {
      1: 'keyword2',
      3: 'title.class',
    },
  };
  const INTERFACE = {
    beginKeywords: 'interface',
    end: /\{/,
    excludeEnd: true,
    keywords: {
      keyword: 'interface extends',
      built_in: TYPES,
    },
    contains: [tsLanguage.exports.CLASS_REFERENCE],
  };
  const USE_STRICT = {
    className: 'meta',
    relevance: 10,
    begin: /^\s*['"]use strict['"]/,
  };
  const TS_SPECIFIC_KEYWORDS = [
    'type',
    // "namespace",
    'interface',
    'public',
    'private',
    'protected',
    'implements',
    'declare',
    'abstract',
    'readonly',
    'enum',
    'override',
  ];

  /*
    namespace is a TS keyword but it's fine to use it as a variable name too.
    const message = 'foo';
    const namespace = 'bar';
  */

  const KEYWORDS = {
    $pattern: IDENT_RE,
    keyword: JAVASCRIPT_KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
    keyword2: tsLanguage.keywords.keyword2.concat(['type', 'declare']),
    literal: LITERALS,
    built_in: GLOBAL_FUNCTIONS.concat(GLOBAL_CLASSES, TYPES),
    'variable.language': GLOBAL_VARIABLES,
  };
  const DECORATOR = {
    className: 'meta',
    begin: `@${IDENT_RE}`,
  };

  const swapMode = (mode, label, replacement) => {
    const indx = mode.contains.findIndex((m) => m.label === label);
    if (indx === -1) {
      throw new Error('can not find mode to replace');
    }

    mode.contains.splice(indx, 1, replacement);
  };

  // this should update anywhere keywords is used since
  // it will be the same actual JS object
  Object.assign(tsLanguage.keywords, KEYWORDS);

  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);

  // highlight the function params
  const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c) => c.className === 'attr');
  tsLanguage.exports.PARAMS_CONTAINS.push([
    tsLanguage.exports.CLASS_REFERENCE, // class reference for highlighting the params types
    ATTRIBUTE_HIGHLIGHT, // highlight the params key
  ]);
  tsLanguage.contains = tsLanguage.contains.concat([DECORATOR, NAMESPACE, INTERFACE]);

  // TS gets a simpler shebang rule than JS
  swapMode(tsLanguage, 'shebang', hljs.SHEBANG());
  // JS use strict rule purposely excludes `asm` which makes no sense
  swapMode(tsLanguage, 'use_strict', USE_STRICT);

  const functionDeclaration = tsLanguage.contains.find((m) => m.label === 'func.def');
  functionDeclaration.relevance = 0; // () => {} is more typical in TypeScript

  Object.assign(tsLanguage, {
    name: 'TypeScript',
    aliases: ['ts', 'tsx', 'mts', 'cts'],
  });

  return tsLanguage;
}
