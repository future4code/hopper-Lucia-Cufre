import { InvalidYear } from "./../error/InvalidYear";
import { InvalidRequest } from "./../error/InvalidRequest";
import { generateId } from "./../services/generateId";
import { MovieDatabase } from "./../data/MovieDatabase";
import { Movie } from "../models/Movie";
import { MovieDTO } from "../models/MovieDTO";

export class MovieBusiness {
  async createMovie(input: MovieDTO): Promise<void> {
    try {
      const { title, description, durationInMinutes, yearOfRelease } = input;
      if (!title || !description || !durationInMinutes || !yearOfRelease) {
        throw new InvalidRequest();
      }

      if (yearOfRelease > 2022) {
        throw new InvalidYear();
      }

      const id: string = generateId();

      const movie = new Movie(
        id,
        title,
        description,
        durationInMinutes,
        yearOfRelease
      );
      const movieDatabase = new MovieDatabase();
      await movieDatabase.createMovie(movie);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
