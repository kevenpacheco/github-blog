import { ButtonLink } from "../../components/Button/ButtonLink";
import * as S from "./styles";
import logoSVG from "../../assets/logo.svg";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

export function Login() {
  const auth = useAuth();

  const rootURLGithubPermission = "https://github.com/login/oauth/authorize";
  const searchParamsGithubPermission = new URLSearchParams({
    scope: "user",
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
  });

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, "", newUrl[0]);

      const accessTokenRequestParams = new URLSearchParams({
        code: newUrl[1],
        client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
        client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
      });
      axios
        .post(
          `https://github.com/login/oauth/access_token?${accessTokenRequestParams}`,
          null,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((response) => auth.getAccessToken(response.data.access_token));
    }
  }, [auth.getAccessToken]);

  return (
    <S.LoginContainer>
      <S.LoginContent>
        <img src={logoSVG} alt="logotipo da aplicação" />

        <ButtonLink
          href={`${rootURLGithubPermission}?${searchParamsGithubPermission}`}
          style={{ width: "100%" }}
        >
          Login
        </ButtonLink>
      </S.LoginContent>
    </S.LoginContainer>
  );
}
