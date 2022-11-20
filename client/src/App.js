import AppContainer from "./components/AppContainer";
import "./styles.css";
import { io } from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import { SET_MYSELF, SET_USERS } from "./context/actionTypes";
let name = null;
do {
  name = prompt("Enter your name(unique id)");
} while (!name);

export const socket = io("http://localhost:8080", { autoConnect: false });

export default function App() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => dispatch({ type: SET_MYSELF, payload: { userId: name, name: name } }), []);

  useEffect(() => {
    if (state.mySelf.userId) {
      socket.auth = { user: state.mySelf };
      socket.connect();
    }
  }, [state.mySelf.userId]);

  socket.on("Users", (users) => dispatch({ type: SET_USERS, payload: users }));

  return (
    <div>
      <AppContainer />
    </div>
  );
}
