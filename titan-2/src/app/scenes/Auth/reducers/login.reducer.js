import { AUTH_ACTION_LOGIN_REQUEST } from "../auth.constants";

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_ACTION_LOGIN_REQUEST:
      return action.payload.payload;

    default:
      return state;
  }
}
