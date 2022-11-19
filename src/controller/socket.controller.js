const users = new Map(); //key should be unique and constant ex. userId

class Connection {
  constructor(io, socket) {
    this.io = io;
    this.socket = socket;

    socket.on("connect", () => this.userConnected(socket));
    socket.on("sendMessage", (message) => {});
    socket.on("disconnect", () => userDisconnect(socket));
  }

  userConnected(socket) {
    users.set(socket.id, new User("User", socket.id));
    console.log("New User", socket.id);
  }

  userDisconnect(socket) {
    let user = users.get(socket.id);
    user.status = Date.now();
    users.set(socket.id, user);
    console.log("New User", socket.id);
  }

  sendMessage(message) {
    this.io.sockets.emit("message", message);
  }
}
class User {
  constructor(name, socketId) {
    this.name = name + "" + socketId;
    this.socketId = socketId;
    this.status = "Online";
  }
}

const chat = (io) => {
  io.on("connection", (socket) => {
    new Connection(io, socket);
  });
};

module.exports = { chat };
