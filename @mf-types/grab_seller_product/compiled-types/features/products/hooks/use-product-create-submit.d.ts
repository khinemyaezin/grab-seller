import type { UseFormReturn } from "react-hook-form";
import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { ProductFormValue, ProductLifecycleEvent } from "@/features/products/types";
export type UseProductCreateSubmitOptions = {
    form: UseFormReturn<ProductFormValue>;
    link: HateoasLink;
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
};
export type UseProductCreateSubmitResult = {
    submit: () => Promise<void>;
};
export declare function useProductCreateSubmit({ form, link, onLifecycleEvent, }: UseProductCreateSubmitOptions): UseProductCreateSubmitResult;
