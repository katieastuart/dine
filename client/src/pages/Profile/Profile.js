import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Input from "../../components/Form";
import SignUpForm from "../../components/SignUpForm"

class Profile extends Component {

  render() {
    return (
      <Container>
        <h1>dine</h1>
        <SignUpForm />
        <Input />
      </Container>
    );
  }
}

export default Profile;
