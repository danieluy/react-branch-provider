var providers = [];
var _listener;
function addProvider(provider) {
    providers.push(provider);
    callListener();
}
function removeProvider(provider) {
    providers = providers.filter(function (prov) { return prov !== provider; });
    callListener();
}
function callListener() {
    typeof _listener === "function" && _listener(providers);
}
function onProviderStateChange(listener) {
    _listener = listener;
    callListener();
}
export function initTooling() {
    var _a;
    window.__REACT_BRANCH_PROVIDER__ = (_a = window.__REACT_BRANCH_PROVIDER__) !== null && _a !== void 0 ? _a : {
        addProvider: addProvider,
        removeProvider: removeProvider,
        notifyProviderStateUpdate: callListener,
        onProviderStateChange: onProviderStateChange,
    };
}
