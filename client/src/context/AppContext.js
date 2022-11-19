import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();
const initState = {
  users: [],
  isAuth: false,
  selectedUser: ""
};
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
