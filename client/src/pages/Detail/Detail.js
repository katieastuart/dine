import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import SearchCard from "../../components/SearchCard"

class Detail extends Component {
  state = {
    book: {}
  };
  
  render() {
    return (
      <Container>
        <SearchCard />
        
      </Container>
    );
  }
}

export default Detail;
