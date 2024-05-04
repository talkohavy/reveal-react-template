function camelCaseToKebabCase(camelCase) {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export { camelCaseToKebabCase };
