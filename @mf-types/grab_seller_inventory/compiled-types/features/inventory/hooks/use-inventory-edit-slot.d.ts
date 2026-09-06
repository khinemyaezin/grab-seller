import { InventoryEditContext, InventoryEditPayload, SellerPlatform } from "@khinemyaezin/seller-contracts";
export type InventoryEditWidgetHandle = {
    validate: () => Promise<{
        value?: InventoryEditPayload;
        errors?: Record<string, string>;
    }>;
    getValues: () => InventoryEditPayload;
};
export type UseInventoryEditSlotProps = {
    groupId: string;
    slotId: string;
    platform?: SellerPlatform;
    initialContext?: InventoryEditContext;
};
export default function useInventoryEditSlot({ groupId, slotId, platform, initialContext, }: UseInventoryEditSlotProps): {
    context: InventoryEditContext | undefined;
    payload: InventoryEditPayload | undefined;
    ref: import("react").RefObject<InventoryEditWidgetHandle | null>;
    onChange: (next: InventoryEditPayload) => void;
};
