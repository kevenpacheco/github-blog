import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import * as S from "./styles";

export function BaseLayout() {
  return (
    <>
      <Header />

      <S.BaseLayoutContainer>
        <Outlet />
      </S.BaseLayoutContainer>
    </>
  );
}
