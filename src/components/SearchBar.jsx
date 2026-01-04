import React from "react";

const SearchBar = () => {
    return (
        <section>
            <form>
                <div className="form">
                    <label htmlFor="type">Property Type: </label>
                    <select type="text" name="type">
                        <option value="house">House</option>
                        <option value="flat">Flat</option>
                        <option value="any">Any</option>
                    </select>
                </div>

                <div className="form">
                    <label htmlFor="minPrice">Min Price: </label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="$0" />
                </div>

                <div className="form">
                    <label htmlFor="maxPrice">Max Price: </label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="$1000000" />
                </div>

                <div className="form">
                    <label htmlFor="Bedrooms">Bedrooms: </label>
                    <input type="number" id="bedrooms" name="minbedrooms" min="1" />
                </div>

                <div className="form">
                    <label htmlFor="dateAdded">Date Added </label>
                    <input type="date" id="dateAdded" name="dateAdded" />
                </div>

                <button type="submit">Search</button>

            </form>
        </section>
    );
}

export default SearchBar;