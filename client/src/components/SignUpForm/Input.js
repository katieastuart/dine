import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Example extends React.Component {

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label sm={2}>First Name</Label>
          <Col sm={10}>
            <Input type="text" name="firstName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Last Name</Label>
          <Col sm={10}>
            <Input type="text" name="lastName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" />
          </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}