import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import Input from "../../components/Form";

class Profile extends Component {
  render() {
    return (
      <Container fluid>
        <h1>dine</h1>
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
