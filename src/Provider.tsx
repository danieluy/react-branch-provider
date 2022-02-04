import { arrayOf, element, instanceOf, oneOfType } from "prop-types";
import React, { ReactElement, useMemo, useState } from "react";
import { BaseProvider } from ".";

type Props<T> = {
  children?: ReactElement | ReactElement[];
  state: BaseProvider<T>;
};

const propTypes = {
  children: oneOfType([element, arrayOf(element)]),
  state: instanceOf(BaseProvider).isRequired,
};

function Provider<T>({ children, state: _state }: Props<T>): JSX.Element {
  const [state, setState] = useState(_state.getState());

  _state.setUpdater(setState);

  const Context = useMemo(() => _state.getContext(), []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

Provider.propTypes = propTypes;

export { Provider };
