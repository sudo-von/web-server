export type SocketEvent =
| 'close'
| 'connection'
| 'error'
| 'listening'
| 'drop';

export type SocketRequestLine = {
  method: string,
  path: string;
  protocol: string;
};
