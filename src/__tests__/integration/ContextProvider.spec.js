import { render, screen } from "@testing-library/react";
import { createContext, useContext, useEffect } from "react";

import { Provider } from "../../ContextProvider";
import { init } from "../../utils";

describe("<Provider/>", () =>
  test("provides context to child components", () => {
    const context = createContext({});
    const SET_TITLE = "SET_TITLE";
    const reducer = (state, { type }) =>
      ({
        SET_TITLE: { title: "test hello, world" },
      }[type] || state);
    const initialState = { title: "" };

    const Title = () => {
      const {
        state: { title },
        dispatch,
      } = useContext(context);

      useEffect(() => {
        dispatch({ type: SET_TITLE });
      }, [dispatch]);

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

    expect(screen.getByText(/test hello, world/i)).toBeInTheDocument();
  }));
