import React from "react";

import HelloWorld from "./components/hello-world/HelloWorld";
import helloWorldState from "./components/hello-world/initialState";
import helloWorldReducer from "./components/hello-world/reducer";
import { Context, Provider } from "./context";
import { combineReducers, init } from "./utils";

const initialStates = {
  helloWorld: helloWorldState,
};

const reducers = combineReducers({
  helloWorld: helloWorldReducer,
});

const App = () => (
  <Provider
    context={Context}
    reducer={reducers}
    initialState={initialStates}
    init={init}
  >
    <HelloWorld />
  </Provider>
);

export default App;
