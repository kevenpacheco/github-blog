import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { ProfileCard } from ".";
import { ProfileType } from "../../@types/Profile";
import { api } from "../../service/api";
import { DefaultTheme } from "../../styles/themes/defaultTheme";

const fakeData: ProfileType = {
  avatar_url: "https://github.com/kevenpacheco.png",
  bio: "Minha bio",
  company: null,
  followers: 9,
  html_url: "https://github.com/kevenpacheco",
  login: "kevenpacheco",
  name: "Keven Pacheco",
};

vi.mock("../../service/api");

describe("<ProfileCard />", () => {
  it("should render ProfileCard with data", async () => {
    vi.mocked(api.get).mockResolvedValue({
      data: fakeData
    });

    render(
      <ThemeProvider theme={DefaultTheme}>
        <ProfileCard />
      </ThemeProvider>
    );

    expect(screen.getByTestId("Profile-card-loading-component")).toBeInTheDocument();

    await waitFor(() => {
      const sut = screen.getByText(/Keven Pacheco/i);
      expect(sut).toBeInTheDocument()
    })
  });
});
