"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBranchProvider = void 0;
var react_1 = require("react");
function useBranchProvider(state, selector) {
  var value = (0, react_1.useContext)(state.context);
  return typeof selector === "function" ? selector(value) : value;
}
exports.useBranchProvider = useBranchProvider;
