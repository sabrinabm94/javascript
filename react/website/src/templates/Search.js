import React from "react";
import SearchForm from "../components/SearchForm";

const Search = props => {
    return (
        <section id="search" className="jumbotron text-center">
            <h1>Company</h1>
            <p>We specialize in blablabla</p>
            <SearchForm />
        </section>
    );
};
export default Search;