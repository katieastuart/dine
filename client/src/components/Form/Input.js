import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import API from '../../utils/API';
import {Redirect} from 'react-router-dom';

export default class Example extends React.Component {
  state = {
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

  userLogin = () => {
    API.login(this.state).then(res => {
      console.log(res)
      this.setState({
      loggedIn: res.data.loggedIn
    })})
  }

  render() {
    if(this.state.loggedIn){
      return <Redirect to={{
        pathname: "/search",
        state: {
          loggedIn: this.state.loggedIn}
      }}/>
    }
    
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Email</Label>
          <Col sm={10}>
            <Input onChange={this.handleInputChange} type="email" name="email" id="formEmail" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Password</Label>
          <Col sm={10}>
            <Input onChange={this.handleInputChange} type="password" name="password" id="formPassword" />
          </Col>
        </FormGroup>
        <Button onClick={this.userLogin}>Submit</Button>
      </Form>
    );
  }
}