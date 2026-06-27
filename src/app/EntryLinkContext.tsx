import { createContext, useContext } from "react";
import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { ModuleRouteKey } from "@khinemyaezin/seller-contracts";

export type ModuleLinksValue = Partial<Record<ModuleRouteKey, HateoasLink>>;

export const EntryLinkContext = createContext<ModuleLinksValue | null | undefined>(undefined);

export function useEntryLinks(): ModuleLinksValue | null {
  const value = useContext(EntryLinkContext);
  if (value === undefined) {
    throw new Error("useEntryLinks must be used within EntryLinkProvider");
  }
  return value;
}

export function useEntryLink(module: ModuleRouteKey): HateoasLink | null {
  return useEntryLinks()?.[module] ?? null;
}
