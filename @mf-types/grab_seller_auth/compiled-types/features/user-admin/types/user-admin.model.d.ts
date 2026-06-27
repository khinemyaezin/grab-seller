import { HalLinks } from "@khinemyaezin/seller-api";
export type UserProfileResponse = {
    id: string;
    email: string;
    roles: string[];
    status: string;
    createdAt?: string;
    _links?: HalLinks;
};
export type UserProfilePageResponse = {
    _embedded?: {
        userProfileResponseList: UserProfileResponse[];
    };
    _links?: HalLinks;
    page?: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    };
};
export type UserMutationResponse = {
    id: string;
    email: string;
    roles: string[];
    status: string;
    createdAt?: string;
    _links?: HalLinks;
};
export type RoleAssignmentRequest = {
    role: string;
};
export type Role = {
    code: string;
    name: string;
};
