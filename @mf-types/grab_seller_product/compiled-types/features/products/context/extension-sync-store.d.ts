import type { ReactNode } from "react";
import { ProductContributions } from "../types/catalog.request";
import { ExtensionSyncStore, SlotEntry } from "@khinemyaezin/seller-contracts";
export declare function ExtensionSyncProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useExtensionSyncStore(): ExtensionSyncStore<ProductContributions>;
export declare function useSlotPayload<TPayload>(groupId: string): TPayload | undefined;
export declare function useHasSlotEntries(): boolean;
export declare function useDomainSlotEntries<TPayload>(domain: string): SlotEntry<TPayload>[];
export declare function collectDomainPayloads<TPayload>(entries: ReadonlyMap<string, SlotEntry>, domain: string): Map<string, TPayload>;
export declare function useIsExtensionDirty(): [boolean, () => void];
