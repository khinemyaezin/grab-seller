export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    expiresInMs: number;
    userId: string;
    email: string;
    roles: string[];
    status: string;
    _links: Record<string, {
        href: string;
    }>;
}
export interface RegisterUserReponse {
}
export interface ProfileResponse {
    id: string;
    email: string;
    roles: string[];
    status: string;
    createdAt: string;
    _links: Record<string, {
        href: string;
    }>;
}
