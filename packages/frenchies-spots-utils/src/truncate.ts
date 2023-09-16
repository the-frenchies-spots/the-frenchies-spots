export function truncate(texte: string, nbChar: number): string {
  if (texte.length <= nbChar) {
    return texte;
  }

  const texteTronque = texte.slice(0, nbChar - 3);
  return `${texteTronque}...`;
}
