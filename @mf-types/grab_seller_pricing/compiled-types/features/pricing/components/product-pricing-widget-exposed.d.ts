import { PricingPayload, type ExtensionMountProps } from "@khinemyaezin/seller-contracts";
export type ProductPricingWidgetExposedProps = ExtensionMountProps;
export type PricingWidgetHandle = {
    validate: () => Promise<{
        value?: PricingPayload;
        errors?: Record<string, string>;
    }>;
    getValues: () => PricingPayload;
};
export default function ProductPricingWidgetExposed({ groupId, slotId, context, platform, entryLink, }: ProductPricingWidgetExposedProps): import("react").JSX.Element | null;
