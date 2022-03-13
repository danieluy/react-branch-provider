/// <reference types="react" />
import { BranchProvider } from "./branch-provider.class";
declare global {
    interface Window {
        __REACT_BRANCH_PROVIDER__?: {
            addProvider: <T>(provider: BranchProvider<T>) => void;
            removeProvider: <T>(provider: BranchProvider<T>) => void;
            notifyProviderStateUpdate: () => void;
            onProviderStateChange: (listener: (providers: BranchProvider<any>[]) => void) => void;
        };
    }
}
export declare type UpdateState<T> = React.Dispatch<React.SetStateAction<T>>;
/**
 * Safely manipulate the branch state, or return a whole new state.
 */
export declare type StateUpdateCb<T> = (state: T) => T | void;
export declare type UpdateBranchStateFn<T> = (cb: StateUpdateCb<T>) => void;
