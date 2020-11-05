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
  const { Provider } = context;
  const props = {
    value: {
      state,
      dispatch,
    },
  };

  return <Provider {...props}>{children}</Provider>;
};
