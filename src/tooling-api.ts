import { BranchProvider } from "./branch-provider.class";

let providers: BranchProvider<any>[] = [];
const listeners: Array<(providers: BranchProvider<any>[]) => void> = [];

function addProvider<T>(provider: BranchProvider<T>): void {
  providers.push(provider);
}

function removeProvider<T>(provider: BranchProvider<T>): void {
  providers = providers.filter((prov) => prov !== provider);
}

function getProviders() {
  return providers;
}

function notifyProviderStateUpdate() {
  listeners.forEach((listener) => listener(providers));
}

function onProviderStateChange(
  listener: (providers: BranchProvider<any>[]) => void
) {
  listeners.push(listener);
  /**
   * #####       ####
   *   #    ###  #   #  ###
   *   #   #   # #   # #   #
   *   #   #   # #   # #   #
   *   #    ###  ####   ###
   *
   * ToDo: hande unsubscribe
   */
}

export function initTooling(): void {
  window.__REACT_BRANCH_PROVIDER__ = window.__REACT_BRANCH_PROVIDER__ ?? {
    addProvider,
    removeProvider,
    getProviders,
    notifyProviderStateUpdate,
    onProviderStateChange,
  };
}
