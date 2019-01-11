import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Favorites from "./pages/Favorites";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/favorites" component={Favorites} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
