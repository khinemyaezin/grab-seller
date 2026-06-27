
    export type RemoteKeys = 'grab_seller_auth/Routes' | 'grab_seller_auth/AuthService';
    type PackageType<T> = T extends 'grab_seller_auth/AuthService' ? typeof import('grab_seller_auth/AuthService') :T extends 'grab_seller_auth/Routes' ? typeof import('grab_seller_auth/Routes') :any;