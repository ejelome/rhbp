import { shallow } from "enzyme";

import HelloWorld from "./HelloWorld";

jest.mock("react", () => {
  const MockReact = jest.requireActual("react");
  const mockContextValue = { state: { helloWorld: {} } };

  return {
    ...MockReact,
    useContext: () => mockContextValue,
  };
});

jest.mock("@material-ui/core/styles", () => ({
  makeStyles: () => () => ({}),
  useTheme: () => ({ palette: {} }),
}));

describe("<HelloWorld />", () =>
  it("renders without crashing", async () => await shallow(<HelloWorld />)));
