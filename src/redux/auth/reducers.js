import { SET_USER_DATA } from "./types";

const initialState = {
  user: {
    token: null,
    id: null,
    username: "",
    email: "",
    fullname: "",
    image: "",
    phone: "",
    role: "",
    is_verified: false,
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
