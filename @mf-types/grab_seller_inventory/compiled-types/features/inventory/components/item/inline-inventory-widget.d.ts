import { InventoryCreateContext, InventoryPayload } from "@khinemyaezin/seller-contracts";
import { Ref } from "react";
import type { InlineInventoryWidgetHandle } from "./inline-inventory-widget-exposed";
export type InlineInventoryWidgetProps = {
    context?: InventoryCreateContext;
    value?: Partial<InventoryPayload>;
    onChange: (value: InventoryPayload) => void;
    ref: Ref<InlineInventoryWidgetHandle>;
};
export default function InlineInventoryWidget({ context, value, onChange, ref, }: InlineInventoryWidgetProps): import("react").JSX.Element | null;
