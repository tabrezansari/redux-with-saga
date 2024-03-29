import { call, put } from "redux-saga/effects";

import { AUTH_ACTION_LOGIN_REQUEST } from "../redux/auth.constants";
export function* loginFlow(data) {
  try {
    yield put({ type: AUTH_ACTION_LOGIN_REQUEST, payload: data });

    console.log("watcher called login flow after catching the action ", data);
  } catch (error) {
    console.log("oops someting went wrong");
  }
}
