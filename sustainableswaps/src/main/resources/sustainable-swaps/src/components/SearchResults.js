import React, { useState, useEffect} from "react";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
import {Accordion, Button, Card, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import Teal from "../images/teal-color.jpg";

const SearchResults = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('keywords');
    const [products, setProducts] = useState([]);
    const [searchKeywords, setSearchKeywords] = useState(query);

    useEffect(() => {
        retrieveProducts();
    }, []);

    const onChangeSearchKeywords = e => {
        const searchKeywords = e.target.value;
        // new URLSearchParams(search).set('keywords', searchKeywords);
        setSearchKeywords(searchKeywords);
    };

    const retrieveProducts = () => {
        ProductService.getAll()
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByKeywords = () => {
        ProductService.findByKeywords(searchKeywords)
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
                <div>
                    <div className="input-group mb-3">
                        <form
                            action={"/products"}
                            method={"get"} >
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by keyword"
                            name={"keywords"}
                            value={searchKeywords}
                            onChange={onChangeSearchKeywords}
                        />
                        <div className="input-group-append">
                            <button
                                variant="outline-dark"
                                id="button-addon2"
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={findByKeywords}
                            >
                                Search
                            </button>
                        </div>
                        </form>
                    </div>
                </div>

                <div>
                    <h4>Search Results for {searchKeywords}</h4>
                    <Row>
                        <Col className="column">

                            {products && products.map((product, index) => (
                                <Card className="product">
                                    <Card.Img className="card-image" variant="top" src={Teal}/>
                                    <Card.Body>
                                        <Card.Title>{product.product_name} | {product.company_name}</Card.Title>
                                        <Button variant="dark" onClick={product.product_link}>View in Site</Button>

                                        <Accordion className="product-accordion">
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header>Description</Accordion.Header>
                                                <Accordion.Body className="product-description">
                                                    <Image src={Teal} thumbnail/>
                                                    {product.product_description}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                    </Card.Body>
                                </Card>
                            ))}

                        </Col>
                    </Row>
                </div>
        </div>
    );
};

export default SearchResults;