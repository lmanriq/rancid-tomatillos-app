export const updatePage = (state = 'movies', action) => {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return action.page
    default:
      return state
  }
}