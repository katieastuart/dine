import React, { Component } from "react";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import Modal from "../../components/Modal";
import treatSearch from "./treatSearch.json";
import foodSearch from "./foodSearch.json";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import { MyContext } from '../../App';


class Search extends Component {
  state = {
    index: 0,
    searchSelection: treatSearch,
    latitude: "",
    longitude: "",
    // max distance is 50000.
    distance: "1000",
    // 0 is the most affortable and lowest option.
    minPrice: "0",
    // 4 is the most expensive and the hightest option.
    maxPrice: "4",
    redirect: false,
    initialQuestions: false,
    modal: false
  };

  componentDidMount = () => {
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
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  setTreatOrFood = (event) => {
    if (event.target.value === "treat") {
      this.setState({
        searchSelection: treatSearch[this.state.index],
        initialQuestions: true
      })
    } else {
      this.setState({
        searchSelection: foodSearch[this.state.index],
        initialQuestions: true
      })
    }
  }

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

  googleAPICall = () => {
    console.log(this.state.searchSelection);
    API.google(this.state).then(res => console.log(res.data));

    this.incrementIndex()
  };

  render() {
    return(
      <MyContext.Consumer>
        {(context) => {

        if (!context.state.loggedIn) {
          return <Redirect to="/" />;
        }
        
        if (this.state.redirect) {
          return <Redirect to="/results" />;
        }

        if (!this.state.initialQuestions) {
          return (
            <Container>
              <Form>
                <FormGroup row>
                  <Label sm={2}>Distance</Label>
                  <Col sm={10}>
                    <Input onChange={this.handleInputChange} value={this.state.distance} name="distance" type="text"/>
                  </Col>
                </FormGroup>
    
                <FormGroup row>
                  <Label sm={2}>Min Price</Label>
                  <Col sm={10}>
                    <Input onChange={this.handleInputChange} value={this.state.minPrice} name="minPrice" type="text"/>
                  </Col>
                </FormGroup>
    
                <FormGroup row>
                  <Label sm={2}>Max Price</Label>
                  <Col sm={10}>
                    <Input onChange={this.handleInputChange} value={this.state.maxPrice} name="maxPrice" type="text"/>
                  </Col>
                </FormGroup>
    
                <FormGroup row>
                  <Col sm={10}>
                    <p>Please select treat or food</p>
                    <Button onClick={this.setTreatOrFood} value={"treat"}>treat</Button>
                    <Button onClick={this.setTreatOrFood} value={"food"}>food</Button>
                  </Col>
                </FormGroup>
    
              </Form>
            </Container>
          );
        }
    
        return (
          <Container>
            <Modal />
    
            {
              <Card>
                <h1 style={{ background: "pink" }} draggable="true">
                  {this.state.searchSelection.name}
                </h1>
                <CardImg
                  className="foodCard"
                  top
                  width="100%"
                  src={this.state.searchSelection.image}
                  alt="Card image cap"
                  draggable="true"
                />
    
                <CardBody>
                  <Button onClick={this.googleAPICall}>Yes</Button>
                  <Button onClick={this.incrementIndex}>No</Button>
                </CardBody>
              </Card>
            }
          </Container>
        );
        }}

      </MyContext.Consumer>

    )
  }
}

export default Search;
