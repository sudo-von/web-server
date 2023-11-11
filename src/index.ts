import config from './config';
import { createServer, type Socket } from 'net';
import { socketParser } from './socket';
import { createContext } from './context';

const server = createServer();

server.on('connection', (socket: Socket) => {

  const context = createContext();

  socket.on('data', (data: Buffer) => {
    const [line, host, headers] = data.toString('utf-8').split('\r\n');

    const { method } = socketParser.parseRequestLine(line);

    }).on('connect', function() {
        socket.write("GET /rest/whoami HTTP/1.1\r\n\r\n");
        console.log('SOCKET GET REQUEST SEND');
    }).on('end', function() {
        console.log('SOCKET ENDED');
    });

});

server.listen(config.port, () => {
  console.log(`📡 Server is listening at: http://${config.host}:${config.port}`);
});