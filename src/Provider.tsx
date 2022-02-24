import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { BranchProvider } from "./branch-provider.class";
import { providerPropTypes } from "./helpers/prop-type.helpers";

type Props<T> = {
  children?: ReactElement | ReactElement[];
  state: BranchProvider<T>;
};

function Provider<T>({ children, state: provider }: Props<T>): JSX.Element {
  const [value, setValue] = useState(provider.state);

  const Context = useMemo(() => provider.context, []);

  useEffect(() => {
    if (typeof window.__REACT_BRANCH_PROVIDER__ !== "undefined") {
      window.__REACT_BRANCH_PROVIDER__.notifyProviderStateUpdate();
    }
  }, [value]);

  provider.updater = setValue;

  useEffect(() => {
    if (typeof window.__REACT_BRANCH_PROVIDER__ === "undefined") {
      return;
    }

    window.__REACT_BRANCH_PROVIDER__.addProvider(provider);

    return () => {
      if (window.__REACT_BRANCH_PROVIDER__) {
        window.__REACT_BRANCH_PROVIDER__.removeProvider(provider);
      }
    };
  }, [provider]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = providerPropTypes;

export { Provider };
