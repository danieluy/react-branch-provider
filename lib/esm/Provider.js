import React, { useEffect, useMemo, useState } from "react";
import { providerPropTypes } from "./helpers/prop-type.helpers";
function Provider(_a) {
  var children = _a.children, provider = _a.state;
  var _b = useState(provider.state), state = _b[0], setState = _b[1];
  useEffect(function () {
    if (!window.__REACT_BRANCH_PROVIDER__) {
      return;
    }
    window.__REACT_BRANCH_PROVIDER__.addProvider(provider);
    return function () {
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
  var Context = useMemo(function () { return provider.context; }, []);
  return React.createElement(Context.Provider, { value: state }, children);
}
Provider.propTypes = providerPropTypes;
export { Provider };
