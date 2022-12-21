import styled from "styled-components";

export const PublicationHeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.base.profile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  h2 {
    line-height: 130%;
    color: ${({ theme }) => theme.colors.base.title};
    margin-top: 1.25rem;
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: .5rem;

    span {
      display: flex;
      align-items: center;
      gap: .5rem;
      color: ${({ theme }) => theme.colors.base.span};

      svg {
        color: ${({ theme }) => theme.colors.base.label};
        font-size: 1.055rem;
      }
    }
  }
`;

export const PublicationContent = styled.main`
  padding: 2.5rem 2rem;

  pre {
    background: ${({ theme }) => theme.colors.base.post};
    padding: 1rem;
    border-radius: 2px;
    margin-top: 1.5rem;

    code {
      font-family: 'Fira Code'
    }
  }
`;