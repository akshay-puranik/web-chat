import * as types from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_MYSELF:
      return { ...state, mySelf: payload };
    case types.SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};
