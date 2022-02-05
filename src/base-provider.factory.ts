import produce from "immer";
import React from "react";
import { BranchProviderBase } from ".";

export function createProvider<T>(state: T): BranchProviderBase<T> {
  const _context = React.createContext(state);

  let _state = state;
  let _updater: React.Dispatch<React.SetStateAction<T>>;

  const setState = (cb: (state: T) => void) => {
    const nextState = produce(_state, cb);
    _updater(nextState);
  };

  return {
    get context() {
      return _context;
    },
    get state(): T {
      return _state;
    },
    set state(state: T) {
      _state = state;
    },
    set updater(setFn: React.Dispatch<React.SetStateAction<T>>) {
      _updater = setFn;
    },
    setState,
  } as BranchProviderBase<T>;
}
