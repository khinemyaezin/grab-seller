import { HateoasLink } from "@khinemyaezin/seller-api";
export type ProductsViewProps = {
    link: HateoasLink;
    canCreate: boolean;
};
export default function ProductsView({ link, canCreate }: ProductsViewProps): import("react").JSX.Element;
