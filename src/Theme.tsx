import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

export const theme = {
  colors: {
    black100: "#E0E0E0",
    black300: "#A8A8A8",
    black500: "#6F6F6F",
    black600: "#525252",
    greyscale100: "#F3F0FE",
    greyscale500: "#697488",
    greyscale700: "#191919",
    white: "#FFFFFF",
    whiteSoft: "#E5E5E5",
    blue: "#1EA4CE",
    blueActive: "#147594",
    greyPurple: "#F2F0FD",
  },
  fonts: ["sans-serif"],
  fontSizes: {
    small: "13px",
    medium: "14px",
    mediumLarge: "15px",
    large: "20px",
    responsive: "1rem",
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
