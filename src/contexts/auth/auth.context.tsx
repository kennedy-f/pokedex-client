import React, { createContext, useContext } from "react";

interface AuthContextProps {
  token: string | null;
  makeLogin: (email: string, password: string) => void;
  makeLogout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  makeLogin: () => null,
  makeLogout: () => null,
});

export const useAuth = () => useContext(AuthContext);
