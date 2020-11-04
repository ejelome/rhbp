import { render, screen } from "@testing-library/react";
import React, { createContext, useContext, useEffect } from "react";

import { Provider } from "../../context";
import { init } from "../../utils";

describe("Provider", () =>
  test("provides context to child components", () => {
    const context = createContext({});
    const GET_TITLE = "GET_TITLE";
    const reducer = (state, { type }) => {
      switch (type) {
        case GET_TITLE:
          return { title: "hello, world" };
      }
    };
    const initialState = { title: "" };

    const Title = () => {
      const {
        state: { title },
        dispatch,
      } = useContext(context);

      useEffect(() => {
        dispatch({ type: GET_TITLE });
      }, []);

      return <h1>{title}</h1>;
    };

    render(
      <Provider
        context={context}
        reducer={reducer}
        initialState={initialState}
        init={init}
      >
        <Title />
      </Provider>
    );

    expect(screen.getByText(/hello, world/i)).toBeInTheDocument();
  }));
