import { PricingPayload, type ExtensionMountProps } from "@khinemyaezin/seller-contracts";
export type InlinePricingWidgetExposedProps = ExtensionMountProps;
export type InlinePricingWidgetHandle = {
    validate: () => Promise<{
        value?: PricingPayload;
        errors?: Record<string, string>;
    }>;
    getValues: () => PricingPayload;
};
export default function InlinePricingWidgetExposed({ groupId, slotId, context, platform, entryLink, }: InlinePricingWidgetExposedProps): import("react").JSX.Element | null;
