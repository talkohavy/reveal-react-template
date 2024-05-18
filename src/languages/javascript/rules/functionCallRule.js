import { LOWERCASED_VARIABLE_RE } from '../constants';

const FUNCTION_LIKE_GLOBALS = [
  'async',
  'super',
  'import',
  'constructor',
  'return',
  'if',
  'for',
  'while',
  'switch',
  'catch',
  'function',
]
  .map((x) => `${x}\\s*\\(`)
  .join('|');

function getFunctionCallRule(hljs) {
  const { regex } = hljs;

  const IGNORE_FUNCTION_LIKE_GLOBALS_RE = `(?!${FUNCTION_LIKE_GLOBALS})`;

  return {
    match: regex.concat(/\b/, IGNORE_FUNCTION_LIKE_GLOBALS_RE, LOWERCASED_VARIABLE_RE, regex.lookahead(/\s*\(/)),
    className: 'title.function',
    relevance: 0,
  };
}

export { getFunctionCallRule };
