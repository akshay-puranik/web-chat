import * as types from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_MYSELF:
      return { ...state, mySelf: payload };
    case types.SET_USERS:
      return { ...state, users: payload };
    case types.SET_SELECTED_USER:
      return { ...state, selectedUser: payload };
    case types.ADD_MESSAGE:
      console.log("Hiii");
      return { ...state, chats: [...state.chats, payload] };
    case types.CLEAR_CHAT:
      return { ...state, chats: [] };
    default:
      return state;
  }
};
