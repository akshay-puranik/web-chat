const users = {}; //key should be unique and constant ex. userId

class Connection {
  constructor(io, socket) {
    this.io = io;
    this.socket = socket;

    socket.on("connect", () => this.userConnected(socket));
    socket.on("sendMessage", (message) => this.sendMessage(message));
    socket.on("disconnect", () => this.userDisconnect(socket));
  }

  userConnected(soc) {
    users[soc.id] = new User("User", soc.id);
  }

  userDisconnect(soc) {
    if (users[soc.id]) users[soc.id].status = Date.now();
    this.io.emit("users", users);
  }

  sendMessage(message) {
    console.log(message);
    // this.io.sockets.emit("message", message);
  }
}

class User {
  constructor(name, socketId) {
    this.name = name;
    this.socketId = socketId;
    this.status = "Online";
  }
}

const chat = (io) => {
  io.on("connection", (socket) => {
    const { userId, name } = socket.handshake.auth.user;
    users[userId] = new User(name, socket.id);

    io.emit("Users", users);
    let temp = new Connection(io, socket);
  });
};

module.exports = { chat };
