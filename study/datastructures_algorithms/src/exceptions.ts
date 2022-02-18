export class Exception extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
    this.stack = new Error(message).stack;
  }
}

export class IndexOutOfBoundsException extends Exception {
  constructor(message: string = '') {
    super('IndexOutOfBoundsException', message);
  }
}

export class IllegalStateException extends Exception {
  constructor(message: string = '') {
    super('IllegalStateException', message);
  }
}

export class NoSuchElementException extends Exception {
  constructor(message: string = '') {
    super('NoSuchElementException', message);
  }
}

export class MethodNotImplementedException extends Exception {
  constructor(message: string = 'Method Not Implemented') {
    super('MethodNotImplementedException', message);
  }
}
