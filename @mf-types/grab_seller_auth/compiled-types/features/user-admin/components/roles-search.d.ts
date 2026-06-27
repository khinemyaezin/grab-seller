import { Input } from "@khinemyaezin/seller-ui/components/index";
import { ComponentPropsWithoutRef } from "react";
import { HateoasLink } from "@khinemyaezin/seller-api";
export type RolesSearchProps = {
    link: HateoasLink;
    value: string;
    onValueChange: (value: string) => void;
    filterRoles?: string[];
};
export default function RolesSearch({ value, onValueChange: onValueChange, link, filterRoles, ...inputProps }: ComponentPropsWithoutRef<typeof Input> & RolesSearchProps): import("react").JSX.Element;
