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
                                                <img className="landingPageImage" src="https://static.thenounproject.com/png/14173-200.png"></img>
                                                <div className="centered imgText">New Search</div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={4} className="landingPage">
                                        <Link to="/results">
                                            <div className="profileImgSelect">
                                                <img className="landingPageImage" src="https://images.vexels.com/media/users/3/129762/isolated/preview/b8013d3077f62d29bce2664db694246b-check-flat-icon-by-vexels.png"></img>
                                                <div className="centered imgText">Results</div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={4} className="landingPage">
                                        <Link to="/favorites">
                                            <img className="landingPageImage" src="https://img.icons8.com/metro/1600/hearts.png"></img>

                                            <div className="profileImgSelect">
                                                <div className="centered imgText">Favorites</div>
                                            </div>
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
