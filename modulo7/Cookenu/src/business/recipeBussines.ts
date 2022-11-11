import { RecipeDatabase } from "./../data/recipeDatabase";
import { Recipe } from "./../model/recipe";
import { DateFormat } from "./../services/dateFormat";
import { IdGenerator } from "./../services/idGenerator";
import { MissingCredentials, Unauthorized } from "./../error/customError";
import { CustomError } from "../error/customError";
import { CreateRecipeDTO } from "../model/recipesDTO";
import { TokenGenerator } from "../services/tokenGenerator";

const tokenGenerator = new TokenGenerator();
const idGenerator = new IdGenerator();
const date = new DateFormat();
const recipeDatabase = new RecipeDatabase();

export class RecipeBussines {
  public createRecipe = async (
    input: CreateRecipeDTO,
    token: any
  ): Promise<void> => {
    try {
      const { title, description } = input;

      if (!title || !description) {
        throw new MissingCredentials();
      }

      const id: string = idGenerator.generateId();
      const userId = tokenGenerator.tokenData(token);
      if (!userId.id) {
        throw new Unauthorized();
      }
      const createdAt = date.sendDate();

      const recipe = new Recipe(id, title, description, createdAt, userId.id);

      await recipeDatabase.createRecipe(recipe);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getRecipe = async (id: string, token: any) => {
    try {
      const data = tokenGenerator.tokenData(token);
      const param = id;
      if (!data.id) {
        throw new Unauthorized();
      }

      const recipe = await recipeDatabase.getRecipe(param);

      return recipe;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
