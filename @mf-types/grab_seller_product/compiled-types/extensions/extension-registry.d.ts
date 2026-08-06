import { type ComponentType } from "react";
import type { ProductExtensionSlotName } from "./slots";
export type ExtensionRegistry = Partial<Record<ProductExtensionSlotName | string, ComponentType<any>>>;
export declare const ExtensionRegistryContext: import("react").Context<Partial<Record<string, ComponentType<any>>>>;
export declare function useExtensionRegistry(): ExtensionRegistry;
export declare function useExtension(name: ProductExtensionSlotName | string): ComponentType<any> | undefined;
