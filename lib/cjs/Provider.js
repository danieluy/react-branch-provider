"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
var prop_types_1 = require("prop-types");
var react_1 = __importStar(require("react"));
var _1 = require(".");
var providerProp = (0, prop_types_1.shape)({
    setState: prop_types_1.func.isRequired,
});
var propTypes = {
    children: (0, prop_types_1.oneOfType)([prop_types_1.element, (0, prop_types_1.arrayOf)(prop_types_1.element)]),
    state: (0, prop_types_1.oneOfType)([(0, prop_types_1.instanceOf)(_1.BranchProviderBase), providerProp]).isRequired,
};
function Provider(_a) {
    var children = _a.children, provider = _a.state;
    var _b = (0, react_1.useState)(provider.state), state = _b[0], setState = _b[1];
    provider.state = state;
    (0, react_1.useEffect)(function () {
        provider.updater = setState;
    }, []);
    var Context = (0, react_1.useMemo)(function () { return provider.context; }, []);
    return react_1.default.createElement(Context.Provider, { value: state }, children);
}
exports.Provider = Provider;
Provider.propTypes = propTypes;
