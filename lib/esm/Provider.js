import React, { memo, useMemo, useState } from "react";
import { providerPropTypes } from "./helpers/prop-type.helpers";
function Provider(_a) {
    var children = _a.children, provider = _a.state;
    var _b = useState(provider.state), state = _b[0], setState = _b[1];
    provider.state = state;
    provider.updater = setState;
    var Context = useMemo(function () { return provider.context; }, []);
    return React.createElement(Context.Provider, { value: state }, children);
}
Provider.propTypes = providerPropTypes;
var MemoedProvider = memo(Provider);
export { Provider, MemoedProvider };
