import { UserDatabase } from "./../data/UserDatabase";
export class UserBusiness {
  public createUser = async (input: any) => {
    let statusCode = 400;
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        statusCode = 422;
        throw new Error('Preencha os campos "name", "email" e "password"');
      }

      const id: string = Date.now().toString();

      const userDatabase = new UserDatabase();

      await userDatabase.createUser({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getUsers = async () => {
    let statusCode = 400;
    try {
      const userDatabase = new UserDatabase();
      const result = await userDatabase.getUsers();

      if (result[0].length === 0) {
        statusCode;
        throw new Error("Nao existem usuarios.");
      }

      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public deleteUser = async (id: string) => {
    try {
      const userId = id;

      const userDataBase = new UserDatabase();
      const userExist = await userDataBase.getUserById(userId);
      if (userExist.length === 0) {
        throw new Error("Usuario nao encontrado");
      }
      await userDataBase.deleteUser(userId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
