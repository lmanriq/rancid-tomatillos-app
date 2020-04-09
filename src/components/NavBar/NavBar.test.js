import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import rootReducer from '../../reducers';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'


describe('Nav Bar', () => {
  it('Should render what we expect', () => {
    const store = createStore(rootReducer)
    const { getByText } = render (
      <Provider store = {store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    )

    const headEl = getByText('Rancid Tomatillos')
    expect(headE)
  })
})