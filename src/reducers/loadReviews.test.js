import { loadReviews } from './loadReviews';

describe('loadReviews', () => {
  it('should return the initial state', () => {
    const expectedResult = [];
    const result = loadReviews(undefined, []);
    expect(result).toEqual(expectedResult)
  })

  it('when receiving  LOAD_REVIEWS action, it should return an array of all movie reviews', () => {

  })
  
  it('when receiving  CLEAR_REVIEWS action, it clear out all reviews in the array', () => {

  })

  it('when receiving  ADD_REVIEWS action, it should add a moview review to the excisting array of movie reviews', () => {

  })
})