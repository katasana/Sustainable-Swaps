import React, {useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './Home.css';
import './SearchResults.css';
import SearchResults from "./components/SearchResults";
import HomeCarousel from "./components/HomeCarousel";
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

                <Container>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                        <Switch>
                            <Route exact path={"/"} component={HomeCarousel} />
                            <Route exact path={"/products"} component={SearchResults} />
                        </Switch>
                </Container>

            </header>
        </div>
    );
}

export default App;
