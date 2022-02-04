import { ReactElement } from "react";
import { BaseProvider } from ".";
declare type Props<T> = {
    children?: ReactElement | ReactElement[];
    state: BaseProvider<T>;
};
declare function Provider<T>({ children, state: _state }: Props<T>): JSX.Element;
declare namespace Provider {
    var propTypes: {
        children: import("prop-types").Requireable<import("prop-types").ReactElementLike | (import("prop-types").ReactElementLike | null | undefined)[]>;
        state: import("prop-types").Validator<BaseProvider<any>>;
    };
}
export { Provider };
