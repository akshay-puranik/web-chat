const express = require("express");
const { chat } = require("./controller/socket.controller");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello world"));

let server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const io = require("socket.io")(server);
chat(io);
