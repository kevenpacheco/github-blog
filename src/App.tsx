import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/global";
import { DefaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
      <AppRoutes />
    </ThemeProvider>
  );
}
