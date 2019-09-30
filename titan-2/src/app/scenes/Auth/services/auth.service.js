import { apiPost } from "../../../services/apiServices";
import { AUTH_ENDPOINT_LOGIN } from "../auth.constants";

export const loginUserService = credentials => {
  const response = apiPost(AUTH_ENDPOINT_LOGIN, credentials);
  return response;
};
