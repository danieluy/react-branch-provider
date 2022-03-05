import { BranchProvider } from "./branch-provider.class";

let providers: BranchProvider<any>[] = [];
let _listener: (providers: BranchProvider<any>[]) => void;

function addProvider<T>(provider: BranchProvider<T>): void {
  providers.push(provider);
  callListener();
}

function removeProvider<T>(provider: BranchProvider<T>): void {
  providers = providers.filter((prov) => prov !== provider);
  callListener();
}

function getProviders() {
  return providers;
}

function callListener() {
  typeof _listener === "function" && _listener(providers);
}

function onProviderStateChange(
  listener: (providers: BranchProvider<any>[]) => void
) {
  _listener = listener;
}

export function initTooling(): void {
  window.__REACT_BRANCH_PROVIDER__ = window.__REACT_BRANCH_PROVIDER__ ?? {
    addProvider,
    removeProvider,
    getProviders,
    notifyProviderStateUpdate: callListener,
    onProviderStateChange,
  };
}
