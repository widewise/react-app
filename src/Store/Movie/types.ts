import ACTIONS from './actionTypes';
import Movie from '../../Models/movie';
import GENRE_FILTER from '../../Models/genreFilter';
import SORT_FIELDS from '../../Models/sortFields';

export type GetMoviesAction = {
    type: ACTIONS.GET_MOVIES,
    payload: Movie[],
  }

export type SetTotalAction = {
    type: ACTIONS.SET_TOTAL,
    payload: number,
  }

export type SetGenreFilterAction = {
    type: ACTIONS.SET_GANRE_FILTER,
    payload: GENRE_FILTER,
  }

export type SetSortingAction = {
    type: ACTIONS.SET_SORTING,
    payload: SORT_FIELDS,
  }

export type DeleteMovieAction = {
    type: ACTIONS.DELETE_MOVIE,
    payload: number
  }

export type MovieAction = {
    type: ACTIONS.GET_MOVIE | ACTIONS.ADD_MOVIE | ACTIONS.EDIT_MOVIE,
    payload: Movie,
  }

export type MovieActions =
GetMoviesAction
| SetTotalAction
| SetGenreFilterAction
| SetSortingAction
| MovieAction
| DeleteMovieAction;
