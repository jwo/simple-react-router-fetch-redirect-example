import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Form from './Form'
import RepoList from './RepoList'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/"><h1>Repo List</h1></Link>

          <Route
            exact
            path="/"
            component={Form}
          />
          <Route
              path={"/users/:username"}
              component={RepoList}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
