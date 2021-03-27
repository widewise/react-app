import { Dispatch } from 'redux';
import axios from 'axios';
import Movie from '../../Models/movie';
import ACTIONS from './actionTypes';
import {
  GetMoviesAction,
  DeleteMovieAction,
  MovieAction,
  SetGenreFilterAction,
  SetSortingAction,
  SetTotalAction,
  SetMovieIdAction,
} from './types';
import SORT_FIELDS from '../../Models/sortFields';
import SORT_ORDER from '../../Models/sortOrder';
import GENRE_FILTER from '../../Models/genreFilter';

const baseUrl = 'http://localhost:4000/movies';

export const getMoviesAction = (movies: Movie[]): GetMoviesAction => ({
  type: ACTIONS.GET_MOVIES,
  payload: movies,
});

export const setTotalAction = (total: number): SetTotalAction => ({
  type: ACTIONS.SET_TOTAL,
  payload: total,
});

export const setGenreFilterAction = (filter: GENRE_FILTER): SetGenreFilterAction => ({
  type: ACTIONS.SET_GANRE_FILTER,
  payload: filter,
});

export const setSortingAction = (sortBy: SORT_FIELDS): SetSortingAction => ({
  type: ACTIONS.SET_SORTING,
  payload: sortBy,
});

export const setMovieIdAction = (movieId: number) : SetMovieIdAction => ({
  type: ACTIONS.SET_MOVIE_ID,
  payload: movieId,
});

export const getMovieAction = (movie: Movie) : MovieAction => ({
  type: ACTIONS.GET_MOVIE,
  payload: movie,
});

export const addMovieAction = (movie: Movie): MovieAction => ({
  type: ACTIONS.ADD_MOVIE,
  payload: movie,
});

export const editMovieAction = (movie: Movie): MovieAction => ({
  type: ACTIONS.EDIT_MOVIE,
  payload: movie,
});

export const deleteMovieAction = (movieId: number) : DeleteMovieAction => ({
  type: ACTIONS.DELETE_MOVIE,
  payload: movieId,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseMovie(serverMovie: any): Movie {
  return {
    id: serverMovie.id,
    title: serverMovie.title,
    tagline: serverMovie.tagline,
    voteAverage: serverMovie.vote_average,
    voteCount: serverMovie.vote_count,
    releaseDate: serverMovie.release_date,
    posterPath: serverMovie.poster_path,
    overview: serverMovie.overview,
    budget: serverMovie.budget,
    revenue: serverMovie.revenue,
    runtime: serverMovie.runtime,
    genres: serverMovie.genres,
  } as Movie;
}

function generateRequestObjectFromMovie(movie: Movie) {
  return {
    title: movie.title,
    tagline: movie.tagline,
    vote_average: movie.voteAverage,
    vote_count: movie.voteAverage,
    release_date: movie.releaseDate,
    poster_path: movie.posterPath,
    overview: movie.overview,
    budget: movie.budget,
    revenue: movie.revenue,
    runtime: movie.runtime,
    genres: movie.genres,
    id: movie.id,
  };
}

export const getMovies = (
  sortBy: SORT_FIELDS,
  sortOrder: SORT_ORDER,
  filter: GENRE_FILTER,
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
) => async (dispatch: Dispatch<GetMoviesAction> & Dispatch<SetTotalAction>) => {
  const movies: Movie[] = [];
  const response = await axios.get(`${baseUrl}`, {
    params: {
      sortBy, sortOrder, filter, limit: 9,
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response.data.data.forEach((serverMovie: any) => movies.push(parseMovie(serverMovie)));
  dispatch(getMoviesAction(movies));
  dispatch(setTotalAction(response.data.totalAmount));
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getMovie = (movieId: number) => async (dispatch: Dispatch<MovieAction>) => {
  const response = await axios.get(`${baseUrl}/${movieId}`);
  const movie = parseMovie(response.data);
  dispatch(getMovieAction(movie));
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addOrUpdateMovie = (movie: Movie) => async (dispatch: Dispatch<MovieAction>) => {
  if (movie.id <= 0) {
    const response = await axios.post(baseUrl, { data: generateRequestObjectFromMovie(movie) });
    const responseMovie = parseMovie(response);
    dispatch(addMovieAction(responseMovie));
  } else {
    const response = await axios.put(baseUrl, { data: generateRequestObjectFromMovie(movie) });
    const responseMovie = parseMovie(response);
    dispatch(editMovieAction(responseMovie));
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const deleteMovie = (movieId: number) => async (dispatch: Dispatch<DeleteMovieAction>) => {
  await axios.delete(`${baseUrl}/${movieId}`);
  dispatch(deleteMovieAction(movieId));
};
