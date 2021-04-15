import axios from 'axios';
import ACTIONS from './actionTypes';
import Movie from '../../Models/movie';
import {
    getMovies,
    getMovie,
    addOrUpdateMovie,
    deleteMovie,
} from './actionCreators';
import GENRE_FILTER from '../../Models/genreFilter';
import SORT_FIELDS from '../../Models/sortFields';
import SORT_ORDER from '../../Models/sortOrder';

const serverMovie = {
    id: 10,
    title: 'movie title',
    tagline: 'movie tagline',
    vote_average: 5,
    vote_count: 100,
    release_date: new Date('2020-01-01'),
    poster_path: 'http://localhost/pic.jpg',
    overview: 'movie overview',
    budget: 1000,
    revenue: 10,
    runtime: 100,
    genres: ['Action'],
};

const movie = {
    id: 10,
    title: 'movie title',
    tagline: 'movie tagline',
    voteAverage: 5,
    voteCount: 100,
    releaseDate: new Date('2020-01-01'),
    posterPath: 'http://localhost/pic.jpg',
    overview: 'movie overview',
    budget: 1000,
    revenue: 10,
    runtime: 100,
    genres: ['Action'],
};

jest.mock('axios');

describe('action creators', () => {
    describe('call getMovies', () => {
        it('should dispatch GET_MOVIES and SET_TOTAL actions', async () => {
            const expectedMovies: Movie[] = [ movie ];
            const response = {
                data: {
                    data: [ serverMovie ],
                    totalAmount: 1
                }
            };
            (axios.get as jest.Mock).mockImplementationOnce(() =>Promise.resolve(response));
            const dispatchMock = jest.fn().mockName('dispatch');

            const getMoviesFunc = await getMovies(SORT_FIELDS.Rating, SORT_ORDER.Asc, GENRE_FILTER.All, '');
            await getMoviesFunc(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledTimes(2);
            expect(dispatchMock).toHaveBeenCalledWith({ type: ACTIONS.GET_MOVIES, payload: expectedMovies });
            expect(dispatchMock).toHaveBeenCalledWith({ type: ACTIONS.SET_TOTAL, payload: expectedMovies.length });
        });
    });

    describe('call getMovie', () => {
        it('should dispatch GET_MOVIE action', async () => {
            const response = {
                data: serverMovie
            };
            (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(response));
            const dispatchMock = jest.fn().mockName('dispatch');

            const getMovieFunc = await getMovie(serverMovie.id);
            await getMovieFunc(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledTimes(1);
            expect(dispatchMock).toHaveBeenCalledWith({ type: ACTIONS.GET_MOVIE, payload: movie });
        })
    })

    describe('call addOrUpdateMovie with movie id equal -1', () => {
        it('should dispatch ADD_MOVIE action', async () => {
            const response = {
                data: serverMovie
            };
            (axios.post as jest.Mock).mockImplementationOnce(() => Promise.resolve(response));
            const dispatchMock = jest.fn().mockName('dispatch');
            const newMovie = { ...movie, id: -1 };

            const addOrUpdateMovieFunc = await addOrUpdateMovie(newMovie);
            await addOrUpdateMovieFunc(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledTimes(1);
            expect(dispatchMock).toHaveBeenCalledWith({ type: ACTIONS.ADD_MOVIE, payload: movie });
        })
    })

    describe('call addOrUpdateMovie with existed movie', () => {
        it('should dispatch EDIT_MOVIE action', async () => {
            // NOTE: some problems with tagline validation
            const editedServerMovie = { ...serverMovie, tagline: 'Some tagline' };
            const editedMovie = { ...movie, tagline: '' };
            (axios.put as jest.Mock).mockImplementationOnce(() => Promise.resolve(editedServerMovie));
            const dispatchMock = jest.fn().mockName('dispatch');

            const addOrUpdateMovieFunc = await addOrUpdateMovie(editedMovie);
            await addOrUpdateMovieFunc(dispatchMock);

            expect(axios.put).toHaveBeenCalledTimes(1);
            expect(dispatchMock).toHaveBeenCalledWith({ type: ACTIONS.EDIT_MOVIE, payload: { ...movie, tagline: 'Some tagline' } });
        })
    })

    describe('call deleteMovie with movie id', () => {
        it('should dispatch DELETE_MOVIE action', async () => {
            const dispatchMock = jest.fn().mockName('dispatch');
            const movieId = 111;

            const deleteMovieFunc = await deleteMovie(movieId);
            await deleteMovieFunc(dispatchMock);

            expect(axios.delete).toHaveBeenCalledTimes(1);
            expect(dispatchMock).toHaveBeenCalledWith({ type: ACTIONS.DELETE_MOVIE, payload: movieId });
        })
    })
});