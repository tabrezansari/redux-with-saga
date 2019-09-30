import { combineReducers } from "redux";

import { auth } from "./../app/scenes/Auth/reducers";

export default () =>
  combineReducers({
    auth: auth
  });
