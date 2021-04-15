import ACTIONS from './actionTypes';
import { AppState } from '../types';
import { MovieActions } from './types';
import Movie from '../../Models/movie';
import SORT_FIELDS from '../../Models/sortFields';
import SORT_ORDER from '../../Models/sortOrder';
import GENRE_FILTER from '../../Models/genreFilter';

export const emptyMovie: Movie = {
  id: -1,
  title: '',
  tagline: '',
  releaseDate: new Date(),
  posterPath: '',
  overview: '',
  budget: 0,
  revenue: 0,
  runtime: 0,
  voteAverage: 0,
  voteCount: 0,
  genres: [],
} as Movie;

export const initialState: AppState = {
  movies: [],
  movie: emptyMovie,
  total: 0,
  sortBy: SORT_FIELDS.ReleaseDate,
  sortOrder: SORT_ORDER.Desc,
  genreFilter: GENRE_FILTER.All,
};

const moviesReducers = (
  state: AppState = initialState,
  action: MovieActions,
): AppState => {
  switch (action.type) {
    case ACTIONS.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case ACTIONS.SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };

    case ACTIONS.SET_GANRE_FILTER:
      return {
        ...state,
        genreFilter: action.payload,
      };

    case ACTIONS.SET_SORTING:
      return {
        ...state,
        sortBy: action.payload,
      };

    case ACTIONS.ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload),
      };

    case ACTIONS.GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };

    case ACTIONS.EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies
          .map((movie) => (movie.id !== action.payload.id ? movie : action.payload)),
      };

    case ACTIONS.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(
          (movie: Movie) => movie.id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default moviesReducers;
