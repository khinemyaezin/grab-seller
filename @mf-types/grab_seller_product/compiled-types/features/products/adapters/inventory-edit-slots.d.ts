import { InventoryEditContext, type InventoryEditPayload } from "@khinemyaezin/seller-contracts";
import type { SlotValidateResult } from "@khinemyaezin/seller-ui";
import type { ProductFormValue, UpdateSellableProductInventoryLine } from "@/features/products/types";
export type InventoryEditSlotDescriptor = {
    groupId: string;
    context: InventoryEditContext & {
        sku: string;
    };
    payload?: InventoryEditPayload;
};
export declare function isInventoryEditValidateResult(result: SlotValidateResult): result is SlotValidateResult & {
    value: InventoryEditPayload;
};
export declare function buildInventoryEditSlotDescriptors(values: ProductFormValue, byGroup?: ReadonlyMap<string, InventoryEditPayload>): InventoryEditSlotDescriptor[];
export declare function projectInventoryEditLines(descriptors: InventoryEditSlotDescriptor[]): UpdateSellableProductInventoryLine[];
