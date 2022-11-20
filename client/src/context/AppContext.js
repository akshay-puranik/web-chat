import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();
const initState = {
  mySelf: {},
  users: [],
  chats: [],
  isAuth: true,
  selectedUser: {},
};
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
