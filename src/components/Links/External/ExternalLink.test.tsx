import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExternalLink } from ".";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../../../styles/themes/defaultTheme";
import { BrowserRouter } from "react-router-dom";

describe("<ExternalLink />", () => {
  it("should render ExternalLink component", () => {
    const linkText = "Texto do link";

    render(
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <ExternalLink to="/">{linkText}</ExternalLink>
        </BrowserRouter>
      </ThemeProvider>
    );

    const sut = screen.getByRole("link", { name: linkText });

    expect(sut).toBeInTheDocument();
  });
});
