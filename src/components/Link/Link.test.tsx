import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Link } from ".";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../../styles/themes/defaultTheme";

describe("<Link />", () => {
  it("should render Link component", () => {
    const linkText = "Texto do link";

    render(
      <ThemeProvider theme={DefaultTheme}>
        <Link>{linkText}</Link>
      </ThemeProvider>
    );

    const sut = screen.getByRole("link", { name: linkText });

    expect(sut).toBeInTheDocument();
  });
});
