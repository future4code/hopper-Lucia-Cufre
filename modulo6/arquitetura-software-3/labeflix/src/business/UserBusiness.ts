import { InvalidRequest } from './../error/InvalidRequest';
import { InvalidEmail } from "./../error/InvalidEmail";
import { regexEmail } from "./../services/regexEmail";
import { generateId } from "./../services/generateId";
import { UserDatabase } from "../data/UserDatabase";
import { UserDTO } from "../models/UserDTO";

export class UserBusiness {
  async create({ email, name, password }: UserDTO): Promise<void> {
    
    try {
      if (!email || !name || !password) {
        throw new InvalidRequest()
      }

      const regExp = regexEmail();

      if (regExp.test(email) !== true) {
        throw new InvalidEmail();
      }

      const id: string = generateId();

      const userDatabase = new UserDatabase();
      await userDatabase.create({
        id,
        name,
        email,
        password
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getAll() {
    try {
      const userDatabase = new UserDatabase();
      const result = await userDatabase.getAll();
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
