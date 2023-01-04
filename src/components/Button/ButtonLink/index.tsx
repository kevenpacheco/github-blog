import { AnchorHTMLAttributes, ReactNode } from "react"
import * as S from '../styles'

interface ButtonPropsType extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function ButtonLink({children, ...props}: ButtonPropsType) {
  return (
    <S.ButtonContainer as="a" {...props}>{children}</S.ButtonContainer>
  )
}
