import { setTitle } from "./actions";
import { SET_TITLE } from "./actionTypes";

describe("setTitle", () =>
  it("returns argument as payload title", () => {
    const newTitle = "test hello, world";

    const actual = setTitle(newTitle);
    const expected = {
      type: SET_TITLE,
      payload: { title: newTitle },
    };

    expect(actual).toEqual(expected);
  }));
