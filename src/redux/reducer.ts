import { initialState } from "./initialState";
import { MY_FIRST_ACTION, MY_SECOND_ACTION } from "./actions";
import { Reducer } from "redux";

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_FIRST_ACTION:
      return state;
    case MY_SECOND_ACTION:
      return state;
    default:
      return state;
  }
};
