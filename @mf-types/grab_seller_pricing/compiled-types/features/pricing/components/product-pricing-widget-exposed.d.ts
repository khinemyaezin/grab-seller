import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { SellerPlatform } from "@khinemyaezin/seller-contracts";
import { type PricingFieldName, type PricingLineValue } from "./product-pricing-widget";
export default function ProductPricingWidgetExposed({ sku, value, onChange, errors, onBlur, platform, entryLink, }: {
    sku: string;
    value: PricingLineValue;
    onChange: (next: PricingLineValue) => void;
    errors?: Partial<Record<PricingFieldName, string>>;
    onBlur?: (field: PricingFieldName) => void;
    platform?: SellerPlatform;
    entryLink: HateoasLink;
}): import("react").JSX.Element | null;
