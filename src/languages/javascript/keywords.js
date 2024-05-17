import { IDENT_RE } from './constants';
import { GLOBAL_CLASSES, GLOBAL_FUNCTIONS, GLOBAL_VARIABLES, LITERALS } from './ecmaScript';
import { keywordGroup1 } from './rules/keywordGroup1';
import { keywordGroup2 } from './rules/keywordGroup2';

const KEYWORDS = {
  $pattern: IDENT_RE,
  keyword: keywordGroup1,
  keyword2: keywordGroup2,
  literal: LITERALS,
  built_in: GLOBAL_FUNCTIONS.concat(GLOBAL_CLASSES),
  'variable.language': GLOBAL_VARIABLES,
};

export { KEYWORDS };
