import './App.css';
import './SearchResults.css';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row, Container, Card, Accordion, Image, FormControl, InputGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Teal from './images/teal-color.jpg';

function SearchResults() {

  var page = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <h1 className="header1" onClick={() => page.push('/')}>Sustainable Swaps</h1>
        <br/>

        <Container>
          <InputGroup className="mb-3">
            <FormControl className="search-bar"
              placeholder="enter keyword"
            />
            <Button variant="outline-dark" id="button-addon2" onClick={() => page.push('/searchresults')}>
              Button
            </Button>
          </InputGroup>
        </Container>
        <br/>

        <Container className="products">
          <Row>
            <Col className="column">
            <Card className="product">
              <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <Button variant="dark">Product Link 1</Button>

                  <Accordion className="product-accordion">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Product Description 1</Accordion.Header>
                        <Accordion.Body className="product-description">
                        <Image src={Teal} thumbnail/>
                          A description of product 1
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                </Card.Body>
            </Card>
            </Col>

            <Col className="column">
            <Card className="product">
              <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                  <Card.Title>Product 2</Card.Title>
                  <Button variant="dark">Product Link 2</Button>

                  <Accordion className="product-accordion">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Product Description 2</Accordion.Header>
                        <Accordion.Body className="product-description">
                        <Image src={Teal} thumbnail/>
                          A description of product 2
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </Card.Body>
            </Card>
            </Col>

            <Col className="column">
            <Card className="product">
              <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                  <Card.Title>Product 3</Card.Title>
                  <Button variant="dark">Product Link 3</Button>

                  <Accordion className="product-accordion">
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Product Description 3</Accordion.Header>
                        <Accordion.Body className="product-description">
                        <Image src={Teal} thumbnail/>
                          A description of product 3
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
            </Card>
            </Col>

            <Col className="column">
            <Card className="product">
              <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                  <Card.Title>Product 4</Card.Title>
                  <Button variant="dark">Product Link 4</Button>

                  <Accordion className="product-accordion">
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Product Description 4</Accordion.Header>
                        <Accordion.Body className="product-description">
                        <Image src={Teal} thumbnail/>
                          A description of product 4
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                </Card.Body>
            </Card>
            </Col>
          </Row>

          <Row>
            <Col className="column">
            <Card className="product">
              <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                  <Card.Title>Product 5</Card.Title>
                  <Button variant="dark">Product Link 5</Button>

                  <Accordion className="product-accordion">
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Product Description 5</Accordion.Header>
                        <Accordion.Body className="product-description">
                        <Image src={Teal} thumbnail/>
                          A description of product 5
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </Card.Body>
            </Card>
            </Col>

            <Col className="column">
            <Card className="product">
              <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                  <Card.Title>Product 6</Card.Title>
                  <Button variant="dark">Product Link 6</Button>

                  <Accordion className="product-accordion">
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>Product Description 6</Accordion.Header>
                        <Accordion.Body className="product-description">
                        <Image src={Teal} thumbnail/>
                          A description of product 6
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </Card.Body>
            </Card>
            </Col>

            <Col className="column">
            <Card className="product">
              <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                  <Card.Title>Product 7</Card.Title>
                  <Button variant="dark">Product Link 7</Button>

                  <Accordion className="product-accordion">
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>Product Description 7</Accordion.Header>
                        <Accordion.Body className="product-description">
                        <Image src={Teal} thumbnail/>
                          A description of product 7
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </Card.Body>
            </Card>
            </Col>

            <Col className="column">
            <Card className="product">
              <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                  <Card.Title>Product 8</Card.Title>
                  <Button variant="dark">Product Link 8</Button>

                  <Accordion className="product-accordion">
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>Product Description 8</Accordion.Header>
                        <Accordion.Body className="product-description">
                        <Image src={Teal} thumbnail/>
                          A description of product 8
                        </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      
      </header>
    </div>
  );
}

export default SearchResults;