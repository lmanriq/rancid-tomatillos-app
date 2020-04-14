import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers';
import { createStore } from 'redux';

describe('Login Form', () => {
  it('should render what we expect', () => {
    const store = createStore(rootReducer)

    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    )

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByTestId('to-movie-list')).toBeInTheDocument();
  })

  it('should change values when new text is input', () => {
    const store = createStore(rootReducer)

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    )
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password')
    fireEvent.change(emailInput, {target: {value: 'joe@gmail.com'}});
    fireEvent.change(passwordInput, {target: {value: 'password123'}});
    expect(emailInput.value).toBe('joe@gmail.com');
    expect(passwordInput.value).toBe('password123');
  })
})