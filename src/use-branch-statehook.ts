import { useContext } from "react";
import { BranchProvider } from ".";

function useBranchState<T>(state: BranchProvider<T>): T;

function useBranchState<T, K>(
  state: BranchProvider<T>,
  selector?: (state: T) => K
): K;

function useBranchState<T, K>(
  state: BranchProvider<T>,
  selector?: (state: T) => K
): T | K {
  const value = useContext(state.context);

  return typeof selector === "function" ? selector(value) : value;
}

export { useBranchState };
