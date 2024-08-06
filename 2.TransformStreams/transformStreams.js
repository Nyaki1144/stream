import path from "path";
import __dirname from "../path.js";
import { Transform } from "stream";
import fs from "fs";

const data = fs.createReadStream(path.join(__dirname, "2.TransformStreams", "text.json"));
const transformFile = fs.createWriteStream(path.join(__dirname, "2.TransformStreams", "transform.json"));

const transform = new Transform({
  transform(chunk, encoding, callback) {
    const part = chunk.toString();
    this.push(part.replaceAll("}", `,\n"timestamp": "${new Date()}"}`));
    callback();
  },
});

data.pipe(transform).pipe(transformFile);
