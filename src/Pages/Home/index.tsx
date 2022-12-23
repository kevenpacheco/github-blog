import { useEffect, useState } from "react";
import { PublicationType } from "../../@types/Publication";
import { Input } from "../../components/Input";
import { ProfileCard } from "../../components/ProfileCard";
import { PublicationCard } from "../../components/PublicationCard";
import { BaseLayout } from "../../layouts/BaseLayout";
import { api } from "../../service/api";
import * as S from "./styles";

export function Home() {
  const [publications, setPublications] = useState<PublicationType[]>([]);
  const [publicationCount, setPublicationCount] = useState(0);

  useEffect(() => {
    const repo = "kevenpacheco/github-blog";

    api.get(`/search/issues?q=repo:${repo}`).then((response) => {
      setPublications(response.data.items);
      setPublicationCount(response.data.total_count);
    });
  }, []);

  return (
    <BaseLayout>
      <ProfileCard />

      <S.HomeContainer>
        <S.SearchContainer>
          <header>
            <span>Publicações</span>

            <span>{publicationCount} publicações</span>
          </header>

          <Input />
        </S.SearchContainer>

        <S.PublicationsContainer>
          {publications.map((publication) => (
            <PublicationCard key={publication.id} data={publication} />
          ))}
        </S.PublicationsContainer>
      </S.HomeContainer>
    </BaseLayout>
  );
}
