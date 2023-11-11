export type ContextRequestLine = {
  method: string,
  path: string;
  protocol: string;
};

export type Context = {
  requestLine: ContextRequestLine;
  headers: any;
  host: string;
  userAgent: string;
};

export const createContext = (): Context => ({
  "requestLine": {
    "method": "",
    "path": "",
    "protocol": "",
  },
  "headers": {},
  "host": "",
  "userAgent": "",
});