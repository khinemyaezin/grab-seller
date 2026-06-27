import { HalLinks } from "@khinemyaezin/seller-api";
export type RoleSearchResponse = {
    _embedded?: {
        searchRolesResponseList: RoleResponse[];
    };
    _links: HalLinks;
};
export type RoleResponse = {
    id: string;
    name: string;
    code: string;
};
