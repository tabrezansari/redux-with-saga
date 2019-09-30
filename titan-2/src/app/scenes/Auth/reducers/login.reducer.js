import { AUTH_ACTION_LOGIN_REQUEST } from "../auth.constants";

export default function(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case AUTH_ACTION_LOGIN_REQUEST:
      return { ...state, payload };

    default:
      return state;
  }
}
