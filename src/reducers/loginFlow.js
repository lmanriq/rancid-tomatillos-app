export const loginFlow = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return {...state, ...action.user}
    case 'LOGOUT_USER':
      return {}
    default:
      return state;
  }
}

