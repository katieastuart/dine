import React, { Component } from "react";
import { Link } from "react-router-dom";
import FavoriteCard from "../../components/FavoriteCard";
import { Container } from "../../components/Grid";

class Detail extends Component {
 

  render() {
    return (
      <Container>
        <FavoriteCard />
     
      </Container>
    );
  }
}

export default Detail;
