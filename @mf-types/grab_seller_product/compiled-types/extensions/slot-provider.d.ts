import { type ReactNode } from "react";
export type RegisteredSlot = {
    instanceId: string;
    slotId: string;
};
export type SlotProviderApi = {
    register: (slot: RegisteredSlot) => () => void;
    list: () => RegisteredSlot[];
};
export type SlotProviderProps = {
    children: ReactNode;
};
export declare function SlotProvider({ children }: SlotProviderProps): import("react").JSX.Element;
export declare function useSlotProvider(): SlotProviderApi;
