import { InventoryCreateContext, InventoryPayload, SellerPlatform } from "@khinemyaezin/seller-contracts";
export type UseInventoryNewSlotProps = {
    groupId: string;
    slotId: string;
    platform?: SellerPlatform;
    initialContext?: InventoryCreateContext;
};
export type InventoryWidgetHandle = {
    validate: () => Promise<{
        value?: InventoryPayload;
        errors?: Record<string, string>;
    }>;
    getValues: () => InventoryPayload;
};
export default function useInventoryNewSlot({ groupId, slotId, platform, initialContext }: UseInventoryNewSlotProps): {
    context: InventoryCreateContext | undefined;
    payload: InventoryPayload | undefined;
    ref: import("react").RefObject<InventoryWidgetHandle | null>;
    onChange: (next: InventoryPayload) => void;
};
