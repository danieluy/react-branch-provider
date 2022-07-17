import { isNil } from "./helpers/misc.helpers";
import { Provider } from "./Provider";
export * from "./branch-provider.class";
export * from "./branch-provider.factory";
export * from "./MultiProvider";
export * from "./types";
export * from "./use-branch-state.hook";
export { Provider };
export var enableDevTools = function () {
    if (isNil(window.__REACT_BRANCH_PROVIDER__)) {
        return;
    }
    Provider.addProvider = window.__REACT_BRANCH_PROVIDER__.addProvider;
    Provider.removeProvider =
        window.__REACT_BRANCH_PROVIDER__.removeProvider;
    Provider.providerStateChanged =
        window.__REACT_BRANCH_PROVIDER__.providerStateChanged;
    delete window.__REACT_BRANCH_PROVIDER__;
};
