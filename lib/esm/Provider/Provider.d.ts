import React, { ReactElement } from "react";
import { BranchState } from "..";
declare type Props<T> = {
  children: ReactElement | ReactElement[];
  state: BranchState<T>;
};
declare function Provider<T>({
  children,
  state: _state,
}: Props<T>): JSX.Element;
declare function useBranchProvider<T>(
  state: BranchState<T>
): [value: T, methods: Record<string, (...args: unknown[]) => void>];
declare type UpdateStateFn<T> = React.Dispatch<React.SetStateAction<T>>;
export { Provider, useBranchProvider, UpdateStateFn };
