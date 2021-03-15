export default class Movie {
  constructor(
    public id = -1,
    public title: string = '',
    public releaseDate: Date = new Date(),
    public url: string = '',
    public genres: Array<string> = [],
    public overview: string = '',
    public runtime: string = '',
  ) {}
}
