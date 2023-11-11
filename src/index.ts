import config from "./config";
import { createContext } from "./context";
import { createServer, type Socket } from "net";
import { parseHeaders, parseHttpLine, parseServerLine } from "./parser";

const server = createServer();

server.on("connection", (socket: Socket) => {

  const context = createContext();

  socket.on("data", (buffer: Buffer) => {

    const data = buffer.toString("utf-8");

    const [httpLine, serverLine, ...rest] = data.split("\r\n");

    const { method, path, protocol } = parseHttpLine(httpLine);

    const { host, port } = parseServerLine(serverLine);

    const headers = parseHeaders(rest);

    context.headers = headers;
    context.host = host;
    context.method = method;
    context.path = path;
    context.port = port;
    context.protocol = protocol;

    console.log({ context });
  });

});

server.listen(config.port, () => {
  console.log(`📡 Server is listening at: http://${config.host}:${config.port}`);
});