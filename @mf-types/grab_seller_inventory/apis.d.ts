
    export type RemoteKeys = 'grab_seller_inventory/Routes';
    type PackageType<T> = T extends 'grab_seller_inventory/Routes' ? typeof import('grab_seller_inventory/Routes') :any;