import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { fetchSpecificMovie } from '../../apicalls';
jest.mock('../../apicalls');

describe('Movie Details', () => {
  it('Should render what we expect', async () => {
    const store = createStore(rootReducer)
    
    const mockDetails = {
      movie: {
      "id": 1,
      "title": "Bloodshot",
      "poster_path": "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
      "release_date": "2020-03-05",
      "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      "average_rating": 6
      }
    }

    fetchSpecificMovie.mockResolvedValueOnce(mockDetails);

    const { getByText } = render (
      <Provider store = {store}>
        <Router>
          <MovieDetails />
        </Router>
      </Provider>
    )

    const backButton = await waitForElement(() => getByText("Back to Browse"));
    expect(backButton).toBeInTheDocument();

    const titleEl = await waitForElement(() => getByText("Bloodshot"));
    expect(titleEl).toBeInTheDocument();

    const releaseEl = await waitForElement(() => getByText("Released: 2020-03-05"));
    expect(releaseEl).toBeInTheDocument();
  })
})

