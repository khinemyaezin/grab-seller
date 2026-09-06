import { type PricingEditContext, type PricingEditPayload } from "@khinemyaezin/seller-contracts";
import type { PricingEditWidgetHandle } from "../components/pricing-edit-widget";
export declare function usePricingEditSlot(groupId: string, slotId?: string, propsContext?: PricingEditContext): {
    context: PricingEditContext | undefined;
    payload: PricingEditPayload | undefined;
    onChange: (next: PricingEditPayload) => void;
    ref: import("react").RefObject<PricingEditWidgetHandle | null>;
    isLoading: boolean;
};
