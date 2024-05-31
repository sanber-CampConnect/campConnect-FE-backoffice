import { SET_USER_DATA } from "./types";

export const getUserData = (data) => (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
    payload: data,
  });
};

export const resetUserData = () => (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
    payload: {
      token: null,
    },
  });
};
