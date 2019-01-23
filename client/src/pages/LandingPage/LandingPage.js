import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { MyContext } from '../../App';
import Nav from "../../components/Nav";
import "./LandingPage.css"


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
                                <Row className="landingRow">
                                    <Col md={4} className="landingPage">
                                        <Link to="/search">
                                            <div className="profileImgSelect">
                                                <img className="card-img-top" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png" alt="search"></img>
                                                <div className="centered imgText">New Search</div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={4} className="landingPage">
                                        <Link to="/results">
                                            Results
                                        </Link>
                                    </Col>
                                    <Col md={4} className="landingPage">
                                        <Link to="/favorites">
                                            Favorites
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

export default LandingPage;
