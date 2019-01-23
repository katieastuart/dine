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
                  <img src={logoWhite} className="dineLogoSmall" alt="Dine" />
                </div>
                <div className="mainForm">
                  <LogInForm />
                  <div className="loginForm">
                    <label>New to Dine?</label>
                    <Row>
                      <Col sm={10}>
                        <Button
                          className="loginButton submit"
                          color="secondary"
                          onClick={context.hideLogin}
                        >
                          Sign Up
                </Button>{" "}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Container>

            );
          }

          if (context.state.showSignUp) {
            return (
              <Container>
                <div className="logoContainer">
                  <img src={logoWhite} className="dineLogoSmallTop" alt="Dine" />
                </div>
                <div className="mainForm">
                  <SignUpForm />
                  <div className="loginForm">
                    <label>Already have an account?</label>
                    <Row>
                      <Col sm={10}>
                        <Button
                          className="loginButton submit"
                          color="secondary"
                          onClick={context.hideSignUp}
                        >
                          Log In
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
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
                      <Col lg={4} />
                      <Col lg={4}>
                        <Row>
                          <Col sm={1} />
                          <Col sm={10}>
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

                          <Col sm={1} />
                        </Row>
                      </Col>
                      <Col lg={4} />
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
