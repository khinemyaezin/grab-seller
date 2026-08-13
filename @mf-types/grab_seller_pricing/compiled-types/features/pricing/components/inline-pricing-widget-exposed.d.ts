import { PricingPayload, type ExtensionMountProps } from "@khinemyaezin/seller-contracts";
export type InlinePricingWidgetExposedProps = ExtensionMountProps;
export type InlinePricingWidgetHandle = {
    validate: () => Promise<{
        value?: PricingPayload;
        errors?: Record<string, string>;
    }>;
};
export default function InlinePricingWidgetExposed({ instanceId, slotId, context, platform, entryLink, }: InlinePricingWidgetExposedProps): import("react").JSX.Element | null;
