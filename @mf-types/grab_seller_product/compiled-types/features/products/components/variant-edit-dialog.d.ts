export type VariantEditDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    variantName: string;
    sku: string;
    lineIndex: number;
};
export declare function VariantEditDialog({ open, onOpenChange, variantName, sku, lineIndex, }: VariantEditDialogProps): import("react").JSX.Element;
