import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import App from './App';
import LoginForm from '../LoginForm/LoginForm';
import { fetchRatings, postUser } from '../../apicalls';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import rootReducer from '../../reducers';
import { createStore } from 'redux';
jest.mock('../../apicalls');

describe('App', () => {
  it('Should render what we expect', () => {
    const store = createStore(rootReducer)

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    )
  })

  it('can have users log in', async () => {
    const store = createStore(rootReducer)

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NavBar />
          <LoginForm />
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

    const loginBtn = getByTestId('login-button');
    fireEvent.click(loginBtn);
    const welcomeMsg = await waitForElement(() => getByText('Welcome, Marge'))
    expect(welcomeMsg).toBeInTheDocument();
  })
})