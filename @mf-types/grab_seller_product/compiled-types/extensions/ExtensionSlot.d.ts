import { type ReactNode } from "react";
import type { ProductExtensionSlotName } from "./slots";
export type ExtensionSlotProps = {
    name: ProductExtensionSlotName | string;
    props?: Record<string, unknown>;
    fallback?: ReactNode;
};
export default function ExtensionSlot({ name, props, fallback, }: ExtensionSlotProps): import("react").JSX.Element;
