
    export type RemoteKeys = 'grab_seller_pricing/Routes' | 'grab_seller_pricing/ProductPricingWidget';
    type PackageType<T> = T extends 'grab_seller_pricing/ProductPricingWidget' ? typeof import('grab_seller_pricing/ProductPricingWidget') :T extends 'grab_seller_pricing/Routes' ? typeof import('grab_seller_pricing/Routes') :any;