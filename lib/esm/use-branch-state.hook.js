import { useContext } from "react";
function useBranchState(state, selector) {
  var value = useContext(state.context);
  return typeof selector === "function" ? selector(value) : value;
}
export { useBranchState };
