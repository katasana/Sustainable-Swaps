import React, {useState} from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './Home.css';
import './components/SearchResults/SearchResults.css';
import SearchResults from "./components/SearchResults/SearchResults";
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import SearchBar from "./components/SearchBar/SearchBar";
import AboutUsNav from "./components/AboutUsNav/AboutUsNav";
import AboutUs from "./components/AboutUs/AboutUs";
import {Helmet} from 'react-helmet';


const App = () => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('keywords');
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (
        <div className="App App-background">
            <Helmet>
                <style>{'body { background-color: #C6DEBD; }'}</style>
            </Helmet>
            <header className="App-header">
                <br/>
                <Container>
                    <h1 className="h1 mx-1 my-4 sustainable-header">
                        <div className="d-inline-flex about-us">
                            <AboutUsNav/>
                        </div>
                        <div className={"d-inline-flex"}>
                            <Link to={"/"} style={{textDecoration: 'none', color: '#006C2B'}}>
                                Sustainable Swaps
                            </Link>
                        </div>
                    </h1>
                </Container>
                <br/>
            </header>
            <body>
                <Container class="my-4 App-body">
                    <SearchBar class="mb-4 flex-d" searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    <Switch>
                        <Route exact path={"/"} component={HomeCarousel} />
                        <Route path={"/products"} component={SearchResults} />
                        <Route exact path={"/aboutUs"} component={AboutUs}/>
                    </Switch>
                </Container>
            </body>
        </div>
        
    );
}

export default App;
