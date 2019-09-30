import { all, fork } from "redux-saga/effects";

import authSaga from "../app/scenes/Auth/sagas";

const sagas = [authSaga];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
