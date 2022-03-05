export function isNil(obj) {
    if (typeof obj === "undefined") {
        return true;
    }
    return obj === null;
}
