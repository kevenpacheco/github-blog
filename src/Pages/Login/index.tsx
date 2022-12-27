import { Button } from "../../components/Button";
import * as S from "./styles";
import logoSVG from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }

  return (
    <S.LoginContainer>
      <S.LoginContent>
        <img src={logoSVG} alt="logotipo da aplicação" />

        <Button type="button" onClick={handleLogin} style={{ width: "100%" }}>
          Login
        </Button>
      </S.LoginContent>
    </S.LoginContainer>
  );
}
