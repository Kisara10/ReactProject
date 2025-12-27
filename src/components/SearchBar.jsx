import React from "react";

const SearchBar = () => {
    return (
        <section>
            <h1>Search your Dream House in Hear</h1>
            <h3>Search by the way you like</h3>

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
                    <label htmlFor="minBedrooms">Bedrooms: </label>
                    <input type="number" id="minbedrooms" name="minbedrooms" min="1" />
                </div>

                <div className="form">
                    <label htmlFor="maxBedrooms">Bedrooms: </label>
                    <input type="number" id="maxbedrooms" name="maxbedrooms" min="1" />
                </div>

                <div className="form">
                    <label htmlFor="dateAdded">Date Added </label>
                    <input type="date" id="dateAdded" name="dateAdded" />
                </div>


                <div className="form">
                    <label htmlFor="postCode">Postcode Area: </label>
                    <input type="text" id="postCode" name="postCode" placeholder="BR1"/>
                </div>

                <button type="submit">Search</button>

            </form>
        </section>
    );
}

export default SearchBar;