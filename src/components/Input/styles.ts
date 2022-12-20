import styled from "styled-components";

export const InputContainer = styled.input`
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.border};
  border-radius: 6px;
  width: 100%;
  color: ${({ theme }) => theme.colors.base.text};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.label};
  }
`;