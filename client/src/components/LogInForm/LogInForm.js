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
            <Form>
              <FormGroup row>
                <Label sm={2}>Email</Label>
                <Col sm={10}>
                  <Input
                    onChange={context.handleInputChange}
                    type="email"
                    name="email"
                    id="formEmail"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Password</Label>
                <Col sm={10}>
                  <Input
                    onChange={context.handleInputChange}
                    type="password"
                    name="password"
                    id="formPassword"
                  />
                </Col>
              </FormGroup>

              <Button
                onClick={context.userLogin}
                disabled={!(context.state.email && context.state.password)}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
