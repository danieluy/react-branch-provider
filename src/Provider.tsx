import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { BranchProvider } from "./branch-provider.class";
import { isFunc } from "./helpers/misc.helpers";
import { providerPropTypes } from "./helpers/prop-type.helpers";

type Props<T> = {
  children?: ReactNode;
  state: BranchProvider<T>;
};

function Provider<T>({ children, state: provider }: Props<T>): JSX.Element {
  const [value, setValue] = useState(provider.state);

  const Context = useMemo(() => provider.context, [provider]);

  useEffect(() => {
    const ProviderWithDevTools = Provider as unknown as {
      providerStateChanged: () => void;
    };

    if (!isFunc(ProviderWithDevTools.providerStateChanged)) {
      return;
    }

    ProviderWithDevTools.providerStateChanged();
  }, [value]);

  provider.updater = setValue;

  useEffect(() => {
    const ProviderWithDevTools = Provider as unknown as {
      addProvider: (provider: BranchProvider<T>) => void;
      removeProvider: (provider: BranchProvider<T>) => void;
    };

    if (
      !isFunc(ProviderWithDevTools.addProvider) ||
      !isFunc(ProviderWithDevTools.removeProvider)
    ) {
      return;
    }

    ProviderWithDevTools.addProvider(provider);

    return () => {
      if (isFunc(ProviderWithDevTools.removeProvider)) {
        ProviderWithDevTools.removeProvider(provider);
      }
    };
  }, [provider]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = providerPropTypes;

export { Provider };
