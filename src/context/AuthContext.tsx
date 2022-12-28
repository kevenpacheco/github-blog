import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ProfileType } from "../@types/Profile";
import { api } from "../service/api";

interface AuthContextType {
  user: ProfileType | null;
  getAccessToken: (newAccessToken: string) => void;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderPropsType {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderPropsType) {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [accessToken, setAccessToken] = useState("");

  const getAccessToken = useCallback((newAccessToken: string) => {
    setAccessToken(newAccessToken);
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    api
      .get("/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => setUser(response.data));
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ user, getAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}
