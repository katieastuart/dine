import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResultsObject from "../../components/ResultsObject";
import { Container } from "../../components/Grid";

class Detail extends Component {
 

  render() {
    return (
      <Container>
        <ResultsObject />
     
      </Container>
    );
  }
}

export default Detail;
