import { BranchProvider, BranchProviderBase } from ".";
declare function useBranchState<T>(state: BranchProviderBase<T> | BranchProvider<T>): T;
declare function useBranchState<T, K>(state: BranchProviderBase<T> | BranchProvider<T>, selector?: (state: T) => K): K;
export { useBranchState };
