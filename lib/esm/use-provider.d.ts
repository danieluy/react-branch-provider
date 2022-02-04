import React from "react";
declare type ProviderContext<T> = [React.Context<T>, T];
declare function useProvider<T>(initialState: T): ProviderContext<T>;
export { useProvider };
