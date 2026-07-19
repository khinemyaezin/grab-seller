import type { HateoasLink, Pageable } from "@khinemyaezin/seller-api";
import type { AdjustStockRequest, CheckInventoryExistenceRequest, CheckInventoryExistenceResponse, CreateInventoryRequest, InventoryItemResponse, InventoryItemsResponse, ItemsFilterForm, ReceiveStockRequest, StockMovementsResponse } from "@/features/inventory/types";
export declare const itemService: {
    createItem: (link: HateoasLink, request: CreateInventoryRequest, headers?: Record<string, string>) => Promise<InventoryItemResponse>;
    getItem: (link: HateoasLink, headers?: Record<string, string>) => Promise<InventoryItemResponse>;
    searchItems: (link: HateoasLink, filters?: ItemsFilterForm & Pageable) => Promise<InventoryItemsResponse>;
    checkExistence: (link: HateoasLink, request: CheckInventoryExistenceRequest, headers?: Record<string, string>) => Promise<CheckInventoryExistenceResponse>;
    receiveStock: (link: HateoasLink, request: ReceiveStockRequest, headers?: Record<string, string>) => Promise<InventoryItemResponse>;
    adjustStock: (link: HateoasLink, request: AdjustStockRequest, headers?: Record<string, string>) => Promise<InventoryItemResponse>;
    getMovements: (link: HateoasLink, pageable?: Pageable, headers?: Record<string, string>) => Promise<StockMovementsResponse>;
};
