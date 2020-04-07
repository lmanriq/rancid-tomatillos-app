import { combineReducers } from 'redux';
import { movies } from './moviesList';

const rootReducer = combineReducers({
  movies,
});

export default rootReducer;