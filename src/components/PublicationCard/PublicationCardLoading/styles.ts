import styled from "styled-components";

export const PublicationCardLoadingContainer = styled.div`
  background: ${({ theme }) => theme.colors.base.post};
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base.text};
  border: 2px solid transparent;

  header {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;

    span {
      max-width: 100px;
      margin-left: auto;
    }

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

  .content {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
`;