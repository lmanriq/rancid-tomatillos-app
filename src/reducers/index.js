import { combineReducers } from 'redux';
import { moviesList } from './moviesList';
import { loginFlow } from './loginFlow';
import { loadReviews } from './loadReviews';
import { updatePage } from './updatePage';

const rootReducer = combineReducers({
  moviesList,
  loginFlow,
  loadReviews,
  updatePage
});

export default rootReducer;