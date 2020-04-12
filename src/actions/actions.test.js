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
});