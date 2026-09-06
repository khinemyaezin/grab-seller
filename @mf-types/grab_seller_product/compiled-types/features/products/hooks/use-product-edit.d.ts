import { ProductFormValue, GetFullProductResponse, ProductLifecycleEvent } from "../types";
export declare const DEFAULT_PRODUCT_FORM_VALUE: ProductFormValue;
export type UseProductEditProps = {
    productId: string;
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
};
export declare function useProductEdit({ productId }: UseProductEditProps): {
    isLoading: boolean;
    refetch: (options?: import("@tanstack/query-core").RefetchOptions) => Promise<import("@tanstack/query-core").QueryObserverResult<GetFullProductResponse, Error>>;
    status: string | undefined;
    actions: Record<string, import("@khinemyaezin/seller-api").HateoasLink> | undefined;
};
