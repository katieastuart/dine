import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logoBlack.png";
import "./Nav.css";

export default class Example extends React.Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div>
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
