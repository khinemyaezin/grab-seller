import { PricingCreateContext, type PricingPayload } from "@khinemyaezin/seller-contracts";
import type { SlotValidateResult } from "@khinemyaezin/seller-ui";
import type { CreateSellableProductPricingLine, ProductFormValue } from "@/features/products/types";
export type PricingSlotDescriptor = {
    groupId: string;
    context: PricingCreateContext;
    payload?: PricingPayload;
};
export declare function isPricingValidateResult(result: SlotValidateResult): result is SlotValidateResult & {
    value: PricingPayload;
};
export declare function buildPricingSlotDescriptors(values: ProductFormValue, byGroup?: ReadonlyMap<string, PricingPayload>): PricingSlotDescriptor[];
export declare function projectPricingLines(descriptors: PricingSlotDescriptor[]): CreateSellableProductPricingLine[];
