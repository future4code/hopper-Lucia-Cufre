import { Movie } from "./../models/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async createMovie(movie: Movie): Promise<void> {
    try {
      await MovieDatabase.connection(MovieDatabase.TABLE_NAME).insert({
        id: movie.getId(),
        title: movie.getTitle(),
        description: movie.getDescription(),
        duration_in_minutes: movie.getDurationInMinutes(),
        year_of_release: movie.getYearOfRelease(),
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
