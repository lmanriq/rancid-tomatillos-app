export const loadReviews = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_REVIEWS':
      return [...state, ...action.reviews];
    case 'CLEAR_REVIEWS':
      return []
    default:
      return state;
  }
}