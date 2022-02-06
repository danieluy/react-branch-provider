import React from "react";
export declare class BranchProvider<T> {
  private state;
  private context;
  private update;
  private methods;
  constructor(state: T);
  getState(): T;
  getContext(): React.Context<T>;
  setUpdater(setFn: React.Dispatch<React.SetStateAction<T>>): void;
  setMethods(): void;
  getMethods(): Record<
    string,
    (setState: React.Dispatch<React.SetStateAction<T>>) => void
  >;
  setState(value: React.SetStateAction<T>): void;
  private createContext;
}
