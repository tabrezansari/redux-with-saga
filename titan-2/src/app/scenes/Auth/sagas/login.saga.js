import { call, put } from "redux-saga/effects";

import { loginUserService } from "../services/auth.service";

export function* loginFlow(data) {
  try {
    const response = yield call(loginUserService, data.payload);

    return response;
  } catch (error) {
    yield put({
      type: "TRIGGER_TOAST_MESSAGE",
      payload: { message: "Something went wrong" }
    });
  }
}
