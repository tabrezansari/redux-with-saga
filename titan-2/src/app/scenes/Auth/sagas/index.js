import { fork } from "redux-saga/effects";
import watchUserAuthentication from "./authWatcher.saga";

export default function* startForman() {
  yield fork(watchUserAuthentication);
}
