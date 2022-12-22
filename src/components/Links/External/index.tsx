import { AnchorHTMLAttributes, ReactNode } from "react";
import * as S from "../styles";

interface ExternalLinkPropsType
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  to: string;
}

export function ExternalLink({ children, ...rest }: ExternalLinkPropsType) {
  return (
    <S.LinkContainer as="a" href={rest.to} rel="noopener noreferrer" {...rest}>
      {children}
    </S.LinkContainer>
  );
}
