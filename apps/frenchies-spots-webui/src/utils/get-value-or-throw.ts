export function getValueOrThrow<T>(value: T | null): T {
  if (value !== null) {
    return value;
  } else {
    throw new Error("La valeur est null.");
  }
}
