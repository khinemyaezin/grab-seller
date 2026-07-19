import type { CategoryLeavesResult, CreateProductRequest, GetFullProductResponse, GetVariationOptionResult, GetVariationTypeResult, UpdateProductRequest, UpdateProductResponse, VariationMatrixRequest, VariationMatrixResponse, DeleteProductResponse, ProductModerationResponse, ProductSearchRequest, ProductSearchResponse } from "@/features/products/types";
import type { HateoasLink } from "@khinemyaezin/seller-api";
export declare const catalogService: {
    createVariationMatrix: (link: HateoasLink, request: VariationMatrixRequest, headers?: Record<string, string>) => Promise<VariationMatrixResponse>;
    getCategories: (link: HateoasLink, headers?: Record<string, string>) => Promise<CategoryLeavesResult>;
    createProduct: (link: HateoasLink, request: CreateProductRequest, headers?: Record<string, string>) => Promise<void>;
    getVariationType: (link: HateoasLink, headers?: Record<string, string>) => Promise<GetVariationTypeResult>;
    getVariationOption: (link: HateoasLink, headers?: Record<string, string>) => Promise<GetVariationOptionResult>;
    searchProducts: (link: HateoasLink, request: ProductSearchRequest, headers?: Record<string, string>) => Promise<ProductSearchResponse>;
    getFullProduct: (link: HateoasLink, headers?: Record<string, string>) => Promise<GetFullProductResponse>;
    updateProduct: (link: HateoasLink, request: UpdateProductRequest, headers?: Record<string, string>) => Promise<UpdateProductResponse>;
    deleteProduct: (link: HateoasLink, headers?: Record<string, string>) => Promise<DeleteProductResponse>;
    restoreProduct: (link: HateoasLink, headers?: Record<string, string>) => Promise<ProductModerationResponse>;
    publishProduct: (link: HateoasLink, headers?: Record<string, string>) => Promise<ProductModerationResponse>;
};
