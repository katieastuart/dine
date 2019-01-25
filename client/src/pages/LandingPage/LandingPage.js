import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { MyContext } from '../../App';
import Nav from "../../components/Nav";
import "./LandingPage.css"
import landingPage1 from "../../images/landingPage/landingPage1.jpg"
import landingPage2 from "../../images/landingPage/landingPage2.jpg"
import landingPage3 from "../../images/landingPage/landingPage3.jpg"



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
                                    <Col md={3} className="landingPage">
                                        <Link to="/search">
                                            <div className="profileImgSelect shadow-lg rounded">
                                                <img className="landingPageImage" src={landingPage3} alt="Search"></img>
                                                <div className="centered imgText">New Search</div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={3} className="landingPage">
                                        <Link to="/results">
                                            <div className="profileImgSelect shadow-lg rounded">
                                                <img className="landingPageImage" src={landingPage1} alt="Results"></img>
                                                <div className="centered imgText">Results</div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col md={3} className="landingPage">
                                        <Link to="/favorites">
                                            <div className="profileImgSelect shadow-lg rounded">
                                                <img className="landingPageImage" src={landingPage2} alt="Favorites"></img>
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
