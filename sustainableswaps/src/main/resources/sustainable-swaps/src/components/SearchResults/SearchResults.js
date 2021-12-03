import React, { useState} from "react";
import { Col, Row } from 'react-bootstrap';
import ProductService from "../../services/ProductService";
import {Accordion, Button, Card} from "react-bootstrap";
import Teal from "../../images/teal-color.jpg";
import './SearchResults.css';

const SearchResults = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('keywords'); //gets keywords parameters from path
    const [products, setProducts] = useState([]);

    // calls java method to search for products with keywords
    const findByKeywords = () => {
        ProductService.findByKeywords(query)
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    // renders cards with product information
    const renderProduct = (product, index) => {
        return(
            <Row>
                <Col className="column">
                    <Card key={index} className="product">
                        <Card.Img className="card-image" variant="top" src={product.productImage}/>
                        <Card.Body>
                            <Card.Title>{product.productName} | {product.companyName}</Card.Title>
                            <Button variant="dark" href={product.productLink}>View in Site</Button>

                            <Accordion className="product-accordion">
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>Description</Accordion.Header>
                                    <Accordion.Body className="product-description">
                                        {product.productDescription}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }

    findByKeywords();

    return (
        <div>
            {products.length!=0
                ? <React.Fragment><h4>Search results for {query}</h4><div className="products">  {products.map(renderProduct)}</div></React.Fragment>
                : <h4>No results for {query}</h4>}
        </div>

    );
};

export default SearchResults;