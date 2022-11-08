import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import GlobalStyled from "../global";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default MyApp;
