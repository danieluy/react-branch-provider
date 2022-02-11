import React, { memo, ReactElement, useMemo, useState } from "react";
import { BranchProvider } from "./branch-provider.class";
import { providerPropTypes } from "./helpers/prop-type.helpers";

type Props<T> = {
  children?: ReactElement | ReactElement[];
  state: BranchProvider<T>;
};

function Provider<T>({ children, state: provider }: Props<T>): JSX.Element {
  const [state, setState] = useState(provider.state);

  provider.state = state;

  provider.updater = setState;

  const Context = useMemo(() => provider.context, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

Provider.propTypes = providerPropTypes;

const MemoedProvider = memo(Provider);

export { Provider, MemoedProvider };
