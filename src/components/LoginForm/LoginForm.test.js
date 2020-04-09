import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';
// import { fetchRatings, postUser } from '../../apicalls';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers';
import { createStore } from 'redux';
// jest.mock('../../apiCalls');

describe('Login Form', () => {
  it('Should render what we expect', async () => {
    const store = createStore(rootReducer)

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    )
  })
})