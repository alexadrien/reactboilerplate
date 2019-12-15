import { Action, ActionCreator } from "redux";

export const MY_FIRST_ACTION = "MY_FIRST_ACTION";
export const myFirstAction: ActionCreator<Action> = () => ({
  type: MY_FIRST_ACTION,
});
export const MY_SECOND_ACTION = "MY_FIRST_ACTION";
export const mySecondAction: ActionCreator<Action> = () => ({
  type: MY_SECOND_ACTION,
});
