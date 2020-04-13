import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import App from './App';
import { fetchRatings, postUser, fetchForMovies, fetchSpecificMovie } from '../../apicalls';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
// import NavBar from '../NavBar/NavBar'
import rootReducer from '../../reducers';
import { createStore } from 'redux';
jest.mock('../../apicalls');

describe('App', () => {
  it('Should render what we expect', () => {
    const store = createStore(rootReducer);

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

    const { getByText } = render(
      <Provider store={store}>
        <Router basename="/rancid-tomatillos-app">
          <App />
        </Router>
      </Provider>
    )

    expect(getByText('Rancid Tomatillos')).toBeInTheDocument();
  })

  it('can have users log in', async () => {
    const store = createStore(rootReducer)

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

    fetchForMovies.mockResolvedValue(mockMovies);

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router basename="/rancid-tomatillos-app">
          <App />
        </Router>
      </Provider>
    )

    const mockUser = {
      user: {
        id: 9,
        name: "Marge",
        email: "marge@turing.io"
      }
    }

    const mockRatings = {
      ratings: []
    }

    postUser.mockResolvedValueOnce(mockUser);
    fetchRatings.mockResolvedValueOnce(mockRatings);

    const toLoginForm = getByTestId('to-login-form');
    fireEvent.click(toLoginForm);
    const loginBtn = getByTestId('to-movie-list');
    fireEvent.click(loginBtn);
    const welcomeMsg = await waitForElement(() => getByText('Welcome, Marge'))
    expect(welcomeMsg).toBeInTheDocument();
  });

  it('should have a button to log out if a user is logged in', async () => {
    const store = createStore(rootReducer)
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
    const mockUser = {
      user: {
        id: 9,
        name: "Marge",
        email: "marge@turing.io"
      }
    }

    const mockRatings = {
      ratings: []
    }

    fetchForMovies.mockResolvedValue(mockMovies);

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router basename="/rancid-tomatillos-app">
          <App />
        </Router>
      </Provider>
    )
    postUser.mockResolvedValueOnce(mockUser);
    fetchRatings.mockResolvedValueOnce(mockRatings);

    const toLoginForm = getByTestId('to-login-form');
    fireEvent.click(toLoginForm);
    const loginBtn = getByTestId('to-movie-list');
    fireEvent.click(loginBtn);
    const logoutBtn = await waitForElement(() => getByTestId('logout-btn'));
    fireEvent.click(logoutBtn);
    expect(getByText('Welcome! Please Login')).toBeInTheDocument()
  })

  it('should be able to load movie details', async () => {
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

    fetchForMovies.mockResolvedValue(mockMovies);
    fetchSpecificMovie.mockResolvedValue(mockMovies[0]);

    const store = createStore(rootReducer)
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router basename="/rancid-tomatillos-app">
          <App />
        </Router>
      </Provider>
    )

    let detailsBtn = await waitForElement(() => getByTestId('1'));
    fireEvent.click(detailsBtn)
    let desc = setTimeout(() => {
      getByText("After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.")
      expect(desc).toBeInTheDocument()
    }, 1500)
  })
})