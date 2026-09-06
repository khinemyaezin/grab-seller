import { type HateoasLink } from "@khinemyaezin/seller-api";
import { type ExtensionMountProps, type SellerPlatform } from "@khinemyaezin/seller-contracts";
export type InlineInventoryWidgetExposedProps = ExtensionMountProps & {
    entryLink: HateoasLink;
    platform?: SellerPlatform;
};
export default function InlineInventoryWidgetExposed({ groupId, slotId, context: initialContext, platform, entryLink, }: InlineInventoryWidgetExposedProps): import("react").JSX.Element | null;
