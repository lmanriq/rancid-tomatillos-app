import React from 'react';
import './App.css';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import NavBar from '../NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';


const App = () => {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/" exact
            component={() =>
              <MovieCardContainer />
            }
          />
          <Route
            path="/login" exact
            component={() =>
              <LoginPage />
            }
          />
          <Route
            path="/users/:user_id/ratings" exact
            component={() =>
              <MovieCardContainer />
            }
          />
        </Switch>
      </div>
    );
}

export default App;