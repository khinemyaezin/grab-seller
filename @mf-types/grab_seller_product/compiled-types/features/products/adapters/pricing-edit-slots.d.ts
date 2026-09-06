import { PricingEditContext, type PricingEditPayload } from "@khinemyaezin/seller-contracts";
import type { SlotValidateResult } from "@khinemyaezin/seller-ui";
import type { ProductFormValue, UpdateSellableProductPricingLine } from "@/features/products/types";
export type PricingEditSlotDescriptor = {
    groupId: string;
    context: PricingEditContext;
    payload?: PricingEditPayload;
};
export declare function isPricingEditValidateResult(result: SlotValidateResult): result is SlotValidateResult & {
    value: PricingEditPayload;
};
export declare function buildPricingEditSlotDescriptors(values: ProductFormValue, byGroup?: ReadonlyMap<string, PricingEditPayload>): PricingEditSlotDescriptor[];
export declare function projectPricingEditLines(descriptors: PricingEditSlotDescriptor[]): UpdateSellableProductPricingLine[];
