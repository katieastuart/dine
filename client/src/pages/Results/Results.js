import React, { Component } from "react";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import { Media, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { MyContext } from '../../App';
import Nav from "../../components/Nav";
import "./Results.css"
import StarRatings from 'react-star-ratings';

var timerId = null;

class Results extends Component {
  state = {
    restaurants: []
  };

  componentDidMount() {
    setTimeout(() =>{
      this.loadResults();
    }, 1600)
  }

  componentWillUnmount() {
    clearTimeout(timerId);
  }

  loadResults = () => {
    API.findAllResults()
      .then(res =>
        this.setState({ restaurants: res.data[0].user_restaurant }, () => {
        })
      )
      .catch(err => console.log(err));
  };

  favoriteRestaurant = (id) => {
    API.addFavorite(id)
  };

  TransformPriceLevel = (priceLevel) => {
    if (priceLevel === "1") {
      return <p>$</p>;
    }
    if (priceLevel === "2") {
      return <p>$$</p>;
    }
    if (priceLevel === "3") {
      return <p>$$$</p>;
    }
    if (priceLevel === "4") {
      return <p>$$$$</p>;
    }
    if (priceLevel === "5") {
      return <p>$$$$$</p>;
    }
  };

  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          if (!context.state.loggedIn) {
            return <Redirect to={{ pathname: "/" }} />
          }

          return (
            <div>
              <Nav />
              <Container>
              <ListGroup>
                {this.state.restaurants.map(restaurant => (
                  <ListGroupItem key={restaurant.id} id="listGroupItem">
                    <Media className="resultsContainer">
                      <Media left href="#">
                        <Media className="resultsImg" object src={restaurant.restaurant_photo_reference} alt={restaurant.restaurant_name} />
                      </Media>
                      <Media body>
                        <Media heading className="resultsTitle">
                          {restaurant.restaurant_name}
                        </Media>
                        <StarRatings
                          className="resultRating"
                          rating={parseFloat(restaurant.restaurant_rating)}
                          starDimension="30px"
                          starSpacing="15px"
                        />
                        <div className="resultPrice">{this.TransformPriceLevel(restaurant.restaurant_price_level)}</div>
                        <a href={"https://www.google.com/maps/dir//" + restaurant.restaurant_address} target="_blank"><Button className="directionBtn">Directions</Button></a>
                        <Button className="favoriteBtn" onClick={() => { this.favoriteRestaurant(restaurant.id) }}>Favorite</Button>
                      </Media>
                    </Media>
                  </ListGroupItem>
                ))}
                </ListGroup>
              </Container>
            </div>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Results;
