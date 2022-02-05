import {
  arrayOf,
  element,
  func,
  instanceOf,
  oneOfType,
  shape,
} from "prop-types";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { BranchProvider, BranchProviderBase } from ".";

type Props<T> = {
  children?: ReactElement | ReactElement[];
  state: BranchProviderBase<T> | BranchProvider<T>;
};

const propTypes = {
  children: oneOfType([element, arrayOf(element)]),
  state: oneOfType([instanceOf(BranchProviderBase), shape({ setState: func })])
    .isRequired,
};

function Provider<T>({ children, state: provider }: Props<T>): JSX.Element {
  const [state, setState] = useState(provider.state);

  provider.state = state;

  useEffect(() => {
    provider.updater = setState;
  }, []);

  const Context = useMemo(() => provider.context, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

Provider.propTypes = propTypes;

export { Provider };
