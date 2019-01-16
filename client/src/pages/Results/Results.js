import React, { Component } from "react";
import ResultsObject from "../../components/ResultsObject";
import { Container } from "../../components/Grid";
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

          return (
            <Container>
              <ResultsObject />
            </Container>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Detail;
