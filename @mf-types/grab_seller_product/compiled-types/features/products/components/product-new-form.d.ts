import type { ProductLifecycleEvent } from "../types";
import { HateoasLink } from "@khinemyaezin/seller-api";
export type ProductNewFormProps = {
    link: HateoasLink;
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
};
export default function ProductNewForm({}: ProductNewFormProps): import("react").JSX.Element;
