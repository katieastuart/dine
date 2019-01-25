import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import logo from "../../images/logoBlack.png";
import "./Nav.css";

export default class Example extends React.Component {
  state = {
    collapsed: true,
    directionsModal: false
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  toggleDirectionsModal = () => {
    this.setState({
      directionsModal: !this.state.directionsModal
    });
  }

  render() {
    return (
      <div>
         <Modal isOpen={this.state.directionsModal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggleDirectionsModal}>Getting started with Dine</ModalHeader>
          <ModalBody>
            <ul>
              <li>To begin a new search for delicious food near you click on "New Search." Select your search parameters and then begin making your food choices</li>
              <li>To view results from previous search select "Results."</li>
              <li>To save an item to your Favorites list click on the "favorite" button on Results page.</li>
              <li>To get directions to the resturant click on "directions" on either the Results or Favorites page.</li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggleDirectionsModal}>Close</Button>{' '}
          </ModalFooter>
        </Modal>

        <Navbar color="faded" light>
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                <img className="navLogo" src={logo} alt="Mini Logo" />
                <span className="sr-only">(current)</span>
              </Link>
            </NavItem>
          </Nav>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link onClick={this.toggleNavbar} className="nav-link menuItem" to="/home">
                  Home<span className="sr-only">(current)</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link onClick={this.toggleNavbar} className="nav-link menuItem" to="/search">
                  Search<span className="sr-only">(current)</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link onClick={this.toggleNavbar} className="nav-link menuItem" to="/results">
                  Results<span className="sr-only">(current)</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link onClick={this.toggleNavbar} className="nav-link menuItem" to="/favorites">
                  Favorites<span className="sr-only">(current)</span>
                </Link>
              </NavItem>
              <NavItem className="d-flex flex-row-reverse">
                <button onClick={this.toggleDirectionsModal} className="nav-link howToStyling">
                  Help<span className="sr-only">(current)</span>
                </button>
              </NavItem>
              <NavItem>
                <Link onClick={this.toggleNavbar} className="nav-link menuItem" to="/logout">
                  Log Out<span className="sr-only">(current)</span>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
