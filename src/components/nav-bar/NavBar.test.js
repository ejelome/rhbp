import { shallow } from "enzyme";

import NavBar from "./NavBar";

jest.mock("react", () => {
  const MockReact = jest.requireActual("react");
  const mockContextValue = {
    state: { helloWorld: { routes: [{ name: "" }] } },
  };

  return {
    ...MockReact,
    useContext: () => mockContextValue,
  };
});

describe("<NavBar />", () =>
  it("renders without crashing", async () => await shallow(<NavBar />)));
