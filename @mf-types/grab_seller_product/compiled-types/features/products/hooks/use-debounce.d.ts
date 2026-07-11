export declare function useDebounce<T extends (...args: Parameters<T>) => void>(callback: T, delay: number): {
    readonly debounceFn: import("lodash").DebouncedFunc<(...args: Parameters<T>) => void>;
};
