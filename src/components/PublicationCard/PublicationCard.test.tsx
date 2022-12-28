import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PublicationCard } from ".";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../../styles/themes/defaultTheme";
import { BrowserRouter } from "react-router-dom";

describe("<PublicationCard />", () => {
  it("should render PublicationCard component", () => {
    const fakePublicationCardData = {
      id: 1,
      title: "Titulo da publicação fake",
      body: "Conteúdo da publicação fake",
      number: 1,
      created_at: "2022-12-28T22:37:29.585Z",
    };

    render(
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <PublicationCard data={fakePublicationCardData} />
        </BrowserRouter>
      </ThemeProvider>
    );

    const sut = screen.getByText(/Titulo da publicação fake/i);

    expect(sut).toBeInTheDocument();
  });
});
