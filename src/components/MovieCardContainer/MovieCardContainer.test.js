import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCardContainer from './MovieCardContainer';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { fetchForMovies } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('Movie card container', () => {
  it('should render what we expect', async () => {
    const store = createStore(rootReducer);

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <MovieCardContainer />
        </Router>
      </Provider>
    )

    const mockMovies = {
      movies: [
        {
          "id": 1,
          "title": "Bloodshot",
          "poster_path": "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
          "release_date": "2020-03-05",
          "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
          "average_rating": 5
        },
        {
          "id": 2,
          "title": "Bad Boys for Life",
          "poster_path": "https://image.tmdb.org/t/p/original//y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
          "release_date": "2020-01-15",
          "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
          "average_rating": 6.5
        }
      ]
    }
    fetchForMovies.mockResolvedValueOnce(mockMovies);
    const containerEl = getByTestId('card-container');
    expect(containerEl).toBeInTheDocument();
    const sampleTitle = await waitForElement(() => getByText('Bloodshot'));
    expect(sampleTitle).toBeInTheDocument();
  })
})