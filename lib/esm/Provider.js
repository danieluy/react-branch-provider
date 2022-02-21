import React, { useEffect, useMemo, useState } from "react";
import { providerPropTypes } from "./helpers/prop-type.helpers";
function Provider(_a) {
    var children = _a.children, provider = _a.state;
    var _b = useState(provider.state), value = _b[0], setValue = _b[1];
    var Context = useMemo(function () { return provider.context; }, []);
    useEffect(function () {
        if (typeof window.__REACT_BRANCH_PROVIDER__ !== "undefined") {
            window.__REACT_BRANCH_PROVIDER__.notifyProviderStateUpdate();
        }
    }, [value]);
    provider.updater = setValue;
    useEffect(function () {
        if (typeof window.__REACT_BRANCH_PROVIDER__ === "undefined") {
            return;
        }
        window.__REACT_BRANCH_PROVIDER__.addProvider(provider);
        return function () {
            console.log("cleaning", provider.name);
            if (window.__REACT_BRANCH_PROVIDER__) {
                window.__REACT_BRANCH_PROVIDER__.removeProvider(provider);
            }
        };
    }, [provider]);
    return React.createElement(Context.Provider, { value: value }, children);
}
Provider.propTypes = providerPropTypes;
export { Provider };
