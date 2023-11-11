import { MalformedDataError, UnsupportedMethodError, UnsupportedProtocolError } from "./errors";

const supportedMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

const supportedProtocols = ["HTTP/1.1"];

export const parseRequestLine = (requestLine: string) => {
  const data = requestLine.split(" ");

  if (data.length !== 3) throw new MalformedDataError();

  const [method, path, protocol] = data;

  if (!supportedMethods.includes(method)) throw new UnsupportedMethodError();

  if (!supportedProtocols.includes(protocol)) throw new UnsupportedProtocolError();

  return {
    method,
    path,
    protocol,
  };
};

export const parseServerLine = (serverLine: string) => {

  const [host, port] = serverLine.replace("Host: ", "").split(":");

  if (!Number.isInteger(parseInt(port))) throw new MalformedDataError();

  return {
    host,
    port: parseInt(port)
  }
};