import { SET_USER_DATA } from "./types";

const initialState = {
  user: {
    token: null,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
