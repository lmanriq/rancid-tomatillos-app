export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
})

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
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