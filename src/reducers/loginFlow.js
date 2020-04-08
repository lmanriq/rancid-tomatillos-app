export const loginFlow = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return {...state, ...action.user}
    default:
      return state;
  }
}

