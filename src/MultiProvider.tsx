import React, { memo, ReactElement } from "react";
import { BranchProvider } from "./branch-provider.class";
import { multiProviderPropTypes } from "./helpers/prop-type.helpers";
import { Provider } from "./Provider";

type Props = {
  children?: ReactElement | ReactElement[];
  states: BranchProvider<any>[];
};

function recursiveGetProviders<T>(
  providers: BranchProvider<T>[],
  children?: ReactElement | ReactElement[]
): JSX.Element {
  return (
    <Provider state={providers[0]}>
      {providers.length > 1
        ? recursiveGetProviders(providers.slice(1), children)
        : children}
    </Provider>
  );
}

function MultiProvider<T>({ children, states: providers }: Props): JSX.Element {
  return recursiveGetProviders(providers, children);
}

MultiProvider.propTypes = multiProviderPropTypes;

const MemoedMultiProvider = memo(MultiProvider);

export { MultiProvider, MemoedMultiProvider };
