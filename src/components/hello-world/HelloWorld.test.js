import { shallow } from "enzyme";
import React from "react";

import HelloWorld from "./HelloWorld";

jest.mock("react", () => {
  const MockReact = jest.requireActual("react");
  const mockContextValue = {
    helloWorld: {
      title: "",
    },
  };

  return {
    ...MockReact,
    useContext: () => ({ state: mockContextValue }),
  };
});

describe("<HelloWorld />", () =>
  it("renders without crashing", () => {
    shallow(<HelloWorld />);
  }));
