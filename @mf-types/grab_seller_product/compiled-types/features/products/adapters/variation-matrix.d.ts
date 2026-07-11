import type { VariationMatrixRequest, VariationMatrixResponse, Variant, VariationType } from "@/features/products/types";
export declare function buildMatrixRequest(types: VariationType[], existing: Variant[] | null): VariationMatrixRequest;
export declare function responseToVariant(response: VariationMatrixResponse, existingVariants: Variant[], variationTypes: VariationType[]): Variant[];
export declare function getVariantName(v: {
    variations: {
        optionId: string;
    }[];
}, nameMap: Record<string, string>): string;
export declare function buildStructuralFingerprint(types: VariationType[]): string;
