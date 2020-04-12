export const moviesList = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return [...action.movies];
    case 'SORT_MOVIES':
      const stateCopy = [...state];
      if (action.option === 'release-date') {
        return stateCopy.sort((a, b) => {
          return a.release_date - b.release_date
        })
      } else if (action.option === 'alphabetical'){
        return stateCopy.sort((a, b) => {
          return a.title < b.title;
        })
      }
      break;
    default:
      return state;
  }
}