import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../../../styles/themes/defaultTheme";
import { InternalLink } from ".";
import { BrowserRouter } from "react-router-dom";

describe("<Link />", () => {
  it("should render InternalLink component", () => {
    const linkText = "Texto do link";

    render(
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <InternalLink to="#">{linkText}</InternalLink>
        </BrowserRouter>
      </ThemeProvider>
    );

    const sut = screen.getByRole("link", { name: linkText });

    expect(sut).toBeInTheDocument();
  });
});
