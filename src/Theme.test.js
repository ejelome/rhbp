import { shallow } from "enzyme";

import Theme from "./Theme";

describe("<Theme />", () =>
  it("renders without crashing", async () => await shallow(<Theme />)));
