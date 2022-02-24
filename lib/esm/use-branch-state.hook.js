import { useContext, useMemo } from "react";
function useBranchState(state, selector) {
    var value = useContext(state.context);
    return useMemo(function () { return (typeof selector === "function" ? selector(value) : value); }, [value]);
}
export { useBranchState };
