import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { GlobalStyles } from "./styles/global";
import { DefaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <Header />
      
      <Home />
    </ThemeProvider>
  );
}
