export class MovieDetails {
  constructor(id, title, score, releaseDate, duration, url, genres, description) {
    this.id = id || 0;
    this.title = title || '';
    this.score = score || 0;
    this.releaseDate = releaseDate || new Date();
    this.duration = duration || 0;
    this.url = url || '';
    this.genres = genres || [];
    this.description = description || '';
  }
}

export default MovieDetails;
