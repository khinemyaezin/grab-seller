import { PricingEditContext, PricingEditPayload } from "@khinemyaezin/seller-contracts";
import { Ref } from "react";
export type PricingEditWidgetHandle = {
    validate: () => Promise<{
        value?: PricingEditPayload;
        errors?: Record<string, string>;
    }>;
    getValues: () => PricingEditPayload;
};
export type PricingEditWidgetProps = {
    context?: PricingEditContext;
    value?: PricingEditPayload;
    onChange: (value: PricingEditPayload) => void;
    isLoading?: boolean;
    ref: Ref<PricingEditWidgetHandle>;
};
export default function PricingEditWidget({ context, value, onChange, isLoading, ref, }: PricingEditWidgetProps): import("react").JSX.Element;
