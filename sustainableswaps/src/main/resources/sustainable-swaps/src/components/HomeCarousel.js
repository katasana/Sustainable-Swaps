import { Col, Row, Container, Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Allbirds from '../images/allbirds.jpg';
import ForDays from '../images/fordays.jpg';
import EcoRoots from '../images/ecoroots.jpg';
import Baggu from '../images/baggu.jpg';
import EarthHero from '../images/earthhero.jpg';
import React from "react";

const HomeCarousel = () => {

    return (
        <div>
            <Container>
                <Carousel className="carousel-home">
                    <Carousel.Item>
                        <a href="https://www.allbirds.com/">
                            <img className="d-block w-100" src={Allbirds}/>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://fordays.com/">
                            <img className="d-block w-100" src={ForDays}/>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://ecoroots.us/">
                            <img className="d-block w-100" src={EcoRoots}/>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://baggu.com/">
                            <img className="d-block w-100" src={Baggu}/>
                        </a>

                        <a href="https://baggu.com/">
                            <Carousel.Caption className="sustainable-company">
                                <h1>Baggu</h1>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://earthhero.com/">
                            <img className="d-block w-100" src={EarthHero}/>
                        </a>
                    </Carousel.Item>
                </Carousel>

                <h2 className="popular-search">Popular Searches</h2>
                <Col md>
                    <Row className="items-row">
                        <h3 className="popular-search-items">Item 1</h3>
                        <h3 className="popular-search-items">Item 2</h3>
                        <h3 className="popular-search-items">Item 3</h3>
                    </Row>
                </Col>
            </Container>

        </div>
    );
};

export default HomeCarousel;