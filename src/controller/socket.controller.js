const users = new Map(); //key should be unique and constant ex. userId

class Connection {
  constructor(io, socket) {
    this.#io = io;
    this.#socket = socket;

    socket.on("sendMessage", (message) => {});
  }

  sendMessage(message) {
    this.io.sockets.emit("message", message);
  }
}

class User {
  constructor(name, socketId) {
    this.name = name + "" + socketId;
    this.socketId = socketId;
  }
}

const chat = (io) => {
  io.on("connection", (socket) => {
    users.set(socket.id, new User("User", socket.id));
    console.log("New User", socket.id);
    new Connection(io, socket);
  });
};

module.exports = { chat };
