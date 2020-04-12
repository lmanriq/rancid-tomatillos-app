import { loginFlow } from './loginFlow';

describe('loginFlow', () => {
  it('should return the initial state', () => {
    const expectedResult = {};
    const result = loginFlow(undefined, {});
    expect(result).toEqual(expectedResult)
  })
  it('when receiving LOGIN_USER action, it should return the user object', () => {
    const sampleAction = {
      type: 'LOGIN_USER',
      user: {
        id: 1,
        name: 'Alan',
        email: 'alan@turing.io'
      }
    }
    const sampleUser = {
      id: 1,
      name: 'Alan',
      email: 'alan@turing.io'
    }
    const result = loginFlow({}, sampleAction);
    expect(result).toEqual(sampleUser);
  })
  it('when receiving LOGOUT_USER action, it should return an empty object', () => {
    const sampleUser = {
      id: 1,
      name: 'Alan',
      email: 'alan@turing.io'
    }
    const sampleAction = {
      type: 'LOGOUT_USER'
    }
    const result = loginFlow(sampleUser, sampleAction);
    expect(result).toEqual({})
  })
})