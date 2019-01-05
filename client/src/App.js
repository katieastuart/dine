import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Results from "./pages/Results";
import Favorites from "./pages/Favorites";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/search" component={Detail} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/favorites" component={Favorites} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
