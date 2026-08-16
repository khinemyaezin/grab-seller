import type { ExtensionFieldErrors } from "@khinemyaezin/seller-contracts";
export interface FormattedErrorToast {
    message: string;
    description?: string;
}
export declare function formatExtensionErrorsForToast(errors?: ExtensionFieldErrors, fallbackMessage?: string): FormattedErrorToast;
