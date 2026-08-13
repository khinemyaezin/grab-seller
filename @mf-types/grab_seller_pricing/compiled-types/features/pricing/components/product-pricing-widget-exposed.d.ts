import { type HateoasLink } from "@khinemyaezin/seller-api";
import { PricingPayload, type ExtensionMountProps, type SellerPlatform } from "@khinemyaezin/seller-contracts";
export type ProductPricingWidgetExposedProps = ExtensionMountProps & {
    entryLink: HateoasLink;
    platform?: SellerPlatform;
};
export type PricingWidgetHandle = {
    validate: () => Promise<{
        value?: PricingPayload;
        errors?: Record<string, string>;
    }>;
};
export default function ProductPricingWidgetExposed({ instanceId, slotId, context, platform, entryLink, }: ProductPricingWidgetExposedProps): import("react").JSX.Element | null;
