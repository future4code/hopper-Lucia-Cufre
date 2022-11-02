import { Movie } from "./../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  /* async createMovie(
    movie: Movie): Promise<void> {
      try {
        await MovieDatabase.connection
      .insert({
        id: movie.getId,
        title: movie.getTitle,
        description: movie.getDescription,
        duration_in_minutes: movie.getDurationInMinutes,
        year_of_release: movie.getYearOfRelease
      })
      .into(MovieDatabase.TABLE_NAME);
      } catch (error:any) {
        throw new Error(error.message);
        
      }
    
  } */

  async createMovie({
    id,
    title,
    description,
    duration_in_minutes,
    year_of_release,
  }: any): Promise<void> {
    try {
      await MovieDatabase.connection
        .insert({
          id,
          title,
          description,
          duration_in_minutes,
          year_of_release,
        })
        .into(MovieDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
