import { CustomError } from "./CustomError";
export class InvalidYear extends CustomError {
  constructor() {
    super(400, "O filme deve ser do ano atual ou anterior.");
  }
}
