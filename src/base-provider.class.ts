import React from "react";

export class BaseProvider<T> {
  private context: React.Context<T>;
  private update: React.Dispatch<React.SetStateAction<T>>;

  constructor(private state: T) {
    this.context = this.createContext(state);
  }

  getState(): T {
    return this.state;
  }

  getContext(): React.Context<T> {
    return this.context;
  }

  setUpdater(setFn: React.Dispatch<React.SetStateAction<T>>) {
    this.update = setFn;
  }

  setState(value: React.SetStateAction<T>) {
    this.update(value);
  }

  private createContext<T extends unknown>(defaultValue: T): React.Context<T> {
    return React.createContext(defaultValue);
  }
}
