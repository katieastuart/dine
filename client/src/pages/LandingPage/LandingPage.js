import React, { Component } from "react";
import { Container } from "../../components/Grid";
// import { Media, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { MyContext } from '../../App';
import Nav from "../../components/Nav";


class LandingPage extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {(context) => {
                    if (!context.state.loggedIn) {
                        return <Redirect to={{ pathname: "/" }} />
                    }

                    return (
                        <div>
                            <Nav />
                            <Container>
                                <h2>This is the Landing page</h2>
                            </Container>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

export default LandingPage;
