import type { UseFormReturn } from "react-hook-form";
import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { ButtonStatusState } from "@khinemyaezin/seller-ui/components/index";
import type { ProductFormValue, ProductLifecycleEvent } from "@/features/products/types";
export type UseProductCreateSubmitOptions = {
    form: UseFormReturn<ProductFormValue>;
    link: HateoasLink;
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
};
export type UseProductCreateSubmitResult = {
    submit: () => Promise<void>;
    isBusy: boolean;
    status: ButtonStatusState;
};
export declare function useProductCreateSubmit({ form, link, onLifecycleEvent, }: UseProductCreateSubmitOptions): UseProductCreateSubmitResult;
