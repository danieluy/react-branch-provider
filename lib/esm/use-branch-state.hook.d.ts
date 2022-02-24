import { BranchProvider } from "./branch-provider.class";
/**
 * Accepts a provider object (the value returned from createProvider() or a class that extends BranchProvider) and returns the current provider state, as given by the nearest provider for the given context.
 *
 * This behavior is inherited from React Context API, and that's why it works in a similar way.
 *
 * Optionally, a selector function can be passed as a second argument to keep the code tidy.
 *
 * @param {BranchProvider} state full branch state (always a new object)
 * @param {Function} selector partial branch state
 */
declare function useBranchState<T>(state: BranchProvider<T>): T;
declare function useBranchState<T, K>(state: BranchProvider<T>, selector?: (state: T) => K): K;
export { useBranchState };
