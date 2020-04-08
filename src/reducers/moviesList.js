export const moviesList = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      console.log()
      return [...action.movies];
    default:
      return state;
  }
}