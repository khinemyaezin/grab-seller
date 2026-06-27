import { HateoasLink } from "@khinemyaezin/seller-api";
export type UserRoleViewProps = {
    roles: string[];
    revokeRoleLink?: HateoasLink;
    roleSuggestLink?: HateoasLink;
    assignRoleLink?: HateoasLink;
};
export declare function UserRoleView({ roles, revokeRoleLink, roleSuggestLink, assignRoleLink }: UserRoleViewProps): import("react").JSX.Element;
