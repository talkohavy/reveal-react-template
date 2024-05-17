import { IDENT_RE } from '../constants';

const CONST_AND_LET_VARIABLE_NAME_RULE = {
  className: 'variable-declaration',
  begin: /(?<=\b(const|let)\b)\s+/,
  end: /[\s,;]/,
  contains: [
    {
      begin: IDENT_RE,
      relevance: 0,
      className: 'variable-name',
    },
  ],
};

export { CONST_AND_LET_VARIABLE_NAME_RULE };
