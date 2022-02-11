import { createProvider } from "react-branch-provider";

interface ThemeState {
  primaryColor: string;
  secondaryColor: string;
}

export const themeProvider = createProvider<ThemeState>({
  primaryColor: "purple",
  secondaryColor: "pink",
});
