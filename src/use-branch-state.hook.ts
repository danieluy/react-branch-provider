import { useContext } from "react";
import { BaseProvider } from ".";

function useBranchState<T>(state: BaseProvider<T>): T;

function useBranchState<T, K>(
  state: BaseProvider<T>,
  selector?: (state: T) => K
): K;

function useBranchState<T, K>(
  state: BaseProvider<T>,
  selector?: (state: T) => K
): T | K {
  const value = useContext(state.getContext());

  return typeof selector === "function" ? selector(value) : value;
}

export { useBranchState };
