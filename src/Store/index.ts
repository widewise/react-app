/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-body-style */
import {
  applyMiddleware, createStore, Store, AnyAction,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import '../Models/window';

const configureStore = (initialState: any): Store<any, AnyAction> => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default configureStore;
