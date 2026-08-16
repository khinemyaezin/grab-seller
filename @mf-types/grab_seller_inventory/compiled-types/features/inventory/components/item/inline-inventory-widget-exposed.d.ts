import { type HateoasLink } from "@khinemyaezin/seller-api";
import { InventoryPayload, type ExtensionMountProps, type SellerPlatform } from "@khinemyaezin/seller-contracts";
export type InlineInventoryWidgetExposedProps = ExtensionMountProps & {
    entryLink: HateoasLink;
    platform?: SellerPlatform;
};
export type InlineInventoryWidgetHandle = {
    validate: () => Promise<{
        value?: InventoryPayload;
        errors?: Record<string, string>;
    }>;
    getValues: () => InventoryPayload;
};
export default function InlineInventoryWidgetExposed({ groupId, slotId, context, platform, entryLink, }: InlineInventoryWidgetExposedProps): import("react").JSX.Element | null;
