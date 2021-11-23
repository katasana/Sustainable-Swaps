import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import Ecology from '../../images/ecology.png';
import Earth from '../../images/earth.png';
import Girl from '../../images/girl.png';
import Boy from '../../images/boy.png';
import Window from '../../images/window.png';

import Kimberly from '../../images/kimberly.jpg';
import Camryn from '../../images/camryn.jpg';
import Eric from '../../images/eric.jpg';
import Megan from '../../images/megan.jpg';
import Alysia from '../../images/alysia.jpg'

import React from "react";
import { Container, Col, Row } from 'react-bootstrap'
import {Box} from "@material-ui/core";

const AboutUs = () => {
    return (
        <Container>
            <h1 className="mb-3 aboutus-title">
                - About Sustainable Swaps -
            </h1>

            <div class="my-5 pb-3">
                <Row>
                    <Col sm={5} className={"d-flex"}>
                        <div className="our-goal-col1">
                            <h1 className="pb-4 d-flex justify-content-center ourgoal-title">Our Goal</h1>
                            <Box bgcolor={"#F9FDF4"} borderRadius={"10px"}>
                                <p className="p-4 goal-text">Finding sustainable swaps can be very time consuming and
                                    discourage customers that want to be
                                    eco-friendly. A customer has to read through ALL of the materials & ingredient lists
                                    to determine
                                    if a product is sustainable. Very time consuming!
                                </p>
                            </Box>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <img src={Ecology}/>
                    </Col>
                </Row>
            </div>
            <div class="my-5">
                <Row>
                    <Col sm={7}>
                        <img src={Earth}/>
                    </Col>
                    <Col sm={5} className="our-goal-col1">
                        <h1 className="pb-3 d-flex justify-content-center">Why shop sustainably?</h1>
                        <Box bgcolor={"#F9FDF4"} borderRadius={"10px"}>
                            <ol class="m-4 goal-text listUs">
                                <li>Protect the Earth’s Resources</li>
                                <li>Reduce Waste</li>
                                <li>Reduce Greenhouse Gas Emissions</li>
                                <li>Experience Better Health and Wellbeing</li>
                                <li>Improve Energy Efficiency</li>
                            </ol>
                        </Box>
                    </Col>
                </Row>
            </div>
            <div class={"my-5"}>
                <h1 class="mt-5 aboutus-title">
                    - Meet the Team -
                </h1>
                <Row className={"my-5"}>
                    <Col></Col>
                    <Col className={"mx-3 px-4"}>
                        <h4 class={"my-3"}>Alysia</h4>
                        <Box borderRadius={"50%"} className={"overflow-hidden box-border"}>
                            <img class="profile-pic" src={Alysia}/>
                        </Box>
                        <p class={"mt-3"}>Database Engineer</p>
                    </Col>
                    <Col className={"mx-3 px-4"}>
                        <h4 class={"my-3"}>Camryn</h4>
                        <Box borderRadius={"50%"} className={"overflow-hidden box-border"}>
                            <img class="profile-pic" src={Camryn}/>
                        </Box>
                        <p class={"mt-3"}>Backend Engineer</p>
                    </Col>
                    <Col className={"mx-3 px-4"}>
                        <h4 class={"my-3"}>Eric</h4>
                        <Box borderRadius={"50%"} className={"overflow-hidden box-border"}>
                            <img class="profile-pic" src={Eric}/>
                        </Box>
                        <p class={"mt-3"}>Frontend Engineer</p>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className={"mx-3 mb-3 px-4"}>
                        <h4 class={"my-3"}>Kimberly</h4>
                        <Box borderRadius={"50%"} className={"overflow-hidden box-border"}>
                            <img class="profile-pic" src={Kimberly}/>
                        </Box>
                        <p className={"mt-3"}>Backend/Frontend Engineer</p>
                    </Col>
                    <Col className={"mx-3 mb-3 px-4"}>
                        <img className="profile-pic" src={Window}/>
                    </Col>
                    <Col className={"mx-3 mb-3"}>
                        <h4 class={"my-3"}>Megan</h4>
                        <Box borderRadius={"50%"} className={"overflow-hidden box-border"}>
                            <img class="profile-pic" src={Megan}/>
                        </Box>
                        <p className={"mt-3"}>AWS Lead</p>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </Container>
    );
};

export default AboutUs;