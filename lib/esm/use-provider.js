import React, { useMemo, useState } from "react";
function createContext(defaultValue) {
    return React.createContext(defaultValue);
}
function useProvider(initialState) {
    var Context = useMemo(function () { return createContext(initialState); }, []);
    var state = useState(initialState)[0];
    return [Context, state];
}
export { useProvider };
