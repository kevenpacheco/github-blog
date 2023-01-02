import styled from "styled-components";

export const PublicationLoadingHeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.base.profile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    span {
      max-width: 100px;
    }
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

    span, time {
      max-width: 100px;
    }
  }
`;

export const PublicationLoadingContent = styled.main`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;