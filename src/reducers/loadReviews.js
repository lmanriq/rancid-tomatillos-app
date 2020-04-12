export const loadReviews = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_REVIEWS':
      return [...state, ...action.reviews];
    case 'CLEAR_REVIEWS':
      return [];
    case 'UNDO_RATING':
      return [...state].filter(review => review.id !== action.review.id)
    case 'ADD_REVIEW':
      return [...state, action.review]
    default:
      return state;
  }
}