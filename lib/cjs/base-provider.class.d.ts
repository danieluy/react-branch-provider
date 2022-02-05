import React from "react";
export declare class BranchProviderBase<T> {
    private _state;
    private _context;
    private _updater;
    constructor(state: T);
    get state(): T;
    set state(state: T);
    get context(): React.Context<T>;
    set updater(setFn: React.Dispatch<React.SetStateAction<T>>);
    setState(cb: (state: T) => void): void;
}
