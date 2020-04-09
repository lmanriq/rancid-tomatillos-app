import { combineReducers } from 'redux';
import { moviesList } from './moviesList';
import { loginFlow } from './loginFlow';
import { loadReviews } from './loadReviews';
import { updatePage } from './updatePage';
import { errorMessage } from './errorMessage';


const rootReducer = combineReducers({
  moviesList,
  loginFlow,
  loadReviews,
  updatePage,
  errorMessage
});

export default rootReducer;