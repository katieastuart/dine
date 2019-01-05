import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SearchCard from "../../components/SearchCard"

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  //   axios({
//     method: "GET",
//     url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=cupcakes&opennowlocation=40.601855,-111.8919896&radius=10000&key=AIzaSyAN-Maosba3R24Xqxv3aT-ZHcZ16dbzbdA"
// }).then(function (response) {
//     // console.log(response.data)
//     res.json(response.data.results)
// })

googleAPICall() {
  // axios({
  //   method: "GET",
  //   url: "/apiCall"
  // }).then(function (response) {
  //   console.log(response)
  // })
 alert("ahah")
}


  render() {
    return (
      <Container>
        <SearchCard />
     
      </Container>
    );
  }
}

export default Detail;
