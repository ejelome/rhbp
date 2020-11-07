import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({ palette: { type: "light" } });

import HelloWorld from "./components/hello-world/HelloWorld";
import helloWorldState from "./components/hello-world/initialState";
import helloWorldReducer from "./components/hello-world/reducer";
import { Context, Provider } from "./ContextProvider";
import Router from "./Router";
import { combineReducers, init } from "./utils";
const initialStates = { helloWorld: helloWorldState };
const reducers = combineReducers({ helloWorld: helloWorldReducer });

const App = () => (
  <Provider
    context={Context}
    reducer={reducers}
    initialState={initialStates}
    init={init}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
