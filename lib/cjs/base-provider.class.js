"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchProvider = void 0;
var immer_1 = __importDefault(require("immer"));
var react_1 = __importDefault(require("react"));
var BranchProvider = /** @class */ (function () {
  function BranchProvider(state) {
    this._state = state;
    this._context = react_1.default.createContext(state);
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
    var nextState = (0, immer_1.default)(this._state, cb);
    this._updater(nextState);
  };
  return BranchProvider;
}());
exports.BranchProvider = BranchProvider;
