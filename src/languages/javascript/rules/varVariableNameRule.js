import { IDENT_RE } from '../constants';

const VAR_VARIABLE_NAME_RULE = {
  className: 'oops-you-made-a-mistake-1',
  begin: /(?<=\bvar\b\s+\{?\s*)/,
  end: /[;}=]/,
  contains: [
    {
      begin: /\{/,
      end: /(?=.)/,
      className: 'curly-brace',
    },
    {
      begin: /\}/,
      end: /(?=.)/,
      className: 'curly-brace',
    },
    {
      begin: IDENT_RE,
      relevance: 0,
      className: 'var-variable-name',
    },
  ],
};

export { VAR_VARIABLE_NAME_RULE };
