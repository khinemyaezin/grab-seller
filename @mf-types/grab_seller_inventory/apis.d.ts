
    export type RemoteKeys = 'grab_seller_inventory/LocationRoutes' | 'grab_seller_inventory/StockRoutes';
    type PackageType<T> = T extends 'grab_seller_inventory/StockRoutes' ? typeof import('grab_seller_inventory/StockRoutes') :T extends 'grab_seller_inventory/LocationRoutes' ? typeof import('grab_seller_inventory/LocationRoutes') :any;