import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe('Movie Details', () => {
  it('Should render what we expect', () => {
    const store = createStore(rootReducer)
    const { getByText } = render (
      <Provider store = {store}>
        <Router>
            <MovieDetails />
        </Router>
      </Provider>
    )

    const mockDetails = {
        movie: {
            title: "Bloodshot",
            realese_date: "2020-03-05"
        }
    }

    const backButton = getByText("Back to Browse");
    expect(backButton).toBeInTheDocument();

    const titleEl = getByText("Bloodshot");
    expect(titleEl).toBeInTheDocument();

    const releaseEl = getByText("2020-03-05");
    expect(releaseEl).toBeInTheDocument();
  })
})

