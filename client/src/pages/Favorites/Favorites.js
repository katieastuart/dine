import React, { Component } from "react";
import FavoriteCard from "../../components/FavoriteCard";
import { Container } from "../../components/Grid";
import API from "../../utils/API";

class Favorite extends Component {
 

  render() {
    return (
      <Container>
        <FavoriteCard />
     
      </Container>
    );
  }
}

export default Favorite;
