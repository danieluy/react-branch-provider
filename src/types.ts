export type UpdateState<T> = React.Dispatch<React.SetStateAction<T>>;

/**
 * Safely manipulate the branch state, or return a whole new state.
 */
export type StateUpdateCb<T> = (state: T) => T | void;

export type UpdateBranchStateFn<T> = (cb: StateUpdateCb<T>) => void;
