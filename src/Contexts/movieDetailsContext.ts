import React, { useContext } from 'react';

export type MovieDetailsContent = {
    movieId: number,
    // eslint-disable-next-line no-unused-vars
    setMovieId:(id: number) => void,
}

export const MovieDetailsContext = React.createContext<MovieDetailsContent>({
  movieId: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMovieId: () => {},
});

export const useMovieDetailsContext = (): MovieDetailsContent => useContext(MovieDetailsContext);

export default [MovieDetailsContext, useMovieDetailsContext];
