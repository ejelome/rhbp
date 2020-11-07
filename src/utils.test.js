import { combineReducers, init } from "./utils";

describe("init", () =>
  test("wraps argument in a function", () => {
    const object = { title: "test hello, world" };

    const actual = init(object);
    const expected = (() => object)();

    expect(actual).toEqual(expected);
  }));

describe("combineReducers", () =>
  test("combines multiple reducers into a single reducer", () => {
    const ACTION_TYPE_A = "ACTION_TYPE_A";
    const ACTION_TYPE_B = "ACTION_TYPE_B";
    const ACTION_TYPE_C = "ACTION_TYPE_C";

    const reducerA = (state, { type }) =>
      ({ [ACTION_TYPE_A]: "reducerA" }[type] || state);

    const reducerB = (state, { type }) =>
      ({ [ACTION_TYPE_B]: "reducerB" }[type] || state);

    const reducerC = (state, { type }) =>
      ({ [ACTION_TYPE_C]: "reducerC" }[type] || state);

    const reducers = combineReducers({
      A: reducerA,
      B: reducerB,
      C: reducerC,
    });

    const initialState = {};
    const actionType = { type: ACTION_TYPE_B };

    const actual = reducers(initialState, actionType).B;
    const expected = reducerB(initialState, actionType);

    expect(actual).toEqual(expected);
  }));
