import { IDENT_RE } from '../constants';

const VAR_VARIABLE_NAME_RULE = {
  className: 'variable-declaration',
  begin: /(?<=\bvar\b)\s+/,
  end: /[\s,;]/,
  contains: [
    {
      begin: IDENT_RE,
      relevance: 0,
      className: 'var-variable-name',
    },
  ],
};

export { VAR_VARIABLE_NAME_RULE };
