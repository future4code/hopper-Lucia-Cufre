import { InvalidEmail } from "./../error/InvalidEmail";
import { regexEmail } from "./../services/regexEmail";
import { InvalidRequest } from "./../error/InvalidRequest";
import { UserDatabase } from "./../Data/UserDatabase";
import { generateId } from "./../services/generateId";
export class UserBusiness {
  async createUser(input: any): Promise<void> {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new InvalidRequest();
      }

      const id: string = generateId();
      const user = {
        id,
        name,
        email,
        password,
      };
      const regExp = regexEmail();

      if (regExp.test(email) !== true) {
        throw new InvalidEmail();
      }
      const userDatabase = new UserDatabase();
      await userDatabase.createUser(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
