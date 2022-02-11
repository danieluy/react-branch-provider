import { arrayOf, element, func, instanceOf, oneOfType, shape, } from "prop-types";
import { BranchProvider } from ".";
var providerProp = shape({
    setState: func.isRequired,
});
var propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    state: oneOfType([instanceOf(BranchProvider), providerProp]).isRequired,
};
function MultiProvider(_a) {
    var children = _a.children, provider = _a.state;
    return React.createElement(React.Fragment, null);
}
MultiProvider.propTypes = propTypes;
export { MultiProvider };
