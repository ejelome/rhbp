import { SET_TITLE } from "./actionTypes";
import reducer from "./reducer";

describe("reducer", () => {
  it("merges payload with corresponding action type to state", () => {
    const state = { title: "" };
    const type = SET_TITLE;
    const payload = { title: "test hello world" };
    const action = { type, payload };

    const actual = reducer(state, action);
    const expected = payload;

    expect(actual).toEqual(expected);
  });

  it("returns default state if no action type match", () => {
    const state = { title: "" };
    const type = "UNKNOWN_ACTION_TYPE";
    const payload = { title: "test hello world" };
    const action = { type, payload };

    const actual = reducer(state, action);
    const expected = state;

    expect(actual).toEqual(expected);
  });
});
