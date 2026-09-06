import { type HateoasLink } from "@khinemyaezin/seller-api";
import type { PriceSetResponse, UpdatePriceRequest } from "../types";
export declare function useVariantPriceLinkGet(link?: HateoasLink, variantId?: string): import("@tanstack/react-query").UseQueryResult<import("../types").VariantPriceSetLinkResponse | null, Error>;
export declare function usePriceSetLinkGet(getPriceSetLink?: HateoasLink): import("@tanstack/react-query").UseQueryResult<PriceSetResponse, Error>;
export declare function useVariantPriceSet(variantId?: string): {
    price: import("../types").PriceResponse | undefined;
    priceSetId: string | undefined;
    sku: string | undefined;
    isLoading: boolean;
    updatePriceLink: HateoasLink | undefined;
    refetch: (options?: import("@tanstack/query-core").RefetchOptions) => Promise<import("@tanstack/query-core").QueryObserverResult<PriceSetResponse, Error>>;
};
export declare function useUpdatePriceMutation(): import("@tanstack/react-query").UseMutationResult<PriceSetResponse, Error, {
    link: HateoasLink;
    priceId: string;
    request: UpdatePriceRequest;
}, unknown>;
