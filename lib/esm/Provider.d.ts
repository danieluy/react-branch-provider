import { ReactElement } from "react";
import { BranchProvider, BranchProviderBase } from ".";
declare type Props<T> = {
    children?: ReactElement | ReactElement[];
    state: BranchProviderBase<T> | BranchProvider<T>;
};
declare function Provider<T>({ children, state: provider }: Props<T>): JSX.Element;
declare namespace Provider {
    var propTypes: {
        children: import("prop-types").Requireable<import("prop-types").ReactElementLike | (import("prop-types").ReactElementLike | null | undefined)[]>;
        state: import("prop-types").Validator<import("prop-types").InferProps<{
            setState: import("prop-types").Requireable<(...args: any[]) => any>;
        }>>;
    };
}
export { Provider };
