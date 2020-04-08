import { combineReducers } from 'redux';
import { moviesList } from './moviesList';
import { loginFlow } from './loginFlow';

const rootReducer = combineReducers({
  moviesList,
  loginFlow
});

export default rootReducer;