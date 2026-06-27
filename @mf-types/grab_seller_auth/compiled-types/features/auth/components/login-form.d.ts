import { HateoasLink } from "@khinemyaezin/seller-api";
export type LoginFormProps = {
    link: HateoasLink;
    onLoginSuccess: () => void;
};
export declare function LoginForm({ link, onLoginSuccess }: LoginFormProps): import("react").JSX.Element;
