class StringUtil {
  camelToPascalCase(str: string) {
    return str.replace(/^[a-z]/, ($1: string) => $1.toUpperCase());
  }

  stringToArray(slug: string): string[] {
    return slug.split('/');
  }
}

export { StringUtil };
