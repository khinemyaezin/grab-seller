import type { HateoasLink } from "@khinemyaezin/seller-api";
import { User } from "@khinemyaezin/seller-contracts";
export interface AuthServiceFacade {
    getProfile(): Promise<User>;
    logout(): Promise<void>;
    refreshToken(): Promise<void>;
}
export declare function createAuthService(entryLink: HateoasLink): AuthServiceFacade;
