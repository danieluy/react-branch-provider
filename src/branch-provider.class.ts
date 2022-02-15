import produce from "immer";
import React from "react";
import { StateUpdateCb } from "./types";

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

  get name(): string {
    try {
      // @ts-ignore
      return this.__proto__.constructor.name;
    } catch (error) {
      return "UNNAMED_PROVIDER";
    }
  }

  /**
   * Update branch state by passing a callback function
   *
   * @param cb function that gets passed the branch state to safely update it
   */
  setState(cb: StateUpdateCb<T>): void {
    const nextState = produce(this._state, cb);
    this._updater(nextState);
  }
}
