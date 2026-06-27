import { resolveLink } from "@khinemyaezin/seller-api";
import { ModuleRoutes, type ModuleRouteKey, type SellerRuntimeConfig } from "@khinemyaezin/seller-contracts";
import { type ReactNode, useMemo } from "react";
import { useEntryGet } from "../hooks";
import { EntryLinkContext, type ModuleLinksValue } from "./EntryLinkContext";

export type { ModuleLinksValue } from "./EntryLinkContext";

const moduleRouteKeys = Object.keys(ModuleRoutes) as ModuleRouteKey[];

export function EntryLinkProvider({
  runtimeConfig,
  children,
}: {
  runtimeConfig: Readonly<SellerRuntimeConfig>;
  children: ReactNode;
}) {
  const { data } = useEntryGet({ href: runtimeConfig.apiBaseUrl });

  const moduleLinks = useMemo<ModuleLinksValue | null>(() => {
    if (!data?._links) return null;

    return moduleRouteKeys.reduce<ModuleLinksValue>((acc, key) => {
      const link = resolveLink(data._links, ModuleRoutes[key]);
      if (link) {
        acc[key] = link;
      }
      return acc;
    }, {});
  }, [data?._links]);

  return (
    <EntryLinkContext.Provider value={moduleLinks}>
      {children}
    </EntryLinkContext.Provider>
  );
}
