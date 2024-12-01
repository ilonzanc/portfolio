class StringUtil {
  camelToPascalCase(str: string) {
    return str.replace(/^[a-z]/, ($1: string) => $1.toUpperCase());
  }
}

export { StringUtil };
