import { combineReducers } from 'redux';
import moviesReducers from './Movie/reducers';

const rootReducer = combineReducers({
  movies: moviesReducers,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
