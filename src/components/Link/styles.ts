import styled from "styled-components";

export const LinkContainer = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: .75rem;
  width: max-content;

  &:hover {
    transition: 0.3s;
    border-bottom-color: ${({ theme }) => theme.colors.blue}
  }
`;