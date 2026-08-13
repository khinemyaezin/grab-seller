import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { SellerPlatform } from "@khinemyaezin/seller-contracts";
export type InventoryLineValue = {
    sku: string;
    locationId: string;
    initialQuantity: number | "";
    safetyStock?: number | "";
    reorderPoint?: number | "";
    reorderQuantity?: number | "";
    maxStock?: number | "";
};
export type InventoryFieldName = "locationId" | "initialQuantity" | "safetyStock";
export type ProductInventoryWidgetProps = {
    sku: string;
    value: InventoryLineValue;
    onChange: (next: InventoryLineValue) => void;
    errors?: Partial<Record<InventoryFieldName, string>>;
    onBlur?: (field: InventoryFieldName) => void;
    platform?: SellerPlatform;
    entryLink: HateoasLink;
};
export default function ProductInventoryWidget({ sku, value, onChange, errors, onBlur, }: ProductInventoryWidgetProps): import("react").JSX.Element;
