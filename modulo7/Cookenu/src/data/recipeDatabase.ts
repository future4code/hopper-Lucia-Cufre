import { DateFormat } from "./../services/dateFormat";
import { CustomError } from "../error/customError";
import { Recipe } from "./../model/recipe";
import { BaseDatabase } from "./baseDatabase";

export class RecipeDatabase extends BaseDatabase {
  public static TABLE_RECIPES = "Cookenu_recipes";

  public createRecipe = async (recipe: Recipe) => {
    try {
      await RecipeDatabase.connection
        .insert({
          id: recipe.getId(),
          title: recipe.getTitle(),
          description: recipe.getDescription(),
          createdAt: recipe.getCreatedeAt(),
          userId: recipe.getUserId(),
        })
        .into(RecipeDatabase.TABLE_RECIPES);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getRecipe = async (userId: string) => {
    try {
      /* const createdDate = await RecipeDatabase.connection(
        RecipeDatabase.TABLE_RECIPES
      )
        .select("createdAt")
        .where({ id });
      const data = createdDate.map((d: any) => {
        return d.createdAt;
      });
      const date = data[0].toLocaleString() */
      const recipe = await RecipeDatabase.connection(
        RecipeDatabase.TABLE_RECIPES
      )
        .select("id", "title", "description", "createdAt" )
        .where({ userId });

      return recipe;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


}

