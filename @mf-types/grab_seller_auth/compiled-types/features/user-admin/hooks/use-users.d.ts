import { HateoasLink } from "@khinemyaezin/seller-api";
import { UserMutationResponse } from "../types/user-admin.model";
export declare function useUsersQuery(link: HateoasLink | undefined, page?: number, size?: number): import("@tanstack/react-query").UseQueryResult<import("../types").UserProfilePageResponse, Error>;
export declare function useUserQuery(link: HateoasLink, userId: string): import("@tanstack/react-query").UseQueryResult<import("../types").UserProfileResponse, Error>;
export declare function useRoleSearch(link: HateoasLink, query: string): import("@tanstack/react-query").UseQueryResult<import("../types/user-admin.response").RoleSearchResponse, Error>;
export declare function useUserMutations(): {
    suspendMutation: import("@tanstack/react-query").UseMutationResult<UserMutationResponse, Error, HateoasLink, unknown>;
    reactivateMutation: import("@tanstack/react-query").UseMutationResult<UserMutationResponse, Error, HateoasLink, unknown>;
    approveMutation: import("@tanstack/react-query").UseMutationResult<UserMutationResponse, Error, HateoasLink, unknown>;
    assignRoleMutation: import("@tanstack/react-query").UseMutationResult<UserMutationResponse, Error, {
        link: HateoasLink;
        roleCode: string;
    }, unknown>;
    revokeRoleMutation: import("@tanstack/react-query").UseMutationResult<UserMutationResponse, Error, {
        link: HateoasLink;
        code: string;
    }, unknown>;
};
