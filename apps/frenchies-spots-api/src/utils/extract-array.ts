export function extractArray<T>(value: T, list: T[]) {
  const extractArray: T[] = [];

  for (const val of list) {
    if (val !== value) {
      extractArray.push(val);
    }
  }

  return extractArray;
}
