import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import Input from "../../components/Form";
import SignUpForm from "../../components/SignUpForm"

class Profile extends Component {
  // state = {
  //   newUser: true
  // }

  render() {
    // if(!this.state.newUser) {
    //   return (
    //   <Container>
    //     <SignUpForm />
    //   </Container>
    //   )

    // }
    return (
      <Container>
        <h1>dine</h1>
        <Container>
          <SignUpForm />
        </Container>

        <Input />
        {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              /> */}
        {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
        {/* <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Profile
              </FormBtn> */}
      </Container>
    );
  }
}

export default Profile;
