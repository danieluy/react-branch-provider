import produce from "immer";
import React from "react";
import { BranchProvider, StateUpdateCb } from ".";

export function createProvider<T>(state: T, name?: string): BranchProvider<T> {
  const _context = React.createContext(state);
  const _name = name;

  let _state = state;
  let _updater: React.Dispatch<React.SetStateAction<T>>;

  /**
   * Update branch state by passing a callback function
   *
   * @param cb function that gets passed the branch state to safely update it
   */
  const setState = (cb: StateUpdateCb<T>) => {
    const nextState = produce(_state, cb);

    if (nextState !== _state) {
      _state = nextState;

      _updater(nextState);
    }
  };

  return {
    get name(): string {
      return _name ?? "UNNAMED_PROVIDER";
    },
    get context() {
      return _context;
    },
    get state(): T {
      return _state;
    },
    set state(state: T) {
      _state = state;
    },
    set updater(setValue: React.Dispatch<React.SetStateAction<T>>) {
      _updater = setValue;
    },
    setState,
  } as BranchProvider<T>;
}
