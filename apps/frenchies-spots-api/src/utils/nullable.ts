export function nullable<T>(_: unknown, value: T) {
  return value === null || undefined;
}
