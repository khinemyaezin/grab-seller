import { HateoasLink } from "@khinemyaezin/seller-api";
import { SellerPlatform } from "@khinemyaezin/seller-contracts";
export default function StockRoutes({ link, catalogLink, platform, }: {
    link: HateoasLink;
    catalogLink?: HateoasLink | null;
    platform?: SellerPlatform;
}): import("react").JSX.Element;
