"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProvider = void 0;
var immer_1 = __importDefault(require("immer"));
var react_1 = __importDefault(require("react"));
function createProvider(state) {
    var _context = react_1.default.createContext(state);
    var _state = state;
    var _updater;
    var setState = function (cb) {
        var nextState = (0, immer_1.default)(_state, cb);
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
exports.createProvider = createProvider;
