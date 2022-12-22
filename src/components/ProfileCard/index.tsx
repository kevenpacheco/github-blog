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

interface ProfileType {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function ProfileCard() {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    api.get("users/kevenpacheco").then((response) => setProfile(response.data));
  }, []);

  return (
    <S.ProfileCardContainer>
      <img src={profile?.avatar_url} height="148" width="148" />

      <div>
        <header>
          <h2>{profile?.name}</h2>

          <ExternalLink to={profile?.html_url || ""} target="_blank">
            github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLink>
        </header>

        <p>{profile?.bio}</p>

        <footer>
          <S.GithubContainer>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            {profile?.login}
          </S.GithubContainer>

          {!!profile?.company && (
            <S.CompanyContainer>
              <FontAwesomeIcon icon={faBuilding} />
              {profile?.company}
            </S.CompanyContainer>
          )}

          <S.FollowersContainer>
            <FontAwesomeIcon icon={faUserGroup} />
            {`${profile?.followers} seguidores`}
          </S.FollowersContainer>
        </footer>
      </div>
    </S.ProfileCardContainer>
  );
}
