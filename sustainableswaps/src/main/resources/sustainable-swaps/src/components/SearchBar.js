const SearchBar = () => (
    <form action={"/products"} method={"get"}>
        <input
            type={"text"}
            id={"header-search"}
            placeholder={"Search products"}
            name={"keywords"}
            />
        <button type={"submit"}>Search</button>
    </form>
);

export default SearchBar;