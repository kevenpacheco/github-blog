import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "../Links/External";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { ProfileType } from "../../@types/Profile";
import { ProfileCardLoading } from "./ProfileCardLoading";

export function ProfileCard() {
  const [user, setUser] = useState<ProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`/users/${import.meta.env.VITE_GITHUB_USER}`)
      .then((response) => {
        setUser(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <ProfileCardLoading />
  }

  return (
    <S.ProfileCardContainer>
      <img src={user?.avatar_url} height="148" width="148" />

      <div className="content">
        <header>
          <h2>{user?.name}</h2>

          <ExternalLink to={user?.html_url || ""} target="_blank">
            github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLink>
        </header>

        <p>{user?.bio}</p>

        <footer>
          <S.GithubContainer>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            {user?.login}
          </S.GithubContainer>

          {!!user?.company && (
            <S.CompanyContainer>
              <FontAwesomeIcon icon={faBuilding} />
              {user?.company}
            </S.CompanyContainer>
          )}

          <S.FollowersContainer>
            <FontAwesomeIcon icon={faUserGroup} />
            {`${user?.followers} seguidores`}
          </S.FollowersContainer>
        </footer>
      </div>
    </S.ProfileCardContainer>
  );
}
