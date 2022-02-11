export declare const providerPropTypes: {
    children: import("prop-types").Requireable<import("prop-types").ReactElementLike | (import("prop-types").ReactElementLike | null | undefined)[]>;
    state: import("prop-types").Validator<import("prop-types").InferProps<{
        setState: import("prop-types").Validator<(...args: any[]) => any>;
    }>>;
};
export declare const multiProviderPropTypes: {
    children: import("prop-types").Requireable<import("prop-types").ReactElementLike | (import("prop-types").ReactElementLike | null | undefined)[]>;
    states: import("prop-types").Validator<(import("prop-types").InferProps<{
        setState: import("prop-types").Validator<(...args: any[]) => any>;
    }> | null | undefined)[]>;
};
