import { HateoasLink } from "@khinemyaezin/seller-api";
export type RegisterFormProps = {
    link: HateoasLink;
    onRegisterSuccess: () => void;
};
export declare function RegisterForm({ link, onRegisterSuccess }: RegisterFormProps): import("react").JSX.Element;
