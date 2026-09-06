import type { ProductLifecycleEvent } from "@/features/products/types";
export type UseProductUpdateSubmitOptions = {
    productId: string;
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
    refetch?: () => void;
};
export type UseProductUpdateSubmitResult = {
    submit: () => Promise<void>;
};
export declare function useProductUpdateSubmit({ productId, onLifecycleEvent, refetch, }: UseProductUpdateSubmitOptions): UseProductUpdateSubmitResult;
