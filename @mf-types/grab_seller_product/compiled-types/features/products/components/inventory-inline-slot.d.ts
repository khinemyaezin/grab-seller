import { PRODUCT_EXTENSION_SLOTS } from "@khinemyaezin/seller-contracts";
export type InventoryLineSlotProps = {
    groupId: string;
    slotName?: typeof PRODUCT_EXTENSION_SLOTS.CREATE_INVENTORY_INLINE | typeof PRODUCT_EXTENSION_SLOTS.EDIT_INVENTORY_INLINE;
};
export declare function InventoryInlineSlot({ groupId, slotName, }: InventoryLineSlotProps): import("react").JSX.Element;
