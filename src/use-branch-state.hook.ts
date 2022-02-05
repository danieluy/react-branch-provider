import { useContext } from "react";
import { BranchProvider, BranchProviderBase } from ".";

function useBranchState<T>(state: BranchProviderBase<T> | BranchProvider<T>): T;

function useBranchState<T, K>(
  state: BranchProviderBase<T> | BranchProvider<T>,
  selector?: (state: T) => K
): K;

function useBranchState<T, K>(
  state: BranchProviderBase<T> | BranchProvider<T>,
  selector?: (state: T) => K
): T | K {
  const value = useContext(state.context);

  return typeof selector === "function" ? selector(value) : value;
}

export { useBranchState };
