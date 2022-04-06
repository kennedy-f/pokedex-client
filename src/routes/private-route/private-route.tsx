import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "contexts/auth";

interface PrivateRouteProps {
  children: React.ReactElement;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { token } = useAuth();

  return token ? children : <Navigate to="/admin/login" />;
}
