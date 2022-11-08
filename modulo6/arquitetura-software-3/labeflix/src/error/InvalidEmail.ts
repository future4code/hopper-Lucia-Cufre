import { CustomError } from "./customError";

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Deve ser passado um email valido.");
  }
}
