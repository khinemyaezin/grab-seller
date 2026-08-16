import { InventoryCreateContext, type InventoryPayload } from "@khinemyaezin/seller-contracts";
import type { SlotValidateResult } from "@khinemyaezin/seller-ui";
import type { CreateSellableProductInventoryLine, ProductFormValue } from "@/features/products/types";
export type InventorySlotDescriptor = {
    groupId: string;
    context: InventoryCreateContext;
    payload?: InventoryPayload;
};
export declare function isInventoryValidateResult(result: SlotValidateResult): result is SlotValidateResult & {
    value: InventoryPayload;
};
export declare function buildInventorySlotDescriptors(values: ProductFormValue, byGroup?: ReadonlyMap<string, InventoryPayload>): InventorySlotDescriptor[];
export declare function projectInventoryLines(descriptors: InventorySlotDescriptor[]): CreateSellableProductInventoryLine[];
