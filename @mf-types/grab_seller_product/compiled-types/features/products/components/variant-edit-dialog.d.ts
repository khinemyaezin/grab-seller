export type VariantEditDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    variantName: string;
    matrixKey: string;
};
export declare function VariantEditDialog({ open, onOpenChange, variantName, matrixKey, }: VariantEditDialogProps): import("react").JSX.Element;
