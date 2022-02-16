import produce from "immer";
import React from "react";
export function createProvider(state, name) {
    var _context = React.createContext(state);
    var _name = name;
    var _state = state;
    var _updater;
    /**
     * Update branch state by passing a callback function
     *
     * @param cb function that gets passed the branch state to safely update it
     */
    var setState = function (cb) {
        var nextState = produce(_state, cb);
        if (nextState !== _state) {
            _updater(nextState);
        }
    };
    return {
        get name() {
            return _name !== null && _name !== void 0 ? _name : "UNNAMED_PROVIDER";
        },
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
