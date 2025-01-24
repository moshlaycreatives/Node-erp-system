class CustomError extends Error {
  constructor(statusCode, message, ...rest) {
    super(message);
    this.statusCode = statusCode;
    Object.assign(this, rest);
  }
}

// 400: Bad Request - Use when the client sends an invalid request or incorrect data.
class BadRequestError extends CustomError {
  constructor(message, ...rest) {
    super(400, message, ...rest);
  }
}

// 401: Unauthorized - Use when authentication is required and has failed or not provided.
class UnauthorizedError extends CustomError {
  constructor(message, ...rest) {
    super(401, message, ...rest);
  }
}

// 402: Payment Required - Reserved for future use, often used in cases of payment-related issues.
class PaymentRequiredError extends CustomError {
  constructor(message, ...rest) {
    super(402, message, ...rest);
  }
}

// 403: Forbidden - Use when the server understands the request but refuses to authorize it.
class ForbiddenError extends CustomError {
  constructor(message, ...rest) {
    super(403, message, ...rest);
  }
}

// 404: Not Found - Use when the requested resource could not be found on the server.
class NotFoundError extends CustomError {
  constructor(message, ...rest) {
    super(404, message, ...rest);
  }
}

// 405: Method Not Allowed - Use when the request method is not supported for the requested resource.
class MethodNotAllowedError extends CustomError {
  constructor(message, ...rest) {
    super(405, message, ...rest);
  }
}

// 406: Not Acceptable - Use when the server cannot produce a response matching the client's Accept headers.
class NotAcceptableError extends CustomError {
  constructor(message, ...rest) {
    super(406, message, ...rest);
  }
}

// 407: Proxy Authentication Required - Use when proxy authentication is required.
class ProxyAuthenticationRequiredError extends CustomError {
  constructor(message, ...rest) {
    super(407, message, ...rest);
  }
}

// 408: Request Timeout - Use when the client takes too long to send a request.
class RequestTimeoutError extends CustomError {
  constructor(message, ...rest) {
    super(408, message, ...rest);
  }
}

// 409: Conflict - Use when there is a conflict in the request, such as an edit conflict.
class ConflictError extends CustomError {
  constructor(message, ...rest) {
    super(409, message, ...rest);
  }
}

// 410: Gone - Use when the resource requested is no longer available and will not be available again.
class GoneError extends CustomError {
  constructor(message, ...rest) {
    super(410, message, ...rest);
  }
}

// 411: Length Required - Use when the server requires a Content-Length header in the request.
class LengthRequiredError extends CustomError {
  constructor(message, ...rest) {
    super(411, message, ...rest);
  }
}

// 412: Precondition Failed - Use when preconditions in request headers are not met.
class PreconditionFailedError extends CustomError {
  constructor(message, ...rest) {
    super(412, message, ...rest);
  }
}

// 413: Payload Too Large - Use when the request payload is larger than the server is willing or able to process.
class PayloadTooLargeError extends CustomError {
  constructor(message, ...rest) {
    super(413, message, ...rest);
  }
}

// 414: URI Too Long - Use when the URI provided in the request is too long for the server to process.
class URITooLongError extends CustomError {
  constructor(message, ...rest) {
    super(414, message, ...rest);
  }
}

// 415: Unsupported Media Type - Use when the media format of the requested data is not supported by the server.
class UnsupportedMediaTypeError extends CustomError {
  constructor(message, ...rest) {
    super(415, message, ...rest);
  }
}

// 416: Range Not Satisfiable - Use when the client requests a range that cannot be satisfied.
class RangeNotSatisfiableError extends CustomError {
  constructor(message, ...rest) {
    super(416, message, ...rest);
  }
}

// 417: Expectation Failed - Use when the server cannot meet the requirements of the Expect request header.
class ExpectationFailedError extends CustomError {
  constructor(message, ...rest) {
    super(417, message, ...rest);
  }
}

// 418: I'm a teapot - Use as a humorous response for requests to brew coffee with a teapot.
class ImATeapotError extends CustomError {
  constructor(message, ...rest) {
    super(418, message, ...rest);
  }
}

// 422: Unprocessable Entity - Use when the server understands the content type but cannot process the data.
class UnprocessableEntityError extends CustomError {
  constructor(message, ...rest) {
    super(422, message, ...rest);
  }
}

// 429: Too Many Requests - Use when the user has sent too many requests in a given time frame (rate limiting).
class TooManyRequestsError extends CustomError {
  constructor(message, ...rest) {
    super(429, message, ...rest);
  }
}

export {
  BadRequestError,
  UnauthorizedError,
  PaymentRequiredError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  NotAcceptableError,
  ProxyAuthenticationRequiredError,
  RequestTimeoutError,
  ConflictError,
  GoneError,
  LengthRequiredError,
  PreconditionFailedError,
  PayloadTooLargeError,
  URITooLongError,
  UnsupportedMediaTypeError,
  RangeNotSatisfiableError,
  ExpectationFailedError,
  ImATeapotError,
  UnprocessableEntityError,
  TooManyRequestsError,
};
