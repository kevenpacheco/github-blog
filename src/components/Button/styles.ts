import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.base.post};
  border: 1px solid ${({ theme }) => theme.colors.base.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.base.title};
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  &:hover {
    transition: 0.3s;
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.blue};
  }
`;