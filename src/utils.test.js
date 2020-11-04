import { combineReducers, init } from "./utils";

describe("init", () =>
  test("wraps argument in a function", () => {
    const object = { title: "hello, world" };

    const actual = init(object);
    const expected = (() => object)();

    expect(actual).toEqual(expected);
  }));

describe("combineReducers", () =>
  test("combines multiple reducers into a single reducer", () => {
    const ACTION_TYPE_A = "ACTION_TYPE_A";
    const ACTION_TYPE_B = "ACTION_TYPE_B";

    const reducerA = (state, { type }) => {
      switch (type) {
        case ACTION_TYPE_A:
          return "reducerA";
      }
    };

    const reducerB = (state, { type }) => {
      switch (type) {
        case ACTION_TYPE_B:
          return "reducerB";
      }
    };

    const reducers = combineReducers({
      A: reducerA,
      B: reducerB,
    });

    const state = {};
    const action = { type: ACTION_TYPE_A };

    const actual = reducers(state, action).A;
    const expected = reducerA(state, action);

    expect(actual).toEqual(expected);
  }));
