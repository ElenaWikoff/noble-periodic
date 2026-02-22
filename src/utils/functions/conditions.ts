
export function isValidHexColor(colorString: string) {
  const hexColorRegex = /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
  return hexColorRegex.test(colorString);
}