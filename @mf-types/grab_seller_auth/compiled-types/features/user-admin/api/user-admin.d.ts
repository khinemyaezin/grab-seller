import { HateoasLink } from "@khinemyaezin/seller-api";
import { UserMutationResponse, UserProfilePageResponse, UserProfileResponse } from "../types/user-admin.model";
import { RoleSearchResponse } from "../types/user-admin.response";
export declare const userAdminService: {
    listUsers: (link: HateoasLink, params?: Record<string, any>, headers?: Record<string, string>) => Promise<UserProfilePageResponse>;
    getUser: (link: HateoasLink, headers?: Record<string, string>) => Promise<UserProfileResponse>;
    suspendUser: (link: HateoasLink, headers?: Record<string, string>) => Promise<UserMutationResponse>;
    reactivateUser: (link: HateoasLink, headers?: Record<string, string>) => Promise<UserMutationResponse>;
    approveUser: (link: HateoasLink, headers?: Record<string, string>) => Promise<UserMutationResponse>;
    assignRole: (link: HateoasLink, headers?: Record<string, string>) => Promise<UserMutationResponse>;
    revokeRole: (link: HateoasLink, headers?: Record<string, string>) => Promise<UserMutationResponse>;
    searchRoleSuggestions: (link: HateoasLink, params?: Record<string, any>, headers?: Record<string, string>) => Promise<RoleSearchResponse>;
};
