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
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;

    h3 {
      color: ${({ theme }) => theme.colors.base.title};
      font-size: 1.25rem;
      flex: 1;
    }

    time {
      color: ${({ theme }) => theme.colors.base.span};
      font-size: 12px;
      white-space: nowrap;
      margin-left: auto;
      line-height: normal;
    }
  }
`;

export const PublicationCardContent = styled.div`
  margin-top: 1.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  pointer-events: none;
`;