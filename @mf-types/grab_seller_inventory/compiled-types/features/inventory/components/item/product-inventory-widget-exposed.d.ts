import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { SellerPlatform } from "@khinemyaezin/seller-contracts";
export default function ProductInventoryWidgetExposed({ skus, platform, entryLink, }: {
    skus: string[];
    platform?: SellerPlatform;
    entryLink: HateoasLink;
}): import("react").JSX.Element | null;
