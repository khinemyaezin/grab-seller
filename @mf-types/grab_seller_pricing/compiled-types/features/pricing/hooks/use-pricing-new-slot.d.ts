import { PricingCreateContext, PricingPayload, SellerPlatform } from "@khinemyaezin/seller-contracts";
export type UsePricingNewSlotProps = {
    platform?: SellerPlatform;
    groupId: string;
    slotId: string;
    initialContext: PricingCreateContext;
};
export type PricingWidgetHandle = {
    validate: () => Promise<{
        value?: PricingPayload;
        errors?: Record<string, string>;
    }>;
    getValues: () => PricingPayload;
};
export declare function usePricingNewSlot({ platform, groupId, slotId, initialContext }: UsePricingNewSlotProps): {
    context: PricingCreateContext | undefined;
    payload: PricingPayload | undefined;
    ref: import("react").RefObject<PricingWidgetHandle | null>;
    onChange: (payload: PricingPayload) => void;
};
