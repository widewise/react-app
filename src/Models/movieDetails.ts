export class MovieDetails {
  constructor(
    public id = -1,
    public title: string = '',
    public score: number = 0,
    public releaseDate: Date = new Date(),
    public duration: number = 0,
    public url: string = '',
    public genres: Array<string> = [],
    public description: string = '',
  ) {}
}

export default MovieDetails;
