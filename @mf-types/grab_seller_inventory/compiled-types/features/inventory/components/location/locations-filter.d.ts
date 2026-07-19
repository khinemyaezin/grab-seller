import type { LocationSearchCriteria } from "@/features/inventory/hooks/use-location-filter";
export type LocationsFilterProps = {
    onChange?: (filter: LocationSearchCriteria) => void;
};
export default function LocationsFilter({ onChange }: LocationsFilterProps): import("react").JSX.Element;
