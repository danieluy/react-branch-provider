/// <reference types="react" />
export declare type UpdateState<T> = React.Dispatch<React.SetStateAction<T>>;
/**
 * Safely manipulate the branch state, or return a whole new state.
 */
export declare type StateUpdateCb<T> = (state: T) => T | void;
export declare type UpdateBranchStateFn<T> = (cb: StateUpdateCb<T>) => void;
