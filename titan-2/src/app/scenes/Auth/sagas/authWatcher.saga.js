import { takeLatest } from "redux-saga/effects";
import { loginFlow } from "./login.saga";
import { TRIGGER_HOST_ADDRESS } from "../actions/login.action";

export default function* watchUserAuthentication() {
  yield takeLatest(TRIGGER_HOST_ADDRESS, loginFlow);
}
