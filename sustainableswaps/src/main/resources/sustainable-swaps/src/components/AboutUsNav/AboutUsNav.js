import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUsNav.css'
import React from "react";
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AboutUsNav = () => {

    return (
        <Navbar expand={false}>
            <Container fluid>
                <Navbar.Toggle class="d-flex justify-content-start"/>
                <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title class="aboutus-nav-title">Sustainable Swaps</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="../">Home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default AboutUsNav;