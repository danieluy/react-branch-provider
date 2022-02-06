import { ReactElement } from "react";
import { BranchProvider } from ".";
declare type Props<T> = {
    children?: ReactElement | ReactElement[];
    state: BranchProvider<T>;
};
declare function Provider<T>({ children, state: provider }: Props<T>): JSX.Element;
declare namespace Provider {
    var propTypes: {
        children: import("prop-types").Requireable<import("prop-types").ReactElementLike | (import("prop-types").ReactElementLike | null | undefined)[]>;
        state: import("prop-types").Validator<import("prop-types").InferProps<{
            setState: import("prop-types").Validator<(...args: any[]) => any>;
        }>>;
    };
}
export { Provider };
