import { UseMutationResult } from "@tanstack/react-query";
import type { HateoasLink } from "@/types";
type ActionType = "activate" | "deactivate" | "delete";
interface ActionState {
    loading: boolean;
    actionType: ActionType | null;
    error: string | null;
}
interface ActionMessages {
    success?: string;
    error?: string;
}
interface EntityActionsConfig {
    activate: UseMutationResult<unknown, Error, HateoasLink>;
    deactivate: UseMutationResult<unknown, Error, HateoasLink>;
    delete: UseMutationResult<unknown, Error, HateoasLink>;
    entityName: string;
    onLifecycleEvent?: (event: {
        type: "activated" | "activateFailed" | "deactivated" | "deactivateFailed" | "deleted" | "deleteFailed";
    }) => void;
}
export declare function useEntityActions(config: EntityActionsConfig): {
    state: ActionState;
    handleActivate: (link: HateoasLink, messages: ActionMessages) => Promise<void>;
    handleDeactivate: (link: HateoasLink, messages: ActionMessages) => Promise<void>;
    handleDelete: (link: HateoasLink, messages: ActionMessages) => Promise<void>;
    isActionLoading: (actionType?: ActionType) => boolean;
};
export {};
