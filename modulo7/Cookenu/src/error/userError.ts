import { CustomError } from "./customError"

export class PasswordCaracters extends CustomError{
    constructor(){
        super(422, "O campo password deve ter no mínimo 6 dígitos.")
    }
}

export class InvalidPassword extends CustomError{
  constructor(){
      super(422, "Password invalida.")
  }
}


export class InvalidEmail extends CustomError{
    constructor(){
        super(422, "O email informado deve ser valido.")
    }
}

export class UserNotFound extends CustomError{
    constructor(){
        super(404, "Usuário não encontrado")
    }
  }

  export class UserExists extends CustomError {
    constructor() {
      super(400, "Ja existe um usuário com esse email.");
    }
  }