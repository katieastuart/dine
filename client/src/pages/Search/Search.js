import React, { Component } from "react";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import Modal from "../../components/Modal";
import treatSearch from "./treatSearch.json";
import foodSearch from "./foodSearch.json"
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import {Redirect} from 'react-router-dom';

class Search extends Component {
  state = {
    index: 0,
    searchSelection: treatSearch,
    latitude: "",
    longitude: "",
    // foodType: "",
    // max distance is 50000.
    distance: "1000",
    // 0 is the most affortable and lowest option.
    minPrice: "0",
    // 4 is the most expensive and the hightest option.
    // search needs to be minprice 0 and maxprice 1. Can't be minprice 0 and maxprice 0 because if there are no 0 ratings in search. No results will be displayed.
    maxPrice: "4",
    redirect: false,
    initialQuestions: false,
    loggedIn: this.props.location.state.loggedIn,
    modal: false
  };
 
  componentDidMount = () => {

    var storeLocation = (userLocationInformation) => {
        var userLatitude = userLocationInformation.coords.latitude;
        var userLongitude = userLocationInformation.coords.longitude;
        this.setState({latitude: userLatitude, longitude: userLongitude }) 
      
    }

    var errors = (errorInformation) => {
      if (errorInformation) {
          alert("please allow location information to use website")
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(storeLocation, errors)
    } else {
        alert("Geolocation is not supported by this browser")
    }
    
  } 

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  setFood = (event) => {
    event.preventDefault();

    this.setState({
      searchSelection: foodSearch[this.state.index]
    })
  }

  setTreat = (event) => {
    event.preventDefault();

    this.setState({
      searchSelection: treatSearch[this.state.index]
    })
  }

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      initialQuestions: true
    })
  }

  incrementIndex = () => {
    if (this.state.index === 5) {
      this.setState({
        redirect: true
      });
    }

    if (this.state.searchSelection === treatSearch[this.state.index] ) {
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
  }
 
  googleAPICall = () => {
    console.log(this.state.searchSelection)
    API.google(this.state).then(res => console.log(res.data))
    
      if (this.state.index === 5) {
        this.setState({
          redirect: true
        });
      }

      if (this.state.index < 5) {
        if (this.state.searchSelection === treatSearch[this.state.index] ) {
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
      }
    }
  
    render() {
      if(!this.state.loggedIn){
        return <Redirect to="/"/>
      }

      if(!this.state.initialQuestions) {
        return (
          <Container>
            <Form>

              <FormGroup row>
                <Label sm={2}>set distance 1000-50000</Label>
                <Col sm={10}>
                  <Input onChange={this.handleInputChange} value={this.state.distance} name="distance" type="text" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>set minPrice 0-4</Label>
                <Col sm={10}>
                  <Input onChange={this.handleInputChange} value={this.state.minPrice} name="minPrice" type="text" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>set maxPrice 0-4</Label>
                <Col sm={10}>
                  <Input onChange={this.handleInputChange} value={this.state.maxPrice} name="maxPrice" type="text" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm={10}>
                <p>Please select treat or food</p>
                <Button onClick={this.setTreat}>treat</Button>
                <Button onClick={this.setFood}>food</Button>
                </Col>
              </FormGroup>
             
              <Button onClick={this.handleFormSubmit}>submit</Button>
            </Form>
          </Container>
        );
      }

      if(this.state.redirect){
        return <Redirect to="/results"/>
      }
      
      return (
        <Container>
          <Modal />

            {
                <Card>
                  <h1>{this.state.searchSelection.name}</h1>
                  <CardImg top width="100%" src={this.state.searchSelection.image} alt="Card image cap" />
                
                  <CardBody>
                    <Button onClick={this.googleAPICall}>Yes</Button>
                    <Button onClick={this.incrementIndex}>No</Button>
                  </CardBody>
                </Card>
            }
     
      </Container>
    );
  }
}

export default Search;
