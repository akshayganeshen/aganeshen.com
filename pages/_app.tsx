import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "sans-serif",
      h1: { fontSize: "6rem", fontWeight: 600 },
      h2: { fontSize: "2rem", fontWeight: 400 },
      h3: { fontSize: "1.2rem", fontWeight: 300 },
      button: { textTransform: "unset" },
    },
  })
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
