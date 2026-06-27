import { HateoasLink } from "@khinemyaezin/seller-api";
export type EditUserRolesFormProps = {
    link: HateoasLink;
    isPending: boolean;
    filterRoles?: string[];
    onAssignRole: (code: string) => void;
};
export default function EditUserRolesForm({ link, filterRoles, onAssignRole }: EditUserRolesFormProps): import("react").JSX.Element;
