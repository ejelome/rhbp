import { mount } from "enzyme";

import Theme from "../../Theme";

describe("<Theme />", () =>
  test("index page should render child component", () => {
    const Component = () => <h1>test hello, world</h1>;
    const wrapper = mount(
      <Theme>
        <Component />
      </Theme>
    );

    expect(wrapper.find(Component)).toHaveLength(1);
  }));
