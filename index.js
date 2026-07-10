import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const log = `${Date.now()} : New request received\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error(err);
    }
  });

  res.write("Hello from Node.js!");
  res.end();
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});