import { loadReviews } from './loadReviews';
import { clearReviews } from '../actions';

describe('loadReviews', () => {
  it('should return the initial state', () => {
    const expectedResult = [];
    const result = loadReviews(undefined, []);
    expect(result).toEqual(expectedResult)
  })

  it('when receiving  LOAD_REVIEWS action, it should return an array of all movie reviews', () => {
    const sampleAction = {
        type: 'LOAD_REVIEWS',
        reviews: [
        {
          movie_id: 1,
          rating: 4.5
        },
        {
          movie_id: 2,
          rating: 10
        },
        {
          movie_id: 3,
          rating: 8
        }
        ]
      }

      const sampleReviews = [
        {
            movie_id: 1,
            rating: 4.5
          },
          {
            movie_id: 2,
            rating: 10
          },
          {
            movie_id: 3,
            rating: 8
          }
      ]
     
      const result = loadReviews([], sampleAction);
      expect(result).toEqual(sampleReviews);
  })
  
  it('when receiving  CLEAR_REVIEWS action, it clear out all reviews in the array', () => {
    const sampleAction = {
        type: 'CLEAR_REVIEWS',
        reviews: [
            {
              movie_id: 1,
              rating: 4.5
            },
            {
              movie_id: 2,
              rating: 10
            },
            {
              movie_id: 3,
              rating: 8
            }
            ]
         }

    const sampleClearReviews = []

    const result = loadReviews([], sampleAction)
    expect(result).toEqual(sampleClearReviews)
  })

  it('when receiving  ADD_REVIEWS action, it should add a moview review to the excisting array of movie reviews', () => {
    const sampleAction = {
        type: 'ADD_REVIEW',
        review:
            {
              movie_id: 3,
              rating: 8
              }
         }

    const sampleAddReview = [
          {
            movie_id: 3,
            rating: 8
          }
        ]

    const result = loadReviews([], sampleAction)
    expect(result).toEqual(sampleAddReview)
  })
})