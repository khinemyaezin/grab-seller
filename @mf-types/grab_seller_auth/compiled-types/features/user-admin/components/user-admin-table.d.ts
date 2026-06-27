import { UserProfilePageResponse } from "../types/user-admin.model";
export type UserAdminTableProps = {
    data?: UserProfilePageResponse;
    isLoading: boolean;
    isError: boolean;
    onPageChange: (newPage: number) => void;
};
export default function UserAdminTable({ data, isLoading, isError, onPageChange }: UserAdminTableProps): import("react").JSX.Element;
