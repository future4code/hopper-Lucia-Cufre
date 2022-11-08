import { MovieBusiness } from "./../business/MovieBusiness";
import { Request, Response } from "express";
import { MovieDTO } from "../models/MovieDTO";

export class MovieController {
  async createMovie(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, durationInMinutes, yearOfRelease } =
        req.body;

      const body : MovieDTO = {
        title,
        description,
        durationInMinutes,
        yearOfRelease,
      };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.createMovie(body);

      res.status(201).send({ message: "Movie criada." });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
