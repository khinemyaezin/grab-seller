import { type Ref } from "react";
import type { InventoryEditContext, InventoryEditPayload } from "@khinemyaezin/seller-contracts";
import type { InventoryItemResponse } from "@/features/inventory/types";
import type { InventoryEditWidgetHandle } from "@/features/inventory/hooks/use-inventory-edit-slot";
import type { StockOperationSubmit } from "@/features/inventory/components/stock-operations";
import type { InventoryItemEditForm } from "../types/inventory.form";
export type UseInventoryEditControllerOptions = {
    context?: InventoryEditContext;
    value?: InventoryEditPayload;
    onChange?: (value: InventoryEditPayload) => void;
    onConfirm?: (item: InventoryItemResponse | undefined, payload: StockOperationSubmit) => Promise<void>;
    ref?: Ref<InventoryEditWidgetHandle>;
};
export declare function useInventoryEdit({ context, value, onChange, onConfirm, ref, }: UseInventoryEditControllerOptions): {
    formValue: InventoryItemEditForm | undefined;
    isLoading: boolean;
    locations: import("@/features/inventory/types").LocationResponse[];
    createOnly: boolean;
    confirmForItem: (locationId: string) => (payload: StockOperationSubmit) => Promise<void>;
    applyLocationSelection: (selectedIds: string[]) => void;
};
