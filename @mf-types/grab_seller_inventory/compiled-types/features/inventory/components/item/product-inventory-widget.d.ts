import { InventoryCreateContext, InventoryPayload } from "@khinemyaezin/seller-contracts";
import { Ref } from "react";
import { InventoryWidgetHandle } from "../../hooks/use-inventory-new-slot";
export type ProductInventoryWidgetProps = {
    context?: InventoryCreateContext;
    value?: InventoryPayload;
    onChange: (value: InventoryPayload) => void;
    ref: Ref<InventoryWidgetHandle>;
};
export default function ProductInventoryWidget({ context, value, onChange, ref, }: ProductInventoryWidgetProps): import("react").JSX.Element;
