export function getListElement<T extends { id: string }>(
  array: T[],
  id: string
): T | undefined {
  return array.find((objet) => objet.id === id);
}
