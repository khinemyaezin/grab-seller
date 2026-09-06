import type { ProductLifecycleEvent } from "@/features/products/types";
export declare function useProductEditEvents(): {
    title: string | undefined;
    handleEvent: (event: ProductLifecycleEvent) => void;
    toast: (type: "success" | "error", message: string, description?: string) => void;
};
