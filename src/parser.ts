import { SocketRequestLine } from "./socket";

const parseRequestLine = (rawData: string): SocketRequestLine => {
  const data = rawData.split(' ');

  if (data.length !== 3) throw new Error("malformed data");

  const [method, path, protocol] = data;

  return {
    method,
    path,
    protocol,
  };
};