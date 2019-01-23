import React, { Component } from "react";
import { Card, Button, CardImg, CardTitle, CardColumns, CardBody, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container } from "../../components/Grid";
import { Redirect } from "react-router-dom";
import { MyContext } from "../../App";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import "./Favorites.css"

var timerId = null;

export default class Favorite extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      favorites: [],
      types: []
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentDidMount() {
    timerId = setTimeout(() => {
      this.loadFavorites();
      this.findFavoritesTypes();
    }, 500)
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

  findFavoritesTypes = () => {
    API.findFavoriteTypes()
      .then(res =>
        this.setState({ types: res.data }, () => {
          console.log(this.state.types);
        })
      )
      .catch(err => console.log(err));
  };

  filterFavorites = (event) => {
    API.findAllType(event.target.value)
      .then(res =>
        this.setState({ favorites: res.data[0].user_favorite }, () => {
        })
      )
      .catch(err => console.log(err));
  };

  deleteFavorite = (event) => {
    console.log(event.target.value)
    API.deleteFavorite(event.target.value)
      .then(res => this.loadFavorites()
      )
      .catch(err => console.log(err));
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

  resetFavorites = (event) => {
    this.loadFavorites()
  };

  componentWillUnmount() {
    clearTimeout(timerId)
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          if (!context.state.loggedIn) {
            return <Redirect to={{ pathname: "/" }} />;
          }
          return (
            <div>
              <Nav />
              <Container>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle className="filterDropdown" caret>
                    Sort
                  </DropdownToggle>
                  <DropdownMenu>
                    {this.state.types.map(type => (
                      <DropdownItem key={type.restaurant_type} value={type.restaurant_type} onClick={this.filterFavorites}>{type.restaurant_type}</DropdownItem>
                    ))}
                    <DropdownItem onClick={this.resetFavorites}>All</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <CardColumns>
                  {this.state.favorites.map(favorite => (
                    <Card key={favorite.id}>
                    <button value={favorite.id} onClick={this.deleteFavorite}>x</button>
                      <CardImg
                        top
                        width="100%"
                        src={favorite.restaurant_photo_reference}
                        alt={favorite.restaurant_name}
                      />
                      <CardBody>
                        <CardTitle>
                          {favorite.restaurant_name} -{" "} {this.TransformPriceLevel(favorite.restaurant_price_level)}
                        </CardTitle>
                        <a
                          href={
                            "https://www.google.com/maps/dir//" +
                            favorite.restaurant_address
                          }
                          target="_blank"
                        >
                          <Button className="directionsButton">Directions</Button>
                        </a>
                      </CardBody>
                    </Card>
                  ))}
                </CardColumns>
              </Container>
             </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}