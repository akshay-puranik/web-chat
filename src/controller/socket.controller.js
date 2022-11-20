const users = []; //key should be unique and constant ex. userId

class Connection {
  constructor(io, socket) {
    this.io = io;
    this.socket = socket;

    socket.on("connect", () => this.userConnected(socket));
    socket.on("sendMessage", (message) => this.sendMessage(message));
    socket.on("disconnect", () => this.userDisconnect(socket));
  }

  // userConnected(soc) {
  //   users[soc.id] = new User("User", soc.id);
  // }

  userDisconnect(soc) {
    users.forEach((el) => (el.socketId == soc.id ? (el.status = Date.now()) : el));
    this.io.emit("Users", users);
  }

  sendMessage(data) {
    console.log(data);
    let to = users.filter((el) => el.userId == data.userId);
    this.io.to(to.socketId).emit("receiveMessage", data);
  }
}

class User {
  constructor(userId, name, socketId) {
    this.userId = userId;
    this.name = name;
    this.socketId = socketId;
    this.status = "Online";
  }
}

const chat = (io) => {
  io.on("connection", (socket) => {
    const { userId, name } = socket.handshake.auth.user;
    let ind = users.findIndex((el) => el.userId === userId);

    ind != -1
      ? (users[ind] = { ...users[ind], status: "Online", socketId: socket.id })
      : users.push(new User(userId, name, socket.id));

    io.emit("Users", users);
    new Connection(io, socket);
  });
};

module.exports = { chat };
