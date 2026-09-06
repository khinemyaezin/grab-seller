import type { Ref } from "react";
import type { InventoryEditContext, InventoryEditPayload } from "@khinemyaezin/seller-contracts";
import type { InventoryEditWidgetHandle } from "@/features/inventory/hooks/use-inventory-edit-slot";
export type InventoryItemEditProps = {
    context?: InventoryEditContext;
    value?: InventoryEditPayload;
    onChange?: (value: InventoryEditPayload) => void;
    ref?: Ref<InventoryEditWidgetHandle>;
};
export default function InventoryItemEdit({ context, value, onChange, ref }: InventoryItemEditProps): import("react").JSX.Element;
