import styled from "styled-components";

export const ProfileCardContainer = styled.section`
  background: ${({ theme }) => theme.colors.base.profile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  padding-left: 2.5rem;
  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
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
  }

  p {
    margin-top: .5rem;
    flex: 1;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const SocialContainer = styled.span`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: ${({ theme }) => theme.colors.base.subtitle};

  svg {
    color: ${({ theme }) => theme.colors.base.label};
  }
`

export const GithubContainer = styled(SocialContainer)`
  svg {
    font-size: 1.055rem;
  }
`;

export const CompanyContainer = styled(SocialContainer)`
  svg {
    font-size: 1.055rem;
  }
`;

export const FollowersContainer = styled(SocialContainer)`
  svg {
    font-size: .8438rem;
  }
`;