import React, { useState} from "react";
import ProductService from "../services/ProductService";
import {Accordion, Button, Card} from "react-bootstrap";
import Teal from "../images/teal-color.jpg";

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
            <Card style={{width:"18rem"}} key={index} className={"box"}>
                <Card.Img className="card-image" variant="top" src={Teal}/>
                <Card.Body>
                    <Card.Title>{product.productName} | {product.companyName}</Card.Title>
                    <Button variant="dark" onClick={product.productLink}>View in Site</Button>

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
        )
    }

    findByKeywords();

    return (
        <div className={"container"}>
            <h4>Search Results for {query}</h4>
            <div className={"grid"}>
                    {products.map(renderProduct)}
            </div>
        </div>
    );
};

export default SearchResults;