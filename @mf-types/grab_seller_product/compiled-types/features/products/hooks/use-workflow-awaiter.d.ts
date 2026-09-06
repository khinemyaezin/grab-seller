import type { EventPayloads } from "@khinemyaezin/seller-contracts";
export type WorkflowUpdatedV1 = EventPayloads["workflow:updated:v1"];
export declare class WorkflowTimeoutError extends Error {
    constructor(message?: string);
}
export type UseWorkflowAwaiterOptions = {
    workflowName: string;
    timeoutMs?: number;
};
export declare function useWorkflowAwaiter({ workflowName, timeoutMs, }: UseWorkflowAwaiterOptions): {
    awaitWorkflow: (workflowId: string) => Promise<WorkflowUpdatedV1>;
};
