const FUNCTION_NAME_RULE = {
  className: 'function-name',
  begin: /(?<=function\s+)[A-Za-z$_][0-9A-Za-z$_]*/,
};

export { FUNCTION_NAME_RULE };
