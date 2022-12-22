import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "../Links/External";
import * as S from "./styles";

export function ProfileCard() {
  return (
    <S.ProfileCardContainer>
      <img src="https://github.com/kevenpacheco.png" height="148" width="148" />

      <div>
        <header>
          <h2>Cameron Williamson</h2>

          <ExternalLink to="https://github.com/kevenpacheco">
            github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLink>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <footer>
          <S.GithubContainer>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            cameronwll
          </S.GithubContainer>

          <S.CompanyContainer>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </S.CompanyContainer>

          <S.FollowersContainer>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </S.FollowersContainer>
        </footer>
      </div>
    </S.ProfileCardContainer>
  );
}
