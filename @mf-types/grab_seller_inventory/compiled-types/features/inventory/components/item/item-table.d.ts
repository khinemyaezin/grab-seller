import type { ItemFilterFormValue } from "@/features/inventory/hooks/use-item-filter";
export type ItemTableProps = {
    filter: ItemFilterFormValue;
    onPageChange?: (page: number) => void;
};
export default function ItemTable({ filter, onPageChange }: ItemTableProps): import("react").JSX.Element;
