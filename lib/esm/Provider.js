import { arrayOf, element, instanceOf, oneOfType } from "prop-types";
import React, { useMemo, useState } from "react";
import { BaseProvider } from ".";
var propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    state: instanceOf(BaseProvider).isRequired,
};
function Provider(_a) {
    var children = _a.children, _state = _a.state;
    var _b = useState(_state.getState()), state = _b[0], setState = _b[1];
    _state.setUpdater(setState);
    var Context = useMemo(function () { return _state.getContext(); }, []);
    return React.createElement(Context.Provider, { value: state }, children);
}
Provider.propTypes = propTypes;
export { Provider };
