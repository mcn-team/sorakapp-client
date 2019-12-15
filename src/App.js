import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import { Home } from "./pages/home.pages";
import { Filler } from "./pages/filler.pages";
import { Login } from "./pages/login.pages";

import './App.css';

const renderPrivatePage = (component) => {
    const isLogged = localStorage.getItem('logged');

    if (isLogged === 'false') {
        return (props) => {
            return (
                <Redirect to={{ pathname: '/login', state: { from: props.location }} } />
            );
        };
    }

    return () => {
        return component;
    };
};

function App() {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  <Link className="App-link" to="/">Home</Link>
                  <Link className="App-link" to="/filler">Filler</Link>
              </header>
              <Switch>
                  <Route exact path="/" render={renderPrivatePage(<Home/>)} />
                  <Route path="/filler" render={renderPrivatePage(<Filler/>)} />
                  <Route path="/login">
                      <Login />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
