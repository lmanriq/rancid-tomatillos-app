import * as actions from '../actions';

describe('Action Creators', () => {
  it('should have a type of CHANGE_PAGE and a correct payload', () => {
    const expectedAction = {
      type: 'CHANGE_PAGE',
      page: 'login'
    }
    const result = actions.changePage('login')
    expect(result).toEqual(expectedAction)
  })
  
  //login user
  it('should have a type of LOGIN_USER and the correct payload', () => {
    const expectedAction = {
      type: 'LOGIN_USER',
      user: {email: 'test@gmail.com', passowrd: '123madit'}
    } 

    const result = actions.loginUser({email: 'test@gmail.com', passowrd: '123madit'})
    expect(result).toEqual(expectedAction)
  })

  //add review
  it('should have a type of LOGIN_USER and the correct payload', () => {
    const expectedAction = {
      type: 'ADD_REVIEW',
      review: {movie_id: 12, rating: 5}
    }

    const result = actions.addReview({movie_id: 12, rating: 5})
    expect(result).toEqual(expectedAction)
  })

  
});