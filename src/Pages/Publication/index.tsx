import { ExternalLink } from "../../components/Links/External";
import { InternalLink } from "../../components/Links/Internal";
import { BaseLayout } from "../../layouts/BaseLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import * as S from "./styles";

export function Publication() {
  return (
    <BaseLayout>
      <S.PublicationHeaderContainer>
        <div>
          <InternalLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> voltar
          </InternalLink>

          <ExternalLink to="https://github.com/kevenpacheco">
            ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ExternalLink>
        </div>

        <h2>JavaScript data types and data structures</h2>

        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} /> cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} /> 5 comentários
          </span>
        </div>
      </S.PublicationHeaderContainer>

      <S.PublicationContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>

        <pre>
          <code>
{`let foo = 42;  // foo is now a number
foo = ‘bar’;   // foo is now a string
foo = true;    // foo is now a boolean`}
          </code>
        </pre>
      </S.PublicationContent>
    </BaseLayout>
  );
}
