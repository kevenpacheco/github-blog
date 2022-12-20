import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { DefaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <div className="App">
      </div>
    </ThemeProvider>
  )
}
