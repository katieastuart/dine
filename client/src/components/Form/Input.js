// import React from "react";

// export const Input = props => (
//   <div className="form-group">
//     <input className="form-control" {...props} />
//   </div>
// );


import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="formEmail" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="formPassword" />
          </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}