import { updatePage } from './updatePage';


describe('updatePage', () => {
  it('should return the initial state', () => {
    const expectedResult = 'movies';
    const result = updatePage('movies', []);
    expect(result).toEqual(expectedResult)
  })
})