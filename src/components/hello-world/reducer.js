import { SET_TITLE } from "./actionTypes";

const reducer = (state, { type, payload: { title } }) =>
  ({
    SET_TITLE: { ...state, title },
  }[type] || state);

export default reducer;
