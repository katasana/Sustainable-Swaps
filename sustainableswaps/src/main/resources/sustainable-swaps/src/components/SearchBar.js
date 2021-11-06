import "../App.css";
import {Container, InputGroup} from "react-bootstrap";

const SearchBar = ({setSearchQuery}) => {

    // updates path and keywords on a new search
    const onChangeSearchKeywords = e => {
        const searchQuery = e.target.value;
        setSearchQuery(searchQuery);
    };

    return(
                <Container className={"App"}>
                    <InputGroup className="mb-3">
                        <form
                            action={"/products"}
                            method={"get"}
                            className={"search-bar"}
                            onSubmit={onChangeSearchKeywords} >

                            <input
                                type="text"
                                placeholder="Search products"
                                name={"keywords"}
                                />

                                <button
                                    variant="outline-dark"
                                    id="button-addon2"
                                    className="btn btn-outline-secondary"
                                    type="submit">
                                    Search
                                </button>

                        </form>
                    </InputGroup>
                </Container>
    );
};

export default SearchBar;