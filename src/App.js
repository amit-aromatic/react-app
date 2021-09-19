import logo from './logo.svg';
import React from "react";

import Login from './components/Login/Login';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App()  {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <a className="navbar-brand" href="/"><img src={logo} width="30"  alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">

                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/login">Login</Link>
                        </li>
                      </ul>

                  </div>
                </div>

            </div>
          </nav>
        </header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
