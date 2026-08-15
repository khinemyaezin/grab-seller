import { InventoryCreateContext, InventoryPayload } from "@khinemyaezin/seller-contracts";
import { Ref } from "react";
import type { InventoryWidgetHandle } from "./product-inventory-widget-exposed";
export type ProductInventoryWidgetProps = {
    context?: InventoryCreateContext;
    value?: InventoryPayload;
    onChange: (value: InventoryPayload) => void;
    ref: Ref<InventoryWidgetHandle>;
};
export default function ProductInventoryWidget({ context, value, onChange, ref, }: ProductInventoryWidgetProps): import("react").JSX.Element;
