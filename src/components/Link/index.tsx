import { AnchorHTMLAttributes, ReactNode } from "react";
import * as S from './styles'

interface LinkPropsType extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function Link({ children }: LinkPropsType) {
  return <S.LinkContainer href="#">{children}</S.LinkContainer>;
}
