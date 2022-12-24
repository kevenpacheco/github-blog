import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as S from "./styles";

interface MarkdownToHTMLPropsType {
  MDText: string;
}

export function MarkdownToHTML({ MDText }: MarkdownToHTMLPropsType) {
  return (
    <S.MarkdownToHTMLContainer>
      <ReactMarkdown
        children={MDText}
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer nofollow" />
          ),
          img: ({ node, ...props }) => (
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={props.src}
            >
              <img {...props} />
            </a>
          ),
        }}
      />
    </S.MarkdownToHTMLContainer>
  );
}
