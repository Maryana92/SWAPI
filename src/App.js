import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage';
import PeoplePage from './PeoplePage';
import FilmsPage from './FilmsPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>Star Wors</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/people">People</NavLink>
          <NavLink to="/fims">Films</NavLink>
        </div>

        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path="/fims" component={FilmsPage} />
            <Route render={ () => <h1>Page not found</h1> } />
          </Switch>
        </div>
      </div>
      
    );
  }
}

export default App;
