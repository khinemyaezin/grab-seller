import { HateoasLink } from "@khinemyaezin/seller-api";
import { ProductLifecycleEvent } from "../types";
export declare function formatProductStatus(status: string): string;
export declare function getProductStatusDescription(status: string): string;
export declare function getProductStatusBadgeClass(status: string): string;
export interface ProductStatusSelectProps {
    status: string;
    link?: HateoasLink;
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
}
export declare function ProductStatus({ status, link, onLifecycleEvent }: ProductStatusSelectProps): import("react").JSX.Element;
