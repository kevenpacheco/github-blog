import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { Button } from ".";
import { DefaultTheme } from "../../styles/themes/defaultTheme";

describe("<Button />", () => {
  it("should render Button", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Button>Botão</Button>
      </ThemeProvider>
    );

    const sut = screen.getByRole("button", { name: /Botão/i });

    expect(sut).toBeInTheDocument();
  });
});
