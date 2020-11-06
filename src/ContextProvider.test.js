import { createContext } from "react";

import { Context } from "./ContextProvider";

describe("Context", () =>
  test("wrapped an empty object as initial context", () => {
    const actual = Context;
    const expected = createContext({});

    expect(actual).toEqual(expected);
  }));
