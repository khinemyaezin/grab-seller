import type { ProductLifecycleEvent } from "../types";
export type ProductNewFormProps = {
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
};
export default function ProductNewForm({ onLifecycleEvent }: ProductNewFormProps): import("react").JSX.Element;
