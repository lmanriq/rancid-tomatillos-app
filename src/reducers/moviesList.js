var moment = require('moment');
moment().format();

export const moviesList = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return [...action.movies];
    case 'SORT_MOVIES':
      let stateCopy = [...state];
      if (action.option === 'release-date') {
        stateCopy.sort((a, b) => {
          return moment(a.release_date) - moment(b.release_date)
        })
      } else if (action.option === 'alphabetical'){
        stateCopy.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title < b.title) {
            return 1;
          } else {
            return 0;
          }
        })
      }
      return stateCopy;
    default:
      return state;
  }
}