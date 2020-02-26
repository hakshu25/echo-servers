const net = require('net');
const server = net.createServer((socket) => {
  console.log('TCP Server created');

  socket.on('close', () => {
    console.log('client closed connection')
  });

  socket.on('data', (data) => {
    console.log(`client-> ${data} from ${socket.remoteAddress} ${socket.remotePort}`)
    socket.write(`server-> Echo: ${data}`);
  });
});

const port = 12345;
const host = '0.0.0.0';
server.listen(12345, host);

console.log(`listening on port ${port}`);
