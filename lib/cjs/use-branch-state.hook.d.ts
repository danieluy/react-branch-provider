import { BranchProviderBase } from ".";
declare function useBranchState<T>(state: BranchProviderBase<T>): T;
declare function useBranchState<T, K>(state: BranchProviderBase<T>, selector?: (state: T) => K): K;
export { useBranchState };
