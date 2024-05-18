import { IDENT_RE } from '../constants';

const CONST_AND_LET_VARIABLE_NAME_RULE = {
  variants: [
    {
      begin: [/\b(const|let)\b/, /\s+/, IDENT_RE, /\s+=\s*(?=(async|function|\(.*\)\s*=>))/],
      beginScope: {
        1: 'keyword2',
        3: 'title.function',
      },
    },
    {
      begin: /(?<=\b(const|let)\b\s+\{?\s*)/,
      end: /[;}=]/,
      returnEnd: false,
      contains: [
        {
          begin: /\{/,
          end: /(?=.)/,
          scope: 'curly-brace',
        },
        {
          begin: /\}/,
          end: /(?=.)/,
          scope: 'curly-brace',
        },
        // Catches "const aaa = 5" as well as "const {a,b,c} = props"
        {
          scope: 'title.variable',
          begin: IDENT_RE,
        },
      ],
    },
  ],
};

export { CONST_AND_LET_VARIABLE_NAME_RULE };
