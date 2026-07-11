import { ProductFilterFormValue } from "@/features/products/types";
export type ProductsFilterProps = {
    value: ProductFilterFormValue;
    pageSizes: number[];
    onChange: (filter: ProductFilterFormValue) => void;
};
export default function ProductsFilter({ onChange, pageSizes, value }: ProductsFilterProps): import("react").JSX.Element;
