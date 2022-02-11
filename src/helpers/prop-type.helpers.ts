import {
  arrayOf,
  element,
  func,
  instanceOf,
  oneOfType,
  shape,
} from "prop-types";
import { BranchProvider } from "../branch-provider.class";

const childrenProp = oneOfType([element, arrayOf(element)]);

const providerProp = shape({
  setState: func.isRequired,
});

const stateProp = oneOfType([instanceOf(BranchProvider), providerProp]);

export const providerPropTypes = {
  children: childrenProp,
  state: stateProp.isRequired,
};

export const multiProviderPropTypes = {
  children: childrenProp,
  states: arrayOf(stateProp).isRequired,
};
