import { IdGenerator } from './../services/idGenerator';
import { CreateRecipeDTO } from "./../model/recipesDTO";
import { Request, Response } from "express";
import { RecipeBussines } from "../business/recipeBussines";

const recipeBussines = new RecipeBussines();

export class RecipesController {
  public createRecipe = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      const token = req.headers.authorization as string;

      const recipe: CreateRecipeDTO = {
        title,
        description,
      };

      await recipeBussines.createRecipe(recipe, token);
      res.status(201).send({message: "Receita criada!"})
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getRecipe = async(req: Request, res: Response) => {
       try {
        const id = req.params.id 
        const token = req.headers.authorization as string;

        const recipe = await recipeBussines.getRecipe(id, token)

        res.status(200).send(recipe)
       } catch (error:any) {
        res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
       }
  }
}
