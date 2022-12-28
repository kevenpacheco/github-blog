import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const { getAccessToken } = useContext(AuthContext);

  return { getAccessToken };
}
