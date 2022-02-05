"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchProviderBase = void 0;
var immer_1 = __importDefault(require("immer"));
var react_1 = __importDefault(require("react"));
var BranchProviderBase = /** @class */ (function () {
    function BranchProviderBase(state) {
        this._state = state;
        this._context = react_1.default.createContext(state);
    }
    Object.defineProperty(BranchProviderBase.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProviderBase.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProviderBase.prototype, "updater", {
        set: function (setFn) {
            this._updater = setFn;
        },
        enumerable: false,
        configurable: true
    });
    BranchProviderBase.prototype.setState = function (cb) {
        var nextState = (0, immer_1.default)(this._state, cb);
        this._updater(nextState);
    };
    return BranchProviderBase;
}());
exports.BranchProviderBase = BranchProviderBase;
