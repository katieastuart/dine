import React, { Component } from "react";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import { Row, Col, Card, CardImg, CardBody, Button, Form, Label, Input, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Modal from "../../components/Modal";
import treatSearch from "./treatSearch.json";
import foodSearch from "./foodSearch.json";
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
    maxPrice: 0,
    redirect: false,
    initialQuestions: false,
    errorModal: false,
    browserUnsupportedModal: false
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
          this.setState({
            errorModal: true
          })
        }
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(storeLocation, errors);
      } else {
        this.setState({
          browserUnsupportedModal: true
        })
      }
    }, 500);
  };

  componentWillUnmount() {
    clearTimeout(timerId);
  }

  toggleForErrorModal = () => {
    this.setState({
      errorModal: false
    });
  }

  toggleForBrowserUnsupportedModal = () => {
    this.setState({
      browserUnsupportedModal: false
    });
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
    API.google(this.state).then(res => this.addRestaurantData(res.data));
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
                <Modal isOpen={this.state.errorModal}>
                  <ModalHeader toggle={this.toggleForErrorModal}>Error, userlocation block</ModalHeader>
                  <ModalBody>Uh Oh, it looks like you have blocked your location. You cannot use our website unless you allow us to have your location. Here is how to fix it.</ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleForErrorModal}>Close</Button>{' '}
                  </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.browserUnsupportedModal}>
                  <ModalHeader toggle={this.toggleForBrowserUnsupportedModal}>Error, browser does not support user location</ModalHeader>
                  <ModalBody>Please use one of following web broswers to use our site.</ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleForBrowserUnsupportedModal}>Close</Button>{' '}
                  </ModalFooter>
                </Modal>
                <Nav />
                <Container>
                  <div className="container mainForm">
                    <Label>Distance</Label>
                    <div className="mainBox">
                      <div className="boxLeft">1 mile</div>
                      <div className="boxRight">5 miles</div>
                    </div>
                    <InputRange
                      className="rangeSlider"
                      step={1000}
                      maxValue={5000}
                      minValue={1000}
                      value={this.state.distance}
                      onChange={distance => this.setState({ distance })}
                    />
                    {/* <Label>Min Price</Label>

                    <InputRange
                      className="rangeSlider"
                      step={1}
                      maxValue={4}
                      minValue={0}
                      value={this.state.minPrice}
                      onChange={minPrice => this.setState({ minPrice })}
                    /> */}
                    <Label>Price</Label>
                    <div className="mainBox">
                      <div className="boxLeft">$</div>
                      <div className="boxRight">$$$$$</div>
                    </div>

                    <InputRange
                      className="rangeSlider"
                      step={1}
                      maxValue={4}
                      minValue={0}
                      value={this.state.maxPrice}
                      onChange={maxPrice => this.setState({ maxPrice })}
                    />

                    <Form>
                      <FormGroup row>
                        <Col sm={10}>
                          <p>Please select treat or food</p>
                          <Button className="treatButton" onClick={this.setTreatOrFood} value={"treat"}>
                            treat
                          </Button>
                          <Button className="foodButton" onClick={this.setTreatOrFood} value={"food"}>food</Button>
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
              <Container className="foodCardContainer">
                <Modal />
                {
                  <Card className="foodCard">
                    <h1 className="cardHeader" draggable="true">
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
                      <Row className="buttonRow">
                        <div className="centerButtons">
                          <Button
                            className="yesButton"
                            value={this.state.searchSelection.name}
                            onClick={this.googleAPICall}>Yes</Button>
                          <Button onClick={this.incrementIndex}>No</Button>
                        </div>
                      </Row>
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
