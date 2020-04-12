export const moviesList = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return [...action.movies];
    case 'SORT_MOVIES':
      let stateCopy = [...state];
      if (action.option === 'release-date') {
        stateCopy.sort((a, b) => {
          return a.release_date - b.release_date
        })
      } else if (action.option === 'alphabetical'){
        stateCopy.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title < b.title) {
            return 1;
          }
        })
      }
      console.log(stateCopy);
      return stateCopy;
    default:
      return state;
  }
}