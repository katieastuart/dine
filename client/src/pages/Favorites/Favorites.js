import React, { Component } from "react";
import { Card, Button, CardImg, CardTitle, CardColumns, CardBody } from 'reactstrap';
import { Container } from "../../components/Grid";
import {Redirect} from 'react-router-dom';
import { MyContext } from '../../App';
import API from "../../utils/API";

class Favorite extends Component {
  state = {
    favorites: []
  };

  componentDidMount() {
    this.loadFavorites();
  }

  loadFavorites = () => {
    API.findAllFavorites()
      .then(res =>
        this.setState({ favorites: res.data[0].user_favorite }, () => {
          console.log(this.state.favorites);
        })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          if(!context.state.loggedIn){
            return <Redirect to={{pathname: "/"}}/>
          }
          
          return(
            <Container>
                <CardColumns>
                {this.state.favorites.map(favorite => (
                  <Card key={favorite.id}>
                    <CardImg top width="100%" src={favorite.restaurant_photo_reference} alt={favorite.restaurant_name} />
                    <CardBody>
                      <CardTitle>{favorite.restaurant_name} - {favorite.restaurant_price_level}</CardTitle>
                      <a href={"https://www.google.com/maps/dir//" + favorite.restaurant_address} target="_blank"><Button>Directions</Button></a>
                    </CardBody>
                  </Card>
                ))}
              </CardColumns>
            </Container>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Favorite;
