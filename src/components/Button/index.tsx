import { ButtonHTMLAttributes, ReactNode } from "react"
import * as S from './styles'

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({children, ...props}: ButtonPropsType) {
  return (
    <S.ButtonContainer {...props}>{children}</S.ButtonContainer>
  )
}
