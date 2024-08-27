const http = require("http");
const names = ["testuser"];

const server = http.createServer((request, response) => {
  console.log("request", request.method);
  if (request.method === "post") {
    names.push("bataa");
  }
  response.end(JSON.stringify({ names }));
});
server.listen(8000, () => {
  console.log("server is runing");
});
