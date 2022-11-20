import AppContainer from "./components/AppContainer";
import "./styles.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

let name = null;
do {
  name = prompt("Enter your name(unique id)");
} while (!name);

export default function App() {
  const socket = io("http://localhost:8080", { autoConnect: false });
  const [myName, setMyName] = useState(name);
  useEffect(() => {
    if (myName) {
      socket.auth = { user: { userId: myName, name: myName } };
      socket.connect();
    }
  }, [myName]);

  socket.on("Users", (users) => console.log(users));

  return (
    <div>
      <AppContainer />
    </div>
  );
}
