import { isNil } from "./helpers/misc.helpers";
import { Provider } from "./Provider";

export * from "./branch-provider.class";
export * from "./branch-provider.factory";
export * from "./MultiProvider";
export * from "./types";
export * from "./use-branch-state.hook";
export { Provider };

export const enableDevTools = () => {
  if (isNil(window.__REACT_BRANCH_PROVIDER__)) {
    return;
  }

  (Provider as any).addProvider = window.__REACT_BRANCH_PROVIDER__.addProvider;

  (Provider as any).removeProvider =
    window.__REACT_BRANCH_PROVIDER__.removeProvider;

  (Provider as any).providerStateChanged =
    window.__REACT_BRANCH_PROVIDER__.providerStateChanged;

  delete window.__REACT_BRANCH_PROVIDER__;
};
