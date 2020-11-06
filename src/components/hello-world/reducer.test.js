import { SET_TITLE } from "./actionTypes";
import reducer from "./reducer";

describe("reducer", () => {
  it("merges payload with corresponding action type to state", () => {
    const initialState = { title: "" };
    const actionType = SET_TITLE;
    const payload = { title: "test hello world" };
    const action = { type: actionType, payload };

    const actual = reducer(initialState, action);
    const expected = payload;

    expect(actual).toEqual(expected);
  });

  it("returns default state if no action type match", () => {
    const initialState = { title: "" };
    const actionType = "UNKNOWN_ACTION_TYPE";
    const payload = { title: "test hello world" };
    const action = { type: actionType, payload };

    const actual = reducer(initialState, action);
    const expected = initialState;

    expect(actual).toEqual(expected);
  });
});
