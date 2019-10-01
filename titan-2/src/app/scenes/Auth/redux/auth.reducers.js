import { AUTH_ACTION_LOGIN_REQUEST } from "./auth.constants";
import { combineReducers } from "redux";

export const login = (state = {}, action) => {
  switch (action.type) {
    case AUTH_ACTION_LOGIN_REQUEST:
      return action.payload.payload;

    default:
      return state;
  }
};

export const auth = combineReducers({
  login: login,
  register: login
});
