import { arrayOf, element, func, instanceOf, oneOfType, shape, } from "prop-types";
import { BranchProvider } from "../branch-provider.class";
var childrenProp = oneOfType([element, arrayOf(element)]);
var providerProp = shape({
    setState: func.isRequired,
});
var stateProp = oneOfType([instanceOf(BranchProvider), providerProp]);
export var providerPropTypes = {
    children: childrenProp,
    state: stateProp.isRequired,
};
export var multiProviderPropTypes = {
    children: childrenProp,
    states: arrayOf(stateProp).isRequired,
};
