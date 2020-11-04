import React, { createContext, useReducer } from "react";

import helloWorldState from "./components/hello-world/initialState";
import helloWorldReducer from "./components/hello-world/reducer";
import { combineReducers, init } from "./utils";

const initialStates = { helloWorld: helloWorldState };

const Context = createContext(initialStates);

const Provider = ({ children }) => {
  const reducers = combineReducers({ helloWorld: helloWorldReducer });
  const [state, dispatch] = useReducer(reducers, initialStates, init);
  const values = { state, dispatch };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, Provider };
