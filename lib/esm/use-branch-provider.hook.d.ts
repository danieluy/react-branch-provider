import { BranchProvider } from ".";
declare function useBranchProvider<T>(state: BranchProvider<T>): T;
declare function useBranchProvider<T, K>(
  state: BranchProvider<T>,
  selector?: (state: T) => K
): K;
export { useBranchProvider };
