import { arrayOf, element, instanceOf, oneOfType } from "prop-types";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { BaseProvider } from ".";

type Props<T> = {
  children?: ReactElement | ReactElement[];
  state: BaseProvider<T>;
};

const propTypes = {
  children: oneOfType([element, arrayOf(element)]),
  state: instanceOf(BaseProvider).isRequired,
};

function Provider<T>({ children, state: provider }: Props<T>): JSX.Element {
  const [state, setState] = useState(provider.state);

  provider.state = state;

  useEffect(() => {
    provider.setUpdater(setState);
  }, []);

  const Context = useMemo(() => provider.getContext(), []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

Provider.propTypes = propTypes;

export { Provider };
