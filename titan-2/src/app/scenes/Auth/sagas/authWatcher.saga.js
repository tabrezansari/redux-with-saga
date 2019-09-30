import { takeLatest } from "redux-saga/effects";
import { loginFlow } from "./login.saga";

import { AUTH_ACTION_LOGIN_REQUEST } from "../auth.constants";

export default function* watchUserAuthentication() {
  yield takeLatest(AUTH_ACTION_LOGIN_REQUEST, loginFlow);
}
