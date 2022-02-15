import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { BranchProvider } from "./branch-provider.class";
import { providerPropTypes } from "./helpers/prop-type.helpers";

type Props<T> = {
  children?: ReactElement | ReactElement[];
  state: BranchProvider<T>;
};

function Provider<T>({ children, state: provider }: Props<T>): JSX.Element {
  const [state, setState] = useState(provider.state);

  useEffect(() => {
    if (!window.__REACT_BRANCH_PROVIDER__) {
      return;
    }

    window.__REACT_BRANCH_PROVIDER__.addProvider(provider);

    return () => {
      if (window.__REACT_BRANCH_PROVIDER__) {
        window.__REACT_BRANCH_PROVIDER__.removeProvider(provider);
      }
    };
  }, [provider]);

  provider.state = state;

  if (window.__REACT_BRANCH_PROVIDER__) {
    window.__REACT_BRANCH_PROVIDER__.notifyProviderStateUpdate();
  }

  provider.updater = setState;

  const Context = useMemo(() => provider.context, []);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

Provider.propTypes = providerPropTypes;

export { Provider };
