export const TRIGGER_HOST_ADDRESS = "TRIGGER_HOST_ADDRESS";
export const SET_USER_DATA = "SET_USER_DATA";

export const simpleFlow = () => {
  return {
    type: TRIGGER_HOST_ADDRESS,
    payload: { msg: "kudos! your redux setup is ready" }
  };
};
