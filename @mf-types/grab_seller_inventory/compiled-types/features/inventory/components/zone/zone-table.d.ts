import { HateoasLink, ZoneLifecycleEvent, BinLifecycleEvent } from "@/types";
type ZoneTableProps = {
    locationId: string;
    link: HateoasLink;
    onPageChange?: (page: number) => void;
    onLifecycleEvent?: (event: ZoneLifecycleEvent | BinLifecycleEvent) => void;
};
export declare function ZoneTable({ locationId, link, onLifecycleEvent }: ZoneTableProps): import("react").JSX.Element;
export {};
