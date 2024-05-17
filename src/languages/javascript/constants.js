const FRAGMENT = { begin: '<>', end: '</>' };
const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';

// https://tc39.es/ecma262/#sec-literals-numeric-literals
const decimalDigits = '[0-9](_?[0-9])*';
const fraction = `\\.(${decimalDigits})`;
// DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
// https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
const decimalInteger = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*';

export { FRAGMENT, IDENT_RE, decimalDigits, decimalInteger, fraction };
