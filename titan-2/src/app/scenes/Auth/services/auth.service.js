import { apiPost } from "../../../services/apiServices";
import { AUTH_ENDPOINT_LOGIN } from "../auth.constants";

export const loginUserService = async credentials => {
  const response = await apiPost(AUTH_ENDPOINT_LOGIN, credentials);
  return response;
};
