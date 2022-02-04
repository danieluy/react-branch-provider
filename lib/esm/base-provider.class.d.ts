import React from "react";
export declare class BaseProvider<T> {
    private _state;
    private context;
    private update;
    constructor(state: T);
    get state(): T;
    set state(state: T);
    getContext(): React.Context<T>;
    setUpdater(setFn: React.Dispatch<React.SetStateAction<T>>): void;
    setState(cb: (state: T) => void): void;
    private createContext;
}
