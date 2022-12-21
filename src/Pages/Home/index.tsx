import { Input } from "../../components/Input";
import { ProfileCard } from "../../components/ProfileCard";
import { PublicationCard } from "../../components/PublicationCard";
import { BaseLayout } from "../../layouts/BaseLayout";
import * as S from "./styles";

export function Home() {
  return (
    <BaseLayout>
      <ProfileCard />

      <S.HomeContainer>
        <S.SearchContainer>
          <header>
            <span>Publicações</span>

            <span>6 publicações</span>
          </header>

          <Input />
        </S.SearchContainer>

        <S.PublicationsContainer>
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
        </S.PublicationsContainer>
      </S.HomeContainer>
    </BaseLayout>
  );
}
