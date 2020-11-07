import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { Container, CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({ palette: { type: "light" } });
theme = responsiveFontSizes(theme);

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container disableGutters={true}>
      <CssBaseline />
      {children}
    </Container>
  </ThemeProvider>
);

export default Theme;
