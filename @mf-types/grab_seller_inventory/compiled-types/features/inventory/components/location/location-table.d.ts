import { Pageable } from "@khinemyaezin/seller-api";
import { LocationLifecycleEvent } from "@/types";
export type LocationTableProps = {
    filter: {} & Pageable;
    onPageChange?: (page: number) => void;
    onLifecycleEvent?: (event: LocationLifecycleEvent) => void;
};
export default function LocationTable({ filter, onPageChange, onLifecycleEvent }: LocationTableProps): import("react").JSX.Element;
