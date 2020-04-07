import { combineReducers } from 'redux';
import { moviesList } from './moviesList';

const rootReducer = combineReducers({
  moviesList,
});

export default rootReducer;