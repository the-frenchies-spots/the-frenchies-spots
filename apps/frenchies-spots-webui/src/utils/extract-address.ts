export function extractAddress(addresse: string): string | null {
  const regex = /([^,]+),\sFrance$/;
  const matches = addresse.match(regex);

  if (matches && matches.length >= 2) {
    const parts = matches[1].trim().split(" ");
    if (parts.length > 0) {
      return `${parts[parts.length - 1]}, France`;
    }
  }

  return null;
}
