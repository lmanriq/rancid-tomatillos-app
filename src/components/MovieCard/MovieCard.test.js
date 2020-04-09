import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from './MovieCard';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe('Movie Card', () => {
  it('should render what we expect', () => {
    const store = createStore(rootReducer);

    const movie = {
      "id": 1,
      "title": "Bloodshot",
      "poster_path": "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
      "release_date": "2020-03-05",
      "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      "average_rating": 7.5
    }

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterImage={movie.poster_path}
            backdropImage={movie.backdrop_path}
            releaseDate={movie.release_date}
            overview={movie.overview}
            averageRating={movie.average_rating}
          />
        </Router>
      </Provider>
    )

    expect(getByText('Bloodshot')).toBeInTheDocument();
    expect(getByText('Avg. Rating: 7.5')).toBeInTheDocument();
    expect(getByText('View Movie Details')).toBeInTheDocument();
  })
})