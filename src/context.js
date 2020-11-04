import React, { createContext, useReducer } from "react";

export const Context = createContext({});

export const Provider = ({
  context,
  reducer,
  initialState,
  init,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const values = { state, dispatch };
  const { Provider } = context;

  return <Provider value={values}>{children}</Provider>;
};
