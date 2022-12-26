import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input(props: InputPropsType) {
  return (
    <S.InputContainer type="text" placeholder="Buscar conteúdo" {...props} />
  )
}
