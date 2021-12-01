import "../../App.css";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SearchBar = ({setSearchQuery}) => {
    let history = useHistory();

    // updates path and keywords on a new search
    const onChangeSearchKeywords = e => {
        e.preventDefault();
        // const searchQuery = e.target.value;
        // setSearchQuery(searchQuery);
        history.push("/products?keywords=" + e.target.keywords.value);
    };

    return(
                <Container className={"App"}>
                    <div>
                        <form
                            // action={"/products"}
                            // method={"get"}
                            className={"input-group mb-3"}
                            onSubmit={onChangeSearchKeywords} >

                            <input
                                type="text"
                                className={"form-control"}
                                placeholder="Search products"
                                name={"keywords"}
                            />

                                <Button
                                    variant="outline-dark"
                                    type="submit">
                                    Search
                                </Button>

                        </form>
                    </div>
                </Container>
    );
};

export default SearchBar;