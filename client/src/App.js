import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Favorites from "./pages/Favorites";
import LogOut from "./pages/LogOut"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import API from './utils/API';

export const MyContext = React.createContext()

export class App extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    loggedIn: false
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  userSignUp = () => {
    API.signup(this.state).then(res => {
      this.setState({
      loggedIn: res.data.loggedIn,
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    })})
  }

  userLogin = () => {
    API.login(this.state).then(res => {
      this.setState({
      loggedIn: res.data.loggedIn,
      email: "",
      password: ""
    })})
  }

  render() {
    return (
      <MyContext.Provider value={
        {
          state: this.state,
          handleInputChange: this.handleInputChange,
          userSignUp: this.userSignUp,
          userLogin: this.userLogin
        }
        }>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/favorites" component={Favorites} />
              <Route exact path="/logout" component={LogOut} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </MyContext.Provider>
    )
  } 
}


export default App;
