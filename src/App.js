import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage'
import PeoplePage from './people/PeoplePage';
import PeopleDetailsPage from './people/PeopleDetailsPage';


//import Films from './Components/Films';
// import Planets from './Components/Planets';
// import Species from './Components/Species';




const App = () => (
  <div className="App">
    <header>
      <h1 className="title">Star Wars</h1>
    </header>
    <nav className="NavLink">
      <ul>
        <li><NavLink className="NavLink-items" to="/">Home</NavLink></li>
        <li><NavLink className="NavLink-items" to="/people">People</NavLink></li>
        {/* <li><NavLink className="NavLink-items" to="/films">Films</NavLink></li>
        <li><NavLink className="NavLink-items" to="/planets">Planets</NavLink></li>
        <li><NavLink className="NavLink-items" to="/species">Species</NavLink></li> */}
      </ul>
    </nav>
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/people/:peopleId" component={PeopleDetailsPage} />
        {/* <Route exact path="/films" component={Films} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/species" component={Species} />
        <Route render={() => <div>Page not found</div>} /> */}
      </Switch>
    </section>
  </div>
);
export default App;