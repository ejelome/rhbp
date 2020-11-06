import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

import App from "../../App";
import HelloWorld from "../../components/hello-world/HelloWorld";

describe("<Router />", () =>
  test("index page should render <HelloWorld /> component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(HelloWorld)).toHaveLength(1);
  }));
