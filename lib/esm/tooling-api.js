var providers = [];
var listeners = [];
function addProvider(provider) {
    providers.push(provider);
    notifyProviderStateUpdate();
}
function removeProvider(provider) {
    providers = providers.filter(function (prov) { return prov !== provider; });
    notifyProviderStateUpdate();
}
function getProviders() {
    return providers;
}
function notifyProviderStateUpdate() {
    listeners.forEach(function (listener) { return listener(providers); });
}
function onProviderStateChange(listener) {
    listeners.push(listener);
}
export function initTooling() {
    var _a;
    window.__REACT_BRANCH_PROVIDER__ = (_a = window.__REACT_BRANCH_PROVIDER__) !== null && _a !== void 0 ? _a : {
        addProvider: addProvider,
        removeProvider: removeProvider,
        getProviders: getProviders,
        notifyProviderStateUpdate: notifyProviderStateUpdate,
        onProviderStateChange: onProviderStateChange,
    };
}