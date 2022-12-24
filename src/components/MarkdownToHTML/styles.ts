import styled from "styled-components";

export const MarkdownToHTMLContainer = styled.div`
  ul, p, h2, h3 {
    margin-bottom: 1rem;
  }

  h2, h3 {
    margin-top: 1.5rem;
  }

  ul {
    padding-left: 1.75rem;
  }

  h2 {
    border-bottom: 1px solid #21262d;
    padding-bottom: .3em;
  }

  a {
    color: #58a6ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:has(img) {
      display: flex;
    }
  }

  img {
    max-width: 100%;
    background-color: #0d1117;
  }

  blockquote {
    padding: 0 1em;
    color: #8b949e;
    border-left: .25em solid #30363d;

    & > :first-child {
      margin-top: 0;
    }

    & > :last-child {
      margin-bottom: 0;
    }
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;