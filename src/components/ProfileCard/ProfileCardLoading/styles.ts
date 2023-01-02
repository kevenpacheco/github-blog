import styled from "styled-components";

export const ProfileCardLoadingContainer = styled.section`
  background: ${({ theme }) => theme.colors.base.profile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  div.img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  div.content {
    flex: 1;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    h2 {
      line-height: 130%;
    }

    a {
      max-width: 100px;
    }
  }

  p {
    margin-top: .5rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;

    span {
      max-width: 100px;
    }
  }
`;