const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Farris DevOps Project-7 🚀');
});

server.listen(3000);