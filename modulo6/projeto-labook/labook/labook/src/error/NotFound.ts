import { CustomError } from "./customError";

export class NotFound extends CustomError {
  constructor() {
    super(404, "Rota nao encontrada");
  }
}