export default interface Movie {
  id: number,
  title: string,
  tagline: string,
  voteAverage: number,
  voteCount: number,
  releaseDate: Date,
  posterPath: string,
  overview: string,
  budget: number,
  revenue: number,
  runtime: number,
  genres: Array<string>,
};
