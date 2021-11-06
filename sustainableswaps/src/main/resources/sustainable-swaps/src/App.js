import React, {useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Button, Carousel, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import Allbirds from "./images/allbirds.jpg";
import ForDays from "./images/fordays.jpg";
import EcoRoots from "./images/ecoroots.jpg";
import Baggu from "./images/baggu.jpg";
import EarthHero from "./images/earthhero.jpg";

import SearchResults from "./components/SearchResults";
import HomeCarousel from "./components/HomeCarousel";
import ProductService from "./services/ProductService";
import SearchBar from "./components/SearchBar";

const App = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('keywords');
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (
        <div className="App App-background">
            <header className="App-header">
                <br/>
                    <h1 className="h1">
                        <Link to={"/"} style={{textDecoration: 'none', color: '#006C2B'}}>
                            Sustainable Swaps
                        </Link>
                    </h1>
                <br/>

                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            </header>

            <div className="container">
                <Switch>
                    <Route exact path={"/"} component={HomeCarousel} />
                    <Route path={"/products"} component={SearchResults} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
