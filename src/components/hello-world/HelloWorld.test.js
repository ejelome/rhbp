import { shallow } from "enzyme";
import React from "react";

import HelloWorld from "./HelloWorld";

jest.mock("react", () => {
  const MockReact = jest.requireActual("react");
  const mockContextValue = { state: { helloWorld: { title: "" } } };

  return {
    ...MockReact,
    useContext: () => mockContextValue,
  };
});

describe("<HelloWorld />", () =>
  it("renders without crashing", async () => await shallow(<HelloWorld />)));
