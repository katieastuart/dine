import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Example extends React.Component {
  componentDidMount() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(logLocation, errors)
      } else {
          alert("Geolocation is not supported by this browser")
      }
      
      function logLocation(informationFromGetUserLocation) {
          console.log(informationFromGetUserLocation)
      }

      function errors(errorInformation) {
          // console.log(errorInformation)
          if (errorInformation) {
              alert("please allow location information to use website")
          }
      }
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