import { BranchProvider } from ".";
declare function useBranchState<T>(state: BranchProvider<T>): T;
declare function useBranchState<T, K>(
  state: BranchProvider<T>,
  selector?: (state: T) => K
): K;
export { useBranchState };
