import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import { IMessage } from "./types/message";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:
      "https://stormy-glove-79c.notion.site/ForntEnd1-21e0fb44800e496fb0a64f2e79efb6d5",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("New client connected");

  socket.on("sendMessage", (msg: IMessage) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = 3001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
