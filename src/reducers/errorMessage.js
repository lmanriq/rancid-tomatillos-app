export const errorMessage = (state = '', action) => {
    switch (action.type) {
      case 'SHOW_ERROR':
        return action.showError;
      default:
        return state;
    }
  }