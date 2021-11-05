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

    return (
        <div className="App">
            <div className="App">
                    <br/>
                    <h1 className="h1">
                        <Link to={"/"}>
                            Sustainable Swaps
                        </Link>
                    </h1>
                    <br/>
            </div>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={"/"} component={HomeCarousel} />
                    <Route exact path={"/products"} component={SearchResults} />
                </Switch>
            </div>
        </div>
    );
}

export default App;

/*
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Home/>
      </div>
    </div>
  );
}

export default App; */
