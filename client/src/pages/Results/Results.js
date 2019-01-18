import React, { Component } from "react";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import { Media, Button } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import { MyContext } from '../../App';

class Results extends Component {
  state = {
    restaurants: []
  };

  componentDidMount() {
    this.loadResults();
  }

  loadResults = () => {
    API.findAllResults()
      .then(res =>
        this.setState({ restaurants: res.data[0].user_restaurant }, () => {
          console.log(this.state.restaurants);
        })
      )
      .catch(err => console.log(err));
  };

  favoriteRestaurant = () => {
    API.addFavorite()
  };

  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          if(!context.state.loggedIn) {
            return <Redirect to={{pathname: "/"}}/>
          }

          return (
              <Container>
               {this.state.restaurants.map(restaurant => (
                <Media key={restaurant.id}>
                  <Media left href="#">
                    <Media object src={restaurant.restaurant_photo_reference} alt={restaurant.restaurant_name}/>
                  </Media>
                  <Media body>
                    <Media heading>
                    {restaurant.restaurant_name}
                    </Media>
                    <p>Rating: {restaurant.restaurant_rating}</p>
                    <p>Price level: {restaurant.restaurant_price_level}</p>
                    <a href={"https://www.google.com/maps/dir//" + restaurant.restaurant_address} target="_blank"><Button>Directions</Button></a>
                    <Button onClick={this.favoriteRestaurant}>Favorite</Button>
                  </Media>
                </Media>
               ))}
            </Container>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Results;
