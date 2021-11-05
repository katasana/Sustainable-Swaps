// import './App.css';
// import './Home.css';
// import { useHistory } from 'react-router-dom';
import { Button, Col, Row, Container, Carousel, FormControl, InputGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Allbirds from '../images/allbirds.jpg';
import ForDays from '../images/fordays.jpg';
import EcoRoots from '../images/ecoroots.jpg';
import Baggu from '../images/baggu.jpg';
import EarthHero from '../images/earthhero.jpg';
import Teal from '../images/teal-color.jpg';
import React, {useEffect, useState} from "react";
import ProductService from "../services/ProductService";
import {useHistory} from "react-router-dom";

const HomeCarousel = () => {

    return (
        <div>
            <div>
                <div className="input-group mb-3">
                    <form
                        action={"/products"}
                        method={"get"}
                        className={"form-control"}>
                        <input
                            type="text"
                            placeholder="Search products"
                            name={"keywords"}
                            className={"form-control"}/>

                        <div className="input-group-append">
                            <button
                                variant="outline-dark"
                                id="button-addon2"
                                className="btn btn-outline-secondary"
                                type="submit">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>

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

/*
function Home() {

  var page = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <h1 className="h1" onClick={() => page.push('/')}>Sustainable Swaps</h1>
        <br/>

        <Container>
          <InputGroup className="mb-3">
          <FormControl className="search-bar"
            placeholder="enter keyword"
          />
          <!-- <Button variant="outline-dark" id="button-addon2" onClick={() => page.push('/searchresults')}> -->
          <Button variant="outline-dark" id="button-addon2" onClick="getAllProducts(page)">
            Button
          </Button>
          </InputGroup>
        <br/>

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

      </header>
    </div>
  );
}

export default Home;

*/