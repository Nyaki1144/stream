import path from "path";
import __dirname from "../path.js";
import fs from "fs";

const data = fs.createReadStream(path.join(__dirname, "1.BasicStreamOperations", "text.txt"));
const copy = fs.createWriteStream(path.join(__dirname, "1.BasicStreamOperations", "copy.txt"));

data.on("data", (chunk) => copy.write(chunk));
