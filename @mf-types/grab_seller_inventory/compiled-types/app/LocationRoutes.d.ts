import { HateoasLink } from "@khinemyaezin/seller-api";
import { SellerPlatform } from "@khinemyaezin/seller-contracts";
export default function LocationRoutes({ link, platform, }: {
    link: HateoasLink;
    platform?: SellerPlatform;
}): import("react").JSX.Element;
