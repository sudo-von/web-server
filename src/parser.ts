import { MalformedDataError, UnsupportedMethodError, UnsupportedProtocolError } from "./errors";

const supportedMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

const supportedProtocols = ["HTTP/1.1"];

export const parseHttpLine = (requestLine: string) => {
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

export const parseHeaderLine = (headerLine: string) => {

  const headers = headerLine.split(': ');

  if (headers.length !== 2) return;

  const [name, value] = headers;

  if (!name || !value) return;

  if (!/^[a-zA-Z0-9-]+$/.test(name)) throw new MalformedDataError();

  return { name, value };
};

export const parseHeaders = (headerLines: string[]) => {
  const headers = headerLines.map(headerLine => parseHeaderLine(headerLine));

  const headersObject: Record<string, string> = {};

  for (const header of headers) {
    if (header) {
      headersObject[header.name] = header.value;
    }
  }

  return headersObject;
};