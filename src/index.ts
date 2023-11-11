import config from "./config";
import { createContext } from "./context";
import { parseRequestLine, parseServerLine } from "./parser";
import { createServer, type Socket } from "net";

const server = createServer();

server.on("connection", (socket: Socket) => {

  const context = createContext();

  socket.on("data", (buffer: Buffer) => {

    const data = buffer.toString("utf-8");

    const [requestLine, serverLine, ...rest] = data.split("\r\n");

    const { method, path, protocol } = parseRequestLine(requestLine);

    const { host, port } = parseServerLine(serverLine);

    context.host = host;
    context.method = method;
    context.path = path;
    context.protocol = protocol;
    context.port = port;

    console.log({ context });

  });

});

server.listen(config.port, () => {
  console.log(`📡 Server is listening at: http://${config.host}:${config.port}`);
});