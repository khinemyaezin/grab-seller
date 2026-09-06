import { HateoasLink } from "@khinemyaezin/seller-api";
import { ProductLifecycleEvent } from "../types";
export type ActionButtonGroupProps = {
    links?: Record<string, HateoasLink>;
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
};
export default function ActionButtonGroup({ links, onLifecycleEvent }: ActionButtonGroupProps): import("react").JSX.Element;
