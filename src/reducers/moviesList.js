export const movies = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return [...state, ...movies];
    default: 
      return state;
  }
}