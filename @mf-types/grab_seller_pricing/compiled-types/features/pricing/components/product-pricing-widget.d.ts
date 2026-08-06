import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { SellerPlatform } from "@khinemyaezin/seller-contracts";
export type PricingLineValue = {
    sku: string;
    title?: string;
    currencyCode: string;
    amount: number | "";
    minQuantity?: number | null;
    maxQuantity?: number | null;
};
export type PricingFieldName = "amount" | "currencyCode";
export type ProductPricingWidgetProps = {
    sku: string;
    value: PricingLineValue;
    onChange: (next: PricingLineValue) => void;
    errors?: Partial<Record<PricingFieldName, string>>;
    onBlur?: (field: PricingFieldName) => void;
    platform?: SellerPlatform;
    entryLink: HateoasLink;
};
export default function ProductPricingWidget({ sku, value, onChange, errors, onBlur, }: ProductPricingWidgetProps): import("react").JSX.Element;
