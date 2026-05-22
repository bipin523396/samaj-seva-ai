import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { toast } from "@/components/ui/sonner";
import { fetchSession, loginUser, logoutUser, registerUser, type AuthUser } from "@/lib/auth-client";

type LoginCredentials = {
  email: string;
  password: string;
};

type RegisterPayload = {
  email: string;
  name: string;
  password: string;
};

type AuthContextValue = {
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  user: AuthUser | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshSession = useCallback(async () => {
    try {
      const response = await fetchSession();
      setUser(response.user);
    } catch (error) {
      console.error("Failed to restore session", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshSession();
  }, [refreshSession]);

  const login = useCallback(async (credentials: LoginCredentials) => {
    const response = await loginUser(credentials);

    if (!response.user) {
      throw new Error("Login failed.");
    }

    setUser(response.user);
    toast.success(`Welcome back, ${response.user.name}.`);
  }, []);

  const register = useCallback(async (payload: RegisterPayload) => {
    const response = await registerUser(payload);

    if (!response.user) {
      throw new Error("Registration failed.");
    }

    setUser(response.user);
    toast.success(`Account created for ${response.user.name}.`);
  }, []);

  const logout = useCallback(async () => {
    await logoutUser();
    setUser(null);
    toast.success("You have been logged out.");
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoading,
      login,
      logout,
      refreshSession,
      register,
      user,
    }),
    [isLoading, login, logout, refreshSession, register, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
