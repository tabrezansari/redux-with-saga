import { takeLatest } from "redux-saga/effects";
import { loginFlow } from "./login.saga";
import { TRIGGER_HOST_ADDRESS } from "../redux/auth.actions";

export default function* watchUserAuthentication() {
  yield takeLatest(TRIGGER_HOST_ADDRESS, loginFlow);
}
