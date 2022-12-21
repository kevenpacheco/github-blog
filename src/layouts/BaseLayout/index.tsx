import { ReactNode } from "react";
import * as S from "./styles";

interface BaseLayoutPropsType {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutPropsType) {
  return <S.BaseLayoutContainer>{children}</S.BaseLayoutContainer>;
}
