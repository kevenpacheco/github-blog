import { Link } from "react-router-dom";
import styled from "styled-components";

export const PublicationCardContainer = styled(Link)`
  background: ${({ theme }) => theme.colors.base.post};
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base.text};
  border: 2px solid transparent;

  &:hover {
    transition: 0.3s;
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.blue};
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    h3 {
      color: ${({ theme }) => theme.colors.base.title};
      font-size: 1.25rem;
    }

    span {
      color: ${({ theme }) => theme.colors.base.span};
      font-size: .875rem;
      white-space: nowrap;
    }
  }

  p {
    margin-top: 1.25rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`;