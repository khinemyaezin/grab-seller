import type { ExtensionFieldErrors, PlatformEvents } from "@khinemyaezin/seller-contracts";
import type { RegisteredSlot } from "./slot-provider";
export type SlotValidateResult = {
    instanceId: string;
    slotId: string;
    valid: boolean;
    value?: unknown;
    errors?: ExtensionFieldErrors;
};
export declare function requestValidate(events: PlatformEvents, slot: RegisteredSlot, timeoutMs?: number): Promise<SlotValidateResult>;
export declare function validateAllSlots(events: PlatformEvents, slots: RegisteredSlot[], timeoutMs?: number): Promise<SlotValidateResult[]>;
