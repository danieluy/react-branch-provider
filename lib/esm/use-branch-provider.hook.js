import { useContext } from "react";
function useBranchProvider(state, selector) {
  var value = useContext(state.context);
  return typeof selector === "function" ? selector(value) : value;
}
export { useBranchProvider };
