export function isNil(obj) {
    if (typeof obj === "undefined") {
        return true;
    }
    return obj === null;
}
export function isFunc(value) {
    return typeof value === "function";
}
