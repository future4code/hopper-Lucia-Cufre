import { regexEmail } from "./../services/emailValidation";
import { TokenGenerator } from "./../services/tokenGenerator";
import { UserDatabase } from "./../data/userDatabase";
import { HashManager } from "./../services/hashManager";
import { IdGenerator } from "./../services/idGenerator";
import {
  CustomError,
  MissingCredentials,
  Unauthorized,
} from "./../error/customError";
import {
  InvalidEmail,
  InvalidPassword,
  PasswordCaracters,
  UserExists,
  UserNotFound,
} from "./../error/userError";
import { UserLoginDTO, UserSignupDTO } from "./../model/userDTO";
import { FollowUsers, User } from "../model/user";

const idGenerator = new IdGenerator();
const hashManager = new HashManager();
const userDatabase = new UserDatabase();
const tokenGenerator = new TokenGenerator();

export class UserBusiness {
  public signup = async (input: UserSignupDTO): Promise<string> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new MissingCredentials();
      }

      if (password.length < 6) {
        throw new PasswordCaracters();
      }

      const emailValidation = regexEmail();

      if (emailValidation.test(email) !== true) {
        throw new InvalidEmail();
      }

      const userExists = await userDatabase.findUserByEmail(email);

      if (userExists) {
        throw new UserExists();
      }

      const id: string = idGenerator.generateId();
      const hashPassword: string = await hashManager.hash(password);

      const user = new User(id, name, email, hashPassword);

      await userDatabase.signup(user);
      const token = tokenGenerator.generateToken(id);
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: UserLoginDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new MissingCredentials();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const emailValidation = regexEmail();

      if (emailValidation.test(email) !== true) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUserByEmail(email);

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new InvalidPassword();
      }

      const token = tokenGenerator.generateToken(user.id);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (token: any) => {
    try {
      const data = tokenGenerator.tokenData(token);
      if (!data.id) {
        throw new Unauthorized();
      }
      const user = await userDatabase.getProfile(data.id);
      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserProfile = async (id: string, token: any) => {
    try {
      const data = tokenGenerator.tokenData(token);
      const param = id;
      if (!data.id) {
        throw new Unauthorized();
      }

      const user = await userDatabase.getUserProfile(param);

      if (!user) {
        throw new UserNotFound();
      }

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public followUser = async (input: string, token: any): Promise<void> => {
    try {
      const userId = input;
      const data = tokenGenerator.tokenData(token);
      if (!data.id) {
        throw new Unauthorized();
      }
      if (!userId) {
        throw new MissingCredentials();
      }

      const id: string = idGenerator.generateId();
      const followUser = new FollowUsers(id, data.id, userId);

      await userDatabase.followUser(followUser);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public unfollowUser = async (id: string, token: any): Promise<void> => {
    try {
      const userUnfollowId = id;
      const data = tokenGenerator.tokenData(token);
      if (!data.id) {
        throw new Unauthorized();
      }
      if (!userUnfollowId) {
        throw new MissingCredentials();
      }

      await userDatabase.unfollowUser(userUnfollowId, data.id);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getFeed = async(token:any)=> {
    try {
      const data = tokenGenerator.tokenData(token);
      if (!data.id) {
        throw new Unauthorized();
      }

      const feed = await userDatabase.getFeed(data.id)
      return feed
    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
  }
}
