import React, { useEffect, useMemo, useState } from "react";
import { isFunc } from "./helpers/misc.helpers";
import { providerPropTypes } from "./helpers/prop-type.helpers";
function Provider(_a) {
    var children = _a.children, provider = _a.state;
    var _b = useState(provider.state), value = _b[0], setValue = _b[1];
    var Context = useMemo(function () { return provider.context; }, [provider]);
    useEffect(function () {
        var ProviderWithDevTools = Provider;
        if (!isFunc(ProviderWithDevTools.providerStateChanged)) {
            return;
        }
        ProviderWithDevTools.providerStateChanged();
    }, [value]);
    provider.updater = setValue;
    useEffect(function () {
        var ProviderWithDevTools = Provider;
        if (!isFunc(ProviderWithDevTools.addProvider) ||
            !isFunc(ProviderWithDevTools.removeProvider)) {
            return;
        }
        ProviderWithDevTools.addProvider(provider);
        return function () {
            if (isFunc(ProviderWithDevTools.removeProvider)) {
                ProviderWithDevTools.removeProvider(provider);
            }
        };
    }, [provider]);
    return React.createElement(Context.Provider, { value: value }, children);
}
Provider.propTypes = providerPropTypes;
export { Provider };
