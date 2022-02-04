import React from "react";
export declare class BaseProvider<T> {
    private state;
    private context;
    private update;
    constructor(state: T);
    getState(): T;
    getContext(): React.Context<T>;
    setUpdater(setFn: React.Dispatch<React.SetStateAction<T>>): void;
    setState(value: React.SetStateAction<T>): void;
    private createContext;
}
