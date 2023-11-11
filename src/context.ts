
export type Context = {
  headers: Record<string, string>;
  host: string;
  method: string,
  path: string;
  port: number;
  protocol: string;
  userAgent: string;
};

export const createContext = (): Context => ({
  "headers": {},
  "host": "",
  "method": "",
  "path": "",
  "port": 0,
  "protocol": "",
  "userAgent": "",
});