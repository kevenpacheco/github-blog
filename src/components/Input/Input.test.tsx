import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from ".";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../../styles/themes/defaultTheme";

describe("<Input />", () => {
  it("should render Input component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Input />
      </ThemeProvider>
    );

    const sut = screen.getByPlaceholderText("Buscar conteúdo");

    expect(sut).toBeInTheDocument();
  });
});
