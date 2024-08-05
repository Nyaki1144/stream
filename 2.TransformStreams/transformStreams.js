import path from "path";
import __dirname from "../path.js";
import { Transform } from "stream";
import fs from "fs";

const data = fs.createReadStream(path.join(__dirname, "2.TransformStreams", "text.txt"));
const transformFile = fs.createWriteStream(path.join(__dirname, "2.TransformStreams", "transform.txt"));

// data.on("data", (chunk) => {
//   this.push(chunk.toString().toUpperCase());
// });

const transform = new Transform({
  transform(chunk, encoding, callback) {
    // chunk = 0;
    this.push(chunk.toString().toUpperCase());
  },
});

data.pipe(transform).pipe(transformFile);
