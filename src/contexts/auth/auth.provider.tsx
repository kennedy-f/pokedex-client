import React from "react";
import { AuthContext } from "contexts/auth/auth.context";
import { Api } from "service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function AuthProvider({ children }: { children: React.ReactElement }) {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );

  const navigate = useNavigate();

  const makeLogin = async (email: string, password: string) => {
    try {
      const { data } = await Api.post("/auth/login", {
        email,
        password,
      });
      setToken(data.access_token);
      localStorage.setItem("token", data.access_token);
      navigate("/admin");
    } catch (err) {
      toast.error("Falha ao fazer login, verifique as informações");
    }
  };

  const makeLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, makeLogin, makeLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
