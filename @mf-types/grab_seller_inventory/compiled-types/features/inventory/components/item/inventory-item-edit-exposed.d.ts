import { type HateoasLink } from "@khinemyaezin/seller-api";
import { type ExtensionMountProps, type SellerPlatform } from "@khinemyaezin/seller-contracts";
export type InventoryItemEditExposedProps = ExtensionMountProps & {
    entryLink: HateoasLink;
    platform?: SellerPlatform;
};
export default function InventoryItemEditExposed({ groupId, slotId, context: initialContext, platform, entryLink, }: InventoryItemEditExposedProps): import("react").JSX.Element | null;
