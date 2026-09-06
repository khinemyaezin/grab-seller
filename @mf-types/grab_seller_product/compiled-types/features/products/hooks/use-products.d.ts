import { type QueryClient } from "@tanstack/react-query";
import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { CreateProductRequest, CreateSellableProductRequest, CreateSellableProductResponse, GetFullProductResponse, UpdateProductRequest, UpdateProductResponse, UpdateSellableProductRequest, ProductModerationResponse, DeleteProductResponse, ProductFilterFormValue } from "@/features/products/types";
import { ProductSearchResponse } from "../types/catalog.response";
export declare function invalidateProductsQueries(queryClient: QueryClient): Promise<void>;
export declare function invalidateProductDetailQueries(queryClient: QueryClient, productId: string): Promise<void>;
export declare function invalidateProductQueries(queryClient: QueryClient, productId?: string): Promise<void[]>;
export declare function useProductMutation(): import("@tanstack/react-query").UseMutationResult<void, Error, {
    link: HateoasLink;
    request: CreateProductRequest;
}, unknown>;
export declare function useCreateSellableProductMutation(): import("@tanstack/react-query").UseMutationResult<CreateSellableProductResponse, Error, {
    link: HateoasLink;
    request: CreateSellableProductRequest;
}, unknown>;
export declare function useUpdateSellableProductMutation(): import("@tanstack/react-query").UseMutationResult<CreateSellableProductResponse, Error, {
    link: HateoasLink;
    request: UpdateSellableProductRequest;
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
