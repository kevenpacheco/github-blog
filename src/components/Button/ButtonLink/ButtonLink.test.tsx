import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { ButtonLink } from ".";
import { DefaultTheme } from "../../../styles/themes/defaultTheme";

describe("<Button />", () => {
  it("should render Button", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <ButtonLink>Botão link</ButtonLink>
      </ThemeProvider>
    );

    const sut = screen.getByText(/Botão link/i);

    expect(sut.closest("a")).toBeInTheDocument();
  });
});
