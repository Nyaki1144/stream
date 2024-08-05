import path from "path";
import __dirname from "../path.js";
import fs from "fs";

const data = fs.createReadStream(path.join(__dirname, "3.ImplementingBasicBackPressure", "text.txt"));
const copy = fs.createWriteStream(path.join(__dirname, "3.ImplementingBasicBackPressure", "copyPipe.txt"));

data.on("data", (chunk) => {
  const res = copy.write(chunk);

  if (!res) {
    console.log("backpressure");
    data.pause();
  }
});

copy.on("drain", () => {
  console.log("drained");
  data.resume();
});
