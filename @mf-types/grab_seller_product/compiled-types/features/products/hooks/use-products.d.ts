import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { CreateProductRequest, GetFullProductResponse, UpdateProductRequest, UpdateProductResponse, ProductModerationResponse, DeleteProductResponse, ProductFilterFormValue } from "@/features/products/types";
import { ProductSearchResponse } from "../types/catalog.response";
export declare function useProductMutation(): import("@tanstack/react-query").UseMutationResult<void, Error, {
    link: HateoasLink;
    request: CreateProductRequest;
}, unknown>;
export declare function useProductUpdateMutation(): import("@tanstack/react-query").UseMutationResult<UpdateProductResponse, Error, {
    link: HateoasLink;
    request: UpdateProductRequest;
}, unknown>;
export declare function useProductDeleteMutation(): import("@tanstack/react-query").UseMutationResult<DeleteProductResponse, Error, {
    link: HateoasLink;
}, unknown>;
export declare function useProductRestoreMutation(): import("@tanstack/react-query").UseMutationResult<ProductModerationResponse, Error, {
    link: HateoasLink;
}, unknown>;
export declare function useProductSearch(productsLink: HateoasLink, filters: ProductFilterFormValue): import("@tanstack/react-query").UseQueryResult<ProductSearchResponse, Error>;
export declare function useProductGet(productLink: HateoasLink | undefined, productId: string): import("@tanstack/react-query").UseQueryResult<GetFullProductResponse, Error>;
export declare function useProductPublishMutation(): import("@tanstack/react-query").UseMutationResult<ProductModerationResponse, Error, {
    link: HateoasLink;
}, unknown>;
