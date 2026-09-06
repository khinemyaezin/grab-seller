import { PricingEditContext, PricingEditPayload } from "@khinemyaezin/seller-contracts";
import { Ref } from "react";
import type { PricingEditWidgetHandle } from "./pricing-edit-widget";
export type InlinePricingEditWidgetProps = {
    context?: PricingEditContext;
    value?: PricingEditPayload;
    onChange: (value: PricingEditPayload) => void;
    isLoading?: boolean;
    ref: Ref<PricingEditWidgetHandle>;
};
export default function InlinePricingEditWidget({ context, value, onChange, isLoading, ref, }: InlinePricingEditWidgetProps): import("react").JSX.Element;
