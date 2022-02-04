import { arrayOf, element, instanceOf, oneOfType } from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import { BaseProvider } from ".";
var propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    state: instanceOf(BaseProvider).isRequired,
};
function Provider(_a) {
    var children = _a.children, provider = _a.state;
    var _b = useState(provider.state), state = _b[0], setState = _b[1];
    provider.state = state;
    useEffect(function () {
        provider.setUpdater(setState);
    }, []);
    var Context = useMemo(function () { return provider.getContext(); }, []);
    return React.createElement(Context.Provider, { value: state }, children);
}
Provider.propTypes = propTypes;
export { Provider };
