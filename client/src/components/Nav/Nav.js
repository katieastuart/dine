import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

export default class Example extends React.Component {

  state = {
    collapsed: true
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
        
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" to="/">dine<span className="sr-only">(current)</span></Link>
            </NavItem>
          </Nav>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/search">Search<span className="sr-only">(current)</span></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/results">Results<span className="sr-only">(current)</span></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/favorites">Favorites<span className="sr-only">(current)</span></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/logout">Log Out<span className="sr-only">(current)</span></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
