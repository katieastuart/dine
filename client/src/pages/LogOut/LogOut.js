import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import { MyContext } from '../../App';

class Detail extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          if(!context.state.loggedIn) {
            return <Redirect to={{pathname: "/"}}/>
          }
          if(context.state.loggedIn) {
            context.state.first_name = ""
            context.state.last_name = ""
            context.state.email = ""
            context.state.password = ""
            context.state.loggedIn = false

            return <Redirect to={{pathname: "/"}}/>
          }
        }}
      </MyContext.Consumer>
    )
  }
}

export default Detail;
