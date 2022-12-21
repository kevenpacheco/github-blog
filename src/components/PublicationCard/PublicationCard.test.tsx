import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PublicationCard } from ".";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../../styles/themes/defaultTheme";

describe("<PublicationCard />", () => {
  it("should render PublicationCard component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <PublicationCard/> 
      </ThemeProvider>
    );

    const sut = screen.getByText(/JavaScript data types and data structures/i);

    expect(sut).toBeInTheDocument();
  });
});
