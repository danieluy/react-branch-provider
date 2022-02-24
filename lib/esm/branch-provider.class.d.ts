import React from "react";
import { StateUpdateCb } from "./types";
export declare class BranchProvider<T> {
    private _state;
    private _context;
    private _updater;
    private _name?;
    constructor(state: T, name?: string);
    get state(): T;
    set state(state: T);
    get context(): React.Context<T>;
    set updater(setValue: React.Dispatch<React.SetStateAction<T>>);
    get name(): string;
    /**
     * Update branch state by passing a callback function
     *
     * @param cb function that gets passed the branch state to safely update it
     */
    setState(cb: StateUpdateCb<T>): void;
}
