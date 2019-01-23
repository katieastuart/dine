import React, { Component } from "react";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import Modal from "../../components/Modal";
import treatSearch from "./treatSearch.json";
import foodSearch from "./foodSearch.json";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
import Nav from "../../components/Nav";
import "../../components/RangeSlider/RangeSlider.css";
import { MyContext } from "../../App";
import "./Search.css"

var timerId = null;

class Search extends Component {
  state = {
    index: 0,
    searchSelection: treatSearch,
    latitude: "",
    longitude: "",
    // max distance is 50000.
    distance: 1000,
    // 0 is the most affortable and lowest option.
    minPrice: 0,
    // 4 is the most expensive and the hightest option.
    maxPrice: 4,
    redirect: false,
    initialQuestions: false,
    modal: false
  };

  componentDidMount = () => {
    timerId = setTimeout(() => {
      var storeLocation = userLocationInformation => {
        var userLatitude = userLocationInformation.coords.latitude;
        var userLongitude = userLocationInformation.coords.longitude;
        this.setState({ latitude: userLatitude, longitude: userLongitude });
      };

      var errors = errorInformation => {
        if (errorInformation) {
          alert("please allow location information to use website");
        }
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(storeLocation, errors);
      } else {
        alert("Geolocation is not supported by this browser");
      }
    }, 500);
  };
  componentWillUnmount() {
    clearTimeout(timerId);
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  clearLastSearch = () => {
    API.deleteLastResults().then(res => console.log(res));
  }

  setTreatOrFood = (event) => {
    if (event.target.value === "treat") {
      this.setState({
        searchSelection: treatSearch[this.state.index],
        initialQuestions: true
      })
      this.clearLastSearch()
    } else {
      this.setState({
        searchSelection: foodSearch[this.state.index],
        initialQuestions: true
      })
      this.clearLastSearch()
    }
  };

  incrementIndex = () => {
    if (this.state.index === 5) {
      this.setState({
        redirect: true
      });
    }

    if (this.state.searchSelection === treatSearch[this.state.index]) {
      this.setState({
        index: this.state.index + 1,
        searchSelection: treatSearch[this.state.index + 1]
      });
    } else {
      this.setState({
        index: this.state.index + 1,
        searchSelection: foodSearch[this.state.index + 1]
      });
    }
  };


  addRestaurantData = (res) => {
    console.log(res)
    if (res.response.length > 0) {
      for (var i = 0; i < 5; i++) {
        if (res.response[i] !== undefined) {
          API.addRestaurant(
            res.type,
            res.response[i].name,
            res.response[i].formatted_address,
            res.response[i].place_id,
            res.response[i].rating,
            res.response[i].price_level,
            res.response[i].photos[0].photo_reference)
            .then(res => { })
        }
      }
    }
  };

  googleAPICall = () => {
    console.log(this.state.searchSelection);
    API.google(this.state).then(res => this.addRestaurantData(res.data));
    // API.google(this.state).then(res => console.log(res.data.response));

    this.incrementIndex();
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          if (!context.state.loggedIn) {
            return <Redirect to="/" />;
          }

          if (this.state.redirect) {
            return <Redirect to="/results" />;
          }

          if (!this.state.initialQuestions) {
            return (
              <div>
                <Nav />
                <Container>
                  <div className="container mainForm">
                    <Label>Distance</Label>
                    <InputRange
                      className="rangeSlider"
                      step={1000}
                      maxValue={5000}
                      minValue={1000}
                      value={this.state.distance}
                      onChange={distance => this.setState({ distance })}
                    />
                    <Label>Min Price</Label>

                    <InputRange
                      className="rangeSlider"
                      step={1}
                      maxValue={4}
                      minValue={0}
                      value={this.state.minPrice}
                      onChange={minPrice => this.setState({ minPrice })}
                    />
                    <Label>Max Price</Label>

                    <InputRange
                      className="rangeSlider"
                      step={1}
                      maxValue={4}
                      minValue={0}
                      value={this.state.maxPrice}
                      onChange={maxPrice => this.setState({ maxPrice })}
                    />

                    <Form>
                      {/* <FormGroup row>
                      <Label sm={2}>Distance</Label>
                      <Col sm={10}>
                        <Input
                          onChange={this.handleInputChange}
                          value={this.state.distance}
                          name="distance"
                          type="text"
                        />
                      </Col>
                    </FormGroup> */}

                      {/* <FormGroup row>
                      <Label sm={2}>Min Price</Label>
                      <Col sm={10}>
                        <Input
                          onChange={this.handleInputChange}
                          value={this.state.minPrice}
                          name="minPrice"
                          type="text"
                        />
                      </Col>
                    </FormGroup> */}

                      {/* <FormGroup row>
                      <Label sm={2}>Max Price</Label>
                      <Col sm={10}>
                        <Input
                          onChange={this.handleInputChange}
                          value={this.state.maxPrice}
                          name="maxPrice"
                          type="text"
                        />
                      </Col>
                    </FormGroup> */}

                      <FormGroup row>
                        <Col sm={10}>
                          <p>Please select treat or food</p>
                          <Button onClick={this.setTreatOrFood} value={"treat"}>
                            treat
                  {/* <img src="../../images/ice-cream.png" /> */}
                          </Button>
                          <Button onClick={this.setTreatOrFood} value={"food"}>food</Button>
                        </Col>
                      </FormGroup>
                    </Form>


                  </div>
                </Container>
              </div>
            );
          }

          return (
            <div>
              <Nav />
              <Container>
                <Modal />
                {
                  <Card>
                    <h1 style={{ background: "pink" }} draggable="true">
                      {this.state.searchSelection.name}
                    </h1>
                    <CardImg
                      id="foodCardType"
                      className="foodCard"
                      top
                      width="100%"
                      src={require("../../images/foodThumbnails/" + this.state.searchSelection.image)}
                      alt={this.state.searchSelection.name}
                      value={this.state.searchSelection.name}
                    />

                    <CardBody>
                      <Button
                        value={this.state.searchSelection.name}
                        onClick={this.googleAPICall}
                      >
                        Yes
                    </Button>
                      <Button onClick={this.incrementIndex}>No</Button>
                    </CardBody>
                  </Card>
                }
              </Container>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Search;
