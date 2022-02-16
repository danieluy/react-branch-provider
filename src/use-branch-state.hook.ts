import { useContext, useMemo } from "react";
import { BranchProvider } from ".";

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

  return useMemo(
    () => (typeof selector === "function" ? selector(value) : value),
    [value]
  );
}

export { useBranchState };
