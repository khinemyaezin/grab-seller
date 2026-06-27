export type UserRoleTableProps = {
    roles: string[];
    onRevokeRole?: (code: string) => void;
};
export default function UserRoleTable({ roles, onRevokeRole }: UserRoleTableProps): import("react").JSX.Element;
