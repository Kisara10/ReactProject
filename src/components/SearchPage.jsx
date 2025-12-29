import React from "react";
import SearchBar from "./SearchBar.jsx";

const SearchPage = () => {
    return (
        <div className="search-page">
            <header className="header">
                <h1>Property Search</h1>
                <h3>Welcome to Property Search we will help you to find your dream house </h3>
            </header>
            <SearchBar />
        </div>
    )
}

export default SearchPage;