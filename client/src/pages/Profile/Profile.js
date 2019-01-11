import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import Input from "../../components/Form";

class Profile extends Component {
  state = {
    profile: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadProfile();
  }

  loadProfile = () => {
    API.getProfile()
      .then(res =>
        this.setState({ profile: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProfile = id => {
    API.deleteProfile(id)
      .then(res => this.loadProfile())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveProfile({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadProfile())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <h1>dine</h1>
              <Input
              
              />
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
