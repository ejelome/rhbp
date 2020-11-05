import { setTitle } from "./actions";
import { SET_TITLE } from "./actionTypes";

describe("setTitle", () =>
  it("returns argument as payload title", () => {
    const newTitle = "test hello, world";
    const actionType = SET_TITLE;
    const payload = { title: newTitle };

    const actual = setTitle(newTitle);
    const expected = {
      type: actionType,
      payload,
    };

    expect(actual).toEqual(expected);
  }));
