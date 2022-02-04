import React from "react";
var BaseProvider = /** @class */ (function () {
    function BaseProvider(state) {
        this.state = state;
        this.context = this.createContext(state);
    }
    BaseProvider.prototype.getState = function () {
        return this.state;
    };
    BaseProvider.prototype.getContext = function () {
        return this.context;
    };
    BaseProvider.prototype.setUpdater = function (setFn) {
        this.update = setFn;
    };
    BaseProvider.prototype.setState = function (value) {
        this.update(value);
    };
    BaseProvider.prototype.createContext = function (defaultValue) {
        return React.createContext(defaultValue);
    };
    return BaseProvider;
}());
export { BaseProvider };
