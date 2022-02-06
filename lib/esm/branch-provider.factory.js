import produce from "immer";
import React from "react";
export function createProvider(state) {
    var _context = React.createContext(state);
    var _state = state;
    var _updater;
    var setState = function (cb) {
        var nextState = produce(_state, cb);
        _updater(nextState);
    };
    return {
        get context() {
            return _context;
        },
        get state() {
            return _state;
        },
        set state(state) {
            _state = state;
        },
        set updater(setFn) {
            _updater = setFn;
        },
        setState: setState,
    };
}
