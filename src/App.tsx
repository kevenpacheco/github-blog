import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/global";
import { DefaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}
