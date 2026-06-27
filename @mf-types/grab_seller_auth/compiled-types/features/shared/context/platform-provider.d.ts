import { ReactNode } from "react";
import type { SellerPlatform } from "@khinemyaezin/seller-contracts";
declare function PlatformProvider({ platform, children }: {
    platform?: SellerPlatform;
    children: ReactNode;
}): import("react").JSX.Element;
declare function usePlatform(): SellerPlatform | null;
export { PlatformProvider, usePlatform };
