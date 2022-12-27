import { ExternalLink } from "../../components/Links/External";
import { InternalLink } from "../../components/Links/Internal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PublicationType } from "../../@types/Publication";
import { api } from "../../service/api";
import { format, formatDistanceToNow } from "date-fns";
import ptBRLocale from "date-fns/locale/pt-BR";
import { MarkdownToHTML } from "../../components/MarkdownToHTML";

export function Publication() {
  const { publicationId } = useParams();
  const [publicationData, setPublicationData] =
    useState<PublicationType | null>(null);

  useEffect(() => {
    api
      .get(`/repos/kevenpacheco/github-blog/issues/${publicationId}`)
      .then((response) => {
        setPublicationData(response.data);
      });
  }, []);

  if (!publicationData) return <div>Carregando...</div>;

  const creationDateRelativeToNow = formatDistanceToNow(
    new Date(publicationData.created_at),
    {
      locale: ptBRLocale,
    }
  );

  const publishedDateFormatted = format(
    new Date(publicationData.created_at),
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBRLocale }
  );

  return (
    <>
      <S.PublicationHeaderContainer>
        <div>
          <InternalLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> voltar
          </InternalLink>

          <ExternalLink
            to={publicationData.user.html_url || ""}
            target="_blank"
          >
            ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLink>
        </div>

        <h2>{publicationData.title}</h2>

        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {publicationData.user.login}
          </span>
          <time
            title={publishedDateFormatted}
            dateTime={publicationData.created_at}
          >
            <FontAwesomeIcon icon={faCalendarDay} /> Há {creationDateRelativeToNow}
          </time>
          <span>
            <FontAwesomeIcon icon={faComment} /> {publicationData.comments}{" "}
            comentários
          </span>
        </div>
      </S.PublicationHeaderContainer>

      <S.PublicationContent>
        <MarkdownToHTML MDText={publicationData.body} />
      </S.PublicationContent>
    </>
  );
}
