import produce from "immer";
import React from "react";

export class BranchProvider<T> {
  private _state: T;
  private _context: React.Context<T>;
  private _updater: React.Dispatch<React.SetStateAction<T>>;

  constructor(state: T) {
    this._state = state;
    this._context = React.createContext(state);
  }

  get state(): T {
    return this._state;
  }

  set state(state: T) {
    this._state = state;
  }

  get context(): React.Context<T> {
    return this._context;
  }

  set updater(setFn: React.Dispatch<React.SetStateAction<T>>) {
    this._updater = setFn;
  }

  setState(cb: (state: T) => void) {
    const nextState = produce(this._state, cb);
    this._updater(nextState);
  }
}
