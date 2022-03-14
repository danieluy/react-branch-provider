import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { BranchProvider } from "./branch-provider.class";
import { isNil } from "./helpers/misc.helpers";
import { providerPropTypes } from "./helpers/prop-type.helpers";

type Props<T> = {
  children?: ReactNode;
  state: BranchProvider<T>;
};

function Provider<T>({ children, state: provider }: Props<T>): JSX.Element {
  const [value, setValue] = useState(provider.state);

  const Context = useMemo(() => provider.context, []);

  useEffect(() => {
    if (!isNil(window.__REACT_BRANCH_PROVIDER__)) {
      window.__REACT_BRANCH_PROVIDER__.notifyProviderStateUpdate();
    }
  }, [value]);

  provider.updater = setValue;

  useEffect(() => {
    if (isNil(window.__REACT_BRANCH_PROVIDER__)) {
      return;
    }

    window.__REACT_BRANCH_PROVIDER__.addProvider(provider);

    return () => {
      if (!isNil(window.__REACT_BRANCH_PROVIDER__)) {
        window.__REACT_BRANCH_PROVIDER__.removeProvider(provider);
      }
    };
  }, [provider]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = providerPropTypes;

export { Provider };
