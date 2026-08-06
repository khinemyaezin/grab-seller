import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { SellerPlatform } from "@khinemyaezin/seller-contracts";
export type ProductInventoryWidgetProps = {
    skus: string[];
    platform?: SellerPlatform;
    entryLink: HateoasLink;
};
export default function ProductInventoryWidget({ skus }: ProductInventoryWidgetProps): import("react").JSX.Element;
