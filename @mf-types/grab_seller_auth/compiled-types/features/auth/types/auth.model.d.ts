import { ApiRoot as SellerApiRoot, HateoasLink } from "@khinemyaezin/seller-api";
export type ApiRoot = SellerApiRoot & {
    getIdentityRoot?: HateoasLink;
};
export type IdentityRoot = {
    self?: HateoasLink;
    getProfile?: HateoasLink;
    listUsers?: HateoasLink;
    getUser?: HateoasLink;
    listRoles?: HateoasLink;
    login?: HateoasLink;
    register?: HateoasLink;
    logout?: HateoasLink;
    refreshToken?: HateoasLink;
};
