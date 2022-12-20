import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div className="App">
      </div>
    </ThemeProvider>
  )
}
