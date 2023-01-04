import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { MarkdownToHTML } from ".";
import { DefaultTheme } from "../../styles/themes/defaultTheme";

describe("<MarkdownToHTML />", () => {
  it("should turn markdown into HTML", () => {
    const MDText = "# Heading 1\r\n\r\n## Heading 2";

    render(
      <ThemeProvider theme={DefaultTheme}>
        <MarkdownToHTML MDText={MDText} />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', {name: /Heading 1/i, level: 1})).toBeInTheDocument()
    expect(screen.getByRole('heading', {name: /Heading 2/i, level: 2})).toBeInTheDocument()
  });
});
