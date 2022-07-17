export function isNil(obj: unknown): obj is null | undefined {
  if (typeof obj === "undefined") {
    return true;
  }

  return obj === null;
}

export function isFunc(value: unknown): value is Function {
  return typeof value === "function";
}
