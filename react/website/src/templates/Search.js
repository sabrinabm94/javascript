import React from "react";
import SearchForm from "../components/SearchForm";

const Search = (props) => {
    return (
        <section className="search jumbotron text-center">
            <h1 className="title">Company</h1>
            <p>We specialize in blablabla</p>
            <SearchForm />
        </section>
    );
};
export default Search;
