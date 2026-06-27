import { ReactNode } from "react";
import { HateoasLink } from "@khinemyaezin/seller-api";
declare function EntryLinkProvider({ link, children }: {
    link: HateoasLink;
    children: ReactNode;
}): import("react").JSX.Element;
declare function useEntryLink(): HateoasLink;
export { EntryLinkProvider, useEntryLink };
