import { AnchorHTMLAttributes, ReactNode } from "react";
import * as S from '../styles'

interface InternalLinkPropsType extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  to: string;
}

export function InternalLink({ children, ...rest }: InternalLinkPropsType) {
  return <S.LinkContainer href={rest.to} {...rest}>{children}</S.LinkContainer>;
}
