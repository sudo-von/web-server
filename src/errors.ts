export class MalformedDataError extends Error {
  constructor(message: string = "The data is malformed.") {
    super(message);
  };
};

export class UnsupportedMethodError extends Error {
  constructor(message: string = "The requested method is not supported.") {
    super(message);
  };
};

export class UnsupportedProtocolError extends Error {
  constructor(message: string = "The requested protocol is not supported.") {
    super(message);
  };
};
