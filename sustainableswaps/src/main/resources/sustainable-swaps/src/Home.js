import './App.css';
import './Home.css';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row, Container, Carousel, FormControl, InputGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Teal from './images/teal-color.jpg';
import {getAllProducts} from "./ProductService";

function Home() {

  var page = useHistory();

  /*getAllProducts = () => {
    getAllProducts(page).then(products => {
      console.log(products);
    });
  }*/

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <h1>Sustainable Swaps</h1>
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
            <img className="d-block w-100" src={Teal}/>

            <Carousel.Caption className="sustainable-company">
              <h3>Sustainable Company 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img className="d-block w-100" src={Teal}/>

            <Carousel.Caption className="sustainable-company">
              <h3>Sustainable Company 2</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={Teal}/>

            <Carousel.Caption className="sustainable-company">
              <h3>Sustainable Company 3</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={Teal}/>

            <Carousel.Caption className="sustainable-company">
              <h3>Sustainable Company 4</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={Teal}/>

            <Carousel.Caption className="sustainable-company">
              <h3>Sustainable Company 5</h3>
            </Carousel.Caption>
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
      
      </header>
    </div>
  );
}

export default Home;