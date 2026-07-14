import type { HateoasLink, BinLifecycleEvent } from "@/types";
type BinTableProps = {
    locationId: string;
    zoneId: string;
    link: HateoasLink;
    onLifecycleEvent?: (event: BinLifecycleEvent) => void;
};
export declare function BinTable({ zoneId, link, onLifecycleEvent }: BinTableProps): import("react").JSX.Element;
export {};
