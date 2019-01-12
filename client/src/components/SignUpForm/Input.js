import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import API from '../../utils/API';
import {Redirect} from 'react-router-dom';

export default class Example extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    loggedIn: false
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  userSignUp = () => {
    API.signup(this.state).then(res => {
      this.setState({
      loggedIn: res.data.loggedIn
    })})
  }

  render() {
    if(this.state.loggedIn){
      return <Redirect to={{
        pathname: "/search",
        state: {
          loggedIn: this.state.loggedIn       }
      }}/>
    }
    return (
      <Form>
        <FormGroup row>
          <Label sm={2}>First Name</Label>
          <Col sm={10}>
            <Input onChange={this.handleInputChange} type="text" name="first_name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Last Name</Label>
          <Col sm={10}>
            <Input onChange={this.handleInputChange} type="text" name="last_name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Email</Label>
          <Col sm={10}>
            <Input onChange={this.handleInputChange} type="email" name="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Password</Label>
          <Col sm={10}>
            <Input onChange={this.handleInputChange} type="password" name="password" />
          </Col>
        </FormGroup>
        <Button onClick={this.userSignUp}>Submit</Button>
      </Form>
    );
  }
}