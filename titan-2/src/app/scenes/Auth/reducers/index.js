import { combineReducers } from "redux";

import loginReducer from "./login.reducer";

export const auth = combineReducers({
  login: loginReducer,
  register: loginReducer
});
