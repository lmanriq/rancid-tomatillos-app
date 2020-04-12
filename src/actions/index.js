export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
})

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
})

export const addReview = review => ({
  type: 'ADD_REVIEW',
  review
})

export const undoRating = review => ({
  type: 'UNDO_RATING',
  review
})

export const loadReviews = reviews => ({
  type: 'LOAD_REVIEWS',
  reviews
})

export const logOut = () => ({
  type: 'LOGOUT_USER'
})

export const clearReviews = () => ({
  type: 'CLEAR_REVIEWS'
})

export const changePage = page => ({
  type: 'CHANGE_PAGE',
  page
})

export const showError = errorMessage => ({
  type: 'SHOW_ERROR',
  errorMessage
})

export const sortMovies = option => ({
  type: 'SORT_MOVIES',
  option
})