export const loadReviews = (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case 'LOAD_REVIEWS':
      return [...state, ...action.reviews];
    default:
      return state;
  }
}