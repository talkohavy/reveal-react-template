import { LOWERCASED_VARIABLE_RE } from '../constants';

function noneOf({ regex, list }) {
  return regex.concat('(?!', list.join('|'), ')');
}

function getFunctionCallRule(hljs) {
  const { regex } = hljs;

  return {
    match: regex.concat(
      /\b/,
      noneOf({
        regex,
        list: ['super', 'import', 'constructor', 'return', 'if', 'while', 'switch', 'catch', 'function'].map(
          (x) => `${x}\\s*\\(`,
        ),
      }),
      LOWERCASED_VARIABLE_RE,
      regex.lookahead(/\s*\(/),
    ),
    className: 'title.function',
    relevance: 0,
  };
}

export { getFunctionCallRule };
