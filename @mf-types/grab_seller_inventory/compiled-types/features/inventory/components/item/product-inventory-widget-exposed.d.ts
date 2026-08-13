import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { SellerPlatform } from "@khinemyaezin/seller-contracts";
import { type InventoryFieldName, type InventoryLineValue } from "./product-inventory-widget";
export default function ProductInventoryWidgetExposed({ sku, value, onChange, errors, onBlur, platform, entryLink, }: {
    sku: string;
    value: InventoryLineValue;
    onChange: (next: InventoryLineValue) => void;
    errors?: Partial<Record<InventoryFieldName, string>>;
    onBlur?: (field: InventoryFieldName) => void;
    platform?: SellerPlatform;
    entryLink: HateoasLink;
}): import("react").JSX.Element | null;
