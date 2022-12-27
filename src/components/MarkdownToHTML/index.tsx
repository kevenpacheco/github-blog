import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as S from "./styles";
import { Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import * as themes from 'react-syntax-highlighter/dist/esm/styles/prism'

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
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match?.[1]}
                style={themes?.['a11yDark']}
                customStyle={{
                  margin: 0,
                  padding: 0,
                  backgroundColor: 'transparent',
                }}
                codeTagProps={
                  {style: { 
                    fontFamily: 'Fira Code',
                  }}
                }
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </S.MarkdownToHTMLContainer>
  );
}

const a = 'adwa'