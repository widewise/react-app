/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-lone-blocks */
import ACTIONS from './actionTypes';
import {
  GetMoviesAction,
  DeleteMovieAction,
  MovieAction,
  SetGenreFilterAction,
  SetSortingAction,
  SetTotalAction,
  GettingDataAction,
} from './types';
import Movie from '../../Models/movie';
import moviesReducers, { initialState, emptyMovie } from './reducers';
import { AppState } from '../types';
import GENRE_FILTER from '../../Models/genreFilter';
import SORT_FIELDS from '../../Models/sortFields';
import SORT_ORDER from '../../Models/sortOrder';

const movies: Array<Movie> = [
  {
    id: 1,
    title: 'Movie1',
    tagline: 'Tag',
    voteAverage: 5,
    voteCount: 10,
    releaseDate: new Date('2020-01-01'),
    posterPath: '',
    overview: 'Movie1Overview',
    budget: 10000,
    revenue: 10,
    runtime: 100,
    genres: [],
  },
  {
    id: 2,
    title: 'Movie2',
    tagline: 'Tag',
    voteAverage: 5,
    voteCount: 10,
    releaseDate: new Date('2020-01-01'),
    posterPath: '',
    overview: 'MovieOverview2',
    budget: 10000,
    revenue: 10,
    runtime: 100,
    genres: [],
  },
  {
    id: 3,
    title: 'Movie3',
    tagline: 'Tag',
    voteAverage: 5,
    voteCount: 10,
    releaseDate: new Date('2020-01-01'),
    posterPath: '',
    overview: 'MovieOverview3',
    budget: 10000,
    revenue: 10,
    runtime: 100,
    genres: [],
  },
];

const stateStub: AppState = {
  moviesLoading: false,
  movies,
  total: movies.length,
  genreFilter: GENRE_FILTER.All,
  movieLoading: false,
  movie: emptyMovie,
  sortBy: SORT_FIELDS.Rating,
  sortOrder: SORT_ORDER.Asc,
};

describe('movie reducer', () => {
  describe('initial state', () => {
    it('should return the initial state', () => {
      { /*
            // @ts-ignore */ }
      const actual = moviesReducers(undefined, {});

      expect(actual).toEqual(initialState);
    });
  });

  describe('call GETTING_MOVIES action', () => {
    it('state.movies should be empty and state.moviesLoading is true', () => {
      const action: GettingDataAction = {
        type: ACTIONS.GETTING_MOVIES,
      };

      const actual = moviesReducers(undefined, action);

      expect(actual.movies).toEqual([]);
      expect(actual.moviesLoading).toBeTruthy();
    });
  });

  describe('call GET_MOVIES action with movies', () => {
    it('state.movies should equals movies and state.moviesLoading is false', () => {
      const action: GetMoviesAction = {
        type: ACTIONS.GET_MOVIES,
        payload: movies,
      };

      const actual = moviesReducers(undefined, action);

      expect(actual.movies).toEqual(movies);
      expect(actual.moviesLoading).toBeFalsy();
    });
  });

  describe('call SET_TOTAL action with 3', () => {
    it('state.total should be 3', () => {
      const action: SetTotalAction = {
        type: ACTIONS.SET_TOTAL,
        payload: 3,
      };

      const actual = moviesReducers(undefined, action).total;
      expect(actual).toBe(3);
    });
  });

  describe('call SET_GANRE_FILTER action with Comedy', () => {
    it('should return genreFilter with Comedy value', () => {
      const action: SetGenreFilterAction = {
        type: ACTIONS.SET_GANRE_FILTER,
        payload: GENRE_FILTER.Comedy,
      };

      const actual = moviesReducers(undefined, action).genreFilter;

      expect(actual).toBe(GENRE_FILTER.Comedy);
    });
  });

  describe('call SET_SORTING action with ReleaseDate', () => {
    it('state.sortOrder should be ReleaseDate', () => {
      const action: SetSortingAction = {
        type: ACTIONS.SET_SORTING,
        payload: SORT_FIELDS.ReleaseDate,
      };

      const actual = moviesReducers(undefined, action).sortBy;

      expect(actual).toBe(SORT_FIELDS.ReleaseDate);
    });
  });

  describe('call ADD_MOVIE action with new movie with id 4', () => {
    it('state.movies should contains new movie with id 4', () => {
      const newMovie: Movie = {
        id: 4,
        title: 'New movie',
        tagline: 'Tag',
        voteAverage: 4,
        voteCount: 0,
        releaseDate: new Date('2021-01-01'),
        posterPath: '',
        overview: 'New movie',
        budget: 100,
        revenue: 10,
        runtime: 100,
        genres: [],
      };

      const action: MovieAction = {
        type: ACTIONS.ADD_MOVIE,
        payload: newMovie,
      };

      const actual = moviesReducers(undefined, action).movies;
      expect(actual).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 4,
          }),
        ]),
      );
    });
  });

  describe('call GETTING_MOVIE action', () => {
    it('state.movie should equals empty movie and state.movieLoading is true', () => {
      const action: GettingDataAction = {
        type: ACTIONS.GETTING_MOVIE,
      };

      const actual = moviesReducers(undefined, action);

      expect(actual.movie).toEqual(emptyMovie);
      expect(actual.movieLoading).toBeTruthy();
    });
  });

  describe('call GET_MOVIE action with movie', () => {
    it('state.movie should equals this movie and state.movieLoading is false', () => {
      const action: MovieAction = {
        type: ACTIONS.GET_MOVIE,
        payload: movies[0],
      };

      const actual = moviesReducers(undefined, action);

      expect(actual.movie).toEqual(movies[0]);
      expect(actual.movieLoading).toBeFalsy();
    });
  });

  describe('call EDIT_MOVIE action with movie new title', () => {
    it('state.movies should contains movie with new title', () => {
      const newTitle = 'New title';
      const action: MovieAction = {
        type: ACTIONS.EDIT_MOVIE,
        payload: { ...movies[0], title: newTitle },
      };

      const actual = moviesReducers(stateStub, action).movies[0];

      expect(actual.title).toEqual(newTitle);
    });
  });

  describe('call DELETE_MOVIE action with movie id 3', () => {
    it('state.movies should not contains movie with id 3', () => {
      const action: DeleteMovieAction = {
        type: ACTIONS.DELETE_MOVIE,
        payload: 3,
      };

      const actual = moviesReducers(stateStub, action).movies;

      expect(actual).toEqual(
        expect.not.arrayContaining([
          expect.objectContaining({
            id: 3,
          }),
        ]),
      );
    });
  });
});
