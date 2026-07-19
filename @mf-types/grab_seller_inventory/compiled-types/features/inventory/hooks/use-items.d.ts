import type { HateoasLink, Pageable } from "@khinemyaezin/seller-api";
import type { AdjustStockRequest, CheckInventoryExistenceResponse, CreateInventoryRequest, InventoryItemResponse, InventoryItemsResponse, ItemsFilterForm, ReceiveStockRequest, StockMovementsResponse } from "@/features/inventory/types";
export declare function useItems(searchLink?: HateoasLink, filters?: ItemsFilterForm & Pageable): import("@tanstack/react-query").UseQueryResult<InventoryItemsResponse, Error>;
export declare function useInventoryExistence(locationId?: string, skus?: string[]): import("@tanstack/react-query").UseQueryResult<CheckInventoryExistenceResponse, Error>;
export declare function useItem(link?: HateoasLink, itemId?: string): import("@tanstack/react-query").UseQueryResult<InventoryItemResponse, Error>;
export declare function useItemMovements(link?: HateoasLink, pageable?: Pageable): import("@tanstack/react-query").UseQueryResult<StockMovementsResponse, Error>;
export declare function useCreateItemMutation(): import("@tanstack/react-query").UseMutationResult<InventoryItemResponse, Error, {
    link: HateoasLink;
    request: CreateInventoryRequest;
}, unknown>;
export declare function useReceiveStockMutation(): import("@tanstack/react-query").UseMutationResult<InventoryItemResponse, Error, {
    link: HateoasLink;
    request: ReceiveStockRequest;
}, unknown>;
export declare function useAdjustStockMutation(): import("@tanstack/react-query").UseMutationResult<InventoryItemResponse, Error, {
    link: HateoasLink;
    request: AdjustStockRequest;
}, unknown>;
