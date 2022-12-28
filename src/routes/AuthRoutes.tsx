import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser"

export function AuthRoutes() {
  const user = useUser();

  return !user?.login ? <Outlet /> : <Navigate to="/" replace />;
}
