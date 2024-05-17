import { IDENT_RE } from '../constants';

const CONST_AND_LET_VARIABLE_NAME_RULE = {
  begin: /(?<=\b(const|let)\b\s+\{?\s*)/,
  end: /[;}=]/,
  returnEnd: false,
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
      className: 'variable-name',
      begin: IDENT_RE,
      relevance: 0,
    },
  ],
};

export { CONST_AND_LET_VARIABLE_NAME_RULE };
