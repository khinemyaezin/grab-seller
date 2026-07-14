import type { HateoasLink, BinLifecycleEvent } from "@/types";
export type BinNewFormProps = {
    link: HateoasLink;
    locationId: string;
    zoneId: string;
    onLifecycleEvent?: (event: BinLifecycleEvent) => void;
};
export default function BinNewForm({ link, locationId, zoneId, onLifecycleEvent }: BinNewFormProps): import("react").JSX.Element;
