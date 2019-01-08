import React from 'react';
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import API from "../../utils/API";

export default class Example extends React.Component {

  state = {
    latitude: "",
    longitude: "",
    foodType: "mexican+food",
    // max distance is 50000.
    distance: "1000",
    // 0 is the most affortable and lowest option.
    minPrice: "0",
    // 4 is the most expensive and the option hightest.
    // search needs to be minprice 0 and maxprice 1. Can't be minprice 0 and maxprice 0 because if there are no 0 ratings in search. No results will be displayed.
    maxPrice: "4"
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

  googleAPICall = () => {
    API.google(this.state)
      .then(res => console.log(res.data))
  }

    render() {
      return (
        <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <Button onClick={this.googleAPICall}>Yes</Button>
          <Button>No</Button>
        </CardBody>
      </Card>
      );
    }
  }