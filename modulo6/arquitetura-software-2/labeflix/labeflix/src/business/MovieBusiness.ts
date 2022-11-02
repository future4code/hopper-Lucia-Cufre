import { MovieDatabase } from "./../data/MovieDatabase";
import { v4 as generateId } from "uuid";
import { Movie } from "../types/Movie";

export class MovieBusiness {
  async createMovie(input: any): Promise<void> {
    let statusCode = 400;
    try {
      const { title, description, duration_in_minutes, year_of_release } =
        input;
      if (!title || !description || !duration_in_minutes || !year_of_release) {
        statusCode = 422;
        throw new Error("Dados inválidos");
      }
      const id = generateId();
      const movie = new Movie(
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release
      );
      const movieDatabase = new MovieDatabase();
      await movieDatabase.createMovie(movie);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
