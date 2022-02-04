import { BaseProvider } from ".";
declare function useBranchState<T>(state: BaseProvider<T>): T;
declare function useBranchState<T, K>(state: BaseProvider<T>, selector?: (state: T) => K): K;
export { useBranchState };
