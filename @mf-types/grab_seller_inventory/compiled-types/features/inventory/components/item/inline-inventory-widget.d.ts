import { InventoryCreateContext, InventoryPayload } from "@khinemyaezin/seller-contracts";
import { Ref } from "react";
import { InventoryWidgetHandle } from "../../hooks/use-inventory-new-slot";
export type InlineInventoryWidgetProps = {
    context?: InventoryCreateContext;
    value?: Partial<InventoryPayload>;
    onChange: (value: InventoryPayload) => void;
    ref: Ref<InventoryWidgetHandle>;
};
export default function InlineInventoryWidget({ context, value, onChange, ref, }: InlineInventoryWidgetProps): import("react").JSX.Element | null;
