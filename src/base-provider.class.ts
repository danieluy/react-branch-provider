import produce from "immer";
import React from "react";

export class BaseProvider<T> {
  private _state: T;
  private context: React.Context<T>;
  private update: React.Dispatch<React.SetStateAction<T>>;

  constructor(state: T) {
    this._state = state;
    this.context = this.createContext(state);
  }

  get state(): T {
    return this._state;
  }

  set state(state: T) {
    this._state = state;
  }

  getContext(): React.Context<T> {
    return this.context;
  }

  setUpdater(setFn: React.Dispatch<React.SetStateAction<T>>) {
    this.update = setFn;
  }

  setState(cb: (state: T) => void) {
    const nextState = produce(this._state, cb);
    this.update(nextState);
  }

  private createContext<T extends unknown>(defaultValue: T): React.Context<T> {
    return React.createContext(defaultValue);
  }
}
