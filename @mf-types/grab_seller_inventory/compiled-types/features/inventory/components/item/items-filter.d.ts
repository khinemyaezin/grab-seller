import type { ItemSearchCriteria } from "@/features/inventory/hooks/use-item-filter";
export type ItemsFilterProps = {
    onChange?: (filter: ItemSearchCriteria) => void;
};
export default function ItemsFilter({ onChange }: ItemsFilterProps): import("react").JSX.Element;
