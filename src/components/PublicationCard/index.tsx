import * as S from "./styles";
import { format, formatDistanceToNow } from 'date-fns'
import ptBRLocale from 'date-fns/locale/pt-BR'
import { MarkdownToHTML } from "../MarkdownToHTML";
import { PublicationCardType } from "../../@types/PublicationCard";

interface PublicationCardPropType {
  data: PublicationCardType
}

export function PublicationCard({ data }: PublicationCardPropType) {
  const { title, created_at, body, number } = data;

  const creationDateRelativeToNow = formatDistanceToNow(new Date(created_at), {
    locale: ptBRLocale,
  })

  const publishedDateFormatted = format(
    new Date(created_at),
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBRLocale }
  );

  return (
    <S.PublicationCardContainer to={`/publicacao/${number}`}>
      <header>
        <time
          title={publishedDateFormatted}
          dateTime={created_at}
        >
          Há {creationDateRelativeToNow}
        </time>

        <h3>{title}</h3>
      </header>

      <S.PublicationCardContent>
        <MarkdownToHTML MDText={body} />
      </S.PublicationCardContent>
    </S.PublicationCardContainer>
  );
}
