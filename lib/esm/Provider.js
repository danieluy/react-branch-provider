import { arrayOf, element, func, instanceOf, oneOfType, shape, } from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import { BranchProvider } from ".";
var providerProp = shape({
    setState: func.isRequired,
});
var propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    state: oneOfType([instanceOf(BranchProvider), providerProp]).isRequired,
};
function Provider(_a) {
    var children = _a.children, provider = _a.state;
    var _b = useState(provider.state), state = _b[0], setState = _b[1];
    provider.state = state;
    useEffect(function () {
        provider.updater = setState;
    }, []);
    var Context = useMemo(function () { return provider.context; }, []);
    return React.createElement(Context.Provider, { value: state }, children);
}
Provider.propTypes = propTypes;
export { Provider };
