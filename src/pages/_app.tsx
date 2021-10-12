import CssBaseline from "@mui/material/CssBaseline";
import * as palette from "@mui/material/colors";
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
      primary: { main: palette.deepPurple[700] },
      secondary: { main: palette.orange[700] },
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
