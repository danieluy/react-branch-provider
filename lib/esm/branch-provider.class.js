import produce from "immer";
import React from "react";
var BranchProvider = /** @class */ (function () {
    function BranchProvider(state, name) {
        this._state = state;
        this._context = React.createContext(state);
        if (name) {
            this._name = name;
        }
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
        set: function (setValue) {
            this._updater = setValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProvider.prototype, "name", {
        get: function () {
            var _a;
            try {
                // @ts-ignore
                return (_a = this._name) !== null && _a !== void 0 ? _a : this.__proto__.constructor.name;
            }
            catch (error) {
                return "UNNAMED_PROVIDER";
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Update branch state by passing a callback function
     *
     * @param cb function that gets passed the branch state to safely update it
     */
    BranchProvider.prototype.setState = function (cb) {
        var nextState = produce(this._state, cb);
        if (nextState !== this.state) {
            this.state = nextState;
            this._updater(nextState);
        }
    };
    return BranchProvider;
}());
export { BranchProvider };
