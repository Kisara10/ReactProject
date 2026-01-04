import React, {useState} from "react";

const SearchBar = ({onSearch}) => {

    const [filters, setFilters] = useState({
        type: "any",
        minPrice: "",
        maxPrice: "",
        bedrooms: ""
    });

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filters);   // send filters to parent
    }
    return (
        <section>

            <h3>Search Properties</h3>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label htmlFor="type">Property Type</label>
                    <select name="type" id="type" value={filters.type} onChange={handleChange}>
                        <option value="any">Any</option>
                        <option value="House">House</option>
                        <option value="Flat">Flat</option>
                    </select>
                </div>

                <div className="form">
                    <label htmlFor="minPrice">Min Price: </label>
                    <input type="number" id="minPrice" name="minPrice" value={filters.minPrice} onChange={handleChange} />
                </div>

                <div className="form">
                    <label htmlFor="maxPrice">Max Price: </label>
                    <input type="number" id="maxPrice" name="maxPrice" value={filters.maxPrice} onChange={handleChange} />
                </div>

                <div className="form">
                    <label htmlFor="bedrooms">Bedrooms: </label>
                    <input type="number" id="bedrooms" name="bedrooms" value={filters.bedrooms} onChange={handleChange} />
                </div>


                <button type="submit">Search</button>

            </form>
        </section>
    );
}

export default SearchBar;