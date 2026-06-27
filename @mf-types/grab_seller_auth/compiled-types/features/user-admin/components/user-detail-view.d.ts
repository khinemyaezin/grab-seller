import { HateoasLink } from "@khinemyaezin/seller-api";
export type UserDetailViewProps = {
    userId: string;
    link: HateoasLink;
};
export default function UserDetailView({ link, userId }: UserDetailViewProps): import("react").JSX.Element;
