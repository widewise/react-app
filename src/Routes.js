/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Header from './Components/Header';
import Main from './Components/Main';
import NotFound from './Components/NotFound';
import { getMovies, getMovie } from './Store/Movie/actionCreators';

const fetchMainData = async (store, search = '') => {
  const currentState = store.getState().movies;
  const getMoviesFunc = await getMovies(
    currentState.sortBy,
    currentState.sortOrder,
    currentState.genreFilter,
    search,
  );
  await getMoviesFunc(store.dispatch);
};

export default {
  headerRoutes: [
    {
      component: Header,
      path: '/',
      exact: true,
    },
    {
      component: Header,
      path: '/film/:movieId',
      fetchData: async ({ store, match }) => {
        const getMovieFunc = await getMovie(Number(match.params.movieId));
        await getMovieFunc(store.dispatch);
      },
    },
    {
      component: Header,
      path: '/search/:search',
    },
    {
      component: NotFound,
    },
  ],
  mainRoutes: [
    {
      component: Main,
      path: '/',
      exact: true,
      fetchData: async ({ store }) => {
        await fetchMainData(store);
      },
    },
    {
      component: Header,
      path: '/film/:movieId',
      fetchData: async ({ store }) => {
        await fetchMainData(store);
      },
    },
    {
      component: Main,
      path: '/search/:search',
      fetchData: async ({ store, match }) => {
        await fetchMainData(store, match.params.search);
      },
    },
    {
      component: NotFound,
    },
  ],
};
