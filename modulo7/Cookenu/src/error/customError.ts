export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class MissingCredentials extends CustomError {
  constructor() {
    super(422, "Todos os campos devem ser preenchidos");
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado");
  }
}
