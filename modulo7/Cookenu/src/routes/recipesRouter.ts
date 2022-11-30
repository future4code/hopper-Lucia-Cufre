import express from "express"
import { RecipesController } from "../controller/recipesController"

export const recipesRouter = express.Router()
const recipesController = new RecipesController()

recipesRouter.post("/", recipesController.createRecipe)
recipesRouter.get("/:id", recipesController.getRecipe)