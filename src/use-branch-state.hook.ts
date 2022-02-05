import { useContext } from "react";
import { BranchProviderBase } from ".";

function useBranchState<T>(state: BranchProviderBase<T>): T;

function useBranchState<T, K>(
  state: BranchProviderBase<T>,
  selector?: (state: T) => K
): K;

function useBranchState<T, K>(
  state: BranchProviderBase<T>,
  selector?: (state: T) => K
): T | K {
  const value = useContext(state.context);

  return typeof selector === "function" ? selector(value) : value;
}

export { useBranchState };
