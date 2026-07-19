import type { ZoneSearchCriteria } from "@/features/inventory/hooks/use-zone-filter";
export type ZoneFilterProps = {
    onChange?: (filter: ZoneSearchCriteria) => void;
};
export default function ZoneFilter({ onChange }: ZoneFilterProps): import("react").JSX.Element;
