import React, { Component } from "react";
import { Col, Button, Row } from "reactstrap";
import { Container } from "../../components/Grid";
import LogInForm from "../../components/LogInForm";
import SignUpForm from "../../components/SignUpForm";
import "./Profile.css";
import logoWhite from "../../images/logoWhite.png";
import { MyContext } from "../../App";

class Profile extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          if (context.state.showLogIn) {
            return (
              <Container>
                <div className="logoContainer">
                  <img src={logoWhite} className="dineLogo" alt="Dine" />
                </div>
                <LogInForm />;
                <Button
                  className="loginButton"
                  color="secondary"
                  onClick={context.hideLogin}
                >
                  Sign Up
                </Button>{" "}
              </Container>
            );
          }

          if (context.state.showSignUp) {
            return (
              <Container>
                <div className="logoContainer">
                  <img src={logoWhite} className="dineLogo" alt="Dine" />
                </div>
                <SignUpForm />
                <Button
                  className="loginButton"
                  color="secondary"
                  onClick={context.hideSignUp}
                >
                  Log In
                </Button>{" "}
              </Container>
            );
          }

          return (
            <Container>
              <div className="loginInput">
                <div className="logoContainer">
                  <img src={logoWhite} className="dineLogo" alt="Dine" />
                  <div>
                    <Row>
                      <Col lg="4" />
                      <Col lg="4">
                        <Row>
                          <Col sm="1" />
                          <Col sm="10">
                            <div className="buttons">
                              <Button
                                className="loginButton leftButton"
                                color="secondary"
                                onClick={context.showLogIn}
                              >
                                Log In
                              </Button>
                              <Button
                                className="loginButton"
                                color="secondary"
                                onClick={context.showSignUp}
                              >
                                Sign Up
                              </Button>{" "}
                            </div>
                          </Col>

                          <Col sm="1" />
                        </Row>
                      </Col>
                      <Col lg="4" />
                    </Row>
                  </div>
                </div>
              </div>
            </Container>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Profile;
