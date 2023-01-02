import { FormEvent, useEffect, useState } from "react";
import { PublicationCardType } from "../../@types/PublicationCard";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ProfileCard } from "../../components/ProfileCard";
import { PublicationCard } from "../../components/PublicationCard";
import { PublicationCardLoading } from "../../components/PublicationCard/PublicationCardLoading";
import { api } from "../../service/api";
import * as S from "./styles";

export function Home() {
  const [publications, setPublications] = useState<PublicationCardType[]>([]);
  const [publicationCount, setPublicationCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchText(event.currentTarget.search.value);
  }

  useEffect(() => {
    setIsLoading(true);
    api
      .get(
        `/search/issues?q=${searchText} repo:${
          import.meta.env.VITE_GITHUB_USER
        }/github-blog`
      )
      .then((response) => {
        setPublications(response.data.items);
        setPublicationCount(response.data.total_count);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText]);

  return (
    <>
      <ProfileCard />

      <S.HomeContainer>
        <S.SearchContainer onSubmit={handleSearch}>
          <header>
            <span>Publicações</span>

            <span
              className={isLoading ? "loading" : undefined}
              style={{ width: "fit-content" }}
            >
              {publicationCount} publicações
            </span>
          </header>

          <div>
            <Input id="search" name="search" />
            <Button type="submit">Buscar</Button>
          </div>
        </S.SearchContainer>

        <S.PublicationsContainer>
          {isLoading ? (
            <>
              <PublicationCardLoading />
              <PublicationCardLoading />
              <PublicationCardLoading />
              <PublicationCardLoading />
            </>
          ) : (
            publications.map((publication) => (
              <PublicationCard key={publication.id} data={publication} />
            ))
          )}
        </S.PublicationsContainer>
      </S.HomeContainer>
    </>
  );
}
