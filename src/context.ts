
export type Context = {
  headers: Record<string, string>;
  host: string;
  method: string;
  path: string;
  port: number;
  protocol: string;
};

export const createContext = (): Context => ({
  "headers": {},
  "host": "",
  "method": "",
  "path": "",
  "port": 0,
  "protocol": "",
});