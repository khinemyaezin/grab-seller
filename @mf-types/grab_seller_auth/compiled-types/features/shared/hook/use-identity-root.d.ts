import { UseQueryResult } from "@tanstack/react-query";
import type { IdentityRoot } from "@/features/auth/types/auth.model";
export default function useIdentityRoot(): UseQueryResult<IdentityRoot, Error>;
