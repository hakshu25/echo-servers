const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`request->${JSON.stringify(req.headers)}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  req.pipe(res)
});

const port = 4000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
