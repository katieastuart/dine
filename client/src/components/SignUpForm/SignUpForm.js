import React from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { MyContext } from "../../App";

export default class Example extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          if (context.state.loggedIn) {
            return <Redirect to={{ pathname: "/home" }} />;
          }

          return (
            <div>
              <div className="signUpForm">
                <Form>
                  <FormGroup row>
                    <Label sm={2}>First Name</Label>
                    <Col sm={10}>
                      <Input
                        onChange={context.handleInputChange}
                        type="text"
                        name="first_name"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>Last Name</Label>
                    <Col sm={10}>
                      <Input
                        onChange={context.handleInputChange}
                        type="text"
                        name="last_name"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleEmail2" sm={2}>
                      Email
                    </Label>
                    <Col sm={10}>
                      <Input
                        onChange={context.handleInputChange}
                        type="email"
                        name="email"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleEmail2" sm={2}>
                      Password
                    </Label>
                    <Col sm={10}>
                      <Input
                        onChange={context.handleInputChange}
                        type="password"
                        name="password"
                      />
                    </Col>
                  </FormGroup>

                  <Button
                    onClick={context.userSignUp}
                    disabled={
                      !(
                        context.state.email &&
                        context.state.password &&
                        context.state.last_name &&
                        context.state.first_name
                      )
                    }
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
