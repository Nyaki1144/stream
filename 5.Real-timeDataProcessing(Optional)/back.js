import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const creServer = createServer(app);
const io = new Server(creServer);
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("chat message", (data) => {
    console.log("Received data from client:", data);
    socket.emit("serverData", `Server received: ${data}`);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

creServer.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
