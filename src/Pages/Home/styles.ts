import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 4.5rem;
`;

export const SearchContainer = styled.form`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: .75rem;

    span:first-child {
      color: ${({ theme }) => theme.colors.base.subtitle};
      font-size: 1.125rem;
    }

    span:last-child {
      color: ${({ theme }) => theme.colors.base.span};
      font-size: .875rem;
    }
  }
`;

export const PublicationsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
`;