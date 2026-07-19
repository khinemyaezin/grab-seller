import type { BinSearchCriteria } from "@/features/inventory/hooks/use-bin-filter";
export type BinFilterProps = {
    onChange?: (filter: BinSearchCriteria) => void;
};
export default function BinFilter({ onChange }: BinFilterProps): import("react").JSX.Element;
