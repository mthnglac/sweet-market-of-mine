import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const theme = {
  colors: {
    greyscale700: "#191919",
    black300: "#A8A8A8",
    black600: "#525252",
    greyscale500: "#697488",
    white: "#FFFFFF",
    whiteSoft: "#E5E5E5",
    blue: "#1EA4CE",
    blueActive: "#147594",
    grey: "#6F6F6F",
  },
  fonts: ["sans-serif"],
  fontSizes: {
    small: "13px",
    medium: "14px",
    mediumLarge: "15px",
    large: "20px",
  },
  fontWeights: {
    regular: "400",
    semiBold: "600",
    bold: "700",
  },
};

const Theme = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;