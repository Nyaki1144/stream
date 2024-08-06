import path from "path";
import __dirname from "../path.js";
import fs from "fs";
import http from "http";

const data = fs.createReadStream(path.join(__dirname, "4.HTTP-Streaming", "text.txt"));

http
  .createServer((req, res) => {
    data.pipe(res);
  })
  .listen(8001, () => {
    console.log("Server started at 8001");
  });
