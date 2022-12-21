import styled from "styled-components";

export const PublicationCardContainer = styled.div`
  background: ${({theme}) => theme.colors.base.post};
  padding: 2rem;
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    h3 {
      color: ${({theme}) => theme.colors.base.title};
      font-size: 1.25rem;
    }

    span {
      color: ${({theme}) => theme.colors.base.span};
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