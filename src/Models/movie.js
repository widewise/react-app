export class Movie {
  constructor(id, title, releaseDate, url, genres, overview, runtime) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.url = url;
    this.genres = genres;
    this.overview = overview;
    this.runtime = runtime;
  }
}

export default Movie;
