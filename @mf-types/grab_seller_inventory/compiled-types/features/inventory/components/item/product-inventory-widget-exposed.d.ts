import { type HateoasLink } from "@khinemyaezin/seller-api";
import { type ExtensionMountProps, type SellerPlatform } from "@khinemyaezin/seller-contracts";
export type ProductInventoryWidgetExposedProps = ExtensionMountProps & {
    entryLink: HateoasLink;
    platform?: SellerPlatform;
};
export default function ProductInventoryWidgetExposed({ groupId, slotId, context: initialContext, platform, entryLink, }: ProductInventoryWidgetExposedProps): import("react").JSX.Element | null;
