import { combineReducers } from "redux";

import { auth } from "./../app/scenes/Auth/redux/auth.reducers";

export default () =>
  combineReducers({
    auth: auth
  });
