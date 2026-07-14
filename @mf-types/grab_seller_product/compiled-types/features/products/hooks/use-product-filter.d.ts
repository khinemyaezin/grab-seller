import type { ProductFilterFormValue } from "@/features/products/types";
export type ProductSearchCriteria = Pick<ProductFilterFormValue, "productName" | "productStatus" | "size">;
export declare function useProductFilter(initial?: Partial<ProductFilterFormValue>): {
    readonly filter: ProductFilterFormValue;
    readonly updateCriteria: (criteria: ProductSearchCriteria) => void;
    readonly updatePage: (page: number) => void;
};
