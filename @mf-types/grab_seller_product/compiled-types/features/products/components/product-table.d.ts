import { HateoasLink } from "@khinemyaezin/seller-api";
import { ProductFilterFormValue } from "@/features/products/types";
export type ProductTableProps = {
    link: HateoasLink;
    filter: ProductFilterFormValue;
    onPageChange?: (page: number) => void;
};
export default function ProductTable({ link, filter, onPageChange }: ProductTableProps): import("react").JSX.Element;
