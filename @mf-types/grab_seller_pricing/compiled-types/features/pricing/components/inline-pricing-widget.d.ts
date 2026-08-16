import { PricingCreateContext, PricingPayload } from "@khinemyaezin/seller-contracts";
import { Ref } from "react";
import { InlinePricingWidgetHandle } from "./inline-pricing-widget-exposed";
export type InlinePricingWidgetProps = {
    context?: PricingCreateContext;
    value?: PricingPayload;
    onChange: (value: PricingPayload) => void;
    ref: Ref<InlinePricingWidgetHandle>;
};
export default function InlinePricingWidget({ context, value, onChange, ref, }: InlinePricingWidgetProps): import("react").JSX.Element;
