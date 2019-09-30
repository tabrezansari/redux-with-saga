import { call, put } from "redux-saga/effects";

import { loginUserService } from "../services/auth.service";

export function* loginFlow() {
  try {
    console.log("watcher called login flow after catching the action ");
  } catch (error) {
    console.log("oops someting went wrong");
  }
}
