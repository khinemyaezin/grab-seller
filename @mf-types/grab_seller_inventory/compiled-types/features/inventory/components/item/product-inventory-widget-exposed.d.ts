import { type HateoasLink } from "@khinemyaezin/seller-api";
import { InventoryPayload, type ExtensionMountProps, type SellerPlatform } from "@khinemyaezin/seller-contracts";
export type ProductInventoryWidgetExposedProps = ExtensionMountProps & {
    entryLink: HateoasLink;
    platform?: SellerPlatform;
};
export type InventoryWidgetHandle = {
    validate: () => Promise<{
        value?: InventoryPayload;
        errors?: Record<string, string>;
    }>;
    getValues: () => InventoryPayload;
};
export default function ProductInventoryWidgetExposed({ groupId, slotId, context, platform, entryLink, }: ProductInventoryWidgetExposedProps): import("react").JSX.Element | null;
