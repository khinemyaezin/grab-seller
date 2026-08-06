import type { ReactNode } from "react";
import { type ExtensionRegistry } from "./extension-registry";
export type ExtensionProviderProps = {
    extensions?: ExtensionRegistry;
    children: ReactNode;
};
export default function ExtensionProvider({ extensions, children, }: ExtensionProviderProps): import("react").JSX.Element;
