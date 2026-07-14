import type { HateoasLink } from "@khinemyaezin/seller-api";
import type { LocationResponse, LocationsResponse, CreateLocationRequest, UpdateLocationRequest, LocationType } from "@/features/inventory/types";
export declare const locationService: {
    createLocation: (link: HateoasLink, request: CreateLocationRequest, headers?: Record<string, string>) => Promise<LocationResponse>;
    getLocation: (link: HateoasLink, headers?: Record<string, string>) => Promise<LocationResponse>;
    getLocationByCode: (link: HateoasLink, headers?: Record<string, string>) => Promise<LocationResponse>;
    listLocations: (link: HateoasLink, filters?: {
        active?: boolean;
        type?: LocationType;
        page?: number;
        size?: number;
    }, headers?: Record<string, string>) => Promise<LocationsResponse>;
    removeLocation: (link: HateoasLink, headers?: Record<string, string>) => Promise<void>;
    activate: (link: HateoasLink, headers?: Record<string, string>) => Promise<LocationResponse>;
    deactivate: (link: HateoasLink, headers?: Record<string, string>) => Promise<LocationResponse>;
    update: (link: HateoasLink, body: UpdateLocationRequest, headers?: Record<string, string>) => Promise<LocationResponse>;
};
