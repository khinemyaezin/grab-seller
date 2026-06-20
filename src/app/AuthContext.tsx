import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { api } from "@grab/seller-api";
import type { LoginCredentials, User } from "@grab/seller-contracts";

type AuthContextValue = {
  user: User | null;
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredUser(): User | null {
  const value = localStorage.getItem("seller-user");
  if (!value) return null;
  try {
    return JSON.parse(value) as User;
  } catch {
    localStorage.removeItem("seller-user");
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(readStoredUser);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("seller-access-token"));

  const value = useMemo<AuthContextValue>(() => ({
    user,
    token,
    async login(credentials) {
      const response = await api.post<{ user: User; token: string }>("/auth/login", credentials);
      localStorage.setItem("seller-access-token", response.token);
      localStorage.setItem("seller-user", JSON.stringify(response.user));
      setToken(response.token);
      setUser(response.user);
    },
    logout() {
      localStorage.removeItem("seller-access-token");
      localStorage.removeItem("seller-user");
      setToken(null);
      setUser(null);
    },
  }), [token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used within AuthProvider");
  return value;
}
