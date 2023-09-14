export function getFuncOrThrow<T>(func: T) {
  if (typeof func === "function") {
    return func;
  } else {
    throw new Error("La fonction n'est pas définie.");
  }
}
