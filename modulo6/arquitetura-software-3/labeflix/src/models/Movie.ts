export class Movie {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private durationInMinutes: number,
    private yearOfRelease: number
  ) {}

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDurationInMinutes() {
    return this.durationInMinutes;
  }

  getYearOfRelease() {
    return this.yearOfRelease;
  }
}
