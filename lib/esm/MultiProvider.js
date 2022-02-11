import React, { memo } from "react";
import { multiProviderPropTypes } from "./helpers/prop-type.helpers";
import { Provider } from "./Provider";
function recursiveGetProviders(providers, children) {
    return (React.createElement(Provider, { state: providers[0] }, providers.length > 1
        ? recursiveGetProviders(providers.slice(1), children)
        : children));
}
function MultiProvider(_a) {
    var children = _a.children, providers = _a.states;
    return recursiveGetProviders(providers, children);
}
MultiProvider.propTypes = multiProviderPropTypes;
var MemoedMultiProvider = memo(MultiProvider);
export { MultiProvider, MemoedMultiProvider };
