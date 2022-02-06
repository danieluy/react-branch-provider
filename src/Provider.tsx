import {
  arrayOf,
  element,
  func,
  instanceOf,
  oneOfType,
  shape,
} from "prop-types";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { BranchProvider } from ".";

type Props<T> = {
  children?: ReactElement | ReactElement[];
  state: BranchProvider<T>;
};

const providerProp = shape({
  setState: func.isRequired,
});

const propTypes = {
  children: oneOfType([element, arrayOf(element)]),
  state: oneOfType([instanceOf(BranchProvider), providerProp]).isRequired,
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
