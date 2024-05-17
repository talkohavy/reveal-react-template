import { IDENT_RE } from '../constants';

function getCommentRule(hljs) {
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

  return {
    className: 'comment',
    variants: [JSDOC_COMMENT, hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE],
  };
}

export { getCommentRule };
