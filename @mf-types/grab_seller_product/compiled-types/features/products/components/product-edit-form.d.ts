import { ProductLifecycleEvent } from "../types";
export type ProductEditFormProps = {
    productId: string;
    onLifecycleEvent?: (event: ProductLifecycleEvent) => void;
};
export default function ProductEditForm({ productId, onLifecycleEvent }: ProductEditFormProps): import("react").JSX.Element;
