import helloWorldState from "./components/hello-world/initialState";
import helloWorldReducer from "./components/hello-world/reducer";
import { Context, Provider } from "./ContextProvider";
import Router from "./Router";
import Theme from "./Theme";
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
    <Theme>
      <Router />
    </Theme>
  </Provider>
);

export default App;
