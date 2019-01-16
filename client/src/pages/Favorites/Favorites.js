import React, { Component } from "react";
import FavoriteCard from "../../components/FavoriteCard";
import { Container } from "../../components/Grid";
import {Redirect} from 'react-router-dom';
import { MyContext } from '../../App';

class Favorite extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          if(!context.state.loggedIn){
            return <Redirect to={{pathname: "/"}}/>
          }
          
          return(
            <Container>
              <FavoriteCard />
            </Container>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Favorite;
