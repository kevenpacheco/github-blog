import logoSVG from '../../assets/logo.svg';
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logoSVG} />
    </S.HeaderContainer>
  )
}
