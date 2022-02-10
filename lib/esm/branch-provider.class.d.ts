import React from "react";
import { StateUpdateCb } from ".";
export declare class BranchProvider<T> {
    private _state;
    private _context;
    private _updater;
    constructor(state: T);
    get state(): T;
    set state(state: T);
    get context(): React.Context<T>;
    set updater(setFn: React.Dispatch<React.SetStateAction<T>>);
    /**
     * Update branch state by passing a callback function
     *
     * @param cb function that gets passed the branch state to safely update it
     */
    setState(cb: StateUpdateCb<T>): void;
}
