import { shallow } from "enzyme";

import Router from "./Router";

jest.mock("react", () => {
  const MockReact = jest.requireActual("react");
  const mockContextValue = { state: { helloWorld: { routes: {} } } };

  return {
    ...MockReact,
    useContext: () => mockContextValue,
  };
});

describe("<Router />", () =>
  it("renders without crashing", async () => await shallow(<Router />)));
