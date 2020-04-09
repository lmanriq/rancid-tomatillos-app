import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

describe('Login Page', () => {
  it('Should render what we expect', () => {
    const store = createStore(rootReducer)
    const { getByText } = render (
      <Provider store = {store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    )
    expect(getByText('Movie Of The Day')).toBeInTheDocument()
  })
})