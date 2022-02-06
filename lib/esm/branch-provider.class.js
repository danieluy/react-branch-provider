import produce from "immer";
import React from "react";
var BranchProvider = /** @class */ (function () {
    function BranchProvider(state) {
        this._state = state;
        this._context = React.createContext(state);
    }
    Object.defineProperty(BranchProvider.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProvider.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProvider.prototype, "updater", {
        set: function (setFn) {
            this._updater = setFn;
        },
        enumerable: false,
        configurable: true
    });
    BranchProvider.prototype.setState = function (cb) {
        var nextState = produce(this._state, cb);
        this._updater(nextState);
    };
    return BranchProvider;
}());
export { BranchProvider };
