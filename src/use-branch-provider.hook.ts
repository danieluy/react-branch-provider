import { useContext } from "react";
import { BranchProvider } from ".";

function useBranchProvider<T>(state: BranchProvider<T>): T;

function useBranchProvider<T, K>(
  state: BranchProvider<T>,
  selector?: (state: T) => K
): K;

function useBranchProvider<T, K>(
  state: BranchProvider<T>,
  selector?: (state: T) => K
): T | K {
  const value = useContext(state.context);

  return typeof selector === "function" ? selector(value) : value;
}

export { useBranchProvider };
