import React, { ReactElement } from "react";
import { BranchProvider } from "./branch-provider.class";
declare type Props = {
    children?: ReactElement | ReactElement[];
    states: BranchProvider<any>[];
};
declare function MultiProvider<T>({ children, states: providers }: Props): JSX.Element;
declare namespace MultiProvider {
    var propTypes: {
        children: import("prop-types").Requireable<import("prop-types").ReactElementLike | (import("prop-types").ReactElementLike | null | undefined)[]>;
        states: import("prop-types").Validator<(import("prop-types").InferProps<{
            setState: import("prop-types").Validator<(...args: any[]) => any>;
        }> | null | undefined)[]>;
    };
}
declare const MemoedMultiProvider: React.MemoExoticComponent<typeof MultiProvider>;
export { MultiProvider, MemoedMultiProvider };
