import { PricingPayload } from "@khinemyaezin/seller-contracts";
import { Ref } from "react";
import { PricingWidgetHandle } from "./product-pricing-widget-exposed";
export type ProductPricingWidgetProps = {
    value?: Partial<PricingPayload>;
    onChange: (value: PricingPayload) => void;
    ref: Ref<PricingWidgetHandle>;
};
export default function ProductPricingWidget({ value, onChange, ref }: ProductPricingWidgetProps): import("react").JSX.Element;
