import GENRE_FILTER from '../Models/genreFilter';
import Movie from '../Models/movie';
import SORT_FIELDS from '../Models/sortFields';
import SORT_ORDER from '../Models/sortOrder';

export type AppState = {
    moviesLoading: boolean,
    movies?: Movie[],
    movieLoading: boolean,
    movie: Movie,
    total: number,
    sortBy: SORT_FIELDS,
    sortOrder: SORT_ORDER,
    genreFilter: GENRE_FILTER,
}
